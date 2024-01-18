import { useContext, useState } from 'react';
import styled, { css } from 'styled-components';
import { initialButtonText, introductionText1_1, purposeText, finalIntroductionText, FinalSectionText, finalSectionButtonText, finalSectionTitle } from '../../../assets/texts/textConfirmationPage';
import { CustomButton } from '../../../theme/components/Button';
import { LevelContext } from '../../../theme/components/ProcessWizard';
import { Heading, Section, Subtitle, Text } from '../../../theme/globalStyles';
import { LevelContextItf } from '../../../types';
import { useCustomNavigate } from '../../../theme/customHooks/useCustomNavigate';
import { adjustUrlForEnvironment } from '../../../serverConfig';





// checked and not checked styles
const activeStyles = css`
    max-height: 1000px;
`

const unactiveStyles = () => css`
    max-height: 1000px;
`


const TextWrapper = styled.div`
    margin: auto auto;
    display: block;
    position: absolute;
    inset: 48px auto auto ;
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


interface WrapperItf {
    active: boolean;
}
const SectionWrapper = styled(Section) <WrapperItf>`
    position: relative;
    transition:  transform 1s, max-height 1.3s ease-out;
    ${({ active }) => (active === true ? activeStyles : unactiveStyles)}
`;
const NextButton = styled(CustomButton)`
    margin-top: 48px;
`;
const GradientDiv = styled.div`
    position:absolute;
    height: 50%;
    width: 100vw;
    margin-left:-24px;
    background: linear-gradient(to top, rgba(241, 237, 220, 1) 5%, rgba(241, 237, 220, 0.6) 20%,rgba(255, 255, 255,0) 85%);
`
const BackgrounImage = styled.img`
    width: 100vw;
    height: 50%;
    position:absolute;
    inset: 0;
    top:auto;
    object-fit: cover;
`;

export const FinalSection: React.FC =
    ({ }) => {
        const customNavigate = useCustomNavigate();
        const handleClick = () => {
            customNavigate('nuestra-historia')
        }
        return (

            <SectionWrapper inverse={true} active={true}>
                <GradientDiv></GradientDiv>
                <BackgrounImage src={adjustUrlForEnvironment("../../../../public/assets/images/Camino.png")}/>
                <TextWrapper>
                    <HighlightedText inverse={true}>
                            <b>{finalSectionTitle}</b>
                    </HighlightedText>
                    <IntroductionText inverse={true}>
                        <FinalSectionText/>
                    </IntroductionText>
                    <NextButton
                        selected={true}
                        onClick={() => { handleClick() }}
                    ><b>{finalSectionButtonText}</b>
                    </NextButton>
                </TextWrapper>
                

            </SectionWrapper>

        )
    }
