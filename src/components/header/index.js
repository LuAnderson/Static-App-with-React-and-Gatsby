import React from 'react';
import PropTypes from 'prop-types';

import * as S from './styles';

function Header({ countCart, handleChange, searchTerm }) {
  return (
    <S.Header>
      <S.List>
        <S.Anchor href="http://lucasanderson.com.br/" target="_blank">
          <S.Logo src="https://luanderson.github.io/AnDesenv/images/logo.png" alt=""></S.Logo>
        </S.Anchor>
        <S.Search 
          id="search" 
          name="search" 
          onChange={handleChange}
          placeholder="O que você está procurando?"
          type="search" 
          value={searchTerm}
          />
        <S.Item>
          Carrinho 
          {countCart > 0 && <S.Count>{countCart}</S.Count>}
        </S.Item>
      </S.List>
    </S.Header>
  );
}

Header.propTypes = {
  countCart: PropTypes.number.isRequired,
  handleChange: PropTypes.func.isRequired,
  searchTerm: PropTypes.string.isRequired,
};

export default Header;