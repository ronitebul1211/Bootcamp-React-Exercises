import React from 'react';
import {data} from '../store';
import {Link} from 'react-router-dom';

class Products extends React.Component {
  
  state = {products: []};

  componentDidMount(){
    this.setState({ products: data });
  }

  renderProductsList = () => {
    const currentPath = this.props.location.pathname;
    return this.state.products.map( product => {
      return <Link to={{pathname: `${currentPath}/${product.id}`, state: product}} key={product.id}>{product.title}</Link>
    });
  }
  
  render(){
    return(
      <div>
        {this.renderProductsList()}
      </div>
    )
  }

}

export default Products;