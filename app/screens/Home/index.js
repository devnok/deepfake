import React, { useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components/native';
import AppStyles from 'app/config/styles';
import Label from 'app/components/Forms/Label';
import Group from 'app/components/Forms/Group';
import Input from 'app/components/Forms/Input';
import PhotoInput from 'app/components/Forms/PhotoInput';
import GradientButton from 'app/components/Forms/GradientButton';
import PlayButton from 'app/assets/play_button.svg';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import Video from 'react-native-video';
import { Pressable, StyleSheet, View } from 'react-native';
import metrics from '../../config/metrics';
import Spinner from 'react-native-loading-spinner-overlay';
import * as DeepfakeActions from 'app/actions/DeepfakeActions';
import App from 'app/navigation/NavigationStack';

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
  font-size: 13px;
  text-align: center;
  margin-bottom: 45px;
`;
const DescriptionHead = styled.Text`
  font-family: ${AppStyles.fonts.FONT_EB};
  color: ${AppStyles.color.COLOR_REAL_BLACK};
  font-size: 13px;
  text-align: center;
  margin-top: 39px;
  margin-bottom: 25px;
`;
const Footer = styled.View`
  position: absolute;
  width: 100%;
  height: 56px;
  bottom: 0;
  align-items: center;
  background-color: ${AppStyles.color.COLOR_BLACK};
`;
const ButtonContainer = styled.TouchableHighlight``;
const Preview = styled.View`
  min-height: 200px;
`;
const videoStyle = {
  width: metrics.screenWidth - 40,
  height: 200,
};
const loadingTextStyle = {
  fontFamily: AppStyles.fonts.FONT_BOLD,
  color: AppStyles.color.COLOR_WHITE,
  fontSize: 13.3,
};
const StartText = styled.Text`
  margin: 0 auto;
  color: ${AppStyles.color.COLOR_WHITE};
  font-family: ${AppStyles.fonts.FONT_EB};
  font-size: 17px;
`;

export default function Home({ navigation }) {
  const dispatch = useDispatch();
  const [url, setUrl] = useState('');
  const video = useSelector(state => state.deepfakeReducer.video);
  const loading = useSelector(state => state.LoadingReducer);

  const handlePress = () => {
    console.log(video);
    if (!video || !video.type) return;
    const types = video.type.split('/');
    const codec = types[types.length - 1] || 'mp4';
    dispatch(
      DeepfakeActions.uploadVideo(
        {
          file: {
            name: `${Date.now()}.${codec}`,
            type: video.type,
            uri: video.uri,
          },
          startAt: Date.now(),
        },
        () => navigation.navigate('CheckLoading'),
      ),
    );
  };
  const findSource = () => {
    console.log(url);
  };
  return (
    <Container>
      <Spinner
        visible={!!loading[DeepfakeActions.uploadVideo().type]}
        textContent={'로딩중...'}
        textStyle={loadingTextStyle}
      />
      <Content enableOnAndroid>
        <DescriptionHead>{'영상분석'}</DescriptionHead>
        <Description>{'영상 또는 이미지 파일을 업로드 해주세요.'}</Description>
        <Group>
          <Label text={'앨범에서 추가'} />
          <PhotoInput
            setVideo={_video => {
              const { data, ...videoWithoutData } = _video;
              dispatch(DeepfakeActions.setVideo(videoWithoutData));
            }}
            placeholder={'눌러서 파일을 추가해 주세요.'}
          />
        </Group>
        {/* <Group>
          <Label text={'URL 입력'} />
          <Input
            onChangeText={setUrl}
            value={url}
            placeholder={'영상 or 이미지 URL을 입력해 주세요.'}
          />
        </Group> */}
        {/* <Group center>
          <Button text={'찾기'} onPress={findSource} />
        </Group> */}
        <Group space>
          <Label text={'미리 보기'} />
          <Preview>
            {video && video.uri && (
              <Video
                repeat
                source={{
                  uri: video.uri,
                }}
                resizeMode="cover"
                style={videoStyle}
                onLoad={({ duration, naturalSize }) =>
                  dispatch(
                    DeepfakeActions.setVideo({
                      ...video,
                      duration,
                      naturalSize,
                    }),
                  )
                }
                onLoadStart={props => console.log(props)}
              />
            )}
          </Preview>
        </Group>
      </Content>
      <ButtonContainer onPress={handlePress}>
        <GradientButton text={`분석하기`} />
      </ButtonContainer>
    </Container>
  );
}
