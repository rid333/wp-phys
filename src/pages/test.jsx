import React, { useState, useEffect } from "react";
import axios from "axios";

const PostDetails = () => {
  const [newsDetails, setNewsDetails] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          "http://localhost:8000/wp-json/wp/v2/posts/14795"
        );
        setNewsDetails(res.data);
        console.log(res.data);
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
                <li>
                  <a>Home</a>
                </li>
                <li>
                  <a>News</a>
                </li>
              </ul>
            </div>
            <h1
              dangerouslySetInnerHTML={{ __html: newsDetails.title?.rendered }}
              className="text-4xl font-bold"
            ></h1>
            <div className="text-sm font-light">
              <p>
                By <span className="font-bold">fisikaunhas</span>
              </p>
            </div>
          </title>
        </div>
      </div>
    </>
  );
};

export default PostDetails;