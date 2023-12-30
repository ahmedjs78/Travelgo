import React from "react"
import "./css/content.css"
function Content(){
    return(
        <div className="man">
            <div className="left-div">
            <button className="left-ex-btn"><p>
            Explore the world! 
             </p>
             <img src="src\assets\content\work 1.png" alt="" /></button>
             <h1 className="left-man-h1">Travel <span className="s">top destination</span>of the world</h1>
             <p className="left-man-p">We always make our customer happy by providing
                as many choices as possible </p>
            <div className="left-div-fotter">
                <button className="left-get-btn">Get Started</button>
                <button className="left-wat-btn"><img src="src\assets\content\play-circle.5 1.svg" alt="" /> Watch Demo</button>
            </div>
            </div>
            <div className="right-div">
                <img className="left-plane" src="src\assets\content\rightdiv\Vector(2).svg" alt="left-plane" />
            <img src="src\assets\content\rightdiv\Vector(1).svg" alt="lin-left" />
                <div ></div>
            </div>
        </div>
    )
}


export default Content