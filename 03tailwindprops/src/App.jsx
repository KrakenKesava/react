import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card.jsx'

function App() {
  const [count, setCount] = useState(0)
  let myObj = {
    username: "meow",
    age: 3,
    color: "black"
  }

  let newArr = [1,2,3,4,5]
  return (
    <>
      <h1 className='bg-green-400 text-black rounded-xl'>MEow</h1>
      {/* <Card animal="Cat" someObj={myObj} someArr={newArr}/>
  */}
      <Card username="Monkey" value='5'/>
      <Card username="Dog" value='10'/>
    </>
  )
}

export default App
