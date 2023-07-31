import React, { useState } from 'react'

function ChildComponent({ element, setElement }) {
    
    // funtion to handle click
    const mainFuntion = () => {
        let input = prompt('Enter value to update:')
        // updates useState variable
        setElement(element = input)
    }
  
    return (
        <h1 onClick={mainFuntion}>{element}</h1>
    )
}

export default ChildComponent