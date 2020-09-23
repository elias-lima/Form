import React from 'react';

import Header from '../Header';
import Forms from '../Forms';


import { Container, Wrapper } from './styles';


const Layout = () => {
  return (
    <Container>
      {/* <Header /> */}

      <Wrapper>
        <Forms />
      </Wrapper>


    </Container>
  )
};

export default Layout;