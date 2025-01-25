import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  console.log('App rendered');
  
  // const [value,setValue] = useState(1);
  const [value,setValue] = useState({
    value:0,
  });


  // const [multipliesValue, setMultipliesValue] = useState(1);
  // let multipliesValue = value * 5;

  // const multiplyByFive = ()=>{
  //   // setMultipliesValue(value*5)
  //   setValue(value+1)
  // }

  const clickMe = ()=>{
    console.log('logged'); // not re-render
    // setValue(value+1) //re-render
    // setValue(1) // not re-render bcz useState and setValue has same value
    // setValue(3) // re-render
    setValue({value:0})  //in case of object, it re-render
  }



  return (
    <>
      <h1>Main Value : {value.value} </h1>
      <button
      onClick={clickMe}
      >Click to multipy by 5 </button>
      {/* <h2>Multiplies Value : {multipliesValue} </h2> */}
    </>
  )
}

export default App
