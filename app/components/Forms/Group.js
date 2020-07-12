import React from 'react';
import styled from 'styled-components/native';
import metrics from '../../config/metrics';

const Container = styled.View`
  margin: 0 20px;
  margin-bottom: ${props =>
    props.space ? 150 : (metrics.screenRatio - 0.5) * 30}px;
`;

const Group = ({ style, children, center = false, space = false }) => (
  <Container
    space={space}
    style={
      (style,
        center
          ? {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }
          : {})
    }>
    {children}
  </Container>
);

export default Group;
