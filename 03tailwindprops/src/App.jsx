import { useState } from 'react'
import Card from './components/Card'

function App() {

  const cardArray = [
    {
      name:'Towel',
      price:24,
      number:'#234'
    },
    {
      name:'Gamchi',
      price:20,
      number:'#235'
    },
    {
      name:'Shirt',
      price:50,
      number:'#236'
    },
    {
      name:'Pant',
      price:44,
      number:'#237'
    },
  ]

  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className="text-center mb-6 bg-slate-500 text-white text-2xl py-2">Props</h1>
      <div className="flex flex-wrap justify-evenly gap-1">
      {
        cardArray.map((element,index)=>(
          <Card key={index} item={element}/>
        ))
      }
      </div>
    </>
  )
}

export default App
