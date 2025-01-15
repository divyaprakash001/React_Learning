import { useState } from "react";

function BgChanger() {
  let colorArray = [
    'red',
    'green',
    'blue',
    'violet',
    'indigo',
    'cyanblue',
    'tomato',
    'yellow'
  ];

  const [color,setColor] = useState('olive')

  const handleBgClick = (color)=>{
    console.log(color);
    
    document.querySelector('body').style.backgroundColor=color
  }


  return (
    <>
    <div className="mx-auto">

      {colorArray.map((color, index) => (
        <button
        key={index}
        onClick={()=>handleBgClick(color)}
        className={`px-2 py-1 rounded m-2 cursor-pointer`}
        style={{backgroundColor:color}}
        >
          {color}
        </button>
      ))}
      </div>
    </>
  );
}

export default BgChanger;

