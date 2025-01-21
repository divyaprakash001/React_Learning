import React from 'react'
import { Container,Logo,LogoutBtn } from '../index'
import { Link } from 'react-router'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router'

function Header() {
  const authStatus = useSelector((state)=> state.auth.status)
  const navigate = useNavigate()

  const navItems = [
    {
      name:'Home',
      slug : "/",
      active : true
    },
    {
      name:'Login',
      slug : "/login",
      active : !authStatus,
    },
    {
      name:'Signup',
      slug : "/signup",
      active : !authStatus,
    },
    {
      name:'All Posts',
      slug : "/all-posts",
      active : authStatus,
    },
    {
      name:'Add Posts',
      slug : "/add-posts",
      active : authStatus,
    },
    

  ]

  return (
    <div>
      <header className='py-3 shadow bg-gray-500'>
      <Container>
        <nav className='flex'>
          <div className='mr-4'>
            <Link to='/'>
              <Logo width='70px' />
            </Link>
          </div>
          <ul className='flex ml-auto'>

          </ul>
        </nav>
      </Container>
      </header>
    </div>
  )
}

export default Header
