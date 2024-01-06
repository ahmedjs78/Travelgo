
// import function to register Swiper custom elements
import { register } from 'swiper/element/bundle';
import "./css/sectionf.css"

import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import "./css/swpre.css";


// register Swiper custom elements
register();
import "swiper/css"



const Sfslider = () => {
    const swiper = useSwiper()
    return(
        <>
        <div className='secf-cont'>
            <Swiper 
                    css-mode="true"
                    FreeMode={true}
                    navigation={{ prevEl: '.prev', nextEl: '.next',}} 
                    spaceBetween={30}
                    slidesPerView={3}
                    centeredSlides={true}
                    scrollbar={{ draggable: true }}
                    onSwiper={(swiper) => console.log(swiper)}
                    onSlideChange={() => console.log('slide change')}>
                <SwiperSlide>
                    <div className='card'>
                        <div className='card-padding'>
                            <div>
                                <img src="src\assets\cards\booking 1.png" alt="" />
                            </div>
                            <div className='card-p2'>
                                <h1 className='card-h1'>Easy Booking</h1>
                                <p className='card-p'>Square, was moving across the sand in their direction.</p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='card'>
                        <div><img src="src\assets\cards\booking 1.png" alt="" /></div>
                        <div>
                            <h1>Easy Booking</h1>
                            <p>Square, was moving across the sand in their direction.</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='card'>
                        <div><img src="src\assets\cards\booking 1.png" alt="" /></div>
                        <div>
                            <h1>Easy Booking</h1>
                            <p>Square, was moving across the sand in their direction.</p>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
            
                {/* <div className='butons-con'>
                <div className="prev" onClick={() => swiper.slidePrev()}/>
                <div className="next" onClick={() => swiper.slideNext()}/>
                </div> */}
        </div>
        </>
    )
};

export default Sfslider