const Sectiond = () => {
    return(
        <>
        <div className="secd-maincont mt-40 flex items-center  justify-center gap-9">
            <div className="  w-[540px] h-[772px]">
                <div className="max-h-[216px]  size-full">
                    <h3 className="text-[#F85E9F] font-['circular'] text-[23px] tracking-[5px]">KEY FEATURES</h3>
                    <h1 className="text-black font-['circular'] text-[44px]">We offer best services</h1>
                    <p className=" text-black font-['inter'] text-[18px] font-normal">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature <br/> from 45 BC.</p>
                </div>
                <div className="pt-[45px]">
                    <div className=" flex items-center hover:border-black-300 hover:border-2 hover:rounded-[30px] justify-center gap-5 bg-white size-full max-w-[540px] h-[164px]">
                        <div className=" flex items-center justify-center rounded-[30px] w-[100px] h-[100px] bg-[#FF5722] ">
                            <img src="src\assets\sectiond\location 2.svg" alt="" />
                        </div>
                        <div className=" max-w-[329px] max-h-[65px] size-full">
                            <h1 className=" text-[23px]  font-['circular] text-[#000]">We offer best services</h1>
                            <p className="text-[#000] text-[18px]">Lorem Ipsum is not simply random text</p>
                        </div>
                    </div>
                    <div className=" flex items-center hover:border-black-300 hover:border-2 hover:rounded-[30px] justify-center gap-5 bg-white size-full max-w-[540px] h-[164px]">
                        <div className=" flex items-center justify-center rounded-[30px] w-[100px] h-[100px] bg-[#FACD49] ">
                            <img src="src\assets\sectiond\Vector(1).svg" />
                        </div>
                        <div className=" max-w-[329px] max-h-[65px] size-full">
                            <h1 className=" text-[23px]  font-['circular] text-[#000]">Schedule your trip</h1>
                            <p className="text-[#000] text-[18px]">It has roots in a piece of classical</p>
                        </div>
                    </div>
                    <div className=" flex items-center hover:border-black-300 hover:border-2 hover:rounded-[30px] justify-center gap-5 bg-white size-full max-w-[540px] h-[164px]">
                        <div className=" flex items-center justify-center rounded-[30px] w-[100px] h-[100px] bg-[#F85E9F]">
                            <img src="src\assets\sectiond\Vector(2).svg" alt="" />
                        </div>
                        <div className=" max-w-[329px] max-h-[65px] size-full">
                            <h1 className=" text-[23px]  font-['circular] text-[#000]">Get discounted coupons</h1>
                            <p className="text-[#000] text-[18px]">Lorem Ipsum is not simply random text</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className=" relative w-[500px] h-[700px] ">
                <div className="absolute z-[2]" ><img src="src\assets\sectiond\Rectangle 9.png" alt="" /></div>
                <div className="absolute left-[130px] top-[270px] z-[2]"><img className="" src="src\assets\sectiond\Rectangle 10.png" alt="" /></div>
                <div className="absolute top-[-60px] right-[-200px] z-[1] max-w-none "><img className="max-w-none z-[1]" src="src\assets\sectiond\BACKGROUND.png" alt="" /></div>
                <div className="absolute max-w-[307px] max-h-[72px] z-[2] right-[-30px] top-[90px] size-full bg-white text-[#000] rounded-[40px] items-center justify-center flex gap-3"> <img src="src\assets\sectiond\map.11 1.svg" alt="" /> <button className="text-black font-['circular'] text-[23px]">Paradise on Earth</button></div>
            </div>
        </div>
        </>
    )
}
export default Sectiond;