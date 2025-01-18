import Login from "./components/Login"
import Profile from "./components/Profile"
import UserContextProvider from "./context/UserContextProvider"
import CardContextProvider from "./context/CardContextProvider"
import Card from "./components/Card"
import CardDetails from "./components/CardDetails"

function App() {

  return (
    <>
    <UserContextProvider>
      <h1>Hello Context API</h1>
      <Login/>
      <Profile/>
    </UserContextProvider>

    <CardContextProvider>
        <Card/>
        <CardDetails/>
    </CardContextProvider>
    
    </>
    
  )
}

export default App
