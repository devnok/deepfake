import React from 'react';
import styled from 'styled-components/native';
import AppStyles from '../../config/styles';
import LinearGradient from 'react-native-linear-gradient';

const StartText = styled.Text`
  margin: 0 auto;
  color: ${AppStyles.color.COLOR_WHITE};
  font-family: ${AppStyles.fonts.FONT_EB};
  font-size: 17px;
`;

const GradientButton = ({ text }) => (
  <LinearGradient
    style={{ height: 57, width: '100%', justifyContent: 'center' }}
    start={{ x: 0, y: 0 }}
    end={{ x: 1, y: 0 }}
    colors={['#e2c8ed', '#a097e9', '#854be3']}>
    <StartText>{text}</StartText>
  </LinearGradient>
);
export default GradientButton;
