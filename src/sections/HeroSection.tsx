import { useState } from 'react';
import styled, { css } from 'styled-components';
import { dateText, initialButtonText, introductionText1_2, introductionText1_1, introductionText2, introductionText3, mainTitleText, purposeText } from '../assets/texts/mainText';
import { CustomButton } from '../theme/components/Button';
import { globalColors, MainHeading, Section, Text } from '../theme/globalStyles';

// checked and not checked styles
const activeStyles = css`
    transform: translateY(0%);
    max-height: 1000px;
`
const unactiveStyles = css`
    transform: translateY(-120%);
    max-height: 0px;
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
    ${({ active }) => (active === true ? activeStyles : unactiveStyles)}
`;


export const HeroSection: React.FC =
    ({ }) => {
        const [activeState, setActiveState] = useState<boolean>(true);
        const handleClick = () => { setActiveState(false) }
        return (
            <HeroSectionWrapper inverse={true} active={activeState}>
                <TextWrapper>
                    
                    <IntroductionText inverse={true}>
                        {introductionText1_1}
                        <HighlightedText inverse={true}>
                        <u>{purposeText}</u>
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

            </HeroSectionWrapper>
        )
    }
