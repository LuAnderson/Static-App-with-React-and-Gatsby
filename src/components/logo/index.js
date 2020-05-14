import React from 'react';

import * as S from './styles';

import logo from '../../static/images/logo.svg';

function Logo() {
  return (
    <S.App>
      <S.AppHeader>
        <S.AppLogo src={logo} alt="logo" />
        <S.AppText>
          Edit <code>src/App.js</code> and save to reload.
        </S.AppText>
        <S.AppLink
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </S.AppLink>
      </S.AppHeader>
    </S.App>
  );
}

export default Logo;