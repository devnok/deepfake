import React from 'react';
import styled from 'styled-components/native';
import AppStyles from '../../config/styles';
import PartsBar from '../../components/PartsBar';
import Label from '../../components/Forms/Label';
import Group from '../../components/Forms/Group';
import InfoBox from '../../components/Forms/InfoBox';
import CloudSearch from 'app/assets/cloud_search.svg';
import Clock from 'app/assets/clock.svg';
import Search from 'app/assets/search.svg';
import AutoHeightImage from 'react-native-auto-height-image';

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

const TitleView = styled.View`
  height: 36px;
  padding: 0 32px;
  background-color: ${AppStyles.color.COLOR_PLACEHOLDER};
  border-radius: 18px;
  margin-bottom: 36px;
  justify-content: center;
  align-self: center;
`;
const Title = styled.Text`
  font-size: 18px;
  font-family: ${AppStyles.fonts.FONT_EB};
  color: ${AppStyles.color.COLOR_TEXT_BLACK};
`
const InfoListView = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 8px -9.3px;
  padding-top: 12px;
`;
const InfoView = styled.View`
  flex: 1;
  box-shadow: ${AppStyles.shadow.SHADOW_LIGHT};
  elevation: 4;
  background-color: ${AppStyles.color.COLOR_WHITE};
  border-radius: 10px;
  padding: 24px 8px 12px;
  margin: 0 9.3px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const InfoTitleView = styled.View`
  position: absolute;
  top: -12px;
  height: 24px;
  padding: 0 16px;
  background-color: ${AppStyles.color.COLOR_PLACEHOLDER};
  border-radius: 12px;
  justify-content: center;
  align-self: center;
`;
const InfoTitle = styled.Text`
  font-size: 10px;
  font-family: ${AppStyles.fonts.FONT_EB};
  color: ${AppStyles.color.COLOR_TEXT_BLACK};
`;
const InfoData = styled.Text`
  margin-top: 12px;
  font-size: 12px;
  text-align: center;
  font-family: ${AppStyles.fonts.FONT_EB};
  color: ${AppStyles.color.COLOR_SECONDARY};
`;
const Discover = styled.Text`
  font-family: ${AppStyles.fonts.FONT_BOLD};
  color: #95a0aa;
  font-size: 11.5px;
  line-height: 18px;
  margin-left: 3px;
`;
const Strong = styled.Text`
  font-size: 18px;
  margin-left: 3px;
  font-family: ${AppStyles.fonts.FONT_EB};
  color: ${AppStyles.color.COLOR_RED};
`;
const ResultView = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-bottom: 18px;
`;
const Length = styled.Text`
  font-size: 12px;
  font-family: ${AppStyles.fonts.FONT_REGULAR};
  color: #95a0aa;
  align-self: flex-end;
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
  flex-shrink: 1;
`;
const Image = styled(AutoHeightImage)``;
const style = {
  paddingTop: 18,
  paddingBottom: 18,
  paddingLeft: 13,
  paddingRight: 14.6,
  marginBottom: 16,
  borderRadius: 10,
  flexDirection: 'row',
  alignItems: 'center',
};
const PartBox = styled.View`
  border-radius: 12px;
  height: 24px;
  background-color: ${AppStyles.color.COLOR_PRIMARY};
  width: 52px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 9px;
`;
const PartText = styled.Text`
  font-size: 12px;
  font-family: ${AppStyles.fonts.FONT_BOLD};
  color: ${AppStyles.color.COLOR_WHITE};
`;
const PartDesc = styled.View`
`;
const Row = styled.View`
  flex-direction: row;
  display: flex;
  margin-top: 2.6px;
`;
const Section = styled.Text`
  font-size: 12px;
  font-family: ${AppStyles.fonts.FONT_BOLD};
  color: #7c8690;
`;
const Per = styled.Text`
  font-size: 13px;
  font-family: ${AppStyles.fonts.FONT_REGULAR};
  color: #545c64;
`;
const Percentage = styled.Text`
  font-size: 14px;
  font-family: ${AppStyles.fonts.FONT_EB};
  color: ${AppStyles.color.COLOR_RED};
  margin-left: 4.5px;
`;

const data = [
  {
    start: 0.0,
    end: 0.3,
    img_url:
      'https://cdn.zeplin.io/5f06d0806fcd6379955d7809/assets/86083A32-C9DB-4CFA-98E1-00AA837BFAD6.png',
    fake_p: 0.998,
  },
  {
    start: 0.4,
    end: 0.5,
    img_url:
      'https://cdn.zeplin.io/5f06d0806fcd6379955d7809/assets/86083A32-C9DB-4CFA-98E1-00AA837BFAD6.png',
    fake_p: 0.998,
  },
  {
    start: 0.8,
    end: 1.0,
    img_url:
      'https://cdn.zeplin.io/5f06d0806fcd6379955d7809/assets/86083A32-C9DB-4CFA-98E1-00AA837BFAD6.png',
    fake_p: 0.998,
  },
];

const Result = () => {
  return (
    <Container>
      <Content>
        <Description>파일 분석이 완료되었습니다.</Description>
        <TitleView>
          <Title>상세 분석 결과</Title>
        </TitleView>
        <Group center>
          <Label text={'분석 정보'} />
          <InfoListView>
            <InfoView>
              <InfoTitleView>
                <InfoTitle numberOfLines={1}>분석 방법</InfoTitle>
              </InfoTitleView>
              <CloudSearch width={36} height={36} />
              <InfoData>서버 정밀 분석</InfoData>
            </InfoView>
            <InfoView>
              <InfoTitleView>
                <InfoTitle>분석 시간</InfoTitle>
              </InfoTitleView>
              <Clock width={36} height={36} />
              <InfoData>{'3분 50초'}</InfoData>
            </InfoView>
            <InfoView>
              <InfoTitleView>
                <InfoTitle>분석 구간</InfoTitle>
              </InfoTitleView>
              <Search width={36} height={36} />
              <InfoData>{562}개</InfoData>
            </InfoView>
          </InfoListView>
        </Group>
        <Group center>
          <Label text={'분석 결과'} />
          <InfoBox>
            <ResultView>
              <ShieldIcon width={16} height={16} />
              <Strong>{data.length}</Strong>
              <Discover>
                개의 구간에서 페이크 의심 화면이 발견되었습니다.
              </Discover>
            </ResultView>
            <PartsBar data={data} />
            <Length>{'02:35:00'}</Length>
          </InfoBox>
        </Group>
        <Group center>
          <Label text={'대표 발견 구간'} />
          {data.map((d, i) => (
            <InfoBox style={style} key={i}>
              <Image width={100} source={{ uri: d.img_url }} />
              <PartBox>
                <PartText>구간{i + 1}</PartText>
              </PartBox>
              <PartDesc>
                <Section>
                  {'0:01:08'} ~ {'0:12:38'}
                </Section>
                <Row>
                  <Per>페이크일 확률</Per>
                  <Percentage>{d.fake_p * 100}%</Percentage>
                </Row>
              </PartDesc>
            </InfoBox>
          ))}
        </Group>
        <Group center>
          <Label text={'영상 정보'} />
          <InfoBox>
            <MetaView>
              <MetaName>타이틀</MetaName>
              <MetaData>
                {
                  'Former President Obama unleashes on Trump, GOP - Full speech from Illinois'
                }
              </MetaData>
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
    </Container >
  );
};

export default Result;
