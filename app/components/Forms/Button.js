import React from 'react';
import styled from 'styled-components/native';
import AppStyles from '../../config/styles';

const Container = styled.TouchableOpacity`
  padding: 8px 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.bgColor || AppStyles.color.COLOR_PRIMARY};
  border-radius: 16px;
  box-shadow: 0px 3.3px 5px #1b91ff33;
  elevation: 4;
`;
const Text = styled.Text`
  color: ${props => props.color || AppStyles.color.COLOR_WHITE};
  font-size: 16px;
  font-family: ${AppStyles.fonts.FONT_EB};
`;

const Button = ({ text, bgColor, color, onPress }) => (
  <Container bgColor={bgColor} onPress={onPress}>
    <Text color={color}>{text}</Text>
  </Container>
);

export default Button;
