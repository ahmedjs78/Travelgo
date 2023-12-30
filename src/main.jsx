import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from "./header.jsx"
import Content from "./content.jsx"
import './css/index.css'


function Son(){
  return(
    <>
    <div className='son'>dgdgfssdfg</div>
    </>
  )
}


ReactDOM.createRoot(document.getElementById('root')).render(
  <div className='index1'>
    <Son/>
    <Header/>
    <Content/>
  </div>
  
)
