import "./NewsSection.style.css";
import { allNews } from "./newsItems";
import { useState } from "react";

const NewsSection = () => {
  const [news, setNews] = useState(allNews);
  const displayedNewsNumber = 4;

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
        <div className="carousel">
          <button className="carousel_button" onClick={handleLeft}>
            {"<"}
          </button>
          {news.map((item, index) => {
            if (index < displayedNewsNumber) {
              return (
                <div className="news" key={item.title}>
                  <img className="news_img" src={item.image} />
                  <h4 className="news_title">{item.title}</h4>
                  <p className="news_description">{item.description}</p>
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
