import React from 'react';
import PropTypes from 'prop-types';
import * as S from './styles';

function Cart({product, isMobile}) {
  return (
    <S.Cart isMobile={isMobile}>
        <S.Image src={product.photo}/>
        <S.Info>
          <S.Name>
            {product.name}
          </S.Name>
          <S.Description> 
            {product.description}
          </S.Description>
        </S.Info>
        <S.Price>R$ {product.price},00</S.Price>
        <S.Buy>Comprar</S.Buy>
    </S.Cart>
  );
}

Cart.propTypes = {
  product: PropTypes.array.isRequired,
  isMobile: PropTypes.bool.isRequired,
};

export default Cart;