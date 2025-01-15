import React, { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App.jsx'

 // const ReactElement = {
  //   type: 'a',
  //   props: {
  //     href: 'https://google.com',
  //     target: '_blank'
  //   },
  //   children: 'Click Me'
  // }

  // const ReactElement = React.createElement(
  //   'a',
  //   {href: 'https://google.com', target: '_blank'},
  //   'Click Me',
  //      variable
  // )


ReactDOM.createRoot(document.getElementById('root')).render(
  // <StrictMode>
    <App username='divya' />
    // ReactElement
  // </StrictMode>,
)
