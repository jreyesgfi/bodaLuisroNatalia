import styled, { css, keyframes } from "styled-components";
import { Heading, MainHeading, OtherHeading, Section, Subtitle, Text } from "../../theme/globalStyles";
import { CustomButton } from "../../theme/components/Button";
import { useCustomNavigate } from "../../theme/customHooks/useCustomNavigate";
import {HomeBody, homeSubtitle, homeTitle} from "../../assets/texts/homeTexts"

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

// Fade-out keyframes
const fadeOutToTop = keyframes`
  from {
    opacity: 1;
    transform: translateY(0);
  }
  to {
    opacity: 0;
    transform: translateY(-20px);
  }
`;
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
        animation: ${fadeIn} 0.5s ease-out forwards;
        animation-delay: calc(0.2s * var(--animation-order));
        opacity: 0; // Start elements as invisible
    }
`;
const IntroductionText = styled(Text)`
    margin-top: 24px;
    animation: ${fadeOutToTop} 0.5s ease-out forwards;
    animation-delay: 3s;
`;
const LinkButton = styled(CustomButton)`
`;
const HeroSectionWrapper = styled(Section)`
    position: relative;
    transition:  transform 1s, max-height 1.3s ease-out;
`;

interface AnimatedProps {
    index?: number;
}
const withAnimation = (Component: any) => styled(Component)<AnimatedProps>`
  animation: ${fadeIn} 0.5s ease-out forwards;
  animation-delay: ${({ index }) => `${index! * 0.2}s`};
`;
const AnimatedOtherHeading = withAnimation(OtherHeading);
const AnimatedText = withAnimation(Text);
const AnimatedIntroductionText = withAnimation(IntroductionText);
const AnimatedLinkButton = withAnimation(LinkButton);

export const HomePage: React.FC = ({ }) => {
    const customNavigate = useCustomNavigate();
    const handleClick = (subsection: string) => {
        customNavigate(subsection);
    }
    return (
        <HeroSectionWrapper inverse>
          <TextWrapper>
            <AnimatedOtherHeading inverse index={0}>{homeTitle}</AnimatedOtherHeading>
            <AnimatedText inverse index={1}>
              {homeSubtitle}
            </AnimatedText>
            <AnimatedIntroductionText index={2}>
              <HomeBody />
            </AnimatedIntroductionText>
            <AnimatedLinkButton
              selected={true}
              onClick={() => handleClick('nuestra-historia')}
              index={3}
            >
              Nuestra historia
            </AnimatedLinkButton>
          </TextWrapper>
        </HeroSectionWrapper>
    );
}