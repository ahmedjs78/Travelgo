// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

import { Pagination } from 'swiper/modules';

const Sectione = () => {
    return(
        <>
        <div className=" mt-[130px] flex items-center justify-center  w-[1120px] h-[645px]">
            <div className="z-[3]">
                <div className="prev" onClick={() => swiper.slidePrev()}><img src="src\assets\cards\arrow-left-solid.svg"></img></div>
            </div>
            <div className=" relative w-[920px] h-[100%] ">
                <div className=" z-[2] absolute top-[-280px] right-[-260px] " ><img className="max-w-none relative" src="src\assets\sectione\Vector(4).svg" /></div>
                <Swiper 
                    className="z-[3]"
                    style={{
                        "--swiper-pagination-color": "#F85E9F",
                        "--swiper-pagination-bullet-inactive-color": "#999999",
                        "--swiper-pagination-bullet-inactive-opacity": "1",
                        "--swiper-pagination-bullet-size": "20px",
                        "--swiper-pagination-bullet-horizontal-gap": "10px"
                    }}
                    navigation={{ prevEl: '.prev', nextEl: '.next',}}
                    pagination={true} modules={[Pagination]}
                    slidesPerView={1}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                    >
                        <SwiperSlide className="  flex flex-col flex-start w-[920px] h-[645PX] ">
                            <div className="">
                                <h4 className="text-[#F85E9F] text-[23px] font-['circular'] tracking-[6px] text-center">TESTIMONIALS</h4>
                                <h1 className="text-[#000] text-[44px] font-['circular']">Trust our clients</h1>
                            </div>
                            <div className="mt-[60px]">
                                <img src="src\assets\sectione\Ellipse 22.png" alt="" />
                            </div>
                            <div className="mt-[85px] flex flex-col items-center">
                                <p className="text-[#FF5722] text-[28px] font-['circular'] mb-[40px]">Mark Smith <span className="text-[#000] text-[">/ Travel Enthusiast</span></p>
                                <img className="w-[224px] h-[32px]" src="src\assets\sectione\Frame 54.png" alt="" />
                            </div>
                            <div className="mt-[30px]">
                                <p className=" text-[#000] text-center text-[23px]">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots
                                    in a piece of classical Latin literature from 45 BC.</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="  flex flex-col flex-start w-[920px] h-[645PX] ">
                            <div className="">
                                <h4 className="text-[#F85E9F] text-[23px] font-['circular'] tracking-[6px] text-center">TESTIMONIALS</h4>
                                <h1 className="text-[#000] text-[44px] font-['circular']">Trust our clients</h1>
                            </div>
                            <div className="mt-[60px]">
                                <img src="src\assets\sectione\Ellipse 22.png" alt="" />
                            </div>
                            <div className="mt-[85px] flex flex-col items-center">
                                <p className="text-[#FF5722] text-[28px] font-['circular'] mb-[40px]">Mark Smith <span className="text-[#000] text-[">/ Travel Enthusiast</span></p>
                                <img className="w-[224px] h-[32px]" src="src\assets\sectione\Frame 54.png" alt="" />
                            </div>
                            <div className="mt-[30px]">
                                <p className=" text-[#000] text-center text-[23px]">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots
                                    in a piece of classical Latin literature from 45 BC.</p>
                            </div>
                        </SwiperSlide>                        <SwiperSlide className="  flex flex-col flex-start w-[920px] h-[645PX] ">
                            <div className="">
                                <h4 className="text-[#F85E9F] text-[23px] font-['circular'] tracking-[6px] text-center">TESTIMONIALS</h4>
                                <h1 className="text-[#000] text-[44px] font-['circular']">Trust our clients</h1>
                            </div>
                            <div className="mt-[60px]">
                                <img src="src\assets\sectione\Ellipse 22.png" alt="" />
                            </div>
                            <div className="mt-[85px] flex flex-col items-center">
                                <p className="text-[#FF5722] text-[28px] font-['circular'] mb-[40px]">Mark Smith <span className="text-[#000] text-[">/ Travel Enthusiast</span></p>
                                <img className="w-[224px] h-[32px]" src="src\assets\sectione\Frame 54.png" alt="" />
                            </div>
                            <div className="mt-[30px]">
                                <p className=" text-[#000] text-center text-[23px]">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots
                                    in a piece of classical Latin literature from 45 BC.</p>
                            </div>
                        </SwiperSlide>
                </Swiper>
            </div>
            <div className="z-[3]">
                <div className="next" onClick={() => swiper.slideNext()}><img src='src\assets\cards\arrow-left 2.svg'></img></div>
            </div>
        </div>
        </>
    )
}
export default Sectione;