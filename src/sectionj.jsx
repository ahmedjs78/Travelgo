const Sectionj = () => {
    return (
        <>
        <div className="relative mt-[100px]">
            <div className="absolute top-[-60px] left-[-50px]"><img src="src\assets\sectionj\Graphic_Elements.svg" alt="" /></div>
            <div className="w-[1110px] h-[608px] bg-[#FACD4914] flex flex-col items-center justify-center gap-7 rounded-[30px]">
                <div className="text-center">
                    <h4 className="text-[#F85E9F] text-[23px] tracking-[8px] font-['circular']">SUBSCRIBE TO OUR NEWSLETTER</h4>
                    <h1 className="text-[#000] text-[55px] font-['circular'] mt-[20px]">Prepare yourself & let's explore the <br/> beauty of the world</h1>
                </div>
                <div className="flex gap-5 items-center">
                    <div className="flex bg-white w-[683px] h-[96px] items-center ml-[30px] rounded-[20px]">
                        <label className="rounded-[32px] flex bg-white w-[683px] h-[96px] items-center ml-[30px]" htmlFor="email">
                        <img className=" w-[27px] h-[24px] ml-5 mr-5" src="src\assets\sectionj\Vector(5).svg"/>
                        <input id="email" className="text-[23px]  font-['circular'] border-none focus:outline-none px-4 py-2 text-[#000] bg-white" type="email" placeholder="Your Email" />
                        </label>
                    </div>
                    <div>
                        <button className="bg-[#5D50C6] w-[235px] h-[96px] rounded-[32px] text-[23px] font-['circular']">Subsribe</button>
                    </div>
                </div>
            </div>
            <img className="absolute right-[-165px] bottom-[-120px]" src="src\assets\sectionj\OBJECTS(1).svg" alt="" />
        </div>
        </>
    )
}
export default Sectionj;