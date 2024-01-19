import { SectionsWrapper } from '../../theme/components/SectionsWrapper'


import styled from 'styled-components';

import { useState } from 'react'

import { IntroSection } from './sections/IntroSection';
import { IntroSection2 } from './sections/IntroSection2';
import { CustomButton } from '../../theme/components/Button';
import { useCustomNavigate } from '../../theme/customHooks/useCustomNavigate';
import { Section, Text } from '../../theme/globalStyles';
import { introText_1_1, introText_1_2, introText_2, introText_3, introText_4, introText_5, introText_6 } from '../../assets/texts/introTexts';
import { adjustUrlForEnvironment } from '../../serverConfig';


const GlobalWrapper = styled.div`
  overflow: hidden;
  height: 98%;
  width: 100%;
  padding: 0;
  margin: 0;
  scroll: none;
  position: relative;
  transition: opacity 0.5s ease; /* Added transition for opacity */
`;
const ScrollWrapper = styled.div`
width: 100%;
height: 100%;
overflow: scroll;
scroll-snap-type: y mandatory;
`;
const SemiSection = styled(Section)`
height: 90%;
border: 1px solid red;
overflow: visible;
`;

const WrapperText = styled(Text)`
text-align: center;
position: absolute;
inset: 0;
margin: auto;
max-height: fit-content;
z-index:100;
`;
const RelativeWrapperText = styled(Text)`
text-align: left;
margin-top: 36px;
z-index:100;
position:relative;
`;
const BottomWrapperText = styled(WrapperText)`
inset: 48px;
top: auto;
`;

const BackgroundImage = styled.img`
  width: 100vw;
  height: 95%;
  position:absolute;
  inset: 0;
  object-fit: cover;
`;
const RelativeImage = styled.img`
  margin-left: -24px;
  width: 100vw;
  height: fit-content;
  object-fit: contain;
`;
const BigRelativeImage = styled.img`
  margin-left: -15vw;
  width: 120vw;
  height: fit-content;
  object-fit: contain;
`;

const GradientDiv1 = styled.div`

  height: 300px;
  width: 100vw;
  max-width: none;
  top:0;
  margin-top: -280px;
  margin-left:-24px;
  background: linear-gradient(to top, rgba(249, 248, 237, 1) 5%, rgba(249, 248, 237,0) 85%);;
  `
const GradientDiv2 = styled(GradientDiv1)`
  position:absolute;
  margin-top: -8px;
  transform: rotate(180deg);
  z-index:20;
  `
const RelativeHolder = styled.div`
position: relative;
width: 100%;
`;

const Button = styled(CustomButton)`
  margin: 24px auto;
  max-width: 200px;
  z-index: 100;
  font-size: 18px;
`;
// intialize the context
export const IntroPage: React.FC = () => {
const customNavigate = useCustomNavigate();
const handleNext = () => {
  customNavigate('asistencia');
};

  return (
    <GlobalWrapper>
      <ScrollWrapper>
        <SemiSection inverse>
          <BottomWrapperText inverse>
            {introText_1_1}
            <br /><br />
            <b>{introText_1_2}</b>
          </BottomWrapperText>
          <BackgroundImage src={adjustUrlForEnvironment("../../../../public/assets/images/ApuntesCartaAcuarelaMarron.svg")} />
        </SemiSection>
        <SemiSection inverse>
          <GradientDiv1 />
          <RelativeImage src={adjustUrlForEnvironment("../../../../public/assets/images/Camino2.png")} />
          <RelativeHolder>
            <GradientDiv2 />
            <RelativeWrapperText inverse>
              {introText_2}
            </RelativeWrapperText>
          </RelativeHolder>
        </SemiSection>
        <SemiSection inverse>
          <RelativeImage src={adjustUrlForEnvironment("../../../../public/assets/images/mirando-estrellas-silueta.png")} />
          <RelativeWrapperText inverse>
            {introText_3}
          </RelativeWrapperText>
        </SemiSection>
        <SemiSection inverse>
          <WrapperText inverse>
            {introText_4}
          </WrapperText>
        </SemiSection>
        <SemiSection inverse>
          <RelativeWrapperText inverse>
            {introText_5}
          </RelativeWrapperText>
        <RelativeImage src={adjustUrlForEnvironment("../../../../public/assets/images/mochila-botas.png")} /> 
        </SemiSection>
        <SemiSection inverse>
        <BigRelativeImage src={adjustUrlForEnvironment("../../../../public/assets/images/piedra-te-apuntas.png")} />
          <RelativeWrapperText inverse>
            {introText_6}
          </RelativeWrapperText>
          <Button
            onClick={handleNext}
            selected={true}
          >
            <b>¡Estoy Listo!</b>
          </Button>
        </SemiSection>
      </ScrollWrapper>
    </GlobalWrapper>
  );
};