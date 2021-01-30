import React from 'react';
import BlogCard from './BlogCard';
import '../css/Blog.css';

import { useSelector } from 'react-redux';

const BlogCardList = () => {
  const blogList = useSelector((state) => state.blogs.blogs);
  const loading = useSelector((state) => state.blogs.loading);

  console.log('blog list', blogList);

  return (
    <div className='blogCardList'>
      {!loading ? (
        blogList.map((blog, index) => <BlogCard blog={blog} key={index} />)
      ) : (
        <h1>Loading</h1>
      )}
    </div>
  );
};

export default BlogCardList;
