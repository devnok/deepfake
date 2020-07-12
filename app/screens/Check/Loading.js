/* eslint-disable react-native/no-inline-styles */
import React, { useState } from 'react';

import { useDispatch } from 'react-redux';
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

import ShieldIcon from 'app/assets/shield_icon.svg';

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
`
const img_url =
  'https://cdn.zeplin.io/5f06d0806fcd6379955d7809/assets/86083A32-C9DB-4CFA-98E1-00AA837BFAD6.png';

export default function Loading({ navigation }) {
  const dispatch = useDispatch();
  const [modalVisible, setModalVisible] = useState(false);

  const handlePress = () => {
    navigation.navigate('CheckResult');
  };
  return (
    <Container>
      {modalVisible ? <Mordal /> : false}
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
          <Image source={{ uri: img_url }} />
          <ZoomContainer>
            <Zoom
              borderColor={AppStyles.color.COLOR_RED}
              borderRadius={0}
              borderWidth={2}
            />
          </ZoomContainer>
        </ImageContainer>
        <Group>
          <ProgressBar data={0.5} />
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
            <Strong>{832}</Strong>
            <Discover>개의 조작 구간이 발견되었습니다.</Discover>
          </InfoBox>
        </Group>
        <Group>
          <Label text={'영상 정보'} />
          <InfoBox height={100}>
            <MetaView>
              <MetaName>타이틀</MetaName>
              <MetaData>{`Former President Obama unleashes on Trump,
GOP - Full speech from Illinois `}</MetaData>
            </MetaView>
            <MetaView>
              <MetaName>영상 크기</MetaName>
              <MetaData>{23.5}MB</MetaData>
            </MetaView>
            <MetaView style={{ marginBottom: 0 }}>
              <MetaName>영상 길이</MetaName>
              <MetaData>{'02:35:00'}</MetaData>
            </MetaView>
          </InfoBox>
        </Group>
      </Content>
      <Footer>
        <ButtonContainer onPress={handlePress}>
          <PauseButton width={64} height={64} />
        </ButtonContainer>
      </Footer>
    </Container>
  );
}
