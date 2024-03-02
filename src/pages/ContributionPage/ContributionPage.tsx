import React, { useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { adjustUrlForEnvironment } from '../../serverConfig'; // Ensure this import is correct
import { OtherHeading, Text, globalColors } from '../../theme/globalStyles';
import { contributionBody, contributionSubtitle, contributionTitle } from '../../assets/texts/contributionTexts';

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
  top:25%;
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
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
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
        </AnimatePresence>
      </TextWrapper>

    </Container>
  );
};
