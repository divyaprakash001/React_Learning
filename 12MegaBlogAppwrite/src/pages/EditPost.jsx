import React, {useState,useEffect} from 'react'
import { useSelector } from 'react-redux'
import appwriteService from '../appwrite/config'
import { useNavigate, useParams } from 'react-router'
import { Container,PostForm } from '../components'

function EditPost() {

  const [post,setPosts] = useState([])
  const {slug} = useParams()
  const navigate = useNavigate()

  useEffect(()=>{
    if(slug){
      appwriteService.getPost(slug).then((post)=>{
        if(post){
          setPosts(post)
        }
      })
    }else{
      navigate("/")
    }
  },[slug,navigate])

  return post ? (
    <div className='py-8'>
      <Container>
        <PostForm />
      </Container>
    </div>
  ) : null
}

export default EditPost
