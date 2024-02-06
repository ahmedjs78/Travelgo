// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';


const Sectione = () => {
    return(
        <>
        <div className=" flex items-center justify-center  bg-yellow-500 w-[1120px] h-[645px]">
            <div></div>
            <div className="w-[920px] h-[100%]">
            <Swiper
                navigation={true}
                spaceBetween={50}
                slidesPerView={3}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
                >
                    <SwiperSlide className="bg-slate-600 w-[920px] h-[400PX] ">Slide 1</SwiperSlide>
                    <SwiperSlide>Slide 2</SwiperSlide>
                    <SwiperSlide>Slide 3</SwiperSlide>
                    <SwiperSlide>Slide 4</SwiperSlide>
                    ...
            </Swiper>

            </div>
            <div></div>
        </div>
        </>
        
    )
}

export default Sectione;