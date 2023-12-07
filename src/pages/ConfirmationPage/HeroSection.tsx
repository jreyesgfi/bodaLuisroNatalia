import { useContext, useState } from 'react';
import styled, { css } from 'styled-components';
import { dateText, initialButtonText, introductionText1_2, introductionText1_1, introductionText2, introductionText3, mainTitleText, purposeText, finalIntroductionText } from '../../assets/texts/textConfirmationPage';
import { CustomButton } from '../../theme/components/Button';
import { LateralBigImage } from '../../theme/components/LateralBigImage';
import { ParallaxContainer } from '../../theme/components/ParallaxContainer';
import { LevelContext } from '../../theme/components/ProcessWizard';
import { globalColors, Heading, Image, MainHeading, Section, Subtitle, Text } from '../../theme/globalStyles';
import { LevelContextItf } from '../../types';





// checked and not checked styles
const activeStyles = css`
    max-height: 1000px;
`

const unactiveStyles = (level: number) => css`
    max-height: 1000px;
`


const TextWrapper = styled.div`
    margin: auto auto;
    display: block;
    position: absolute;
    inset: 0 auto 0;
    height: 50%;
    max-width: 600px;
    > *{
        text-align: left;
        display: block;
    }
`;

const IntroductionText = styled(Text)`

`;

const HighlightedText = styled(Heading)`
`;
const PurposeText = styled(CustomButton)`
    font-family: primary-light, monospace;
    font-size: 20pt;
`;

interface HeroWrapperItf {
    active: boolean;
}
const HeroSectionWrapper = styled(Section) <HeroWrapperItf>`
    height: 100%;
    width: 100%;  
    position: relative;
    transition:  transform 1s, max-height 1.3s ease-out;
    ${({ active }) => (active === true ? activeStyles : unactiveStyles(1))}
`;
const NextButton = styled(CustomButton)`
    margin-top: 48px;
`;

export const HeroSection: React.FC =
    ({ }) => {
        const [activeState, setActiveState] = useState<boolean>(true);
        const levelContext:LevelContextItf|undefined = useContext(LevelContext);
        const handleClick = () => { 
            setActiveState(false);
            levelContext?.changeLevels?.['Section']?.(true);
        }
        return (

            <HeroSectionWrapper inverse={true} active={activeState}>
                
                <TextWrapper>
                    <Subtitle inverse={true}>{introductionText1_1}</Subtitle>
                    <IntroductionText inverse={true}>
                        <HighlightedText inverse={true}>
                            <b>{purposeText}</b>
                        </HighlightedText>
                        {finalIntroductionText}
                    </IntroductionText>
                    <NextButton
                        selected={true}
                        onClick={() => { handleClick() }}
                    >{initialButtonText}
                    </NextButton>
                </TextWrapper>
                

            </HeroSectionWrapper>

        )
    }
/*
<IntroductionText inverse={true}>
                        {introductionText1_1}
                        <HighlightedText inverse={true}>
                            <b>{purposeText}</b>
                        </HighlightedText>
                        <br/>
                        {introductionText1_2}
                    </IntroductionText>
                    <MainHeading inverse={true}>{mainTitleText}</MainHeading>
                    <IntroductionText inverse={true}>
                        {introductionText2}
                        <HighlightedText inverse={true}>
                            &nbsp;<b>{dateText}</b>&nbsp;
                        </HighlightedText>
                        {introductionText3}
                    </IntroductionText>*/