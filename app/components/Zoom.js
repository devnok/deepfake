import React from 'react';
import styled from 'styled-components/native';
import AppStyles from '../config/styles';

const Container = styled.View`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Edge = styled.View`
`;

const dx = ['Left', 'Right'];
const dy = ['Top', 'Bottom'];

const Zoom = ({
  children,
  borderWidth = 4,
  borderRadius = 16,
  borderColor = AppStyles.color.COLOR_BORDER,
  edgeWidth = 32,
  edgeHeight = 32,
}) => {
  const edgeStyles = dx.map(i =>
    dy.map(j => ({
      ['border' + i + 'Width']: borderWidth,
      ['border' + j + 'Width']: borderWidth,
      ['border' + j + i + 'Radius']: borderRadius,
      position: 'absolute',
      [i.toLowerCase()]: 0,
      [j.toLowerCase()]: 0,
      borderColor,
      width: edgeWidth,
      height: edgeHeight,
    })),
  );
  return (
    <Container>
      <Edge style={edgeStyles[0][0]} />
      <Edge style={edgeStyles[0][1]} />
      <Edge style={edgeStyles[1][0]} />
      <Edge style={edgeStyles[1][1]} />
      {children}
    </Container>
  );
};

export default Zoom;
