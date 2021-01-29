import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import BlogsActions from '../redux/actions/blogs.actions';
import BlogCardList from '../components/BlogCardList';
import '../css/Navbar.css';
import { MDBContainer } from 'mdbreact';

const UserHomePage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(BlogsActions.BlogsData());
  }, [dispatch]);
  return (
    <MDBContainer>
      <BlogCardList />
    </MDBContainer>
  );
};

export default UserHomePage;
