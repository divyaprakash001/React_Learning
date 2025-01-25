import { useState, useCallback, useEffect, useRef } from "react"

function App() {

  const [length,setLength] = useState(8)
  const [numberAllowed,setNumberAllowed] = useState(false)
  const [charAllowed,setCharAllowed] = useState(false)
  const [password,setPassword] = useState("")
  const [copy,setCopy] = useState("copy")

  console.log(numberAllowed);
  console.log(charAllowed);

  // useRef hook
  const passwordRef = useRef(null)
  


  const passwordGenerator = useCallback(()=>{

    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if(numberAllowed) str += "0123456789";
    if(charAllowed) str += "!@#$%^&_";

    for (let i = 1; i < length; i++) {
      let char = Math.floor(Math.random() * str.length)+1 
      pass += str.charAt(char)
    }
    setPassword(pass)

  },[length,numberAllowed,charAllowed,setPassword])


  const copyPasswordToClipboard = useCallback(() =>{
    passwordRef.current?.select()
    // passwordRef.current?.setSelectionRange(0,5)
    window.navigator.clipboard.writeText(password)
    setCopy('copied')
  },[password])



  useEffect(()=>{
    passwordGenerator()
    setCopy('copy')
  },[length,numberAllowed,charAllowed,setPassword])

  return (
    <>
     <div className="max-w-[400px] border border-sky-500  rounded-md text-white mx-auto mt-10">
      <h2 className="bg-slate-500 text-white text-center py-2">Password Generator</h2>
      <div className="w-[100%] mx-auto mt-4 mb-2 flex justify-center">
      <input 
      type="text" 
      value={password} 
      placeholder="Password" 
      readOnly 
      className="w-[70%]  rounded-l-md text-orange-500 ps-2" 
      ref={passwordRef}
      />
      <button 
        onClick={()=>{
          passwordGenerator();
          setCopy('copy');
        }} 
        className="bg-sky-500 text-white px-3 rounded-tr-md rounded-br-md">
        Reset
        </button>
      </div>
      <div className="flex flex-wrap justify-center mb-4">
        <input 
        type="range"
        value={length} 
        onChange={(e)=>{setLength(e.target.value)}}
        min={8} 
        max={100} 
        id="length" 
        className="cursor-pointer" />
        <label htmlFor="length">length ({length})</label>

        <label htmlFor="character">
          <input 
          type="checkbox" 
          defaultChecked={charAllowed}
          name="" 
          id="character"
          onChange={()=>{
            setCharAllowed((prev)=> !prev);
          }}
           />
          character
        </label>
        


        <label htmlFor="numberInput">
          <input 
          type="checkbox" 
          defaultChecked={numberAllowed}
          name="" 
          id="numberInput" 
          onChange={()=>{
            setNumberAllowed((prev)=> !prev);
          }}
          />
          number
        </label>
      </div>
      <div className="bg-sky-500 text-center uppercase rounded-br-md rounded-b-md">
        {/* <button 
        onClick={()=>{
          passwordGenerator();
          setCopy('copy');
        }} 
        className="w-full h-full py-1">
        Reset
        </button> */}
        <button 
      onClick={copyPasswordToClipboard}
      className="w-full h-full py-1  rounded-br-md rounded-b-md">
        {copy}
      </button>
      </div>
     </div>
    </>
  )
}

export default App
