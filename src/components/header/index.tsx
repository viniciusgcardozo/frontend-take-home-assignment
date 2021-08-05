import * as React from 'react';
import { useHistory } from 'react-router-dom';

import logo from '../../assets/icons/logo.svg';
import { Container, Logo } from './styles';

const Header = () => {
  const history = useHistory();

  const goHome = () => {
    history.push('/');
  };

  return (
    <Container>
      <Logo>
        <img onClick={goHome} src={logo} alt="logo" data-testid="logo-img" />
      </Logo>
    </Container>
  );
};

export default Header;
