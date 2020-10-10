import React from 'react';
import Slider from 'react-slick';
import useWindowSize from '@react-hook/window-size';
import StyledPortfolio from './styled';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const bestProjects = [
  {
    "name": "Big Game Survey",
    "img": "img/BGS.png",
    "description": "Website for collecting data about game preferences",
    "techs": ["Java", "Spring", "JS", "React", "React Native"]
  },
  {
    "name": "Room - Frontend Mentor",
    "img": "img/Room.png",
    "description": "Design prompt from frontendmentors.io",
    "techs": ["JS", "React", "SASS", "Webpack"]
  },
  {
    "name": "Bord8",
    "img": "img/Bord8.png",
    "description": "Tool to make complex shapes with css border propertie.",
    "techs": ["JS", "HTML", "CSS"]
  }
]

const Portfolio = () => {
  const [width] = useWindowSize();
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <StyledPortfolio id="Portfolio" width={width}>
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      <Slider {...settings} className="Slider">
        {bestProjects.map((item, index) => (
          <div className="repo" key={index}>
            <div className="img-container">
              <img
                src={item.img}
                alt={item.name}
              />
            </div>
            <div className="description">
              <h2>
                <a
                  href={item.html_url}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  {item.name}
                </a>
              </h2>
              <p>{item.description}</p>
              <div className="languages">
                {item.techs.map((value, index) => (
                  <div key={index}>
                    {value}
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </StyledPortfolio>
  );
};
export default Portfolio;
