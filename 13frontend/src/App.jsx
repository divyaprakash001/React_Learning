import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'

function App() {
  const [jokes, setJokes] = useState([])


  useEffect(()=>{
    axios.get('/api/jokes')
    .then((data)=> {
      console.log(data.data);
      setJokes(data.data)})
    .catch((error)=>{
      console.log(`Error :: ${error}`);
    })
  })

  return (
    <>
      <h1>Full Stack</h1>
      <h3>JOKES : {jokes.length}</h3>
      <div>
        {
          jokes.map((joke)=>(
            <div key={joke.id}>
              <h3>{joke.title}</h3>
              <p>{joke.content}</p>
            </div>
          ))
        }
      </div>
    </>
  )
}

export default App
