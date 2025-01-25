import { useState } from 'react'
import './App.css'
import { useEffect } from 'react'
import axios from 'axios'

function App() {
  const [products, setProducts] = useState([])
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(false)
  const [search, setSearch] = useState('')

  useEffect(()=>{
    const controller = new AbortController()
    ;(async ()=>{
        try {
          setLoading(true)
          setError(false)
          const response = await axios.get('/api/products?search='+search, {
            signal:controller.signal
          })
          console.log(response.data); 
          setProducts(response.data);
          setLoading(false)
        } catch (errowr) {
          if(axios.isCancel(error)){
            console.log('Request cancelled', error.message);
            return;
          }
          console.log('ERROR::', errowr);
          setError(true)
          setLoading(false)
        }
      })()

      // cleanup code
      return ()=>{
        controller.abort()
      }

  },[search])


  // const [products,error,loading] =  customReactQuery('/api/products')

  // if(error){
  //   return <div>Something went wrong</div>
  // }

  // if(loading){
  //   return <h2>loading....</h2>
  // }


  return (
    <>
    <div>

      <input type="text" placeholder='Search' 
      value={search}
      onChange={(e)=>setSearch(e.target.value)}/>

      {loading && <h1>Loading 🫸</h1>}
      {error && <h1>Something went wrong ☹️</h1>}
      <h1>Products 😃 :: {products.length}</h1>
      <button>Get Products</button>
      <div>
        {
          products.map((product)=>(
            <div key={product.id}>
              <h2>{product.name}</h2>
              <p>{product.price}</p>
              <div>
                <img src={product.image.path} alt={`${product.name} image`} />
              </div>
            </div>
          ))
        }
      </div>
    </div>
    </>
  )
}

export default App;


