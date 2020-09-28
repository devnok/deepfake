import React, { useState } from 'react';
import styled from 'styled-components/native';
import AppStyles from '../../config/styles';
import Plus from 'app/assets/plus.svg';
import Zoom from '../Zoom';
import ImagePicker from 'react-native-image-picker';

const Container = styled.View`
  width: 100%;
  height: 200px;
  box-shadow: ${AppStyles.shadow.SHADOW_MEDIUM};
  elevation: 8;
  padding: 16px;
  padding-top: 18px;
  background-color: ${AppStyles.color.COLOR_WHITE};
  border-radius: 18px;
`;
const Touchable = styled.TouchableOpacity`
  flex: 1;
`;
const Text = styled.Text`
  font-size: 12px;
  margin-top: 28px;
  font-family: ${AppStyles.fonts.FONT_REGULAR};
  color: ${AppStyles.color.COLOR_TEXT_GREY_WHITE};
`;

const options = {
  title: '비디오 또는 이미지 파일을 선택해주세요.',
  mediaType: 'mixed',
  chooseFromLibraryButtonTitle: '갤러리에서 가져오기',
  cancelButtonTitle: '취소',
  storageOptions: {
    skipBackup: true,
    path: 'images',
  },
};
const PhotoInput = ({ setVideo }) => {
  const handlePress = () => {
    ImagePicker.launchImageLibrary(options, res => {
      if (res.didCancel) {
        console.log('User cancelled image picker');
      } else if (res.error) {
        console.log('ImagePicker Error: ', res.error);
      } else if (res.customButton) {
        console.log('User tapped custom button: ', res.customButton);
      } else {
        console.log('video result: ', {...res, data: null});
        setVideo(res);
      }
    });
  };
  return (
    <Container>
      <Touchable onPress={handlePress}>
        <Zoom>
          <Plus width={22} height={22} />
          <Text>눌러서 파일을 추가해보세요.</Text>
        </Zoom>
      </Touchable>
    </Container>
  );
};

export default PhotoInput;
