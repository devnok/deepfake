import React from 'react';
import styled from 'styled-components/native';
import AppStyles from '../../config/styles';

const Container = styled.View`
  padding: 15px 0 0 0px;
`;

const Text = styled.Text`
  font-size: 13.3px;
  font-family: ${AppStyles.fonts.FONT_EB};
  color: ${AppStyles.color.COLOR_TEXT_BLACK};
`;

const Label = ({ text }) => (
  <Container>
    <Text>{text}</Text>
  </Container>
);

export default Label;
