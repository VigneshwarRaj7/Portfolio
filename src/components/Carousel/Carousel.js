import { useState } from "react";
import './Carousel.scss';
import { Swiper, SwiperSlide } from "swiper/react";

import leftArrow from '../../assets/leftArrow.png'
import rightArrow from "../../assets/rightArrow.png";
import 'swiper/css';
import 'swiper/css/effect-coverflow';

import { EffectCoverflow,Navigation } from "swiper/modules";

const Carousel = (props)=>{

    console.log(props.data);
        return(
            // <div className=" slider-container mt-3 md:mt-6 md:mb-6">
            //         <Swiper 
            //             effect={'coverflow'}
            //             grabCursor={true}
            //             centeredSlides={true}
            //             loop={true}
            //             slidesPerView={3}
            //             coverflowEffect={{
            //                 rotate:0,
            //                 stretch:-75,
            //                 depth:250,
            //                 modifier:3.5,
            //                 slideShadows:false,
            //             }}
            //             navigation={{
            //                 nextEl:'.swiper-button-next',
            //                 prevEl:'.swiper-button-prev',
            //                 clickable:true,
            //             }}
            //             modules={[EffectCoverflow,Navigation] }
            //         >

            //            {
            //             props.data.map((i)=>{
            //                 return(
            //                     <SwiperSlide className=" ">
            //                         <img className=" min-h-80 min-w-80 md:min-h-[480px] md:max-h-[480px] md:max-w-[425px] md:min-w-[425px] md:object-cover" src={i}></img>
            //                     </SwiperSlide>
            //                 )
                            
            //             })
            //            }
            //             <div className="slider-nav ">
            //                 <div className="swiper-button-prev">
            //                     {/* <ArrowLeft size={30}></ArrowLeft> */}
            //                     <img src={leftArrow} className="h-10 w-10" ></img>
            //                 </div>    
            //                 <div className="swiper-button-next">
            //                     {/* <ArrowRight size={30}></ArrowRight> */}
            //                     <img src={rightArrow} className="h-10 w-10" ></img>
            //                 </div>  
            //             </div>

            //             {/* <div className="absolute top-0 h-full w-full justify-between items-center flex text-white px-10 text-3xl"> */}

      
            //         </Swiper>
            // </div>
            <div className="slider-container mt-3 mb-4 md:mt-6 md:mb-6">
                <Swiper
                    effect={'coverflow'}
                    grabCursor={true}
                    centeredSlides={true}
                    loop={true}
                    // Default to 1 slide for mobile
                    // breakpoints={{
                    //   640: { slidesPerView: 1}, // Small screens
                    //   768: { slidesPerView: 2 }, // Tablets
                    //   1024: { slidesPerView: 3 }, // Larger screens

                    // }}
                    slidesPerView={3}
                    coverflowEffect={{
                    rotate: 0,
                    stretch: 0, // Reduce stretch for better mobile look
                    depth: 200,
                    modifier: 2.5, // Lower modifier for better scaling
                    slideShadows: false,
                    }}
                    navigation={{
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                    clickable: true,
                    }}
                    modules={[EffectCoverflow, Navigation]}
                >
                    {props.data.map((i, index) => (
                    <SwiperSlide key={index}>
                        <img
                        className="  h-64 min-w-40 sm:h-80 sm:w-80 md:min-h-[480px] md:min-w-[425px] object-cover"
                        src={i}
                        //  
                        />
                    </SwiperSlide>
                    ))}
                    
                    {/* Navigation Buttons */}
                    <div className="slider-nav">
                    <div className="swiper-button-prev">
                        <img src={leftArrow} className="h-8 w-8 sm:h-10 sm:w-10" />
                    </div>
                    <div className="swiper-button-next">
                        <img src={rightArrow} className="h-8 w-8 sm:h-10 sm:w-10" />
                    </div>
                    </div>
                </Swiper>   
            </div>
        )

}

export default Carousel;



// let [current, setCurrent] = useState(2);

