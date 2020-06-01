import React from 'react';
import * as S from './styles';

function Header( ) {
  return (
    <S.Header>
      <S.List>
        <S.Item>
          <S.Logo src="https://luanderson.github.io/AnDesenv/images/logo.png" alt=""></S.Logo>
        </S.Item>
        <S.Search type="search" id="search" name="search" placeholder="Procurar produtos"/>
        <S.Item>Carrinho</S.Item>
      </S.List>
    </S.Header>
  );
}

export default Header;