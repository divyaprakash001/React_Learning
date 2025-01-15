import { useState } from 'react'
import Button from './components/Button'
// import Button from './components/Button'

function App() {
  
  // const [color, setColor] = useState('olive')

  const colorArray = ['red','green','blue','orange','yellow','cyan','purple','violet','tomato']

  const handleBgChanger = (color) =>{
      document.querySelector('body').style.backgroundColor=color
  }

  return (
    <>
      <h1 className='bg-stone-500 text-white text-3xl py-2 text-center'>Background Changer</h1>
      {
        colorArray.map((item,index)=>(
        <Button key={index} ele = {item} handleBgChanger={handleBgChanger} />
        ))
      }
    </>
  )
}

export default App
