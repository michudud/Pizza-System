import { useState } from "react";
import "./NewsSection.style.css";

const NewsSection = () => {
  const [news, setNews] = useState([
    "item1",
    "item2",
    "item3",
    "item4",
    "item5",
  ]);
  const displayedNewsNumber = 3;

  const handleRight = () => {
    const changedNews = [...news];
    changedNews.push(changedNews.shift());
    setNews(changedNews);
  };
  const handleLeft = () => {
    const changedNews = [...news];
    changedNews.unshift(changedNews.pop());
    setNews(changedNews);
  };

  return (
    <div className="NewsSection">
      <div className="content">
        <div className="description">
          <h1>Latest News</h1>
          <p>Check out what's going on in pizza world</p>
        </div>
        {/* <div className="categories"></div> */}
        <div className="carousel">
          <button className="carousel_button" onClick={handleLeft}>
            {"<"}
          </button>
          {news.map((item, index) => {
            if (index < displayedNewsNumber) {
              return (
                <div className="carousel_item" key={item}>
                  {item}
                </div>
              );
            }
          })}

          <button className="carousel_button" onClick={handleRight}>
            {">"}
          </button>
        </div>
      </div>
    </div>
  );
};
export default NewsSection;
