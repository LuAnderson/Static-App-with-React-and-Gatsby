import React from 'react';
import * as S from './styles';

function Footer( ) {
  return (
    <S.Footer>
      <S.Resume>
        Template de estudo para criação de página estática utilizando 
        Gatsby em uma aplicação React
      </S.Resume>
      <S.Profile>
        <S.Site href='https://lucasanderson.com.br/' target='_blank'>lucasanderson.com.br</S.Site>
        <S.Name>Lucas Anderson S. de Lima
          <S.Year> - 2020</S.Year>
        </S.Name>
      </S.Profile>
    </S.Footer>
  );
}

export default Footer;