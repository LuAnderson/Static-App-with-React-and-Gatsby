import React from 'react';
import PropTypes from 'prop-types';


import * as S from './styles';


function Banner({ urls }) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    lazyLoad: true,
    pauseOnHover: true
  };

  return (
    <S.Banner>
      <S.Carousel {...settings}>
        { urls.map((url) => (
          <S.Image 
            src={url}
            alt="Banner Principal"
          />
        ))}
      </S.Carousel>
    </S.Banner>
  );
}

Banner.propTypes = {
  urls: PropTypes.array.isRequired,
};

export default Banner;