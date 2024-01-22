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
                    <div className="secb-cards">
                        <div className="secb-card-img" >
                            <img src="" alt="" />
                        </div>
                            <div className=" bg-yellow-400 flex space-x-4 justify-center" >
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
                                <div className="sectb-card-info w-[350px] h-[575px] bg-orange-500">
                                    <div id="card-img" ><img src="" alt="" /></div>
                                    <div id="card-info">
                                        <h4>Paradise Beach,Bantayan  Island</h4>
                                        <span>$555.16</span>
                                        <details>Rome, italy</details>
                                        <span><img src="" alt="" /></span>
                                    </div>
                                </div>
                            <div >
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </>     
        )
}

export default Sectionb;