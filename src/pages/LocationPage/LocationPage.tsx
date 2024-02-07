import styled, { css, keyframes } from "styled-components";
import { Column, Heading, Icon, Image, MainHeading, NameHeading, OtherHeading, Row, Section, Subtitle, Text, globalColors } from "../../theme/globalStyles";
import { useCustomNavigate } from "../../theme/customHooks/useCustomNavigate";
import { locationSubtitle, locationTitle, locationsDict } from "../../assets/texts/locationTexts"
import React, { Fragment, useEffect, useState } from "react";
import { AnimatePresence, motion } from 'framer-motion';
import { DecorationImage } from "../../components/ParallaxDecoration";
import { adjustUrlForEnvironment } from "../../serverConfig";
import { CustomButton } from "../../theme/components/Button";
import { Link } from "react-router-dom";

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
  initialButton: {
    opacity: 0,
  },
  animateButton: (custom: number) => ({
    opacity: 1,
    transition: {
      duration: 1,
      delay: custom * 0.4,
      type: "tween",
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
  width: fit-content;
  margin-top: auto;
  margin-bottom: 0;
  height: calc(100% - 25vh);
  object-fit: contain;
  object-position: -20% 0;
  z-index:10;
  inset: 0;
  opacity: 0.5;
`
const BackButtom = styled(CustomButton)`
    position: relative;
    inset: 0;
    display:block;
    top: auto;
    width: fit-content;
    margin: 64px auto 0 auto;
    z-index: 50;
    color:${globalColors.secondary[600]};
    font-weight: 600;
    background-color:${globalColors.secondary[100]}bb;
    border: none;
`
const StyledIframe = styled.iframe`
  position: relative;
  z-index: 50;
  width: 100%; // Use 100% to make it responsive and fit the container's width
  height: 250px; // Set a fixed height or make it responsive as per your design
  border: none; // Remove the default iframe border
  opacity: 1;
`;
const StyledUrl = styled.a`
  color: ${globalColors.color.primary}
` 
// Your existing styles
const LocationWrapperLink = styled(motion(Link))`
  display: flex;
  flex-direction: row;
  gap: 16px;
  justify-content: start;
  align-items: center;
  margin: 24px auto 16px 0;
  padding-left: 8px;
  text-decoration: none;
  background-color:${globalColors.secondary[100]}bb;
  border-radius: 8px;
`;

const LocationHeader = styled(Text)`
  font-size:9pt;
  letter-spacing: 0px;
  color:${globalColors.secondary[600]};
`
const LocationText = styled(Text)`
  font-weight: 600;
  border-radius: 4px;
  padding: 8px;
  font-size: 10pt;
  flex: 1;
`
const LocationIcon = styled.img`
  height: 3rem;
  width: 3rem;
  padding:8px;
  margin: 0;
`
const SmallIcon = styled.img`
  height:2rem;
  width:2rem;
  padding: 8px 16px 8px 0;
  margin:0;
`

export const LocationPage: React.FC = ({ }) => {
  const [selectedLink, setSelectedLink] = useState<null | string>(null);
  const [showIntroduction, setShowIntroduction] = useState(true);
  const customNavigate = useCustomNavigate();
  const handleNavigate = (subsection: string) => {
    setSelectedLink(subsection);
    const timer = setTimeout(() => { customNavigate(subsection); }, 500);
    return () => clearTimeout(timer);
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

  useEffect(() => {
    handleCloseBody();
  }, []);
  return (
    <SectionWrapper inverse>
      <BackgrounImage src={adjustUrlForEnvironment('assets/svgs/Mapa Acuarela.svg')} />
      <TextWrapper>
        <AnimatePresence>
          <CustomMotion key="title" zIndex={50} custom={0} variants={variants} initial="initial" animate="animate">
            <OtherHeading inverse>{locationTitle}</OtherHeading>
          </CustomMotion>

          <CustomMotion key="subtitle" zIndex={50} custom={1} variants={variants} initial="initial" animate="animate">
            <Text fontSize='11pt' inverse>{locationSubtitle}</Text>
          </CustomMotion>
          {locationsDict.map((location, index) => (
            <LocationWrapperLink key={index} custom={2+index} variants={variants} initial="initial" animate="animate"
              to={location.url} target="_blank">
              <LocationIcon src= {adjustUrlForEnvironment(location.icon)} alt={location.label} />
              
              <LocationText inverse>
              <LocationHeader><b>{location.title}</b></LocationHeader>
              <br/>
              {location.label}
              </LocationText>
              <SmallIcon src= {adjustUrlForEnvironment('assets/icons/arrow.svg')}/>
            </LocationWrapperLink>      
            ))}
          <CustomMotion key='backbuttom' custom={2+locationsDict.length} variants={variants} initial="initial" animate="animate">
            <BackButtom onClick={() => { customNavigate('home') }}>Volver al Home</BackButtom>
          </CustomMotion>
          
        </AnimatePresence>
      </TextWrapper>
      {/* <StyledIframe src="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d95326.74127542636!2d-4.734655149999992!3d41.69978484999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e0!4m5!1s0xd470b6e8c6934bd%3A0xc9d3f923c51b0e!2sIglesia%20de%20Santiago%2C%20C.%20Atrio%20Santiago%2C%202%2C%2047270%20Cigales%2C%20Valladolid!3m2!1d41.758127699999996!2d-4.6999282!4m5!1s0xd476d4d8c25a059%3A0x1da94f7e235d69e3!2sPl.%20del%20Pte.%2C%2047003%20Valladolid!3m2!1d41.6527148!2d-4.7314332!5e0!3m2!1sen!2ses!4v1707144908562!5m2!1sen!2ses" allowFullScreen={true} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></StyledIframe> */}
    </SectionWrapper>
  );
}