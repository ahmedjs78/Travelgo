import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from "./header.jsx"
import Content from "./content.jsx"
import Swipera from "./swiper.jsx"
import './index.css'


function Son(){
  return(
    <>
    <div className='son'></div>
    </>
  )
}


ReactDOM.createRoot(document.getElementById('root')).render(
  <div className='index1'>
    <Son/>
    <Header/>
    <Content/>
    <Swipera/>
  </div>
)