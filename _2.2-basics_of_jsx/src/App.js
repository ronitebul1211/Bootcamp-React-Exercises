import React from 'react';


function App() {
  const data = ['hello', 'world'];

  const number1 = 5;
  const number2 = 6;

  const string = 'I love React!'

  return (
    <div>
      <div>
      {data[0].charAt(0).toUpperCase() + data[0].slice(1)} {data[1].charAt(0).toUpperCase() + data[1].slice(1)}
     </div>
      <div>
      {number1} + {number2} = {number1 + number2}
    </div>
      The string’s length is {string.length}
    </div>
  );
}

export default App;
