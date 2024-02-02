import styled, { css, keyframes } from "styled-components";
import { Heading, Image, MainHeading, OtherHeading, Section, Subtitle, Text } from "../../theme/globalStyles";
import { CustomButton } from "../../theme/components/Button";
import { useCustomNavigate } from "../../theme/customHooks/useCustomNavigate";
import { HomeBody, homeSubtitle, homeTitle } from "../../assets/texts/homeTexts"
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from 'framer-motion';
import { DecorationImage } from "../../components/ParallaxDecoration";
import { adjustUrlForEnvironment } from "../../serverConfig";

const variants = {
  initial: {
    opacity: 0,
    y: 20,
    maxHeight: "0px",
  },
  animate: (custom: number) => ({
    opacity: 1,
    y: 0,
    maxHeight: "700px",
    transition: {
      duration:1,
      delay: custom*0.4,
      type: "tween",
      maxHeight: {
        duration: 6
      }
    }
  }),
  exit: {
    opacity: 0,
    y: -20,
    maxHeight: "0px",
    transition:{
      duration:0.5,
      type: "tween",
      maxHeight: {
        duration: 2
      }
    }
  }
};
const TextWrapper = styled.div`
    margin: 64px auto auto;
    display: block;
    position: relative;
    height: 50%;
    max-width: 600px;
    > *{
        text-align: left;
        display: block;
    }
`;
const IntroductionText = styled(Text)`
    margin-top: 12px;
`;

const HeroSectionWrapper = styled(Section)`
    position: relative;
`;
const LinksWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 80vh;
`
const LinkPanel = styled.div`
  position: relative;
  height:200px;
  width: 200px;
  > *{
    z-index:50;
  }
`
const LinkBlob = styled.img`
  width: 140%;
  height: 140%;
  position: absolute;
  inset: -20% -20% auto auto;
  z-index: 20;
`

export const HomePage: React.FC = ({ }) => {
    
    const [showIntroduction, setShowIntroduction] = useState(true);
    const customNavigate = useCustomNavigate();
        const handleNavigate = (subsection: string) => {
            customNavigate(subsection);
    }
    const handleCloseBody = () => {
        const timer = setTimeout(() => {
            setShowIntroduction(false);
        }, 15000);
        return () => clearTimeout(timer);
    }
    const handleOpenBody = () => {
        setShowIntroduction(true);
        handleCloseBody();
    }
    interface LinkButtonItf {
      subsection: string,
      label: string,
      rootNumber: number,
    }
    const LinkButton: React.FC<LinkButtonItf> = ({
      subsection, label}) => (
        <LinkPanel onClick={() => handleNavigate(subsection)}>
          {label}
          <LinkBlob
            src={adjustUrlForEnvironment("assets/blobs/blob1.svg")}
          />
            
        </LinkPanel>
      
      )

    useEffect(() => {
        handleCloseBody();
    }, []);
    return (
        <HeroSectionWrapper inverse>
          <TextWrapper>
          <AnimatePresence>
            <motion.div key= "title" custom={0} variants={variants} initial="initial" animate="animate">
              <OtherHeading inverse>{homeTitle}</OtherHeading>
            </motion.div>

            <motion.div key="subtitle" custom={1} variants={variants} initial="initial" animate="animate">
              <Text inverse>{homeSubtitle}</Text>
            </motion.div>
            {!showIntroduction && (
                <motion.div key="openBodyButton" custom={0} variants={variants} initial="initial" animate="animate" exit="exit"
                    onClick={()=>{handleOpenBody()}}>
                    ...
                </motion.div>
              )}
               {showIntroduction && (
                <motion.div key="body" custom={2} variants={variants} initial="initial" animate="animate" exit="exit">
                  <IntroductionText>
                    <HomeBody />
                  </IntroductionText>
                </motion.div>
              )}
            <motion.div key="button" custom={3} variants={variants} initial="initial" animate="animate">
              <LinksWrapper>
                <LinkButton
                  subsection="nuestra-historia"
                  label="Nuestra Historia"
                  rootNumber={1}
                />
              </LinksWrapper>
            </motion.div>
            </AnimatePresence>
          </TextWrapper>
        </HeroSectionWrapper>
      );
}