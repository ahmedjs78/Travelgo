// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';
import "./swpre.css";


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export default () => {
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={3}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide></SwiperSlide>
      <SwiperSlide><div className='box1'><div className='card-img'><img src="" alt="" /></div> </div></SwiperSlide>
      <SwiperSlide><div className='box2'> </div></SwiperSlide>
      <SwiperSlide><div className='box3'> </div></SwiperSlide>
      <SwiperSlide><div className='box4'> </div></SwiperSlide>
      <SwiperSlide><div className='box4'> </div></SwiperSlide>
      <SwiperSlide><div className='box4'> </div></SwiperSlide>
      <SwiperSlide><div className='box4'> </div></SwiperSlide>
      <SwiperSlide><div className='box4'> </div></SwiperSlide>
      <SwiperSlide></SwiperSlide>
      ...
    </Swiper>
  );
};