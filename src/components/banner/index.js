import React from 'react';
import PropTypes from 'prop-types';

import * as S from './styles';

function Banner({ imageList }) {
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
        { imageList.map((url, key) => (
          <S.Image 
            alt="Banner Principal"
            key={key}
            src={url}
          />
        ))}
      </S.Carousel>
    </S.Banner>
  );
}

Banner.propTypes = {
  imageList: PropTypes.array.isRequired,
};

export default Banner;