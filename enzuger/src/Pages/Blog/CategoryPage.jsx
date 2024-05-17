// import React, { useState, useEffect } from 'react';
// import { useParams, useLocation, useNavigate } from 'react-router-dom';
// import BlogCate from '../../assets/data/BlogCate.json';
// import BlogTitle from '../../Component/BlogTItle/BlogTitle';
// import './CategoryPage.css';

// const ARTICLES_PER_PAGE = 6; // Number of articles per page

// function CategoryPage() {
//   const { category } = useParams();
//   const location = useLocation();
//   const navigate = useNavigate();
//   const [currentPage, setCurrentPage] = useState(1);

//   useEffect(() => {
//     const queryParams = new URLSearchParams(location.search);
//     const page = parseInt(queryParams.get('page')) || 1;
//     setCurrentPage(page);
//   }, [location.search]);

//   const handlePageChange = (newPage) => {
//     navigate(`/${category}?page=${newPage}`);
//   };

//   const filteredArticles = BlogCate.filter(item => item.category === category);
//   const startIndex = (currentPage - 1) * ARTICLES_PER_PAGE;
//   const endIndex = startIndex + ARTICLES_PER_PAGE;
//   const paginatedArticles = filteredArticles.slice(startIndex, endIndex);

//   const truncateText = (text, maxLength) => {
//     if (text.length > maxLength) {
//       return text.substring(0, maxLength) + "...";
//     }
//     return text;
//   };  

//   return (
//     <div className="ct-wse-sc-mn-dv">
//      <h2> {category} </h2>
//       <div className="ct-wse-sub-cntr">
//         {paginatedArticles.length > 0 ? (
//           paginatedArticles.map((item) => (
           
//           ))
//         ) : (
//           <p>No articles available for this category.</p>
//         )}
//       </div>
//       <div className="pagination">
//         <button
//           onClick={() => handlePageChange(currentPage - 1)}
//           disabled={currentPage === 1}
//         >
//           Prev
//         </button>
//         {[...Array(Math.ceil(filteredArticles.length / ARTICLES_PER_PAGE)).keys()].map(page => (
//           <button
//             key={page + 1}
//             onClick={() => handlePageChange(page + 1)}
//             className={currentPage === page + 1 ? 'active' : ''}
//           >
//             {page + 1}
//           </button>
//         ))}
//         <button
//           onClick={() => handlePageChange(currentPage + 1)}
//           disabled={currentPage === Math.ceil(filteredArticles.length / ARTICLES_PER_PAGE)}
//         >
//           Next
//         </button>
//       </div>
//     </div>
//   );
// }

// export default CategoryPage;

import React, { useState, useEffect } from 'react';
import { useParams, useLocation, useNavigate } from 'react-router-dom';
import BlogCate from '../../assets/data/BlogCate.json';
import './CategoryPage.css';

const ARTICLES_PER_PAGE = 6;

function CategoryPage() {
  const { category } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const page = parseInt(queryParams.get('page')) || 1;
    setCurrentPage(page);
  }, [location.search]);
  
  const handlePageChange = (newPage) => {
    navigate(`/blog/category/${category}?page=${newPage}`);
  };

  const filteredArticles = BlogCate.filter(item => item.category === category);
  const startIndex = (currentPage - 1) * ARTICLES_PER_PAGE;
  const endIndex = startIndex + ARTICLES_PER_PAGE;
  const paginatedArticles = filteredArticles.slice(startIndex, endIndex);
  const truncateText = (text, maxLength) => {
    if (text.length > maxLength) {
      return text.substring(0, maxLength) + "...";
    }
    return text;
  };

  return (
    <div className="ct-wse-sc-mn-dv">
      <h2>{category}</h2>
      <div className="ct-wse-sub-cntr">
        {paginatedArticles.length > 0 ? (
          paginatedArticles.map((item) => (
            <div className="ctry-ig-wth-cnt" key={item.id}>
              <div className="ig-cntr-frst-ctr">
                <img src={`/images/${item.img}`} alt={item.title} />
                <p>{item.lastTime} Min read {item.Date}</p>
              </div>
              <div className="cnt-cntr-scnd-ctr">
                <h3>{truncateText(item.title, 50)}</h3>
                <p className="article-single-content-description">{truncateText(item.content, 50)}</p>
              </div>
            </div>
          ))
        ) : (
          <p>No articles available for this category.</p>
        )}
      </div>
      <div className="pagination">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Prev
        </button>
        {[...Array(Math.ceil(filteredArticles.length / ARTICLES_PER_PAGE)).keys()].map(page => (
          <button
            key={page + 1}
            onClick={() => handlePageChange(page + 1)}
            className={currentPage === page + 1 ? 'active' : ''}
          >
            {page + 1}
          </button>
        ))}
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === Math.ceil(filteredArticles.length / ARTICLES_PER_PAGE)}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default CategoryPage;

