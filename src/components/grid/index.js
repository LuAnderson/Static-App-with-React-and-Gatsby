import React from 'react';
import PropTypes from 'prop-types';
import Cart from '../cart';

import * as S from './styles';

function Grid({ addCart, isMobile, list, title }) {
  return (
    <>
      <S.Title>{title}</S.Title>
      <S.Grid>
        { list.map((item) => (
          <Cart 
            addCart={addCart}
            isMobile={isMobile}
            product={item} 
            key={item.id}
            />
        ))}
      </S.Grid>
    </>
  );
}

Grid.propTypes = {
  addCart: PropTypes.func.isRequired,
  isMobile: PropTypes.bool.isRequired,
  list: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,
};

export default Grid;