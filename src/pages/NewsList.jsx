import axios from "axios";
import React, { useEffect, useState } from "react";

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
        <div>
            {news?.slice(0,10).map((post) => (
                <div key={post.id} className="card lg:card-side bordered">
                    <figure className="w-[1000px] h-full">
                        <img src={post._embedded["wp:featuredmedia"][0].source_url} alt={post.title.rendered} />
                    </figure>
                    <div className="card-body">
                        <h2 dangerouslySetInnerHTML={{ __html:post.title.rendered }} className="card-title"></h2>
                        <p dangerouslySetInnerHTML={{ __html:post.excerpt.rendered }}></p>
                        <div className="card-actions justify-center">
                            <a className="btn glass rounded-lg">Read More</a>
                        </div>
                    </div>
                </div>
            )
            )}
        </div>
    );
}
 
export default NewsList;