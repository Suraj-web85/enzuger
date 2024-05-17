import React, { useState } from "react";
import "./BlogFrst.css";
import { GoDotFill } from "react-icons/go";
import BlogTopSec from "../../assets/data/BlogPgTp.json";

function BlogFrst() {
  const [hoveredIndex, setHoveredIndex] = useState(0);

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(0);
  };

  return (
    <>
      <div className="brd-rd">
        {BlogTopSec.map((item, index) => {
          const bgImg = {
            background: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/images/${item.img}') no-repeat center / cover`,
          };

          const flexStyle =
            index === hoveredIndex ? { flex: 1.6 } : { flex: 1 };
          const contentVisible = index === hoveredIndex ? "visible" : "hidden";
          const opacity = index === hoveredIndex ? 1 : 0;

          const truncatedHeading =
            item.heading.length > 25
              ? item.heading.substring(0, 25) + "..."
              : item.heading;

          return (
            <div
              className="fs-blgt sm-bg-tp"
              style={{ ...bgImg, ...flexStyle }}
              key={item.id}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
            >
              <div className="sb-fs-conte-pr">
                <div
                  className="rnd-dk-rha-hu"
                  style={{
                    visibility: contentVisible,
                    opacity: opacity,
                    transition: "opacity 0.5s ease",
                  }}
                >
                  <h3 className="hd-wr">{item.heading}</h3>
                  <p className="pg-sm-cnt ltr-gps df">{item.content}</p>
                  <div className="pg-sm-cnt">
                    <span>{item.category}</span>
                    <GoDotFill />
                    <span>{item.timePeriod} Min Read</span>
                    <GoDotFill /> 
                    <span>
                      {item.Month} {item.Date}, {item.Year}
                    </span>
                  </div>
                  <button type="button" className="rd-mre-bn-blow">
                    Read more
                  </button>
                </div>
                {index !== hoveredIndex && (
                  <h3 className="hd-wr sht">{truncatedHeading}</h3>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default BlogFrst;
