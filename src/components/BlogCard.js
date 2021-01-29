import React from "react";
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardTitle,
  MDBCardText,
  MDBCol,
} from "mdbreact";

const BlogCard = ({ blog }) => {
  return (
    <div className="blog-card">
      <MDBCol style={{ maxWidth: "22rem" }}>
        <MDBCard>
          <MDBCardImage
            className="img-fluid"
            src={
              blog.images && blog.images[0]
                ? blog.images[0]
                : "https://mdbootstrap.com/img/Mockups/Lightbox/Thumbnail/img%20(67).jpg"
            }
            waves
          />
          <MDBCardBody>
            <MDBCardTitle>Title: {blog.title}</MDBCardTitle>
            <MDBCardText>Author: {blog.author.name}</MDBCardText>
            <MDBBtn href="#">See more</MDBBtn>
            <MDBCardText>Last Updated: </MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
    </div>
  );
};

export default BlogCard;
