
import React, { useState } from 'react';
//Import Components
import Accordion from './components/Accordion';
import Search from './components/Search';
import Dropdown from './components/Dropdown';
import Translate from './components/Translate';

//Dummy data
const items = [
  {
    title: 'Question 1 ?',
    content: 'answer answer answer answer answer answer answer answer'
  },
  {
    title: 'Question 2 ?',
    content: 'answer answer answer answer answer answer answer answer'
  },
  {
    title: 'Question 3 ?',
    content: 'answer answer answer answer answer answer answer answer'
  }
];

const options = [
  {
    label: 'The Color Red',
    value: 'red'
  },
  {
    label: 'The Color Green',
    value: 'green'
  },
  {
    label: 'The Shade of Blue',
    value: 'blue'
  },
];

const App = () => {

 

  return (
    <div>
      <Translate/>
    </div>
  );
}
export default App;

