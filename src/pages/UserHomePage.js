import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import BlogsActions from '../redux/actions/blogs.actions';
import BlogCardList from '../components/BlogCardList';
import SearchBar from '../components/SearchBar';
import Sort from '../components/Sort';
import { MDBRow } from 'mdbreact';
import FriendsButton from '../components/FriendsButton';
import '../css/Navbar.css';

const UserHomePage = () => {
  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState('');
  const [sortOrder, setSortOrder] = useState('newest');

  useEffect(() => {
    dispatch(BlogsActions.BlogsData());
  }, [dispatch]);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSort = (order) => {
    setSortOrder(order);
  };

  return (
    <div className='userHomePage'>
      <MDBRow>
        <SearchBar handleSearch={handleSearch} />
        <Sort handleSort={handleSort} />
      </MDBRow>
      <BlogCardList searchTerm={searchTerm} sortOrder={sortOrder} />
      <FriendsButton />
    </div>
  );
};

export default UserHomePage;
