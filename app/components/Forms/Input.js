import React from 'react';
import styled from 'styled-components/native';
import AppStyles from '../../config/styles';
import { Platform } from 'react-native';

const Container = styled.View`
  width: 100%;
  box-shadow: ${AppStyles.shadow.SHADOW_LIGHT};
`;

const TextInput = styled.TextInput`
  elevation: 4;
  padding: ${Platform.OS === 'android' ? 4 : 12}px 24px;
  font-size: 12px;
  background-color: ${AppStyles.color.COLOR_WHITE};
  border-radius: 18px;
`;

const Input = props => (
  <Container>
    <TextInput {...props} />
  </Container>
);

export default Input;
