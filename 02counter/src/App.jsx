import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter , setCounter] = useState(5)


//  let counter = 5;
  const addValue = () => {
//    counter += 1;
    setCounter((counter) => counter + 1);
    setCounter((counter) => counter + 1);
    setCounter((counter) => counter + 1);
    console.log("Add Value Clicked", counter,Math.random());
  }
  const removeValue = () => {
//    counter -= 1;
    setCounter((counter) => counter -1);
    console.log("remove Value clicked", counter,Math.random());
  }
  return (
    <>
      <h1>React Counter value:</h1>
      <h2>{counter}</h2>
      <button onClick={addValue}> Add Value {counter}</button>
      <br />
      <button onClick={removeValue}> Remove Value {counter} </button>
    </>
  )
}

export default App
