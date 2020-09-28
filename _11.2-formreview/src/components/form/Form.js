import React from 'react';
import InputField from './InputField';
import SelectField from './SelectField';
import TextArea from './TextArea';
import './form.css'

/**
 Form:
 - Control State of input fields (each time input change -> form update state & render children)
 - Handle Submit -> create object represent form data & pass it to his parent
*/

class Form extends React.Component {

  state = {firstName: '', lastName: '', age: '0-15', freeText: ''}

  //Callback -> children update form state
  updateFormState = (event) => {
    this.setState({[event.target.name]:  event.target.value})    
  }

  onFormSubmit = (event) => {
    event.preventDefault()
    const formValues = 
    [
      {
        title: 'First Name',
        value: this.state.firstName
      },
      {
        title: 'Last Name',
        value: this.state.lastName
      },
      {
        title: 'Age',
        value: this.state.age
      },
      {
        title: 'Free Text',
        value: this.state.freeText
      },
    ]
    this.props.sendFormValues(formValues);
  }

  render(){

    return (
      <form onSubmit={this.onFormSubmit}>
        <InputField  
          name="firstName" 
          label="First Name " 
          value={this.state.firstName} 
          inputChange={this.updateFormState}/>
        <InputField 
          name="lastName"
          label="Last Name " 
          value={this.state.lastName} 
          inputChange={this.updateFormState}/>
        <SelectField 
          name="age"
          label="Age "  
          options={["0-15", "16-30", "31-40", "Over 40"]}  
          value={this.state.age} 
          inputChange={this.updateFormState}/>
        <TextArea
          name="freeText"
          label="Free Text "
          value={this.state.freeText}
          inputChange={this.updateFormState}
        />
        <div>
          <button 
            type="submit">
            Continue
         </button>
        </div>
      </form>
    );
  }
}

export default Form;