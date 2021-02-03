import React, { useState, useEffect } from "react";
import BlogCard from "./BlogCard";
import "../css/Blog.css";
import ReactPaginate from "react-paginate";
import { useSelector } from "react-redux";
import LoaderSpinner from "./Loader/LoaderSpinner";
import "../css/Pagination.css";

const BlogCardList = ({ searchTerm, sortOrder, handlePagination }) => {
  const [filterBlogList, setFilterBlogList] = useState([]);
  const blogList = useSelector((state) => state.blogs.blogs);
  const pageCount = useSelector((state) => state.blogs.pageCount);
  const loading = useSelector((state) => state.blogs.loading);
  useEffect(() => {
    setFilterBlogList(
      blogList.filter((x) =>
        x.title.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  }, [searchTerm, blogList]);

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
  }, [sortOrder, blogList]);

  return (
    <>
      <ReactPaginate
        previousLabel={"previous"}
        nextLabel={"next"}
        breakLabel={"..."}
        breakClassName={"break-me"}
        pageCount={pageCount}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={handlePagination}
        containerClassName={"pagination"}
        previousLinkClassName={"pagination__link"}
        nextLinkClassName={"pagination__link"}
        disabledClassName={"pagination__link--disabled"}
        activeClassName={"pagination__link--active"}
      />
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
    </>
  );
};

export default BlogCardList;
