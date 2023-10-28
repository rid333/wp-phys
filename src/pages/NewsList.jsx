import axios from "axios";
import React, { useEffect, useState } from "react";
import SideBar from "../components/SideBar";
import { Link } from "react-router-dom";
import ReactPaginate from "react-paginate";

const NewsList = () => {
    const [news, setNews] = useState([]);
    const [page, setPage] = useState(1);
    const [numberOfPages, setnumberOfPages] = useState(1);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get(
                    "http://localhost:8000/wp-json/wp/v2/posts?_embed", {
                        params: {
                            page: page,
                        },
                    }
                );
                setnumberOfPages(res.headers["x-wp-totalpages"]);
                setNews(res.data);
            } catch (err) {
                console.log(err);
            }
        };
        fetchData();
    }, [page]);

    const handlePageClick = (data) => {
        setPage(data.selected + 1);
    };

    return (
        <div className="bg-gray-100">
            <div className="flex max-w-7xl m-auto py-10 px-10 gap-x-5">
                <div className="w-24 sm:w-full bg-white p-10 rounded-lg">
                    <div className="font-semibold breadcrumbs">
                        <ul>
                            <li><Link to='/'>Home</Link></li> 
                            <li><a>News</a></li>
                        </ul>
                    </div>
                    <section class="mb-16 text-center md:text-left">
                        <h2 class="mb-12 text-center text-3xl font-bold">News</h2>
                        {news?.map((post) => (
                        <div key={post.id} className="mb-10 p-5 shadow-md">
                            <div class="mb-6 flex flex-wrap">
                                <div class="mb-6 w-full shrink-0 grow-0 basis-auto px-3 md:mb-0 md:w-3/12">
                                    <div class="relative mb-6 overflow-hidden rounded-md bg-no-repeat shadow-lg">
                                    {post._embedded["wp:featuredmedia"]?.[0]?.source_url ? (
                                        <img src={post._embedded["wp:featuredmedia"][0].source_url} alt={post.title.rendered} className="w-full"/>
                                    ) : (
                                        <div className="bg-gray-300 w-full h-20"></div>
                                    )}
                                    <a href="#!">
                                        <div
                                        class="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 bg-[hsla(0,0%,98.4%,.15)]">
                                        </div>
                                    </a>
                                    </div>
                                </div>
                                <Link to={`/news/${post.id}`} class="mb-3 mr-auto w-full shrink-0 grow-0 basis-auto px-3 md:mb-0 md:w-9/12 xl:w-7/12">
                                    <h5 dangerouslySetInnerHTML={{ __html:post.title.rendered }} className="mb-3 text-lg font-bold"></h5>
                                    <p class="mb-6 text-neutra">
                                    <small>Published {post.date?.slice(0,10)} by <a href="#!">fisikaunhas</a></small>
                                    </p>
                                    <p dangerouslySetInnerHTML={{ __html:post.excerpt.rendered.slice(0,200) }} class="text-neutral">
                                    </p>
                                </Link>
                            </div>
                        </div>
                        ))}
                    </section>
                    <ReactPaginate
                        previousClassName={"flex items-center justify-center px-4 h-9 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700"}
                        previousLabel={
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3" stroke="currentColor" className="w-5 h-5">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                            </svg>}
                        nextClassName={"flex items-center justify-center px-4 h-9 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700"}
                        nextLabel={
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="3" stroke="currentColor" className="w-5 h-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                            </svg>}
                        breakLabel={"..."}
                        breakClassName={"px-4 h-9 font-semibold text-lg text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700"}
                        pageCount={numberOfPages}
                        activeLinkClassName={"bg-gray-700 text-white"}
                        pageRangeDisplayed={1}
                        onPageChange={handlePageClick}
                        containerClassName={"mb-10 flex justify-center -space-x-px h-8 text-sm"}
                        pageLinkClassName={"flex items-center justify-center px-4 h-9 font-semibold text-normal text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700"}
                    />
                </div>
                <div className="divider divider-horizontal"></div>
                <div className="lg:block md:hidden sm:hidden mx-auto bg-white p-10 rounded-lg h-full">
                    <SideBar />
                </div>
            </div>
        </div>
    );
}
 
export default NewsList;