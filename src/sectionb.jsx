import "/src/css/sectionb.css"


const Sectionb = () => {
    return (
        <>
            <div className="secb-cont">
                <div className="secb-cen-con w-auto">
                    <div className="secb-head flex items-center">
                        <div className="center-head-cont h-[97px] w-[700px] flex flex-col justify-center gap-2 bg-white">
                        <h4 className="text-[#F85E9F] text-2xl font-['circular'] font-bold tracking-[.3em]">TOP DESTINATION</h4>
                            {/* add font type x in the p  */}
                        <p className="text-[#191825] text-5xl font-['circular']">Explore top destination</p>
                        </div>
                    </div>
                    <div className="secb-cards relative">
                        <div className="bg-emerald-400 w-1 h-1"><img className="secb-deco " src="src\assets\secbcards\OBJECTS.svg" alt="" /></div>
                        <div className="  bg-yellow-4300 flex space-x-4 justify-center" >
                            <div className="sectb-card-info w-[350px] h-[575px] bg-[#e99e9e]">
                                    <div id="card-img" ><img className=" rounded-t-[43px] " src="src\assets\secbcards\Rectangle 6.jpg" alt="" /></div>
                                    <div id="card-info" className="p-[32px] ">
                                        <div className="flex">
                                            <h4 className="font-['circular'] text-[#191825] text-[23px] leading-7" >Paradise Beach, Bantayan  Island</h4>
                                            <h2 className="font-['circular'] text-[#F85E9F] text-[23px] font-[700] ">$555.16</h2>
                                        </div>
                                        <div className="mt-[16px]">
                                            <h2 className="text-[16px]">Rome, italy</h2>
                                        </div>
                                        <div className="flex mt-[30px]">
                                          <span className="font-['circular'] text-[23px] text-[#FF5722] mr-2 "><b>4.8</b></span> <img src="src\assets\secbcards\star 1.svg" alt="" />
                                        </div>
                                    </div>
                            </div>
                            <div className="sectb-card-info w-[350px] h-[575px] bg-orange-500">
                                    <div id="card-img" ><img src="" alt="" /></div>
                                    <div id="card-info">
                                        <h4>Paradise Beach,Bantayan  Island</h4>
                                        <span>$555.16</span>
                                        <details>Rome, italy</details>
                                        <span><img src="" alt="" /></span>
                                    </div>
                            </div>
                            <div className="sectb-card-info w-[350px] h-[575px] bg-orange-500">
                                    <div id="card-img" ><img src="" alt="" /></div>
                                    <div id="card-info">
                                        <h4>Paradise Beach,Bantayan  Island</h4>
                                        <span>$555.16</span>
                                        <details>Rome, italy</details>
                                        <span><img src="" alt="" /></span>
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>     
        )
}

export default Sectionb;