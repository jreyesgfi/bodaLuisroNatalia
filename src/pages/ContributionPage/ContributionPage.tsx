import React, { useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { adjustUrlForEnvironment } from '../../serverConfig'; // Ensure this import is correct
import { OtherHeading, Text, globalColors } from '../../theme/globalStyles';
import { contributionBody, contributionSubtitle, contributionTitle } from '../../assets/texts/contributionTexts';
import { CustomButton } from '../../theme/components/Button';
import { useCustomNavigate } from '../../theme/customHooks/useCustomNavigate';

const Container = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px;
`;

const TextWrapper = styled.div`
  position: absolute;
  z-index: 50;
  inset:0;
  top:12vh;
  display: block;
  margin-left: 24px;
  width: 100%; // Ensure it fills the container
  max-width: 600px;
  > * {
    text-align: left;
    display: block;
  }
`;

const IntroductionText = styled(motion.p)` // Use motion.p for animation
  margin-top: 12px;
`;

const IBANWrapper = styled(motion.div)`
  display: flex;
  align-items: center;
  cursor: pointer;
  margin-top:12px;
`;

const IBANText = styled.span`
  font-size: 18px;
  margin-right: 8px;
`;

const Message = styled.span`
  color: ${globalColors.color.primary};
  margin-left: 8px;
`;
const BackgrounImage = styled.img`
  position:absolute;
  width: 100%;
  height: 100%;
  z-index:10;
  inset: 0;
`

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

export const ContributionPage = () => {
  const [copied, setCopied] = useState(false);
  const IBAN = 'ES0221032356710030105052'; // Replace with the actual IBAN number
  const copyIconUrl = adjustUrlForEnvironment('assets/icons/copy.svg'); // Adjust the path

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text).then(
      () => setCopied(true),
      (err) => console.error('Error copying text to clipboard', err)
    );
  };

  interface CustomMotionItf {
    zIndex: number;
  }
  const CustomMotion = styled(motion.div) <CustomMotionItf>`
    z-index: ${({ zIndex }) => zIndex};
  `;
  const BackButtom = styled(CustomButton)`
    position: relative;
    inset: 0;
    display:block;
    top: auto;
    width: fit-content;
    margin-top: 16px;
    z-index: 50;
    color:${globalColors.secondary[600]};
    font-weight: 600;
    background-color:${globalColors.secondary[100]}bb;
    border: none;
`
  const customNavigate = useCustomNavigate();
  return (
    <Container initial="hidden" animate="visible" variants={variants}>
      <BackgrounImage src={adjustUrlForEnvironment('assets/svgs/contribution-background.svg')}/>
      <BackgrounImage src={adjustUrlForEnvironment('assets/svgs/one_line_tree.svg')}/>
      <BackgrounImage src={adjustUrlForEnvironment('assets/svgs/one_line_couple.svg')}/>
      <TextWrapper>
        <AnimatePresence>
          <CustomMotion key="subtitle" zIndex={50} custom={1} variants={variants} initial="initial" animate="animate">
            <Text inverse>{contributionSubtitle}</Text>
          </CustomMotion>
          <CustomMotion key="title" zIndex={50} custom={0} variants={variants} initial="initial" animate="animate">

            <OtherHeading inverse>{contributionTitle}</OtherHeading>
          </CustomMotion>
          <IntroductionText key="intro" initial="initial" animate="animate" variants={variants}>
            <Text inverse fontSize='10pt' letterSpacing="1px">
              {contributionBody}
            </Text>
          </IntroductionText>
          <IBANWrapper onClick={() => copyToClipboard(IBAN)} variants={variants}>
            <IBANText>
              <Text inverse fontSize='10pt' letterSpacing="1px">
                {IBAN}
              </Text>
            </IBANText>
            <img src={copyIconUrl} alt="Copy" width="24" height="24" />
            {copied && <Message>Copiado</Message>}
          </IBANWrapper>
          <CustomMotion key='backbuttom' custom={3} variants={variants} initial="initial" animate="animate">
            <BackButtom onClick={() => { customNavigate('home') }}>Volver al Home</BackButtom>
          </CustomMotion>
        </AnimatePresence>
      </TextWrapper>

    </Container>
  );
};
