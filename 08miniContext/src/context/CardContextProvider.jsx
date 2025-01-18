import  { useState } from 'react'
import CardContext from './CardContext'

const CardContextProvider = ({children}) => {
  const [card,setCard] = useState(null)
  return (
    <>
    <CardContext.Provider value={{card, setCard}}>
      {children}
    </CardContext.Provider>
    </>
  )
}

export default CardContextProvider
