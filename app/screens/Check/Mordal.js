import React from 'react';
import styled from 'styled-components/native';
import AppStyles from '../../config/styles';
import { Portal } from 'react-native-paper';
import SHILED_FAILED from 'app/assets/shield_x.svg';
import Button from '../../components/Forms/Button';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { setVideo } from 'app/actions/DeepfakeActions';

const Overlay = styled.View`
  background-color: ${AppStyles.color.COLOR_TEXT_BLACK + 'CC'};
  position: absolute;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  padding: 0 37.3px;
`;
const Container = styled.View`
  width: 100%;
  border-radius: 20px;
  display: flex;
  padding: 28px 40px;
  padding-bottom: 32px;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.bgColor};
`;

const Warn = styled.Text`
  font-family: ${AppStyles.fonts.FONT_BOLD};
  color: ${AppStyles.color.COLOR_WHITE};
  font-size: 21px;
`;
const Description = styled.Text`
  font-family: ${AppStyles.fonts.FONT_REGULAR};
  color: #dedede;
  font-size: 13.3px;
  text-align: center;
  margin-bottom: 40px;
  margin-top: 24px;
`;

const Mordal = ({ isFake = false }) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const video = useSelector(state => state.deepfakeReducer.video);

  const navToHome = () => {
    navigation.reset({
      index: 0,
      routes: [{ name: 'Home' }],
    });
    dispatch(setVideo(null));
  };
  const navToResult = () => {
    navigation.reset({
      index: 1,
      routes: [{ name: 'Home' }, { name: 'CheckResult' }],
    });
  };
  const bgColor = isFake
    ? AppStyles.color.COLOR_RED
    : AppStyles.color.COLOR_PRIMARY;
  return (
    <Portal>
      <Overlay>
        <Container bgColor={bgColor}>
          <Warn>{isFake ? '주의하세요!' : '안심하세요!'}</Warn>
          <Description>
            Fake Hunter가 꼼꼼히 분석한 결과 페이크 영상
            {isFake ? '' : '이 아닌것'}으로 의심됩니다.
          </Description>
          <SHILED_FAILED width={133} height={133} />
          <Description>
            {isFake ? video.fileName || '' : 'Not Found'}
          </Description>
          <Button
            onPress={isFake ? navToResult : navToHome}
            text={isFake ? '결과 보러가기' : '되돌아가기'}
            color={bgColor}
            bgColor={AppStyles.color.COLOR_WHITE}
          />
        </Container>
      </Overlay>
    </Portal>
  );
};

export default Mordal;
