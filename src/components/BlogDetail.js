import React from 'react';
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBMask,
  MDBView,
  MDBBtn,
  MDBIcon,
} from 'mdbreact';
import Moment from 'react-moment';
import Icons from './Icons';

const BlogDetail = ({ blogDetails }) => {
  const img_url_regex = /(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|gif|png)/g;

  return (
    <MDBCard className='my-5 px-5 pb-5 blogDetail'>
      <MDBCardBody>
        <MDBRow>
          <MDBCol md='12'>
            <MDBCard reverse>
              <MDBView hover cascade waves>
                <img
                  src={
                    blogDetails.images &&
                    blogDetails.images[0] &&
                    blogDetails.images[0].match(img_url_regex)
                      ? blogDetails.images[blogDetails.images.length - 1]
                      : 'https://mdbootstrap.com/img/Mockups/Lightbox/Thumbnail/img%20(67).jpg'
                  }
                  alt=''
                  className='img-fluid'
                />
                <MDBMask overlay='white-slight' className='waves-light' />
              </MDBView>
              <MDBCardBody cascade className='text-center'>
                <h2 className='font-weight-bold'>
                  <a href='#!'>{blogDetails.title}</a>
                </h2>
                <p>
                  Written by
                  <a href='#!'>
                    <strong> {blogDetails.author.name} - </strong>
                  </a>
                  <Moment fromNow>{blogDetails.createdAt}</Moment>
                </p>
                <Icons blogDetails={blogDetails} />
                <MDBBtn>
                  <MDBIcon far icon='comments' />
                </MDBBtn>
                <span className='counter'>{blogDetails.reviewCount}</span>
              </MDBCardBody>
            </MDBCard>
            <MDBContainer className='mt-5'>{blogDetails.content}</MDBContainer>
          </MDBCol>
        </MDBRow>
      </MDBCardBody>
    </MDBCard>
  );
};

export default BlogDetail;
