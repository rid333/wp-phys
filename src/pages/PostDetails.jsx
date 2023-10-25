import { useState, useEffect } from "react";
import axios from "axios";
import SideBar from "../components/SideBar";
import elinshome from "../assets/home/elins-home.jpg";


const PostDetails = () => {
    const [newsDetails, setNewsDetails] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get(
                    "http://localhost:8000/wp-json/wp/v2/posts/14334"
                );
                setNewsDetails(res.data);
                console.log(res.data)
            } catch (err) {
                console.log(err);
            }
        };
        fetchData();
    }, []);

    return (
        <>
        <div className="flex max-w-7xl m-auto py-10 gap-x-8 px-10 mb-20 bg-gray-50">
            <div className="flex flex-col w-2/3 sm:w-full items-center gap-y-10">
                <title className="flex flex-col gap-y-2">
                    <div className="font-semibold breadcrumbs">
                        <ul>
                            <li><a>Home</a></li> 
                            <li><a>News</a></li>
                        </ul>
                    </div>
                    <h1 dangerouslySetInnerHTML={{ __html: newsDetails.title?.rendered }} className="text-4xl font-bold"></h1>
                    <div className="text-sm font-light">
                        <p>By <span className="font-bold">fisikaunhas</span></p>
                        <p>Mon October 23, 2023 </p>
                    </div>
                </title>
                <figure>
                    <img src={elinshome} alt="" className=" w-[500px]" />
                    <figcaption class="mt-2 text-sm text-center italic">Image caption</figcaption>
                </figure>
                <article dangerouslySetInnerHTML={{ __html: newsDetails.content?.rendered}} className="flex flex-col text-xl gap-y-5 text-justify"></article>
            </div>
            <div className="divider divider-horizontal"></div>
            <div className="mt-14 lg:block sm:hidden mx-auto">
                <SideBar />
            </div>      
        </div>
        </>
    );
}
 
export default PostDetails;
