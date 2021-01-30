import React from 'react';
import {
  MDBCol,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
} from 'mdbreact';

const Sort = ({ handleSort }) => {
  return (
    <MDBCol md='3'>
      <MDBDropdown>
        <MDBDropdownToggle caret color='primary'>
          Sort Blogs
        </MDBDropdownToggle>
        <MDBDropdownMenu basic>
          <MDBDropdownItem onClick={() => handleSort('newest')}>
            Most Recent
          </MDBDropdownItem>
          <MDBDropdownItem onClick={() => handleSort('oldest')}>
            Least Recent
          </MDBDropdownItem>
        </MDBDropdownMenu>
      </MDBDropdown>
    </MDBCol>
  );
};

export default Sort;
