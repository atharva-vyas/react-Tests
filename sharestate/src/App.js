import React, { useState, useEffect } from 'react'
import ChildComponent from "./ChildComponent";

function App() {
  // useState variable and function
  let [element, setElement] = useState("")
  
  // renders once at the begining
  useEffect(() => {
    // updates useState variable using the useState function
    setElement(element = 'ClickMe!')
  }, [])
  
  return (
    <div>
      {/* Renders component and also passes useState variable and function */}
      <ChildComponent element={element} setElement={setElement}/>
    </div>
  );
}

export default App;
