import React, { useState } from 'react';
import BlogModal from './BlogModal';
import { MDBBtn, MDBView, MDBMask, MDBCol, MDBRow } from 'mdbreact';
import Moment from 'react-moment';

const BlogCard = ({ blog }) => {
  const [modal, setModal] = useState(false);
  const img_url_regex = /(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|gif|png)/g;

  const handleToggle = () => {
    setModal(!modal);
  };

  return (
    <MDBRow className='blogCard'>
      <BlogModal modal={modal} handleToggle={handleToggle} blogDetails={blog} />
      <MDBCol lg='5' className='blogImg'>
        <MDBView className='rounded z-depth-2 mb-lg-0 mb-4' hover waves>
          <img
            className='img-fluid'
            src={
              blog.images &&
              blog.images[0] &&
              blog.images[0].match(img_url_regex)
                ? blog.images[blog.images.length - 1]
                : 'https://mdbootstrap.com/img/Mockups/Lightbox/Thumbnail/img%20(67).jpg'
            }
            alt=''
          />
          <a href='#!'>
            <MDBMask overlay='white-slight' />
          </a>
        </MDBView>
      </MDBCol>
      <MDBCol lg='7' className='blogCardText'>
        <h3 className='font-weight-bold mb-3 p-0'>
          <strong>{blog.title}</strong>
        </h3>
        <div className='blogContent'>{blog.content}</div>
        <p>
          by
          <a href='#!'>
            <strong> {blog.author.name} - </strong>
          </a>
          <Moment fromNow>{blog.createdAt}</Moment>
        </p>
        <MDBBtn
          color='success'
          size='md'
          className='waves-light '
          onClick={handleToggle}
        >
          Read more
        </MDBBtn>
      </MDBCol>
    </MDBRow>
  );
};

export default BlogCard;
