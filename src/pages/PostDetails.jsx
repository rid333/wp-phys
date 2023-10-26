import { useState, useEffect } from "react";
import axios from "axios";
import SideBar from "../components/SideBar";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";


const PostDetails = () => {
    const [newsDetails, setNewsDetails] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get(
                    "http://localhost:8000/wp-json/wp/v2/posts/"+ id + "?_embed"
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
        <div className="bg-gray-200">
            <div className="flex max-w-7xl m-auto py-10 px-10 gap-x-8 bg-white">
                <div className="w-2/3 sm:w-full">
                    <title className="flex flex-col gap-y-2 mb-5">
                        <div className="font-semibold breadcrumbs">
                            <ul>
                                <li><Link to='/'>Home</Link></li> 
                                <li><a>News</a></li>
                            </ul>
                        </div>
                        <h1 dangerouslySetInnerHTML={{ __html: newsDetails.title?.rendered }} className="text-4xl font-bold"></h1>
                        <div className="text-sm font-light">
                            <p>By <span className="font-bold">fisikaunhas</span></p>
                            <p>{newsDetails.date?.slice(0,10)}</p>
                        </div>
                    </title>
                    {newsDetails._embedded && newsDetails._embedded["wp:featuredmedia"] && (
                    <figure className="mb-5">
                        <img
                        src={newsDetails._embedded["wp:featuredmedia"][0].source_url}
                        className="m-auto"
                        />
                        <figcaption className="text-sm text-center italic">
                        Image caption
                        </figcaption>
                    </figure>
                    )}
                    <article dangerouslySetInnerHTML={{ __html: newsDetails.content?.rendered}} className="flex flex-col gap-y-4 text-lg text-justify"></article>
                </div>
                <div className="divider divider-horizontal"></div>
                <div className="mt-14 lg:block sm:hidden mx-auto">
                    <SideBar />
                </div>      
            </div>
        </div>
    );
}
 
export default PostDetails;
