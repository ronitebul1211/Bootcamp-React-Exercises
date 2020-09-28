import React from 'react';
import './formReview.css';

class FormReview extends React.Component{


  renderContent = () => {
    return this.props.formValues.map((formField, index) => <div key={index}>{formField.title}:{formField.value}</div>);
  };
  
  render(){
    return (
      <div className={`modal-outer ${this.props.isVisible && 'open'}`}>
        <div className="modal-inner">
          <div>{this.renderContent()}</div>
          <button onClick={() => this.props.sendAction("back")}>BACK</button>
          <button onClick={() => this.props.sendAction("send")}>SEND</button>
        </div>
     </div>
    )
  }
}

export default FormReview;