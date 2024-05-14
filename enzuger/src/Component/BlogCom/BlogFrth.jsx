import React, { useState } from "react";
import "./BlogFrth.css"; // Import the CSS file for the parent component
import BlogTitle from "../BlogTItle/BlogTitle";
import BlogCate from "../../assets/data/BlogCate.json";

function BlogFrth() {
  const [selectedCategory, setSelectedCategory] = useState('immunity');

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div className="mn-dv-of-blg-frth">
      <div className="hd-tit">
        <BlogTitle title="Explore Articles" />
      </div>

      <div className="sb-dvo-blfrth">
        <div className="df-btn-cntr-kro">
          <button
            onClick={() => handleCategoryClick("immunity")}
            className={`btns-ctr-slt ${selectedCategory === "immunity" ? "active" : ""}`}
          >
            IMMUNITY
          </button>
          <button
            onClick={() => handleCategoryClick("nutrition")}
            className={`btns-ctr-slt ${selectedCategory === "nutrition" ? "active" : ""}`}
          >
            NUTRITION
          </button>
          <button
            onClick={() => handleCategoryClick("omega-3")}
            className={`btns-ctr-slt ${selectedCategory === "omega-3" ? "active" : ""}`}
          >
            OMEGA-3
          </button>
          <button
            onClick={() => handleCategoryClick("overall")}
            className={`btns-ctr-slt ${selectedCategory === "overall" ? "active" : ""}`}
          >
            OVERALL WELLBEING
          </button>
          <button
            onClick={() => handleCategoryClick("vitamins")}
            className={`btns-ctr-slt ${selectedCategory === "vitamins" ? "active" : ""}`}
          >
            VITAMINS & MINERALS
          </button>
        </div>

        <div className="ct-wse-sc-mn-dv">
          <div className="ct-wse-sub-cntr">
            {BlogCate.filter(item => !selectedCategory || item.category === selectedCategory).map((item) => (
              <div className="ctry-ig-wth-cnt" key={item.id}>
                <div className="ig-cntr-frst-ctr">
                  <img src={`/images/${item.img}`} alt="" />
                  <p>{item.lastTime} Min read {item.Date}</p>
                </div>
                <div className="cnt-cntr-scnd-ctr">
                  <h3>{item.title}</h3>
                  <p className="article-single-content-description">{item.content}</p>
                </div>
              </div>
            ))}
            {selectedCategory && BlogCate.filter(item => item.category === selectedCategory).length === 0 && (
              <p className="no-articles-message">Sorry, there are currently no articles available for this category.</p>
            )}
          </div>
          <div className="center-content">
            <button type="button">View more</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogFrth;
