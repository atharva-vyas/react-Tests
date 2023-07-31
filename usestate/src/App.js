import React, { useState } from "react";

// Tutorial Link:-
// https://www.youtube.com/watch?v=kkuq0gTGRFQ

function App() {
  
  const [count, setCount] = useState(0)

  const increament = () => {
    setCount(count + 1)
  }

  const decreament = () => {
    setCount(count - 1)
  }

  return (
    <div>
      <h1>Hello World</h1>
      <p>the count is {count}</p>
      <button onClick={decreament}>-</button>
      <button onClick={increament}>+</button>
    </div>
  );
}

export default App;
