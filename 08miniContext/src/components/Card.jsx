import  {useContext, useState} from 'react'
import CardContext from '../context/CardContext'

function Card() {
  const [cart,setCart] = useState('')

  // const {user}= useContext(UserContext)
  const {setCard} = useContext(CardContext)

  const handleSubmit = (e)=>{
    e.preventDefault();
    setCard({cart})
  }

  return (
    <>
    <div>
      <h2>Card</h2>
      <input 
      type="text" 
      placeholder='card qty' 
      value={cart} 
      onChange={(e)=> setCart(e.target.value)} />
      <button onClick={handleSubmit}>submit</button>
    </div>


    </>
  )
}

export default Card
