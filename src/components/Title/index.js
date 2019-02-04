import React from 'react';

import { Container, Title } from './styles';

export default (props) => (
  <Container>
    <Title>
      { props.children }
    </Title>
  </Container>
)