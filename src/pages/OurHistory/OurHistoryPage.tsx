import { SectionsWrapper } from '../../theme/components/SectionsWrapper'


import styled from 'styled-components';

import { useState } from 'react'

import { OurHistorySection } from './sections/OurHistorySection';
import { DotsProgressWidget } from '../../theme/components/DotsProgressWidget';
import { ControlPropsItf } from '../../types';
import { NextBackControl } from '../../theme/components/Next&BackControl';
import { OurHistorySection2 } from './sections/OurHistorySection2';

const GlobalWrapper = styled.div`
overflow: hidden;
height: 98vh;
width: 98vw;
padding: 0;
margin: 0;
scroll: none;
`;

// intialize the context
export const OurHistoryPage: React.FC= () => {
  // States
  //const [stage, setStage] = useState<number>([]);

  const [currentSection, setCurrentSection] = useState<number>(0);
  
  const changeSection = (next?: boolean) => {
    setCurrentSection(currentSection + (next === false ? -1 : 1));
  }
  const controlProps: ControlPropsItf = {
    ControlComponent: NextBackControl,
    changeStage: changeSection,
    possibleNext: currentSection <1,
    possibleTakeBack: currentSection > 0  
  };
  
  return (
  <GlobalWrapper>
      <SectionsWrapper
        currentSection={currentSection}
        sections={[
          <OurHistorySection key={1}/>,
          <OurHistorySection2 key={2}/>]}
      />
      <DotsProgressWidget
        numStages = {2}
        currentStage={currentSection}
        Control={controlProps}
      />
  </GlobalWrapper>
)};