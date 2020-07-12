import React, { useState, useRef } from 'react';
import styled from 'styled-components/native';
import AppStyles from '../../config/styles';
import Plus from 'app/assets/plus.svg';
import Zoom from '../Zoom';
import ImagePicker from 'react-native-image-picker';
import VideoNative from 'react-native-video';

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
const Video = styled(VideoNative)`
  position: absolute;
  width: 100%;
  height: 100%;
`;

const options = {
  mediaType: 'video',
  storageOptions: {
    skipBackup: true,
    path: 'images',
  },
};
const PhotoInput = () => {
  const player = useRef(null);
  const [videoSource, setViedoSource] = useState(null);
  const handlePress = () => {
    ImagePicker.launchImageLibrary(options, res => {
      const source = { uri: res.uri };
      setViedoSource(source);
    });
  };
  return (
    <Container>
      {videoSource ? (
        <Video source={videoSource} controls paused={true} />
      ) : (
          <Touchable onPress={handlePress}>
            <Zoom>
              <Plus width={22} height={22} />
              <Text>눌러서 파일을 추가해보세요.</Text>
            </Zoom>
          </Touchable>
        )}
    </Container>
  );
};

export default PhotoInput;
