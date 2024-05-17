import React from "react";
import { Link } from "react-router-dom";
import "./BlogScnd.css";

function BlogScnd({ selectedCategory }) {
  return (
    <div className="mn-blg-cn-scnd">
      <div className="sb-blg">
        <div className="br-tp">
          <Link to={`/blog/category/immunity`}>
            <div className="rn-sc-dj">
              <img src="/images/immunity.jpg" alt="" />
              <h3>Immunity</h3>
            </div>
          </Link>
        </div>
        <div className="br-tp">
          <Link to={`/blog/category/nutrition`}>
            <div className="rn-sc-dj">
              <img src="/images/nutri.jpg" alt="" />
              <h3>Nutrition</h3>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default BlogScnd;
