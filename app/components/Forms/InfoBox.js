import React from 'react';
import styled from 'styled-components/native';
import AppStyles from '../../config/styles';

const Container = styled.View`
  width: 100%;
  padding: 13.3px 0;
  padding-left: 28px;
  padding-right: 20px;
  box-shadow: ${AppStyles.shadow.SHADOW_LIGHT};
  background-color: ${AppStyles.color.COLOR_WHITE};
  border-radius: 20px;
  elevation: 4;
`;
const InfoBox = ({ children, style, height = 30 }) => (
  <Container style={style}>{children}</Container>
);

export default InfoBox;
