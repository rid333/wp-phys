import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const ResearchDetails = () => {
    const [posts, setPosts] = useState([]);
    const { slug } = useParams();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get(
                    `http://localhost:8000/wp-json/wp/v2/research?slug=${slug}&_embed`
                );
                setPosts(res.data);
            } catch (err) {
                console.log(err);
            }
        };
        fetchData();
    }, [slug]);

    return (
        <>
        <div className="relative">
            <div className="absolute bg-info h-72 w-full top-0 -z-10"></div>
        </div>
        <div className="max-w-6xl px-20 py-20 bg-white m-auto text-lg text-black mt-28 rounded-md">
            {posts.map(post => (
                <div key={post.id} className="flex flex-col items-center gap-y-8 leading-9">
                    <h1 className="text-5xl font-extrabold mb-10">{post.title.rendered}</h1>
                    {post._embedded && post._embedded["wp:featuredmedia"] && (
                    <figure className="w-full">
                        <img
                        src={post._embedded["wp:featuredmedia"][0].source_url}
                        className="m-auto"
                        />
                        <figcaption className="text-sm text-center italic">
                        {post.title.rendered}
                        </figcaption>
                    </figure>
                    )}
                    <p className="text-justify" dangerouslySetInnerHTML={{ __html: post.acf.text }}></p>
                    <p className="flex justify-center gap-x-2">
                    {Object.keys(post.acf.gambar).map((key, index) => (
                        post.acf.gambar[key] ? (
                        <img key={index} src={post.acf.gambar[key]} alt={post.acf.gambar[key].alt} className="w-1/2" />
                        ) : null
                    ))}
                    </p>
                    <div tabIndex={0} className="p-1 rounded-md collapse collapse-arrow bg-secondary text-white">
                        <input type="checkbox" /> 
                        <div className="collapse-title text-xl font-semibold">
                            Some of the thesis titles for students of this expertise group are:
                        </div>
                        <div className="collapse-content px-10"> 
                            <p className="text-justify py-5" dangerouslySetInnerHTML={{ __html: post.acf.thesis_examples }}></p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
        </>
    );
}

export default ResearchDetails;
