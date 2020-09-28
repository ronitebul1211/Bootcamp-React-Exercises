import React from 'react';
import { useLocation } from 'react-router-dom';

/** 
Get URL params:
by default component opened by link get default props:
1. history object 
2. location object
3. match object -> params object with key name of path variable and and value of current var value
4. staticContext variable

How to get it? (params value)
# props.match.params.[pathVarName] (class + function component, can't send props)
# useParams()-> return params object, params.[pathVarName] (function component ->  import useParams)
  
How to pass state? (to function component)
1. in parent link competent on attribute -> to, pass an object:
   {pathname: `/products/${product.id}`, state: product}
2. useLocation -> return location object contain state object with the state passed in (import useLocation)
   location.state....

Don't hardcoded path:
instead get current path ->  location.pathname (e.g in products.js)

need to go back?
use history.goBack() (cant use: useHistory() inside callback)
*/



const ProductDetail = (props)=> {
    const location = useLocation();
    const {title, price, imageUrl} = location.state;


    
    function onBackClick ()  {
      props.history.goBack()
    }

    return(
      <div>
        <h2>{title}</h2>
        <div>Price: {price} $</div>
        <div>
          <img src={imageUrl} alt={title}/>
        </div>
          <button onClick={onBackClick}>Back</button>
      </div>
    );

  
}

export default ProductDetail;