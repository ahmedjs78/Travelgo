// import Swiper core and required modules
import {FreeMode,Autoplay, Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';
import "./swpre.css";


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Swipera = () => {
  return (
    <Swiper
      // install Swiper modules
      modules={[FreeMode,Autoplay,Navigation, Pagination, Scrollbar, A11y]}
      FreeMode={true}
      autoplay={{delay: 1000,disableOnInteraction: false,}}
      spaceBetween={30}
      slidesPerView={3}
      centeredSlides={true}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >      
         
      <SwiperSlide><div className='box'><li><a href=""><img src="src\assets\slider\Group.svg" alt="" /></a></li>   </div></SwiperSlide>
      <SwiperSlide><div className='box'><li><a href=""><img src="src\assets\slider\Group 3.svg" alt="" /></a></li> </div></SwiperSlide>
      <SwiperSlide><div className='box'><li><a href=""><img src="src\assets\slider\Group(1).svg" alt="" /></a></li></div></SwiperSlide>
      <SwiperSlide><div className='box'><li><a href=""><img src="src\assets\slider\Group 2.svg" alt="" /></a></li> </div></SwiperSlide>
      <SwiperSlide><div className='box'><li><a href=""><img src="src\assets\slider\Group.svg" alt="" /></a></li>   </div></SwiperSlide>
      <SwiperSlide><div className='box'><li><a href=""><img src="src\assets\slider\Group.svg" alt="" /></a></li>   </div></SwiperSlide>
      ...
    </Swiper>
  );
};

export default Swipera;