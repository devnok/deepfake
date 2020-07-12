import React from 'react';

import { useDispatch } from 'react-redux';
import styled from 'styled-components/native';
import AppStyles from 'app/config/styles';
import Label from 'app/components/Forms/Label';
import Group from 'app/components/Forms/Group';
import Input from 'app/components/Forms/Input';
import PhotoInput from 'app/components/Forms/PhotoInput';
import Button from 'app/components/Forms/Button';
import PlayButton from 'app/assets/play_button.svg';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const Container = styled.View`
  display: flex;
  flex: 1;
`;
const Content = styled(KeyboardAwareScrollView)`
  background-color: ${AppStyles.color.COLOR_WHITE};
  padding: 15px 0;
`;
const Description = styled.Text`
  font-family: ${AppStyles.fonts.FONT_REGULAR};
  color: ${AppStyles.color.COLOR_TEXT_GREY};
  font-size: 17.6px;
  line-height: 28px;
  text-align: center;
  margin-bottom: 16px;
`;
const Footer = styled.View`
  position: absolute;
  width: 100%;
  height: 56px;
  bottom: 0;
  align-items: center;
  background-color: ${AppStyles.color.COLOR_BLACK};
`;
const ButtonContainer = styled.TouchableOpacity`
  position: absolute;
  bottom: 20px;
`;

export default function Home({ navigation }) {
  const dispatch = useDispatch();

  const handlePress = () => {
    navigation.navigate('CheckLoading');
  };
  return (
    <Container>
      <Content enableOnAndroid>
        <Description>
          {
            '비디오 또는 이미지 파일을\n업로드하거나,\n영상 또는 이미지 URL을 입력해 주세요.'
          }
        </Description>
        <Group>
          <Label text={'앨범에서 추가'} />
          <PhotoInput placeholder={'눌러서 파일을 추가해 주세요.'} />
        </Group>
        <Group>
          <Label text={'URL 입력'} />
          <Input placeholder={'영상 or 이미지 URL을 입력해 주세요.'} />
        </Group>
        <Group center space>
          <Button text={'찾기'} />
        </Group>
      </Content>
      <Footer>
        <ButtonContainer onPress={handlePress}>
          <PlayButton width={64} height={64} />
        </ButtonContainer>
      </Footer>
    </Container>
  );
}
