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
            <div className='sf-left-side'>

                <h3>SERVICES</h3>
                <p>Our top value <br /> Categories fpr you</p>
                <div className=''>
                </div>
            </div>

            <div className='swiper-cont-c'>
                {/* add color to the selcted card */}
                <Swiper className='swiper-cont-b'
                        css-mode="true"
                        FreeMode={true}
                        navigation={{ prevEl: '.prev', nextEl: '.next',}}
                        slidesPerView={2}
                        centeredSlides={true}
                        scrollbar={{ draggable: true }}
                        onSwiper={(swiper) => console.log(swiper)}
                        onSlideChange={() => console.log('slide change')}>
                    <SwiperSlide className="card-content">
                        <div className='card'>
                            <div className='card-padding'>
                                <div>
                                    <img src="src\assets\slider\destination 1.png" alt="" />
                                </div>
                                <div className='info-card'>
                                    <h1 className='card-h1'>Best Tour Guide</h1>
                                    <p className='card-p'>What looked like a small patch of purple grass, above five feet.</p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="card-content">
                        <div className='card'>
                            <div className='card-padding'>
                                <div>
                                    <img src="src\assets\cards\booking 1.png" alt="" />
                                </div>
                                <div className='info-card'>
                                    <h1 className='card-h1'>Easy Booking</h1>
                                    <p className='card-p'>Square, was moving across the sand in their direction.</p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="card-content">
                        <div className='card'>
                            <div className='card-padding'>
                                <div>
                                    <img src="src\assets\cards\booking 1.png" alt="" />
                                </div>
                                <div className='info-card'>
                                    <h1 className='card-h1'>Easy Booking</h1>
                                    <p className='card-p'>Square, was moving across the sand in their direction.</p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="card-content">
                        <div className='card'>
                            <div className='card-padding'>
                                <div>
                                    <img src="src\assets\cards\booking 1.png" alt="" />
                                </div>
                                <div className='info-card'>
                                    <h1 className='card-h1'>Easy Booking</h1>
                                    <p className='card-p'>Square, was moving across the sand in their direction.</p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
                
                    <div className='butons-con'>
                        <div className="prev" onClick={() => swiper.slidePrev()}><img src="src\assets\cards\arrow-left-solid.svg"></img></div>
                        <div className="next" onClick={() => swiper.slideNext()}><img src='src\assets\cards\arrow-right-solid.svg'></img></div>
                    </div>
            </div>
    </div>
        </>
    )
};

export default Sfslider;