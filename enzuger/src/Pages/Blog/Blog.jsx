import React from "react";
import "./Blog.css";
import BlogFrst from "../../Component/BlogCom/BlogFrst";
import BlogScnd from "../../Component/BlogCom/BlogScnd";
import BlogThrd from "../../Component/BlogCom/BlogThrd";
import BlogFrth from "../../Component/BlogCom/BlogFrth";


function Blog() {
  return (
    <>
      <div className="mn-bg-cn-trsm">
        <BlogFrst />
        <BlogScnd />  
        <BlogThrd />
        <BlogFrth />
      </div>
    </>
  );
}

export default Blog;
