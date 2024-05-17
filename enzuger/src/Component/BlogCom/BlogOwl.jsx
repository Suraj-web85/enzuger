import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "./BlogOwl.css";
import blogs from "../../assets/data/BlogThrDa.json";
import BlogTitle from "../BlogTItle/BlogTitle";

function BlogOwl() {
  return (
    <>
      <BlogTitle title="More Articles" />
      <OwlCarousel
        className="owl-theme"
        responsive={{
          1200: {
            items: 1,
          },
        }}
        autoplay={true}
        autoplayTimeout={3000}
        autoplayHoverPause={true}
        loop={true}
        autoHeight={true}
        margin={0} /* Ensure no margin between items */
        stagePadding={0} /* Remove padding around items */
      >
        {blogs.map((blog) => (
          <div className="blg-thrd-sb-dv" key={blog.id}>
            <div className="cn-cnrf">
              <div className="gbsbfr-ctr">
                <h3>{blog.title}</h3>
                <p>{blog.content}</p>
              </div>
              <div className="mg-cnr">
                <img src={`/images/${blog.img}`} alt={blog.title} />
              </div>
            </div>
          </div>
        ))}
      </OwlCarousel>
    </>
  );
}

export default BlogOwl;
