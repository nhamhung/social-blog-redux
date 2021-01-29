import React, { useState } from 'react';
import BlogModal from './BlogModal';
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardTitle,
  MDBCardText,
  MDBView,
  MDBMask,
  MDBIcon,
  MDBCol,
  MDBRow,
} from 'mdbreact';

const BlogCard = ({ blog }) => {
  const [modal, setModal] = useState(false);
  const img_url_regex = /(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|gif|png)/g;

  const handleToggle = () => {
    setModal(!modal);
  };

  return (
    <div className='blogCard' onClick={handleToggle}>
      <BlogModal modal={modal} handleToggle={handleToggle} blogDetails={blog} />
      {/* <MDBCol style={{ maxWidth: '22rem' }}> */}
      {/* <MDBCard>
          <MDBCardImage
            className='img-fluid'
            src={
              blog.images &&
              blog.images[0] &&
              blog.images[0].match(img_url_regex)
                ? blog.images[blog.images.length - 1]
                : 'https://mdbootstrap.com/img/Mockups/Lightbox/Thumbnail/img%20(67).jpg'
            }
            waves
          />
          <MDBCardBody>
            <MDBCardTitle>Title: {blog.title}</MDBCardTitle>
            <MDBCardText>Author: {blog.author.name}</MDBCardText>
            <MDBBtn href='#'>See more</MDBBtn>
            <MDBCardText>Last Updated: </MDBCardText>
          </MDBCardBody>
        </MDBCard> */}
      <MDBRow>
        <MDBCol lg='5'>
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
        <MDBCol lg='7'>
          <a href='#!' className='green-text'>
            <h6 className='font-weight-bold mb-3'>
              <MDBIcon icon='utensils' className='pr-2' />
              Blog
            </h6>
          </a>
          <h3 className='font-weight-bold mb-3 p-0'>
            <strong>{blog.title}</strong>
          </h3>
          <p>
            Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil
            impedit quo minus id quod maxime placeat facere possimus, omnis
            voluptas assumenda est, omnis dolor repellendus et aut officiis
            debitis.
          </p>
          <p>
            by
            <a href='#!'>
              <strong>{blog.author.name}</strong>
            </a>
            , 19/08/2018
          </p>
          <MDBBtn color='success' size='md' className='waves-light '>
            Read more
          </MDBBtn>
        </MDBCol>
      </MDBRow>

      {/* </MDBCol> */}
    </div>
  );
};

export default BlogCard;
