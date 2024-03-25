import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
 
  let [counter, setCounter] = useState(10)

  const addValue = () =>{
    if(counter < 34){
    setCounter(counter + 1)
  }};

  const removeValue = () =>{
    if(counter > 0 ){
    setCounter(counter - 1)
  }};
  return (
    <>
     <h1>My First Counter Project</h1>
     <h2>Counter Value : {counter}</h2>
     <button onClick={addValue}>Add Value : {counter}</button>
     <button onClick={removeValue}>Remove Value : {counter}</button>
     <p>Footer: {counter}</p>
       
    </>
  )
}

export default App
