import React, { useEffect } from 'react';
import BlogCard from './BlogCard';

import { useDispatch, useSelector } from 'react-redux';
import blogsActions from '../redux/actions/blogs.actions';

const BlogCardList = () => {
  const blogList = useSelector((state) => state.blogs.blogs);
  const loading = useSelector((state) => state.blogs.loading);
  // const dispatch = useDispatch();

  console.log('blog list', blogList);

  // useEffect(() => {
  //   dispatch(blogsActions.getBlogsData());
  // }, [dispatch]);

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
