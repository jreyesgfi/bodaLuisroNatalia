import { SectionsWrapper } from '../../theme/components/SectionsWrapper'


import styled from 'styled-components';

import { useState } from 'react'

import { OurHistorySection } from './sections/OurHistorySection';
import { DotsProgressWidget } from '../../theme/components/DotsProgressWidget';
import { OurHistorySection2 } from './sections/OurHistorySection2';
import { CustomButton } from '../../theme/components/Button';
import { useNavigate, useSearchParams } from 'react-router-dom';

const GlobalWrapper = styled.div`
overflow: hidden;
height: 98vh;
width: 98vw;
padding: 0;
margin: 0;
scroll: none;
position: relative;
`;

// intialize the context
export const OurHistoryPage: React.FC= () => {
  
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  // States
  //const [stage, setStage] = useState<number>([]);

  const [currentSection, setCurrentSection] = useState<number>(0);
  
  const handleNext = () => {
    if (currentSection >=1) {
      const groupID = searchParams.get('groupID');
      const token = searchParams.get('token');
      navigate(`/asistencia?groupID=${groupID}&token=${token}`);
    }
    setCurrentSection(currentSection + 1);
  }

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
  
  return (
  <GlobalWrapper>
      <SectionsWrapper
        currentSection={currentSection}
        sections={[
          <OurHistorySection key={1}/>,
          <OurHistorySection2 key={2}/>]}
      />
      <HistoryButton
        onClick={handleNext}
        highlighted={true}
        > 
        Siguiente
      </HistoryButton>

  </GlobalWrapper>
)};