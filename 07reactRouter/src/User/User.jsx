import { useParams } from "react-router"

function User() {
  const {userid} = useParams()
  return (
    <>
     <div className="bg-gray-600 text-white text-3xl py-4 text-center">User : {userid}</div> 
    </>
  )
}

export default User
