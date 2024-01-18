import { SectionsWrapper } from '../../theme/components/SectionsWrapper'


import styled from 'styled-components';

import { useState } from 'react'

import { IntroSection } from './sections/OurHistorySection';
import { IntroSection2 } from './sections/OurHistorySection2';
import { CustomButton } from '../../theme/components/Button';
import { useCustomNavigate } from '../../theme/customHooks/useCustomNavigate';
import { adjustUrlForEnvironment } from '../../serverConfig';
import { Text } from '../../theme/globalStyles';


const GlobalWrapper = styled.div`
  overflow: hidden;
  height: 98%;
  width: 98vw;
  padding: 0;
  margin: 0;
  scroll: none;
  position: relative;
  transition: opacity 0.5s ease; /* Added transition for opacity */
`;

// intialize the context
export const OurHistoryPage: React.FC= () => {

  // States
  //const [stage, setStage] = useState<number>([]);

  const [currentSection, setCurrentSection] = useState<number>(0);
  const customNavigate = useCustomNavigate();
  // const handleNext = () => {
  //   if (currentSection >=1) {
  //     const groupID = searchParams.get('groupID');
  //     const token = searchParams.get('token');
  //     navigate(`/asistencia?groupID=${groupID}&token=${token}`);
  //   }
  //   setCurrentSection(currentSection + 1);
  // }

const TextWrapper = styled(Text)`
    text-align: center;
    margin-top:16px;
`;
const CustomVideo = styled.video`
  width: 164px;
  margin-top: 50%;
`;

return (
  <GlobalWrapper>
    
    <CustomVideo loop muted autoPlay>
      <source src={adjustUrlForEnvironment("../../../../public/assets/animated-images/in-maintenance-web.webm")} type="video/webm"/>
      Página en mantenimiento
    </CustomVideo>
    <TextWrapper inverse={true}>
      ¡Vaya! La página de historia aun no está lista. Estamos trabajando para tenerla cuanto antes.
    </TextWrapper>
  </GlobalWrapper>
);
};
