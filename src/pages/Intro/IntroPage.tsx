import { SectionsWrapper } from '../../theme/components/SectionsWrapper'


import styled from 'styled-components';

import { useState } from 'react'

import { IntroSection } from './sections/IntroSection';
import { IntroSection2 } from './sections/IntroSection2';
import { CustomButton } from '../../theme/components/Button';
import { useCustomNavigate } from '../../theme/customHooks/useCustomNavigate';


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
export const IntroPage: React.FC= () => {

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

  const HistoryButton = styled(CustomButton)`
    position: absolute;
    bottom: 24px;
    left: 0;
    right: 0;
    margin: 0 auto;
    max-width: 200px;
    background-color: #ffffff00;
    z-index: 100;
    
`;

const handleNext = () => {
  
  if (currentSection >= 1) {
    customNavigate('asistencia');
  }
  else{
    setCurrentSection(currentSection + 1);
  }
  
};

return (
  <GlobalWrapper>
    <SectionsWrapper
      currentSection={currentSection}
      sections={[
        <IntroSection key={1} />,
        <IntroSection2 key={2} />
      ]}
    />
    <HistoryButton
      onClick={handleNext}
      highlighted={true}
    >
      Siguiente
    </HistoryButton>
  </GlobalWrapper>
);
};