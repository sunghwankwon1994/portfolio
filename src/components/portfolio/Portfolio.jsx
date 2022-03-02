import { useEffect, useState } from "react";
import PortfolioList from "../portfolioList/PortfolioList";
import "./portfolio.scss";
import { featuredPortfolio, reactPortfolio, mobilePortfolio } from "../../data";

export default function Portfolio() {
  const [selected, setSelected] = useState("featured");
  const [data, setData] = useState([]);
  const list = [
    {
      id: "javascript",
      title: "JavaScript",
    },
    {
      id: "react",
      title: "React App ",
    },
    {
      id: "mobile",
      title: "Mobile App",
    },
  ];

  useEffect(() => {
    switch (selected) {
      case "javaScript":
        setData(featuredPortfolio);
        break;
      case "react":
        setData(reactPortfolio);
        break;
      case "mobile":
        setData(mobilePortfolio);
        break;
      default:
        setData(featuredPortfolio);
    }
  }, [selected]);

  return (
    <div className="portfolio" id="portfolio">
      <h1>Portfolio</h1>
      <ul>
        {list.map((item) => (
          <PortfolioList
            key={item.id}
            title={item.title}
            active={selected === item.id}
            setSelected={setSelected}
            id={item.id}
          />
        ))}
      </ul>
      <div className="container">
        {data.map((d) => (
          <a href={d.site} target="_blank" rel="noreferrer" key={d.id}>
            <div className="item">
              <img src={d.img} alt="" />

              <h3>{d.title}</h3>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
