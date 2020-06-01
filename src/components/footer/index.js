import React from 'react';
import * as S from './styles';

function Footer( ) {
  return (
    <S.Footer>
      <S.Resume>
        Template de estudo para criação de página estática utilizando 
        Gatsby em uma aplicação com React
      </S.Resume>
      <S.Profile>
        <S.Site href='lucasanderson.com.br'>lucasanderson.com.br</S.Site>
        <S.Name>Lucas Anderson S. de Lima</S.Name>
        <S.Job>Desenvolvedor Front End Pl</S.Job>
        <S.Year>&copy; Copyright 2020</S.Year>
      </S.Profile>
    </S.Footer>
  );
}

export default Footer;