import { useState, useEffect } from 'react';
import axios from 'axios';

import ImageSlider from '../components/ImageSlider';
import {motion} from 'framer-motion';
import elinshome from '../assets/home/elins-home.jpg';
import teorihome from '../assets/home/teori-home.jpg';
import materialhome from '../assets/home/material-home.jpg';
import optikhome from '../assets/home/optik-home.jpg';
import Schedule from '../components/Schedule';

import { Autoplay, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Home = () => {

    const [news, setNews] = useState([]);
    const [events, setEvents] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const [res1, res2] = await axios.all([
                    axios.get("http://localhost:8000/wp-json/wp/v2/posts?_embed"),
                    axios.get("http://localhost:8000/wp-json/wp/v2/schedules"),
                ]);
                setNews(res1.data);
                setEvents(res2.data);
            } catch (err) {
                console.log(err);
            }
        }
        fetchData();
    }, []);

    return (
        <>
        <ImageSlider />
        
        <div className="flex flex-col justify-center items-center h-[320px] text-white bg-[#D90404] w-full">
            <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 500, damping: 20 }}
            >
                <a href="/" className="flex justify-center items-center mr-96 h-16 w-[720px] text-3xl font-extrabold bg-[#027333]">
                    Undergraduate Programs
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-9 h-9 ml-9">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                    </svg>
                </a>
            </motion.div>
            <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 500, damping: 20 }}
            >
                <a href="/" className="flex justify-center items-center ml-96 h-16 w-[720px] text-3xl font-extrabold bg-[#F2CD5C]">
                    Graduate Programs
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-9 h-9 ml-9">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                    </svg>
                </a>
            </motion.div>
        </div>
        
        {/* Research Areas gap-y-10*/}
        <div className='flex flex-col max-w-7xl m-auto mt-16 text-white'>
            <div className='flex flex-col gap-y-2 mb-10 text-neutral'>
                <h1 className='text-center font-extrabold text-4xl'>Research Areas</h1>
                <hr className="m-auto border-4 border-[#027333] w-1/12"/>
            </div>
            <div className="rounded-none card lg:card-side bg-secondary">
                <figure><img src={teorihome} alt="Teori"/></figure>
                <div className="card-body flex-col items-center justify-center gap-y-10">
                    <h2 className="card-title text-3xl font-extrabold">Theoretical and Computational Physics</h2>
                    <p className='text-xl'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In lobortis sollicitudin convallis. Aliquam eget tincidunt turpis. Donec condimentum ut ipsum a commodo. Integer pulvinar ornare orci, eu venenatis est pharetra at. Quisque quis elit at massa imperdiet facilisis..</p>
                    <button className="btn w-2/3 shadow-xl rounded-none text-secondary">Learn More</button>
                </div>
            </div>
            <div className="rounded-none card lg:card-side bg-primary">
                <div className="card-body flex-col items-center justify-center gap-y-10">
                    <h2 className="card-title text-3xl font-extrabold">Electronics and Instrumentation</h2>
                    <p className='text-xl'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In lobortis sollicitudin convallis. Aliquam eget tincidunt turpis. Donec condimentum ut ipsum a commodo. Integer pulvinar ornare orci, eu venenatis est pharetra at. Quisque quis elit at massa imperdiet facilisis..</p>
                    <button className="btn w-2/3 shadow-xl rounded-none text-primary">Learn More</button>
                </div>
                <figure><img src={elinshome} alt="Elins"/></figure>
            </div>
            <div className="rounded-none card lg:card-side bg-accent">
                <figure><img src={materialhome} alt="Material"/></figure>
                <div className="card-body flex-col items-center justify-center gap-y-10">
                    <h2 className="card-title text-3xl font-extrabold">Materials and Energy</h2>
                    <p className='text-xl'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In lobortis sollicitudin convallis. Aliquam eget tincidunt turpis. Donec condimentum ut ipsum a commodo. Integer pulvinar ornare orci, eu venenatis est pharetra at. Quisque quis elit at massa imperdiet facilisis..</p>
                    <button className="btn w-2/3 shadow-xl rounded-none text-accent">Learn More</button>
                </div>
            </div>
            <div className="rounded-none card lg:card-side bg-error">
                <div className="card-body flex-col items-center justify-center gap-y-10">
                    <h2 className="card-title text-3xl font-extrabold">Optics and Spectroscopy</h2>
                    <p className='text-xl'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In lobortis sollicitudin convallis. Aliquam eget tincidunt turpis. Donec condimentum ut ipsum a commodo. Integer pulvinar ornare orci, eu venenatis est pharetra at. Quisque quis elit at massa imperdiet facilisis..</p>
                    <button className="btn w-2/3 shadow-xl rounded-none text-error">Learn More</button>
                </div>
                <figure><img src={optikhome} alt="Optik"/></figure>
            </div>
        </div>

        {/* Recent News */}
        <div className='flex flex-col m-auto mt-16 text-white gap-y-10 max-w-7xl'>
            <div className='flex flex-col gap-y-2 text-neutral'>
                <h1 className='text-center font-extrabold text-4xl'>Recent News</h1>
                <hr className="m-auto border-4 border-[#027333] w-1/12"/>
            </div>
            <div>
                <Swiper
                spaceBetween={60}
                centeredSlides={false}
                slidesPerView={3}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                navigation={true}
                modules={[Navigation, Autoplay]}
                >  
                {news?.slice(0, 5).map((news) =>
                    <SwiperSlide key={news.id}>
                    <div class="max-w-sm shadow-xl p-0">
                        <a href={news.link}>
                            <img src={news._embedded['wp:featuredmedia']['0'].source_url} className='h-60 mx-auto' alt="" />
                        </a>
                        <div class="p-8">
                            <a href={news.link}>
                                <h5 dangerouslySetInnerHTML={{ __html: news.title.rendered }} class="mb-2 text-2xl font-bold tracking-tight text-neutral"></h5>
                            </a>
                            <p dangerouslySetInnerHTML={{ __html: news.excerpt.rendered.slice(0, 100) }} class="mb-3 font-normal text-neutral"></p>
                            <a href={news.link} class="inline-flex btn btn-secondary btn-sm rounded-none items-center text-sm font-medium text-center text-white">
                                Read more
                                <svg class="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                                </svg>
                            </a>
                        </div>
                    </div>
                    </SwiperSlide>
                )}
                </Swiper>
            </div>

            <button className='btn btn-secondary w-1/5 m-auto rounded-none text-xl font-bold'>More News</button>
        </div>

        {/* Schedule */}
        <Schedule events={events}/>
        </>

        
    );
}
 
export default Home;