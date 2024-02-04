import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from "./header.jsx"
import Content from "./content.jsx"
import Swipera from "./swiper.jsx"
import Sfslider from './sectionf.jsx'
import Sectionb from "./sectionb.jsx"
import Sectionc from "./sectionc.jsx"
import Sectiond from "./sectiond.jsx"
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
      <Sectionc/>
      <Sectiond/>
    </div>
  </div>
)