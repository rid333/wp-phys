import axios from 'axios';
import { useEffect, useState } from 'react';

import { Autoplay, Navigation, Pagination, EffectFade } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

const ImageSlider = () => {
    const [images, setImages] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get(
                    "http://localhost:8000/wp-json/wp/v2/slider"
                );
                setImages(res.data);
            } catch (err) {
                console.log(err);
            }
        }
        fetchData();
    }, []);

    const greet = (
        <>
            <div className='font-extrabold text-5xl'>
                Welcome to <br /> Hasanuddin University <br /> Department of Physics
            </div>
            <div className='font-medium text-2xl mt-2 ml-3'>
                Embark on a journey to unveil the true <br /> nature of reality, from the grandest cosmic <br /> scales to the tiniest subatomic particles
            </div>
        </>
    );

    return (
        <>
        <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
            delay: 5000,
            disableOnInteraction: false,
        }}
        pagination={{
            clickable: true,
        }}
        navigation={true}
        effect='fade'
        modules={[Autoplay, Pagination, Navigation, EffectFade]}
        className='h-[560px] w-full m-auto relative'
        >
        {images?.map((image) =>
            <SwiperSlide key={image.ID}>
                <div className='absolute top-0 left-0 w-full h-full bg-black opacity-30'></div>
                <div className='absolute top-1/3 left-24 text-white'>
                    <div>{greet}</div>
                </div>
                <img src={image.acf.images.url} className='h-full w-full'/>
            </SwiperSlide>
        )}
        </Swiper>
        </>
    );
}
 
export default ImageSlider;