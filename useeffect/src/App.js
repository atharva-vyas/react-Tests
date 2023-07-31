import React, { useState, useEffect } from "react";

function App() {
  // initial array
  let array = ['one', 'two', 'three', 'four']
  // useState initial empty array
  const [items, setItems] = useState([])  

  // useEffect => adds all the elements from the "array" array into "items" array
  // Here we in the end we have used an empty array, so that it does the add operation only once, for more info check this out => https://www.youtube.com/watch?v=UVhIMwHDS7k
  // Note: if useEffect is running twice, refer to this link:- https://stackoverflow.com/a/71982736
  useEffect(() => {
  
    // Here we are going through all the elements of the "array" array, using the .map() function
    array.map((content) => {
      // checks if dupicate element exists
      if (items.includes(content)) {
      } else {
      // This is appending items from "array" array into "items" array, in such a way that it also updates useState; for more info check this out => https://stackoverflow.com/questions/54676966/push-method-in-react-hooks-usestate
      setItems(items => [...items, content])
      }
    })
  }, [])
  
  // this handles the button onClick event
  function buttonHandler() {
    let input = prompt('ENTER VALUE TO BE ADDED:')    
    
    // checks if dupicate element exists
    if (items.includes(input)) {
      alert('ELEMENT ALREADY EXISTS, PLEASE ENTER A NEW ELEMENT')
      buttonHandler()
    } else {
    // Appends input to the "items" array and updates useState
    setItems(items => [...items, input])
    }  
  }

  return (
    <div>
      <button onClick={buttonHandler}>ADD MORE</button>
      {/* Displaya all the elements in the items array, using the .map() function */}
      {items.map((content) => (
        <h1>{content}</h1>
      ))}
    </div>
  );
}

export default App;
