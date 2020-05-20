import React from 'react';
import PropTypes from 'prop-types';
import Cart from '../cart';

import * as S from './styles';

function Grid({ list, isMobile }) {
  return (
    <S.Grid>
      { list.map((item) => (
        <Cart 
          isMobile={isMobile}
          product={item} 
          key={item.id}
          />
      ))}
    </S.Grid>
  );
}

Grid.propTypes = {
  list: PropTypes.array.isRequired,
  isMobile: PropTypes.bool.isRequired,
};

export default Grid;