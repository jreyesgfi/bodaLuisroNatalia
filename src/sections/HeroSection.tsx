import { useState } from 'react';
import styled, { css } from 'styled-components';
import { dateText, initialButtonText, introductionText1_2, introductionText1_1, introductionText2, introductionText3, mainTitleText, purposeText } from '../assets/texts/mainText';
import { CustomButton } from '../theme/components/Button';
import { LateralBigImage } from '../theme/components/LateralBigImage';
import { ParallaxContainer } from '../theme/components/ParallaxContainer';
import { globalColors, Image, MainHeading, Section, Text } from '../theme/globalStyles';





// checked and not checked styles
const activeStyles = css`
    max-height: 1000px;
`

const unactiveStyles = (level: number) => css`
    max-height: 1000px;
`


const TextWrapper = styled.div`
    margin: auto 32px auto;
    display: block;
    position: absolute;
    inset: 0 auto 0;
    height: 60vh;
    max-width: 600px;
    > *{
        text-align: left;
        display: block;
    }
`;

const IntroductionText = styled(Text)`

`;

const HighlightedText = styled(Text)`
    font-size: 24pt;
    margin: 0 8px;
`;
const PurposeText = styled(CustomButton)`
    font-family: primary-light, monospace;
    font-size: 20pt;
`;

interface HeroWrapperItf {
    active: boolean;
}
const HeroSectionWrapper = styled(Section) <HeroWrapperItf>`
    height: 100vh;
    width: 100vw;   
    position: relative;
    transition:  transform 1s, max-height 1.3s ease-out;
    ${({ active }) => (active === true ? activeStyles : unactiveStyles(1))}
`;

const StyledImage = styled.img`
    max-height: 50px;
    max-width: 50px;
    position: absolute;
    top: 200px;
    left: 200px;
    transition: transform 0.2s;
`;



export const HeroSection: React.FC =
    ({ }) => {
        const [activeState, setActiveState] = useState<boolean>(true);
        const handleClick = () => { setActiveState(false) }
        return (
            <ParallaxContainer active={activeState}
                parallaxChildren2={[
                    <StyledImage src="../../public/assets/images/testSmall.svg" />,
                    <StyledImage src="../../public/assets/images/testSmall2.svg" />,
                    <StyledImage src="../../public/assets/images/testSmall3.svg" />]}
                parallaxChildren0={[
                    <HeroSectionWrapper inverse={true} active={activeState}>

                        <TextWrapper>

                            <IntroductionText inverse={true}>
                                {introductionText1_1}
                                <HighlightedText inverse={true}>
                                    {purposeText}
                                </HighlightedText>
                                {introductionText1_2}
                            </IntroductionText>
                            <MainHeading inverse={true}>{mainTitleText}</MainHeading>
                            <IntroductionText inverse={true}>
                                {introductionText2}
                                <HighlightedText inverse={true}>
                                    <b>{dateText}</b>
                                </HighlightedText>
                                {introductionText3}
                            </IntroductionText>
                            <CustomButton
                                selected={true}
                                onClick={() => { handleClick() }}
                            >{initialButtonText}</CustomButton>
                        </TextWrapper>
                        <LateralBigImage src="../../public/assets/images/test1.png" />

                    </HeroSectionWrapper>
                ]}>
            </ParallaxContainer>
        )
    }
