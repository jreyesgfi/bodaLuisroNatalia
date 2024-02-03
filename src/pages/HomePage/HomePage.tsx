import styled, { css, keyframes } from "styled-components";
import { Column, Heading, Image, MainHeading, NameHeading, OtherHeading, Row, Section, Subtitle, Text, globalColors } from "../../theme/globalStyles";
import { useCustomNavigate } from "../../theme/customHooks/useCustomNavigate";
import { HomeBody, HomeLinks, homeSubtitle, homeTitle } from "../../assets/texts/homeTexts"
import React, { Fragment, useEffect, useState } from "react";
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
      duration: 1,
      delay: custom * 0.4,
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
    transition: {
      duration: 0.5,
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
const LinksWrapper = styled(Column)`
  position: relative;
  align-items: center;
  width: 100%;
  padding: 32px 0;
  gap: 8px;
  overflow-y: scroll;
`
const LinkAndDecorWrapper = styled.div`
  display: flex; // Use flex to position children
  flex-direction: row; // Layout children in a row
  justify-content: space-between; // Space between items
  align-items: center; // Align items vertically
  width: 100%; // Take up full width
  gap: 8px; // Space between children
`;

interface DecorativeSquareItf {
  backgroundImage: string;
  alignRight?: boolean;
}
const DecorativeSquare = styled.div<DecorativeSquareItf>`
  flex-grow: 1;
  height: 60px;
  background-image: url(${({ backgroundImage }) => adjustUrlForEnvironment("assets/blobs/blob1.svg")});
  background-size: 200% 200%;
  background-repeat: no-repeat;
  // border: 1px solid ${globalColors.dark.second};
  border-radius: 8px;
  ${({ alignRight }) => alignRight && 'align-self: flex-end;'} /* Align to the right if alignRight is true */
`;
const ColorDict: { [key: number]: string } = {
  1: globalColors.primary[200],
  2: globalColors.secondary[200],
  3: globalColors.color.third
}

interface LinkRoundedSquareItf {
  rootNumber: number,
}
const LinkRoundedSquare = styled.div<LinkRoundedSquareItf>`
  position: relative;
  height:70px;
  width: 250px;
  flex-shrink:0;
  border-radius: 8px;
  background-color: ${({ rootNumber }) => ColorDict[rootNumber] || globalColors.color.third};
  > *{
    position: absolute;
  }
  overflow: hidden;
`
const LinkText = styled(Heading)`
  color: ${globalColors.dark.primary};
  font-size: 16pt;
  margin: 4px 4px;
`
interface CustomMotionItf {
  zIndex: number;
}
const CustomMotion = styled(motion.div) <CustomMotionItf>`
  z-index: ${({ zIndex }) => zIndex};
`;

const LinkPanel = styled.div`
  position: relative;
  height:150px;
  width: 150px;
  > *{
    position: absolute;
  }
  overflow: visible;
`
const LinkBlob = styled.img`
  width: 200%;
  height: 200%;
  position: absolute;
  inset: -50% -50% auto auto;
  z-index: 20;
  pointer-events: none;
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
    rootNumber?: number,
  }
  const LinkButton: React.FC<LinkButtonItf> = ({
    subsection, label, rootNumber = 1 }) => (
    <LinkRoundedSquare rootNumber={rootNumber}
      onClick={() => handleNavigate(subsection)}>
      <LinkText inverse>{label}</LinkText>
    </LinkRoundedSquare>
    // <LinkPanel onClick={() => handleNavigate(subsection)}>
    //   <LinkText inverse>{label}</LinkText>
    //   <LinkBlob
    //     src={adjustUrlForEnvironment("assets/blobs/blob1.svg")}
    //   />
    // </LinkPanel>
  )

  useEffect(() => {
    handleCloseBody();
  }, []);
  return (
    <HeroSectionWrapper inverse>
      <TextWrapper>
        <AnimatePresence>
          <CustomMotion key="title" zIndex={50} custom={0} variants={variants} initial="initial" animate="animate">
            <OtherHeading inverse>{homeTitle}</OtherHeading>
          </CustomMotion>

          <CustomMotion key="subtitle" zIndex={50} custom={1} variants={variants} initial="initial" animate="animate">
            <Text inverse>{homeSubtitle}</Text>
          </CustomMotion>
          {!showIntroduction && (
            <CustomMotion key="openBodyButton" zIndex={50} custom={0} variants={variants} initial="initial" animate="animate" exit="exit"
              onClick={() => { handleOpenBody() }}>
              ...
            </CustomMotion>
          )}
          {showIntroduction && (
            <CustomMotion key="body" zIndex={50} custom={2} variants={variants} initial="initial" animate="animate" exit="exit">
              <IntroductionText>
                <HomeBody />
              </IntroductionText>
            </CustomMotion>
          )}
          <CustomMotion key="button" zIndex={20} custom={6} variants={variants} initial="initial" animate="animate">
            <LinksWrapper>
              {HomeLinks.map((link, index) => (
                <LinkAndDecorWrapper key={link.href}>
                  {/* Decorative element on the left for even items */}
                  {index % 2 === 0 && <DecorativeSquare backgroundImage="path-to-your-image.svg" />}

                  {/* Link button in the middle */}
                  <LinkRoundedSquare rootNumber={index} onClick={() => handleNavigate(link.href)}>
                    <LinkText inverse>{link.title}</LinkText>
                  </LinkRoundedSquare>

                  {/* Decorative element on the right for odd items */}
                  {index % 2 === 1 && <DecorativeSquare alignRight backgroundImage="path-to-your-image.svg" />}
                </LinkAndDecorWrapper>
              ))}
            </LinksWrapper>
          </CustomMotion>
        </AnimatePresence>
      </TextWrapper>
    </HeroSectionWrapper>
  );
}