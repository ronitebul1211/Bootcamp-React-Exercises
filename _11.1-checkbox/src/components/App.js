import React from 'react';
import Checkbox from './Checkbox';

const App = () => {
  return (
    <div>
      <Checkbox text="I read the term of the app" isChecked={false}/>
      <Checkbox text="I accept the term of the app" isChecked={false}/>
      <Checkbox text="I want to get the weekly news letter" isChecked={true}/>
      <Checkbox text="I want to get sales and offers" isChecked={true}/>
    </div>

  );
}
export default App;