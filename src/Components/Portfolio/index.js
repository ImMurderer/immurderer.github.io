import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import useWindowSize from '@react-hook/window-size';
import StyledPortfolio from './styled';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Portfolio = () => {
  const [width] = useWindowSize();
  const [repos, setRepos] = useState([]);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  useEffect(() => {
    fetch(
      'https://api.github.com/users/jppradoleal/repos?type=owner&sort=updated&order=desc'
    )
      .then((response) => response.json())
      .then((repositories) => {
        setRepos(repositories.slice(1, 11));
      });
  }, []);

  return (
    <StyledPortfolio id="Portfolio" width={width}>
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      <Slider {...settings} className="Slider">
        {repos.map((data) => (
          <div className="repo" key={data.id}>
            <div className="img-container">
              <img
                src={"https://loremflickr.com/1366/768/modern?random=" + data.id}
                alt={data.name}
              />
            </div>
            <div className="description">
              <h2>
                <a
                  href={data.html_url}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  {data.name}
                </a>
              </h2>
              <p>{data.description}</p>
              <p className="languages">{data.language}</p>
            </div>
          </div>
        ))}
      </Slider>
    </StyledPortfolio>
  );
};
export default Portfolio;
