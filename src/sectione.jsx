// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

import { Pagination } from 'swiper/modules';

const Sectione = () => {
    return(
        <>
        <div className=" flex items-center justify-center  bg-yellow-500 w-[1120px] h-[645px]">
            <div className="z-[3]">
                <div className="prev" onClick={() => swiper.slidePrev()}><img src="src\assets\cards\arrow-left-solid.svg"></img></div>
            </div>
            <div className="w-[920px] h-[100%] ">
                <div className=" z-[1] absolute left-[30px]" ><img src="src\assets\sectione\Vector(4).svg" /></div>
                <Swiper 
                    className="z-[3]"
                    style={{
                        "--swiper-pagination-color": "#FFBA08",
                        "--swiper-pagination-bullet-inactive-color": "#999999",
                        "--swiper-pagination-bullet-inactive-opacity": "1",
                        "--swiper-pagination-bullet-size": "16px",
                        "--swiper-pagination-bullet-horizontal-gap": "6px"
                    }}
                    navigation={{ prevEl: '.prev', nextEl: '.next',}}
                    pagination={true} modules={[Pagination]}
                    slidesPerView={1}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                    >
                        <SwiperSlide className="  flex flex-col flex-start bg-slate-600 w-[920px] h-[645PX] ">
                            <div className="">
                                <h4 className="text-[#F85E9F] text-[23px] font-['circular'] tracking-[6px] text-center">TESTIMONIALS</h4>
                                <h1 className="text-[#000] text-[44px] font-['circular']">Trust our clients</h1>
                            </div>
                            <div className="mt-[90px]">
                                <img src="src\assets\sectione\Ellipse 22.png" alt="" />
                            </div>
                            <div className="mt-[60px]">
                                <p>Mark Smith <span>/ Travel Enthusiast</span></p>
                                <img src="" alt="" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className=" flex flex-col items-center justify-center  bg-slate-600 w-[920px] h-[645PX] " >Slide 2</SwiperSlide>
                        <SwiperSlide className=" flex flex-col items-center justify-center  bg-slate-600 w-[920px] h-[645PX] ">Slide 3</SwiperSlide>
                        <SwiperSlide className=" flex flex-col items-center justify-center  bg-slate-600 w-[920px] h-[645PX] ">Slide 4</SwiperSlide>
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