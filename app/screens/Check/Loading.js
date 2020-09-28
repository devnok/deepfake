/* eslint-disable react-native/no-inline-styles */
import React, { useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components/native';
import AppStyles from 'app/config/styles';
import PauseButton from 'app/assets/pause_button.svg';
import Group from 'app/components/Forms/Group';
import Label from 'app/components/Forms/Label';
import metrics from '../../config/metrics';
import Zoom from '../../components/Zoom';
import ProgressBar from '../../components/ProgressBar';
import InfoBox from '../../components/Forms/InfoBox';
import Mordal from './Mordal';
import { ColorDotsLoader } from 'react-native-indicator';
import { byte2mb, convertDetectToThumbnail, secondsFormat } from 'app/utils/stringUtils';

import ShieldIcon from 'app/assets/shield_icon.svg';
import { stopIsVideoDone } from 'app/actions/DeepfakeActions';
import { useIsFocused } from '@react-navigation/native';

const Container = styled.View`
  display: flex;
  flex: 1;
`;
const Content = styled.ScrollView`
  background-color: ${AppStyles.color.COLOR_WHITE};
  padding: 15px 0;
`;
const Description = styled.Text`
  font-family: ${AppStyles.fonts.FONT_BOLD};
  color: ${AppStyles.color.COLOR_TEXT_GREY};
  font-size: 13.3px;
  text-align: center;
  margin-bottom: 19px;
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
  align-self: center;
`;
const ImageContainer = styled.View`
  width: ${metrics.screenWidth}px;
  min-height: 200px;
  margin-bottom: 20px;
`;
const ZoomContainer = styled.View`
  position: absolute;
  left: 47%;
  top: 32%;
  width: 106px;
  height: 106px;
  transform: translate(-53px, -53px);
`;
const Image = styled.Image`
  position: absolute;
  width: ${metrics.screenWidth}px;
  height: 200px;
`;
const MetaView = styled.View`
  width: 100%;
  display: flex;
  flex-direction: row;
  margin-bottom: 16px;
  align-items: center;
`;
const MetaName = styled.Text`
  font-family: ${AppStyles.fonts.FONT_EB};
  color: ${AppStyles.color.COLOR_SECONDARY};
  font-size: 10px;
  width: 57px;
`;
const MetaData = styled.Text`
  font-family: ${AppStyles.fonts.FONT_REGULAR};
  color: ${AppStyles.color.COLOR_TEXT_GREY_BLACK};
  font-size: 10px;
`;
const Discover = styled.Text`
  font-family: ${AppStyles.fonts.FONT_BOLD};
  color: ${AppStyles.color.COLOR_TEXT_NAVY};
  font-size: 12px;
  line-height: 18.6px;
  margin-left: 6px;
`;
const Strong = styled.Text`
  margin-left: 6px;
  font-size: 19px;
  font-family: ${AppStyles.fonts.FONT_EB};
  color: ${AppStyles.color.COLOR_RED};
`;
const LoaderView = styled.View`
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
`;

export default function Loading({ navigation }) {
  const dispatch = useDispatch();
  const detects = useSelector(state => state.deepfakeReducer.detects);
  const progress = useSelector(state => state.deepfakeReducer.progress);
  const video = useSelector(state => state.deepfakeReducer.video);
  const { endAt } = useSelector(state => state.deepfakeReducer.detectAt);
  const isFocused = useIsFocused();

  const handlePress = () => {
    dispatch(stopIsVideoDone());
    navigation.navigate('Home');
  };
  return (
    <Container>
      {endAt && isFocused ? (
        <Mordal isFake={detects.length && detects.length !== 0} />
      ) : (
        false
      )}
      <Content>
        <LoaderView>
          <ColorDotsLoader
            size={5.5}
            betweenSpace={4.4}
            color1={AppStyles.color.COLOR_PRIMARY}
            color2={AppStyles.color.COLOR_SECONDARY}
            color3={AppStyles.color.COLOR_PLACEHOLDER}
          />
        </LoaderView>
        <Description>{'파일을 분석중 입니다.'}</Description>
        <ImageContainer>
          {detects.length > 0 ? (
            <Image
              source={{
                uri: convertDetectToThumbnail(detects[detects.length - 1]),
              }}
            />
          ) : null}
          {/*<ZoomContainer>
            <Zoom
              borderColor={AppStyles.color.COLOR_RED}
              borderRadius={0}
              borderWidth={2}
            />
          </ZoomContainer>*/}
        </ImageContainer>
        <Group>
          <ProgressBar data={progress.frames / progress.totalframes || 0} />
          <InfoBox
            style={{
              paddingTop: 3.3,
              paddingBottom: 3.3,
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <ShieldIcon width={18} height={18} />
            <Strong>{detects.length}</Strong>
            <Discover>개의 조작 구간이 발견되었습니다.</Discover>
          </InfoBox>
        </Group>
        <Group>
          <Label text={'영상 정보'} />
          <InfoBox height={100}>
            <MetaView>
              <MetaName>타이틀</MetaName>
              <MetaData>{video.fileName || ''}</MetaData>
            </MetaView>
            <MetaView>
              <MetaName>영상 크기</MetaName>
              <MetaData>{byte2mb(video.fileSize || 0)}MB</MetaData>
            </MetaView>
            <MetaView style={{ marginBottom: 0 }}>
              <MetaName>영상 길이</MetaName>
              <MetaData>{secondsFormat(video.duration || 0)}</MetaData>
            </MetaView>
          </InfoBox>
        </Group>
      </Content>
      <Footer />
      <ButtonContainer onPress={handlePress}>
        <PauseButton width={64} height={64} />
      </ButtonContainer>
    </Container>
  );
}
