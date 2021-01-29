import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import BlogsActions from '../redux/actions/blogs.actions';
import BlogCardList from '../components/BlogCardList';
import '../css/Navbar.css';

const UserHomePage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(BlogsActions.BlogsData());
  }, [dispatch]);
  return (
    <div className='userHomePage'>
      <BlogCardList />
    </div>
  );
};

export default UserHomePage;
