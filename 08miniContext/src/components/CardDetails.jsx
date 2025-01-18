import  {useContext} from 'react'
import CardContext from '../context/CardContext'

function CardDetails() {

  // const {user}= useContext(UserContext)
  const {card} = useContext(CardContext)


  if (!card) return <div>Add Cart Please</div>

  return (
    <>
    <div>Card Qty:{card}</div>
    </>
  )
}

export default CardDetails
