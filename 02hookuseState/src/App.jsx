import { useState } from 'react'
// import Form from './Form';
// import Form2 from './Form2'
// import TodoList from './TodoList';
// import VersionReset from './VersionReset';
import BgChanger from './BgChanger';

function App() {
  const [count, setCount] = useState(0)

  

  const handleIncrease = () =>{
    // setCount(count+1)
    // setCount(count+1)
    // setCount(count+1)
    // setCount(count+1)
    // setCount(count+1)
    // setCount((prevCount)=>prevCount+step)
    setCount(count+1)

    setTimeout(() => {
      console.log(count); // Also 0!
    }, 2000);

  }

  const handleDecrease = () =>{
    if (count == 0) return false;

    setCount(count-1)

  }

  return (
    <>
     <h1>Counter {count}</h1>
     <button onClick={handleDecrease} className='px-2 py-1 rounded-md mx-auto bg-sky-500'>Decrease {count}</button>
     <button onClick={handleIncrease} className='px-2 py-1 rounded-md mx-auto bg-sky-500'>Increase {count}</button>
     {/* <hr /><hr /><br /><br />
     <Form />
     <br />
     <Form2 />
     <br />
      <TodoList/>
      <br /><br />
      <VersionReset/> */}
      <BgChanger/>


    </>
  )
}

export default App
