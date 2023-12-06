import { ReactNode, useContext } from 'react';
import { ParallaxContainer } from './ParallaxContainer'
import { LevelContext } from './ProcessWizard'
import { DecorationImage } from '../../components/ParallaxDecoration'
import { HeroSection } from '../../sections/HeroSection';
import { ConfirmationSection } from '../../sections/ConfirmationSection';
import { LevelContextItf, ListOfGuests } from '../../types';
import styled from "styled-components";

const GlobalSectionWrapper = styled.div`
    width: 100vw;
    height: 100vh;
    
`;

interface Props {
  children?: (ReactNode[] | ReactNode),
  sections: ReactNode[]
}
export const SectionsWrapper: React.FC<Props> =
  ({ children: children, sections }) => {
    const levelContext: LevelContextItf | undefined = useContext(LevelContext);
    const currentSection = levelContext?.levels?.['Section'];
    return (
      <GlobalSectionWrapper>
        <ParallaxContainer active={currentSection === 1}
          parallaxChildren2={[
            <DecorationImage key="1" 
            initialPos={[-0,0.05]} initialSize={50}
            src="../../public/assets/images/testSmall.svg" />,
            <DecorationImage key="2" 
            initialPos={[-0,0.83]} initialSize={400}
            src="../../public/assets/images/testSmall.svg" />,
            <DecorationImage key="3" 
            initialPos={[0.96,0.7]} initialSize={60}
            src="../../public/assets/images/testSmall2.svg" />,
            <DecorationImage key="4" 
            initialPos={[0.8,0.12]} initialSize={40}
            src="../../public/assets/images/testSmall3.svg" />
          ]}
          parallaxChildren3={[
            <DecorationImage key="1" 
            initialPos={[0.9,0.95]} initialSize={230}
            src="../../public/assets/images/testSmall2.svg" />,
            <DecorationImage key="2" 
            initialPos={[0.9,0.1]} initialSize={60}
            src="../../public/assets/images/testSmall.svg" />,
          ]}
          parallaxChildren0={
            sections
          }>
        </ParallaxContainer>
      </GlobalSectionWrapper>

    )
  }
