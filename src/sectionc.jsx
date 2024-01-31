const Sectionc = () => {
    return (
        <>
        <div className="mt-[110px] flex flex-row gap-[52px] pl-20">
            <div className="relative w-[696px] h-[696px]">
                <div className="absolute top-[105px] left-[72px] w-auto z-[2]">
                    <img src="src\assets\sectionc\Ellipse 15.svg" alt="" />
                </div>
                <div className="absolute  top-[20] right-[109px]">
                    <img src="src\assets\sectionc\Ellipse 14.svg" alt="" />
                </div>
                <div className="absolute  left-[400px] z-[2] top-[131px] sadow2 bg-[#fff] w-[302px] h-[72px] rounded-full flex gap-3 items-center justify-center"> <img className="w-[40px] h-[40px]" src="src\assets\sectionc\discount 1.svg"/><p className="text-[23px] text-[#191825] font-['circular']"> Discounted Price</p></div>
                <div className="absolute  z-[2]"> <img src="src\assets\sectionc\My project 1.png" alt="" /></div>
                <div className="absolute top-[290px] right-[200px] z-[2]"><img src="src\assets\sectionc\Ellipse 17.svg" alt="" /></div>
                <div className="absolute top-[495px] right-[125px] z-[2]"><img src="src\assets\sectionc\Ellipse 18.svg"/></div>
                <div className="absolute top-[195px] right-[15px]  z-[1]" ><img src="src\assets\sectionc\Ellipse 16.svg"/></div>
                <div className="rounded-r-[1130px] absolute right-[70px] top-[129px] w-[705px] h-[550px] bg-[#FACD49] z-[1]"></div>
            </div>
            <div className="w-[445px] h-[667px] bg-[#fff] gap-[64px]">
                <div className="pt-[10px] flex flex-col ">
                    <h3 className="tracking-[.45em] text-[#F85E9F] font-['circular'] font-[23px]">TRAVEL POINT</h3>
                    <h1 className=" pt-[16px] font-['circular'] text-[#000] text-[44px] leading-[50px]">We helping you find your dream location</h1>
                    <p className="pt-[32px] text-[18px] text-[#191825] font-['inter'] leading-[30px] opacity-50">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC.</p>
                </div>
                <div className="relative flex flex-wrap gap-[32px] pt-[64px]">
                    <div className="flex items-center justify-center rounded-[100px] absolute z-[2] bg-[#FACD49] h-[112px] w-[112px] top-[1px] right-[-75px]" ><img src="src\assets\sectionc\ticket-star 1.svg"/></div>
                    <div className="gap-[16px] flex flex-col justify-center items-center text-black w-[206px] h-[151px] border-#000/50 border rounded-[30px] ">
                        <p className="text-[#FF5722] font-['circular'] text-[35px]">500+</p>
                        <p>Holiday Package</p>
                    </div>
                    <div className="gap-[16px] flex flex-col justify-center items-center text-black w-[206px] h-[151px] border-#000/50 border rounded-[30px] ">
                        <p className="text-[#FF5722] font-['circular'] text-[35px]">100</p>
                        <p>Luxury Hotel</p>
                    </div>
                    <div className="gap-[16px] flex flex-col justify-center items-center text-black w-[206px] h-[151px] border-#000/50 border rounded-[30px] ">
                        <p className="text-[#FF5722] font-['circular'] text-[35px]">7</p>
                        <p>Premium Airlines</p>
                    </div>
                    <div className="gap-[16px] flex flex-col justify-center items-center text-black w-[206px] h-[151px] border-#000/50 border rounded-[30px] ">
                        <p className="text-[#FF5722] font-['circular'] text-[35px]">2k+</p>
                        <p>Happy Customer</p>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
export default Sectionc;