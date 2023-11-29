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
            <DecorationImage src="../../public/assets/images/testSmall.svg" />,
            <DecorationImage src="../../public/assets/images/testSmall2.svg" />,
            <DecorationImage src="../../public/assets/images/testSmall3.svg" />
          ]}
          parallaxChildren0={
            sections
          }>
        </ParallaxContainer>
      </GlobalSectionWrapper>

    )
  }