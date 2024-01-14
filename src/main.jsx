import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from "./header.jsx"
import Content from "./content.jsx"
import Swipera from "./swiper.jsx"
import Sfslider from './sectionf.jsx'
import Sectionb from "./sectionb.jsx"
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
    <div className="main-cont">
      <Son/>  
      <Header/>
      <Content/>
      <Swipera/>
      <Sfslider/>
      <Sectionb/>
    </div>
  </div>
)