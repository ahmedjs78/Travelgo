import "/src/css/sectionb.css"


const Sectionb = () => {
    return (
        <>
            <div className="secb-cont">
                <div className="secb-cen-con w-auto">
                    <div className="secb-head flex items-center">
                        <div className="center-head-cont h-[97px] w-[700px] flex flex-col justify-center gap-2 bg-white">
                        <h4 className="text-[#F85E9F] text-2xl font-['circular'] font-bold tracking-[.3em] ml-1">TOP DESTINATION</h4>
                            {/* add font type x in the p  */}
                        <p className="text-[#191825] text-5xl font-['circular']">Explore top destination</p>
                        </div>
                    </div>
                    <div className="secb-cards relative">
                        <div className=" w-1 h-1"><img className="secb-deco " src="src\assets\secbcards\OBJECTS.svg" alt="" /></div>
                        <div className="  flex space-x-4 justify-center" >
                            {/* 1 */} <div className="sadow2 sectb-card-info w-[350px] h-[575px] rounded-[32px] bg-#fff " >
                                                        <div id="card-img" ><img className=" rounded-t-[32px] " src="src\assets\secbcards\Rectangle 6.jpg" alt="" /></div>
                                                        <div id="card-info" className="p-[32px] ">
                                                            <div className="flex">
                                                                <h4 className="font-['circular'] text-[#191825] text-[23px] leading-7" >Paradise Beach, Bantayan  Island</h4>
                                                                <h2 className="font-['circular'] text-[#F85E9F] text-[23px] font-[700] ">$555.16</h2>
                                                            </div>
                                                            <div className="mt-[16px]">
                                                                <h2 className="text-black text-[16px]">Rome, italy</h2>
                                                            </div>
                                                            <div className="flex mt-[30px]">
                                                            <span className="font-['circular'] text-[23px] text-[#FF5722] mr-2 "><b>4.8</b></span> <img src="src\assets\secbcards\star 1.svg" alt="" />
                                                            </div>
                                                        </div>
                                                    </div>
                            {/* 2 */} <div className="sadow2 sectb-card-info w-[350px] h-[575px] rounded-[32px] bg-#fff ">
                                                            <div id="card-img" ><img className=" rounded-t-[32px] " src="src\assets\secbcards\Rectangle 6(1).jpg" alt="" /></div>
                                                            <div id="card-info" className="p-[32px] ">
                                                                <div className="flex">
                                                                    <h4 className="font-['circular'] text-[#191825] text-[23px] leading-7" >Ocean with full of Colors</h4>
                                                                    <h2 className="font-['circular'] text-[#F85E9F] text-[23px] font-[700] ">$20.99</h2>
                                                                </div>
                                                                <div className="mt-[16px]">
                                                                    <h2 className="text-black text-[16px]">Maldives</h2>
                                                                </div>
                                                                <div className="flex mt-[30px]">
                                                                <span className="font-['circular'] text-[23px] text-[#FF5722] mr-2 "><b>4.5</b></span> <img src="src\assets\secbcards\star 1.svg" alt="" />
                                                                </div>
                                                            </div>
                                                    </div>
                            {/* 3 */} <div className="sadow2 sectb-card-info w-[350px] h-[575px] rounded-[32px] bg-#fff ">
                                                            <div id="card-img" ><img className=" rounded-t-[32px] " src="src\assets\secbcards\Rectangle 6(2).jpg" alt="" /></div>
                                                            <div id="card-info" className="p-[32px] ">
                                                                <div className="flex">
                                                                    <h4 className="font-['circular'] text-[#191825] text-[23px] leading-7" >Mountain View, Above the cloud</h4>
                                                                    <h2 className="font-['circular'] text-[#F85E9F] text-[23px] font-[700] ">$150.99</h2>
                                                                </div>
                                                                <div className="mt-[16px]">
                                                                    <h2 className="text-black text-[16px]">United Arab Emeries </h2>
                                                                </div>
                                                                <div className="flex mt-[30px]">
                                                                <span className="font-['circular'] text-[23px] text-[#FF5722] mr-2 "><b>5.0</b></span> <img src="src\assets\secbcards\star 1.svg" alt="" />
                                                                </div>
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