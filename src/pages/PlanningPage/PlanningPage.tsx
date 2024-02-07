import styled, { css, keyframes } from "styled-components";
import { Column, Heading, Image, MainHeading, NameHeading, OtherHeading, Row, Section, Subtitle, Text, globalColors } from "../../theme/globalStyles";
import { useCustomNavigate } from "../../theme/customHooks/useCustomNavigate";
import { HomeBody, HomeLinks, homeSubtitle, homeTitle } from "../../assets/texts/homeTexts"
import React, { Fragment, useEffect, useState } from "react";
import { AnimatePresence, motion } from 'framer-motion';
import { DecorationImage } from "../../components/ParallaxDecoration";
import { adjustUrlForEnvironment } from "../../serverConfig";
import { CustomButton } from "../../theme/components/Button";

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
    }
  },
  exitLink: {
    opacity: 0,
    y: 0,
    transition: {
      duration: 0.5,
      type: "tween",
    }
  },
  exitDecoration: {
    opacity: 1,
    y: 0,
    maxWidth: "0px",
    backgroundColor: globalColors.grey.light,
    transition: {
      duration: 0.5,
      type: "tween",
      maxHeight: {
        duration: 2
      },
      maxWidth: {
        duration: 2
      }
    }
  }
};
const TextWrapper = styled.div`
    position: relative;
    z-index: 50;
    margin: 32px auto auto;
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

const SectionWrapper = styled(Section)`
    position: relative;
`;

interface CustomMotionItf {
  zIndex: number;
}
const CustomMotion = styled(motion.div) <CustomMotionItf>`
  z-index: ${({ zIndex }) => zIndex};
`;

const LinksWrapper = styled(Column)`
  display: flex;
  position: relative;
  align-items: center;
  width: 100%;
  padding: 16px 0;
  gap: 8px;
  overflow-y: hidden;
  z-index: 20;
`
interface LinkAndDecorWrapperItf { alignRight: boolean }
const LinkAndDecorWrapper = styled.div<LinkAndDecorWrapperItf>`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 320px;
  max-width: 100%;
  gap: 8px;
  ${({ alignRight }) => alignRight === true && 'flex-direction: row-reverse;'} /* Align to the right if alignRight is true */
`;

interface DecorativeSquareItf {
  maxWidth?: number;
  height?: number;
  odd?: boolean;
}
const DecorativeSquare = styled(CustomMotion) <DecorativeSquareItf>`
  flex-grow: 1;
  height: ${({ height }) => height || 60}px;
  max-width: ${({ maxWidth, odd }) => maxWidth || 80 + (odd ? 1 : -1) * 20}px;
  background-color: ${globalColors.grey.light};
  // border: 1px solid ${globalColors.dark.second};
  border-radius: 8px;
`;
const ColorDict: { [key: number]: string } = {
  1: globalColors.color.third,
  2: globalColors.primary[200],
  3: globalColors.primary[200],
  4: globalColors.color.third,
}

interface LinkRoundedSquareItf {
  rootNumber: number;
  backgroundImage: string;
  faded: boolean;
}
const LinkRoundedSquare = styled(CustomMotion) <LinkRoundedSquareItf>`
  position: relative;
  height: 60px;
  width: fit-content;
  min-width: 160px;
  flex-shrink: 0;
  align-items: bottom;
  border-radius: 8px;
  background-color: ${({ rootNumber, faded }) => faded ? globalColors.grey.light : (ColorDict[rootNumber] || globalColors.color.third)};
  background-image: url(${({ backgroundImage, faded }) => faded ? 'none' : adjustUrlForEnvironment(backgroundImage)});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 20% 15%;
  overflow: hidden;
  transition: background-color 0.5s ease, opacity 0.5s ease, background-image 0.5s ease; // Adding transition for background-image
  opacity: ${({ faded }) => faded ? 0 : 1};
`;
const LinkText = styled(Heading)`
  position: relative;
  color: ${globalColors.dark.primary};
  font-size: 18px;
  margin: 32px auto 0 0;
  padding: 4px 24px 4px 8px;
`
const LinkIcon = styled.img`
  position:absolute;
  inset: 0;
  z-index: 50;
  width: 100%;
  padding: 8px;
  max-height: 65%;
  margin: 0 0 auto;
`;

const BackgrounImage = styled.img`
  position:absolute;
  width: 100%;
  height: 100%;
  z-index:10;
  inset: 0;
  margin-top: -32px;
`
const BackButtom = styled(CustomButton)`
    position: absolute;
    inset: 0;
    top: auto;
    width: fit-content;
    margin: 8px auto;
    z-index: 50;
`

export const PlanningPage: React.FC = ({ }) => {
    const customNavigate = useCustomNavigate();

  return (
    <SectionWrapper inverse>
      <BackgrounImage src={adjustUrlForEnvironment('assets/svgs/planning-watercolor.svg')}/>
      <BackButtom onClick={()=>{customNavigate('home')}}>Volver al Home</BackButtom>
    </SectionWrapper>
  );
}