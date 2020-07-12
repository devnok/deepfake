import React from 'react';
import styled from 'styled-components/native';
import AppStyles from '../../config/styles';

const Container = styled.View`
  padding: 10px 0 0 9px;
  margin-bottom: 16px;
`;

const Text = styled.Text`
  font-size: 13.3px;
  font-family: ${AppStyles.fonts.FONT_EB};
  color: ${AppStyles.color.COLOR_TEXT_BLACK};
`;
const Circle = styled.View`
  position: absolute;
  width: 20.8px;
  height: 20.8px;
  border-radius: 10.4px;
  background-color: ${AppStyles.color.COLOR_PLACEHOLDER};
`;

const Label = ({ text }) => (
  <Container>
    <Circle />
    <Text>{text}</Text>
  </Container>
);

export default Label;
