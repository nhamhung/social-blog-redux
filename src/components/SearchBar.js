import React from 'react';
import { MDBCol } from 'mdbreact';

const SearchBar = ({ handleSearch }) => {
  return (
    <MDBCol md='9'>
      <input
        className='form-control searchBar'
        type='text'
        placeholder='Search'
        aria-label='Search'
        onChange={(e) => handleSearch(e)}
      />
    </MDBCol>
  );
};

export default SearchBar;
