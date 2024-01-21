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
scroll-snap-type: none;
`;
const SemiSection = styled(Section)`
height: fit-content;
width: 100vw;
padding: 0;
`;
const RelativeHolder = styled.div`
position: relative;
width: 100%;
height: fit-content;
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
padding-bottom: 32px;
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
const WideRelativeImage = styled(RelativeImage)`
  width: 120vw;
  margin-left: -10vw;
`;
const BigRelativeImage = styled.img`
  margin-left: -15vw;
  width: 120vw;
  height: fit-content;
  object-fit: contain;
`;


const GradientDiv1 = styled.div`
  position:absolute;
  min-height: 300px;
  height: 102%;
  width: 100vw;
  max-width: none;
  top:0;
  margin-top: -8px;
  z-index:20;
  background: linear-gradient(to top, rgba(249, 248, 237, 1) 5%, rgba(255, 254, 250,1) 85%);
  `

const GradientDiv2 = styled(GradientDiv1)`
  background: linear-gradient(to top, rgba(249, 248, 237,0) 5%, rgba(249, 248, 237, 1) 85%);
`
const GradientDiv3 = styled(GradientDiv1)`
background: linear-gradient(to top, rgba(249, 248, 237, 1) 2%,rgba(249, 248, 237, 0.4) 50%, rgba(255, 255, 255, 1) 97%);
  `
const GradientDiv4 = styled(GradientDiv1)`
    margin-top: -16px;
    background: linear-gradient(to top, rgba(2, 9, 22, 0) 80%,rgba(2, 9, 22, 0.05) 94.5%,rgba(2, 9, 22, 0.3) 94.5%,rgba(2, 9, 22, 0.3) 95%,rgba(2, 9, 22, 0.5) 96%, rgba(2, 9, 22, 0.5) 97%,rgba(2, 9, 22, 0.8) 97%,rgba(2, 9, 22, 0.8) 98%,rgba(2, 9, 22, 1) 98%);
  `
const GradientDiv5 = styled(GradientDiv1)`
  background: linear-gradient(to top, rgba(248, 249, 242, 1) 2%, rgba(227, 239, 245, 0.2) 50%, rgba(255, 255, 255, 1) 97%);
    `
const GradientDiv6 = styled(GradientDiv1)`
  background: linear-gradient(to top, rgba(248, 249, 242, 0) 5%, rgba(248, 249, 242, 1) 95%);
`

const Button = styled(CustomButton)`
  margin: -8px auto 32px;
  width: 200px;
  padding: 8px 16px;
  z-index: 100;
  font-size: 18px;
  display:block;
  background-color: #ECB362;
  border: 1px solid #ECB362;
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
        {/* Title 1ª */}
        <SemiSection inverse>
          <RelativeImage src={adjustUrlForEnvironment("../../../../public/assets/images/title.webp")} />
          <RelativeHolder>
            <GradientDiv1 />
            <RelativeWrapperText inverse>
              <br />
              {introText_1_1}
              <br />
              <br />
              <b>{introText_1_2}</b>
            </RelativeWrapperText>
          </RelativeHolder>
        </SemiSection>

        {/* Path 2º */}
        <SemiSection inverse>
          <RelativeImage src={adjustUrlForEnvironment("../../../../public/assets/images/Camino2.webp")} />
          <RelativeHolder>
            <GradientDiv2 />
            <RelativeWrapperText inverse>
              {introText_2}
            </RelativeWrapperText>
          </RelativeHolder>
        </SemiSection>

        {/* Looking sky 3º */}
        <SemiSection inverse>
          <RelativeImage src={adjustUrlForEnvironment("../../../../public/assets/images/mirando-estrellas-silueta.webp")} />
          <RelativeHolder>
            <RelativeWrapperText inverse>
              {introText_3}
            </RelativeWrapperText>
            <GradientDiv3 />
          </RelativeHolder>
        </SemiSection>

        {/* Stars 4º */}
        <SemiSection inverse>
          <WideRelativeImage src={adjustUrlForEnvironment("../../../../public/assets/images/mountain-stars.webp")} />
          <RelativeHolder>
            <RelativeWrapperText inverse>
              {introText_4}
            </RelativeWrapperText>
            <GradientDiv4 />
          </RelativeHolder>
        </SemiSection>

        {/* Bag & boots 5º */}
        <SemiSection inverse>
          <RelativeImage src={adjustUrlForEnvironment("../../../../public/assets/images/mochila-botas.webp")} />
          <RelativeHolder>
            <RelativeWrapperText inverse>
              {introText_5}
            </RelativeWrapperText>
            <GradientDiv5 />
          </RelativeHolder>

        </SemiSection>

        {/* Are you ready 6º */}
        <SemiSection inverse>
          <BigRelativeImage src={adjustUrlForEnvironment("../../../../public/assets/images/piedra-te-apuntas.png")} />
          <RelativeHolder>
            <RelativeWrapperText inverse>
              <br />
              <br />
              {introText_6}
            </RelativeWrapperText>
            <Button
              onClick={handleNext}
              selected={true}>
              <b>¡Estoy Listo!</b>
            </Button>

            <GradientDiv6 />
          </RelativeHolder>

        </SemiSection>
      </ScrollWrapper>
    </GlobalWrapper>
  );
};
// const Transition = () => {
//   return(
//     <>
//       <GradientDiv3/>
//       <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" width="100vw" style={{ position: 'relative', marginTop: '-4px', zIndex: '20' }}>
//         <path fill="#020818" fill-opacity="1" d="M0,128L60,138.7C120,149,240,171,360,202.7C480,235,600,277,720,277.3C840,277,960,235,1080,224C1200,213,1320,235,1380,245.3L1440,256L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path>
//       </svg>
//       <GradientDiv6/>
//       <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" height="100px" width="100vw" style={{ marginTop: '-8px' }}><path fill="#353A45" fill-opacity="1" d="M0,224L60,202.7C120,181,240,139,360,144C480,149,600,203,720,229.3C840,256,960,256,1080,224C1200,192,1320,128,1380,96L1440,64L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path>
//       </svg>
//     </>
//   )
// }