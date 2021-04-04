import * as React from 'react';

import logo from '../../icons/logo.svg';
import { Container, Logo } from './styles';

const Header = () => {
  return (
    <Container>
      <Logo>
        <img src={logo} alt="logo" />
      </Logo>
    </Container>
  );
};

export default Header;
