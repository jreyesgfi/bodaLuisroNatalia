import styled from 'styled-components';

import { CustomButton } from '../../theme/components/Button';
import { useCustomNavigate } from '../../theme/customHooks/useCustomNavigate';
import { Section, Text } from '../../theme/globalStyles';
import { introText_1_1, introText_1_2, introText_2, introText_3, introText_4, introText_5, introText_6 } from '../../assets/texts/introTexts';
import { adjustUrlForEnvironment } from '../../serverConfig';


const GlobalWrapper = styled.div`
  overflow: hidden;
  height: 98%;
  width: 100%;
  padding: 0;
  margin: 0;
  scroll: none;
  position: relative;
  transition: opacity 0.5s ease; /* Added transition for opacity */
`;
const ScrollWrapper = styled.div`
width: 100%;
height: 100%;
overflow: scroll;
scroll-snap-type: y mandatory;
`;
const SemiSection = styled(Section)`
height: 90%;
border: 1px solid red;
width: 100vw;
padding: 0;
`;

const WrapperText = styled(Text)`
text-align: left;
position: absolute;
inset: 0;
margin: auto;
margin-top: 64px;
max-height: fit-content;
z-index:100;
`;
const RelativeWrapperText = styled(Text)`
text-align: left;
margin-top: 36px;
z-index:100;
position:relative;
`;
const BottomWrapperText = styled(WrapperText)`
inset: 48px;
top: auto;
`;

const BackgroundImage = styled.img`
  width: 100vw;
  height: 95%;
  position:absolute;
  inset: 0;
  object-fit: cover;
`;
const RelativeImage = styled.img`
  width: 100vw;
  height: fit-content;
  object-fit: contain;
`;
const BigRelativeImage = styled.img`
  margin-left: -15vw;
  width: 120vw;
  height: fit-content;
  object-fit: contain;
`;

const GradientDiv1 = styled.div`

  height: 300px;
  width: 100vw;
  max-width: none;
  top:0;
  margin-top: -280px;
  background: linear-gradient(to top, rgba(249, 248, 237, 1) 5%, rgba(249, 248, 237,0) 85%);;
  `

const GradientDiv3 = styled(GradientDiv1)`
  position:absolute;
  margin-top: -8px;
  height: 40vh;
  z-index:20;
  background: linear-gradient(to top, rgba(249, 248, 237, 1) 5%, rgba(255, 254, 250,1) 85%);
  `
const GradientDiv4 = styled(GradientDiv1)`
  position:relative;
  margin-top: -16px;
  height: 24px;
  z-index:20;
  background-color: rgba(249, 248, 237, 1);
  `
  const GradientDiv5 = styled(GradientDiv1)`
  position:relative;
  margin-top: -16px;
  height:200px;
  z-index:20;
  background: rgba(2, 9, 22,1);
  `

  const Transition = () => {
    return(
      <>
        <GradientDiv5/>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" width="100vw" style={{ marginTop: '-4px' }}>
          <path fill="#020818" fill-opacity="1" d="M0,128L60,138.7C120,149,240,171,360,202.7C480,235,600,277,720,277.3C840,277,960,235,1080,224C1200,213,1320,235,1380,245.3L1440,256L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path>
        </svg>
      </>
    )
  }
const GradientDiv2 = styled(GradientDiv1)`
  position:absolute;
  margin-top: -8px;
  transform: rotate(180deg);
  z-index:20;
  `
const RelativeHolder = styled.div`
position: relative;
width: 100%;
`;

const Button = styled(CustomButton)`
  margin: 24px auto;
  max-width: 200px;
  z-index: 100;
  font-size: 18px;
  display:block;
`;
// intialize the context
export const IntroPage: React.FC = () => {
  const customNavigate = useCustomNavigate();
  const handleNext = () => {
    customNavigate('asistencia');
  };

  return (
    <GlobalWrapper>
      <ScrollWrapper>
        <SemiSection inverse>
          <RelativeImage src={adjustUrlForEnvironment("../../../../public/assets/images/title.webp")} />
          <RelativeHolder>
            <GradientDiv3 />
            <RelativeWrapperText inverse>
              <br />
              {introText_1_1}
              <br />
              <br />
              <b>{introText_1_2}</b>
            </RelativeWrapperText>
          </RelativeHolder>
        </SemiSection>
        <SemiSection inverse>
          <GradientDiv1 />
          <RelativeImage src={adjustUrlForEnvironment("../../../../public/assets/images/Camino2.webp")} />
          <RelativeHolder>
            <GradientDiv2 />
            <RelativeWrapperText inverse>
              {introText_2}
            </RelativeWrapperText>
          </RelativeHolder>
        </SemiSection>
        <SemiSection inverse>
          <RelativeImage src={adjustUrlForEnvironment("../../../../public/assets/images/mirando-estrellas-silueta.webp")} />
          <RelativeHolder>
            <RelativeWrapperText inverse>
              {introText_3}
            </RelativeWrapperText>
            <GradientDiv3 /> 
          </RelativeHolder>
          
        </SemiSection>
        <SemiSection inverse>
          <GradientDiv4 />
          <RelativeImage src={adjustUrlForEnvironment("../../../../public/assets/images/mountain-stars.webp")} />
          <RelativeHolder>
            <Transition />
            <WrapperText>
              {introText_4}
            </WrapperText>
          </RelativeHolder>
        </SemiSection>
        <SemiSection inverse>
          <RelativeWrapperText inverse>
            {introText_5}
          </RelativeWrapperText>
          <RelativeImage src={adjustUrlForEnvironment("../../../../public/assets/images/mochila-botas.webp")} />
        </SemiSection>
        <SemiSection inverse>
          <BigRelativeImage src={adjustUrlForEnvironment("../../../../public/assets/images/piedra-te-apuntas.webp")} />
          <RelativeWrapperText inverse>
            {introText_6}
          </RelativeWrapperText>
          <Button
            onClick={handleNext}
            selected={true}
          >
            <b>¡Estoy Listo!</b>
          </Button>
        </SemiSection>
      </ScrollWrapper>
    </GlobalWrapper>
  );
};