//     let previousSlide = () => {
//       if (current === 0) setCurrent(slides.length - 1);
//       else setCurrent(current - 1);
//     };
  
//     let nextSlide = () => {
//       if (current === slides.length - 1) setCurrent(0);
//       else setCurrent(current + 1);
//     };
  
//     return (
//       <div className="w-2/6  relative  m-auto mt-4 ">
//         <div
//           className={`flex transition ease-out duration-40 `}
//           style={{
//             transform: `translateX(-${current * 100}%)`,
//           }}
//         >
//           {slides.map((s) => {

            
//             return <img src={s} className="shadow-2xl z-20 m-1" />;
//           })}
//         </div>
  
//         <div className="absolute top-0 h-full w-full justify-between items-center flex text-white px-10 text-3xl">
//           <button onClick={previousSlide}>
//             <BsFillArrowLeftCircleFill />
//           </button>
//           <button onClick={nextSlide}>
//             <BsFillArrowRightCircleFill />
//           </button>
//         </div>
  
//         <div className="absolute bottom-0 py-4 flex justify-center gap-3 w-full">
//           {slides.map((s, i) => {
//             return (
//               <div
//                 onClick={() => {
//                   setCurrent(i);
//                 }}
//                 key={"circle" + i}
//                 className={`rounded-full w-5 h-5 cursor-pointer  ${
//                   i == current ? "bg-white" : "bg-gray-500"
//                 }`}
//               ></div>
//             );
//           })}
//         </div>
//       </div>





// import { Swiper,SwiperSlide } from "swiper/react";
// import React from "react";
// import './Carousel.css';

// import 'swiper/css';
// import 'swiper/css/effect-coverflow';
// import 'swiper/css/pagination';
// import 'swiper/css/navigation'; 

// import { EffectCoverflow,Pagination,Navigation } from "swiper/modules";

// import img1 from '../../assets/animatedPixel.jpg';
// import img2 from '../../assets/animatedPixel1.jpg';
// import img3 from '../../assets/animatedPixel3.jpg';

// const Carousel =()=>{

//     return (
//         <div className="container m-auto w-5/6 ">
//         <h1 className="heading">Flower Gallery</h1>
//         <Swiper
//           effect={'coverflow'}
//           grabCursor={true}
//           centeredSlides={true}
//           loop={true}
//           slidesPerView={'auto'}
//           coverflowEffect={{
//             rotate: 0,
//             stretch: 0,
//             depth: 100,
//             modifier: 2.5,
//           }}
//           pagination={{ el: '.swiper-pagination', clickable: true }}
//           navigation={{
//             nextEl: '.swiper-button-next',
//             prevEl: '.swiper-button-prev',
//             clickable: true,
//           }}
//           modules={[EffectCoverflow, Pagination, Navigation]}
//           className="swiper_container"
//         >
//           <SwiperSlide>
//             <img src={img1} className="w-" alt="slide_image" />
//           </SwiperSlide>
//           <SwiperSlide>
//             <img src={img2} alt="slide_image" />
//           </SwiperSlide>
//           <SwiperSlide>
//             <img src={img3} alt="slide_image" />
//           </SwiperSlide>
//           <SwiperSlide>
//             <img src={img1} alt="slide_image" />
//           </SwiperSlide>
//           <SwiperSlide>
//             <img src={img2} alt="slide_image" />
//           </SwiperSlide>
//           <SwiperSlide>
//             <img src={img3} alt="slide_image" />
//           </SwiperSlide>
          
//           <div className="slider-controler">
//             <div className="swiper-button-prev slider-arrow">
//               <ion-icon name="arrow-back-outline"></ion-icon>
//             </div>
//             <div className="swiper-button-next slider-arrow">
//               <ion-icon name="arrow-forward-outline"></ion-icon>
//             </div>
//             <div className="swiper-pagination"></div>
//           </div>
//         </Swiper>
//       </div>        

        
//     )

// }

// export default Carousel;