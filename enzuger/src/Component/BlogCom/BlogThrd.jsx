import React, { useState } from "react";
import "./BlogThrd.css";
import blogs from '../../assets/data/BlogThrDa.json'
import BlogTitle from "../BlogTItle/BlogTitle";

function BlogThrd() {
  const [isFlipped, setIsFlipped] = useState(true);

  return (
    <div className="blg-thrd-mn-ctr">
      {blogs.map((blog, index) => (
        <div key={blog.id} className="blg-thrd-sb-dv">
          {index === 0 && <BlogTitle title={blog.mainHeading} />}
          <div className={`gd-cnt ${blog.id % 2 === 0 ? "flipped" : ""}`}>
            <div className="gbsbfr-ctr">
              <h3>{blog.title}</h3>
              <p>{blog.content}</p>
              <button type="button">Read more</button>
            </div>
            <div className="img-cntr">
              <img src={`/images/${blog.img}`} alt={blog.title} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default BlogThrd;
