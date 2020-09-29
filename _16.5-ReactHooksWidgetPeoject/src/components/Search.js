import React, {useState, useEffect} from 'react';
import axios from 'axios';


const Search = () => {

  const [term, setTerm] = useState('programing');
  const [debouncedTerm, setDebouncedTerm] = useState(term);

  const [results, setResults] = useState([]);

  //Invoked when render && term has changed, first time -> wait 1 second and update debouncedTerm with current term
  // if term change before timeout end, clear current timeout and create new timeout
  useEffect(() => {
    const timerId = setTimeout(() => {
      setDebouncedTerm(term);
    }, 1000);

    return () => {
      clearTimeout(timerId);
    };
  }, [term]);

   //Invoked when render && term has changed, first time -> fetch and set results
  useEffect(() => {
    const search = async () => {
      const {data} = await axios.get('https://en.wikipedia.org/w/api.php', {
        params: {
          action: 'query',
          list: 'search',
          origin: '*',
          format: 'json',
          srsearch: debouncedTerm
        }
      });
      //BUG: check if response ok
      setResults(data.query.search);
    };
    search();


  }, [debouncedTerm]);

  
  const renderedResult = results.map(result => {
    return (
      <div key={result.pageid} className="item">
        <div className="right floated content">
          <a
            className="ui button"
            href={`https://en.wikipedia.org?curid=${result.pageid}`}
          >
            Go
          </a>
        </div>

        <div className="content">
          <div className="header">{result.title}</div>
          <span dangerouslySetInnerHTML={{__html: result.snippet}}></span>
        </div>
      </div>
    );
  }); 
  
  return(
    <div>
      <div className="ui form">
        <div className="field">
          <label>Enter Search Term</label>
          <input 
            className="input"
            value={term}
            onChange={event => {setTerm(event.target.value)}}
          />
        </div>
      </div>
      <div className="ui celled list">
        {renderedResult}
      </div>
    </div>
  )
}

export default Search;