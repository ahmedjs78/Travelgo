import React from "react"
import "./css/content.css"
function Content(){
    return(
        <div className="man">
            <div className="left-div">
                <button className="left-ex-btn"><p>Explore the world! </p>
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
                <div className="art-up">
                </div>
                <div className="img-cont">
                    <div className="artical">
                        <img className="left-top" src="src\assets\content\rightdiv\downF\Rectangle 1(1).png" alt="" />
                        <img className="left-end" src="src\assets\content\rightdiv\downF\Rectangle 2.png" alt="" />
                        <img className="right-i" src="src\assets\content\rightdiv\downF\Rectangle 3.png" alt="" />
                        <button className="brg">
                        <img src="src\assets\content\rightdiv\downF\send 1.svg" alt="" />
                        </button>
                        <button className="rtp"><img src="src\assets\content\rightdiv\downF\location 1.svg" alt="" />
                        <h4>Top places</h4>
                        </button>
                        <div className="last">
                        <img src="src\assets\content\rightdiv\downF\add-user 1.svg" alt="rtrt" />
                        </div>
                    </div>
                </div>
            </div>
               

        </div>
    )
}


export default Content