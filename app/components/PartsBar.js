import React, { useState } from 'react';
import styled from 'styled-components/native';
import AppStyles from '../config/styles';

const Container = styled.View`
  width: 100%;
  padding-top: 12px;
  margin-bottom: 9px;
`;
const Bar = styled.View`
  position: relative;
  width: 100%;
  height: 27px;
  border-radius: 13.5px;
  background-color: ${AppStyles.color.COLOR_PLACEHOLDER};
`;
const DoneBar = styled.View`
  position: absolute;
  left: ${props => props.start}px;
  width: ${props => props.width}px;
  height: 27px;
  border-bottom-left-radius: 13.5px;
  border-top-right-radius: 13.5px;
  border-bottom-right-radius: ${props =>
    props.end - 1.0 >= -1e-9 ? 13.5 : 0}px;
  border-top-left-radius: ${props => (props.start <= 1e-9 ? 13.5 : 0)}px;
  background-color: ${AppStyles.color.COLOR_SECONDARY};
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Circle = styled.View`
  width: 24px;
  height: 24px;
  border-radius: 12px;
  background-color: ${AppStyles.color.COLOR_PRIMARY};
  position: absolute;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  transform: translate(-12px, -12px);
  elevation: 6;
`;
const Num = styled.Text`
  font-family: ${AppStyles.fonts.FONT_EB};
  font-size: 13px;
  color: ${AppStyles.color.COLOR_WHITE};
`;
const Data = styled.Text`
  position: absolute;
  bottom: -15px;
  font-family: ${AppStyles.fonts.FONT_EB};
  margin-left: ${props => props.start}px;
  font-size: 10px;
  color: ${AppStyles.color.COLOR_SECONDARY};
`;

const PartsBar = ({ data = [] }) => {
  console.log('data: ', data);
  const [width, setWidth] = useState(0);
  return (
    <Container onLayout={e => setWidth(e.nativeEvent.layout.width)}>
      <Bar>
        {data.map(({ start, end }, i) => (
          <DoneBar key={i} start={start * width} width={(end - start) * width}>
            <Circle>
              <Num>#{i + 1}</Num>
            </Circle>
          </DoneBar>
        ))}
      </Bar>
    </Container>
  );
};

export default PartsBar;
