import React from 'react';
import PropTypes from 'prop-types';

import * as S from './styles';

function Header({ countCart }) {
  return (
    <S.Header>
      <S.List>
        <S.Anchor href="http://lucasanderson.com.br/" target="_blank">
          <S.Logo src="https://luanderson.github.io/AnDesenv/images/logo.png" alt=""></S.Logo>
        </S.Anchor>
        <S.Search type="search" id="search" name="search" placeholder="Procurar produtos"/>
        <S.Item>Carrinho 
          {countCart > 0 && <S.Count>{countCart}</S.Count>}
        </S.Item>
      </S.List>
    </S.Header>
  );
}

Header.propTypes = {
  countCart: PropTypes.number.isRequired,
};

export default Header;