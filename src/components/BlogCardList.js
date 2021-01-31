import React, { useState, useEffect } from "react";
import BlogCard from "./BlogCard";
import "../css/Blog.css";

import { useSelector } from "react-redux";
import LoaderSpinner from "./Loader/LoaderSpinner";

const BlogCardList = ({ searchTerm, sortOrder }) => {
  const [filterBlogList, setFilterBlogList] = useState([]);
  const blogList = useSelector((state) => state.blogs.blogs);
  const loading = useSelector((state) => state.blogs.loading);

  useEffect(() => {
    setFilterBlogList(
      blogList.filter((x) =>
        x.title.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  }, [searchTerm]);

  useEffect(() => {
    if (sortOrder === "newest") {
      setFilterBlogList([
        ...blogList.sort(
          (x, y) => Date.parse(y.createdAt) - Date.parse(x.createdAt)
        ),
      ]);
    } else {
      setFilterBlogList([
        ...blogList.sort(
          (x, y) => Date.parse(x.createdAt) - Date.parse(y.createdAt)
        ),
      ]);
    }
  }, [sortOrder]);

  return (
    <div className="blogCardList">
      {!loading ? (
        filterBlogList.length === 0 ? (
          blogList.map((blog, index) => <BlogCard blog={blog} key={index} />)
        ) : (
          filterBlogList.map((blog, index) => (
            <BlogCard blog={blog} key={index} />
          ))
        )
      ) : (
        <LoaderSpinner />
      )}
    </div>
  );
};

export default BlogCardList;
