import { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router'

function Github() {
  const data= useLoaderData()

  // const [data,setData] = useState([])

  // useEffect(()=>{
  //   fetch('https://api.github.com/users/divyaprakash001')
  //   .then((res)=> res.json())
  //   .then((res)=> {
  //     console.log(res);
  //     setData(res)
  //   })
  // },[])


  return (
    <>
      <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>
      <img src={data.avatar_url} alt="Git Pic" width={300} />
      <div>Name : {data?.name}</div>
      <div>Username : {data?.login}</div>
      Github Public Repository : {data?.public_repos}
      </div>
    </>
  )
}

export default Github


export const githubInfoLoader = async () =>{
const response = await fetch('https://api.github.com/users/divyaprakash001')
return response.json()
}