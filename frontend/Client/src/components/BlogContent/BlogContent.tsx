import React, { useState } from "react";
import "./BlogContent.css";
import { Button, Image } from "react-bootstrap";
import { GoDotFill } from "react-icons/go";
import { MdOutlineOpenInNew } from "react-icons/md";
import { blogData } from "@/data/blogDetail";
import img from '../../assets/images/blogContent6.jpg'

const BlogContent = () => {
  // Pagination state for left side
  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 4;
  
  // Get current blogs for left side
  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = blogData.slice(indexOfFirstBlog, indexOfLastBlog);
  
  // Get recent blogs for right side (first 3)
  const recentBlogs = blogData.slice(0, 3);

  // Change page
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <div className="container-fluid" id="BlogContent">
      <div className="container" id="blogContent-heading">
        <div className="blogContent-heading">News & Blogs</div>
        <div className="blogContent-heading2">Our Latest <span>News & Blogs</span></div>
      </div>
      <div className="container BlogContent">
        {/* Left side (Main Content with Pagination) */}
        <div className="blogContent">
          {currentBlogs.map((blog) => (
            <div className="blogContent-item" key={blog.id}>
              <div className="blogContent-img">
                <Image src={blog.img} fluid />
                <div className="blogContent-img-hover">
                  <MdOutlineOpenInNew fontSize="42px" color="yellow" />
                </div>
              </div>

              <div className="blogContent-name">
                {blog.place}
                <div className="blog-date-icon">
                  <GoDotFill color="yellow" fontSize="24px" />
                </div>
                <span>{new Date(blog.date).toLocaleDateString('en-US', { day: 'numeric', month: 'short', year: 'numeric' })}</span>
              </div>

              <div className="blogContent-title">{blog.title}</div>

              <div className="blogContent-desc">{blog.info}</div>

              <div className="blogContent-readMore">
                <Button className="blogContent-readMore-btn">Read More</Button>
              </div>
            </div>
          ))}

          {/* Pagination */}
          <div className="blog-pagination">
            {Array.from({ length: Math.ceil(blogData.length / blogsPerPage) }).map((_, index) => (
              <button
                key={index}
                onClick={() => paginate(index + 1)}
                className={`pagination-btn ${currentPage === index + 1 ? 'active' : ''}`}
              >
                {index + 1}
              </button>
            ))}
          </div>
        </div>

        {/* Right side (Recent Posts) */}
        <div className="recent-blogs">
          <div className="recent-blogs-heading">
            <div className="Yellow-line"></div>
            Recent Post
          </div>
          
          <div className="recent-blog-content">
            {recentBlogs.map((blog) => (
              <div className="recent-blog-item" key={blog.id}>
                <div className="recent-blog-img">
                  <Image src={blog.img} fluid />
                </div>
               
                <div className="recent-blog-info">
                  <div className="recent-blog-heading">{blog.title}</div>
                  <div className="recent-blog-date">
                    {new Date(blog.date).toLocaleDateString('en-US', { day: 'numeric', month: 'short', year: 'numeric' })}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="blog-right-img">
            <Image src={img}  fluid/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogContent;