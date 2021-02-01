import React, { useState } from "react";
import BlogModal from "./BlogModal";
import { MDBBtn, MDBView, MDBMask, MDBIcon, MDBCol, MDBRow } from "mdbreact";
import Moment from "react-moment";

const BlogCard = ({ blog }) => {
  const [modal, setModal] = useState(false);
  const img_url_regex = /(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|gif|png)/g;

  const handleToggle = () => {
    setModal(!modal);
    console.log(modal);
  };

  return (
    <div className="blogCard">
      <BlogModal modal={modal} handleToggle={handleToggle} blogDetails={blog} />
      <MDBRow>
        <MDBCol lg="5">
          <MDBView className="rounded z-depth-2 mb-lg-0 mb-4" hover waves>
            <img
              className="img-fluid"
              src={
                blog.images &&
                blog.images[0] &&
                blog.images[0].match(img_url_regex)
                  ? blog.images[blog.images.length - 1]
                  : "https://mdbootstrap.com/img/Mockups/Lightbox/Thumbnail/img%20(67).jpg"
              }
              alt=""
            />
            <a href="#!">
              <MDBMask overlay="white-slight" />
            </a>
          </MDBView>
        </MDBCol>
        <MDBCol lg="7">
          <div className="green-text">
            <h6 className="font-weight-bold mb-3">
              <MDBIcon icon="pen" className="pr-2" />
              Blog
            </h6>
          </div>
          <h3 className="font-weight-bold mb-3 p-0">
            <strong>{blog.title}</strong>
          </h3>
          <p className="blog-content">
            {blog.content.length > 100
              ? blog.content.substr(0, 100) + "..."
              : blog.content}
          </p>
          <div className="read-more-button">
            <MDBBtn
              color="success"
              size="md"
              className="waves-light "
              onClick={handleToggle}
            >
              Read more
            </MDBBtn>
          </div>

          <div className="blog-card-footer">
            <p>
              <MDBIcon icon="id-badge" className="pr-2" />
              <strong>{blog.author.name}</strong>
            </p>
            <p>
              <MDBIcon icon="calendar" className="pr-2" />
              <Moment fromNow>{blog.createdAt}</Moment>
            </p>
          </div>
        </MDBCol>
      </MDBRow>
    </div>
  );
};

export default BlogCard;
