
function Button({key,handleBgChanger,ele}) {
  // const [color, setColor] = useState('olive')
  return (
    <>
      <button onClick={()=>handleBgChanger(ele)} className="px-2 py-1 text-white" style={{backgroundColor:ele}}>{ele}</button>
    </>
    )
}

export default Button
