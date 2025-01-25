import { StrictMode } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import './index.css';
import App from './App.jsx';

import Home from './pages/Home.jsx';
import { AuthLayout,Login } from './components/index.js';
import store from './store/store.js';

// import Login from './pages/Login.jsx';

import AllPosts from './pages/AllPosts.jsx';
import Signup from './pages/Signup.jsx';
import AddPost from './pages/AddPost.jsx';
import EditPost from './pages/EditPost.jsx';
import Post from './pages/Post.jsx';


const router = createBrowserRouter([
  {
    path: '/',
    element:<App/>,
    children:[
      {
        path:'/',
        element:<Home/>,
      },
      {path:'/login',
      element:(
        <AuthLayout authentication={false}>
          <Login />
        </AuthLayout>
        )
      },
      {
        path:'/signup',
        element:(
          <AuthLayout authentication={false}>
            <Signup/>
          </AuthLayout>
        )
      },
      {
        path:'/all-posts',
        element: (
          <AuthLayout authentication={true}>
            {" "}
            <AllPosts/>
          </AuthLayout>
        )
      },
      {
        path:'/add-posts',
        element: (
          <AuthLayout authentication={true}>
            {" "}
            <AddPost/>
          </AuthLayout>
        )
      },
      {
        path:'/edit-post/:slug',
        element: (
          <AuthLayout authentication={true}>
            {" "}
            <EditPost/>
          </AuthLayout>
        )
      },
      {
        path:'/post/:slug',
        element:<Post />
      },
    ]
  }
])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
    <RouterProvider router={router} />
    </Provider>
  </StrictMode>,
)
