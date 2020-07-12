import React from 'react';
import styled from 'styled-components/native';
import AppStyles from '../config/styles';

const Container = styled.View`
  width: 100%;
  padding: 9px 0;
  margin-bottom: 9px;
`;
const Bar = styled.View`
  width: 100%;
  height: 9px;
  border-radius: 4.5px;
  background-color: ${AppStyles.color.COLOR_PLACEHOLDER};
`;
const DoneBar = styled.View`
  position: absolute;
  width: ${props => props.data * 100}%;
  height: 9px;
  border-radius: 4.5px;
  background-color: ${AppStyles.color.COLOR_SECONDARY};
`;
const Circle = styled.View`
  width: 24px;
  height: 24px;
  border-radius: 12px;
  background-color: ${AppStyles.color.COLOR_PRIMARY};
  position: absolute;
  left: ${props => props.data * 100}%;
  display: flex;
  justify-content: center;
  align-items: center;
  transform: translateX(-12px);
`;
const Data = styled.Text`
  font-family: ${AppStyles.fonts.FONT_EB};
  font-size: 6.6px;
  color: ${AppStyles.color.COLOR_WHITE};
`;

const ProgressBar = ({ data = 0 }) => (
  <Container>
    <Bar>
      <DoneBar data={data} />
    </Bar>
    <Circle data={data}>
      <Data>{parseInt(data * 100, 10)}%</Data>
    </Circle>
  </Container>
);

export default ProgressBar;
