
import React from 'react';
import Form from './form/Form';
import FormReview from './formReview/FormReview';

 class App extends React.Component {

  state = {formValues: [], showFormReview: false};

  handleSubmit = (formValues) => {
    this.setState({formValues, showFormReview:true});
  }

  handleReviewAction = (action) => {
    this.setState({showFormReview: false})
     console.log(action === 'send' ? 'Form RESET' : 'Form EDIT');
  }


  render(){
    return (
      <div>
        <Form 
          resetForm={this.state.resetForm}
          sendFormValues={this.handleSubmit}/>
        <FormReview 
          formValues={this.state.formValues}
          isVisible={this.state.showFormReview}
          sendAction={this.handleReviewAction}/>
      </div>
    );
  }
 } 
  
export default App;