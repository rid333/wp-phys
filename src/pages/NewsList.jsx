import axios from "axios";
import React, { useEffect, useState } from "react";
import SideBar from "../components/SideBar";
import { Link } from "react-router-dom";

const NewsList = () => {
    const [news, setNews] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get(
                    "http://localhost:8000/wp-json/wp/v2/posts?_embed"
                );
                setNews(res.data);
            } catch (err) {
                console.log(err);
            }
        };
        fetchData();
    }, []);

    return (
        <div className="bg-gray-200">
            <div className="flex max-w-7xl m-auto py-10 px-10 bg-white">
                <div className="w-24 sm:w-full">
                    <div className="font-semibold breadcrumbs">
                        <ul>
                            <li><Link to='/'>Home</Link></li> 
                            <li><a>News</a></li>
                        </ul>
                    </div>
                    <section class="mb-32 text-center md:text-left">
                    <h2 class="mb-12 text-center text-3xl font-bold">News</h2>
                    {news?.slice(0,10).map((post) => (
                    <div key={post.id} className="mb-10 p-8 shadow-md">
                        <div class="mb-6 flex flex-wrap">
                            <div class="mb-6 w-full shrink-0 grow-0 basis-auto px-3 md:mb-0 md:w-3/12">
                                <div class="relative mb-6 overflow-hidden rounded-md bg-no-repeat shadow-lg"
                                data-te-ripple-init data-te-ripple-color="light">
                                <img src={post._embedded["wp:featuredmedia"][0].source_url} alt={post.title.rendered} class="w-full"/>
                                <a href="#!">
                                    <div
                                    class="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 bg-[hsla(0,0%,98.4%,.15)]">
                                    </div>
                                </a>
                                </div>
                            </div>
                            <div class="mb-3 mr-auto w-full shrink-0 grow-0 basis-auto px-3 md:mb-0 md:w-9/12 xl:w-7/12">
                                <h5 dangerouslySetInnerHTML={{ __html:post.title.rendered }} className="mb-3 text-lg font-bold"></h5>
                                <p class="mb-6 text-neutra">
                                <small>Published 13.01.2022 by
                                    <a href="#!">fisikaunhas</a></small>
                                </p>
                                <p dangerouslySetInnerHTML={{ __html:post.excerpt.rendered.slice(0,200) }} class="text-neutral">
                                </p>
                            </div>
                        </div>
                    </div>
                    ))}
                    </section>
                </div>
                <div className="divider divider-horizontal"></div>
                <div className="mt-14 lg:block sm:hidden mx-auto">
                    <SideBar />
                </div>
            </div>
        </div>
    );
}
 
export default NewsList;