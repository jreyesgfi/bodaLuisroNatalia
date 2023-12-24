
import styled from 'styled-components';
import { adjustUrlForEnvironment } from '../../../serverConfig';
import { MainHeading, Section, Text } from '../../../theme/globalStyles';
import {historyText1, historyTitle1} from '../../../assets/texts/historyTexts'
import { CustomButton } from '../../../theme/components/Button';

interface Props {
    
}

const HistoryTitleWrapper = styled(MainHeading)`
    margin-top: 64px;
    text-align: center;
    font-size: 48px;
    margin:0 auto 0 0;
`;
const HistoryTextWrapper = styled(Text)`
    text-align: center;
    margin:0 auto 0 0;
`;
const HistoryImage = styled.img`
    width: 100vw;
    height: 100vh;
    position:absolute;
    inset: 0;
    object-fit: cover;
`;
const HistoryButton = styled(CustomButton)`
    position: absolute;
    bottom: 24px;
    left: 0;
    right: 0;
    margin: 0 auto;
    max-width: 200px;
`;
export const OurHistorySection: React.FC<Props> =
    () => {
        return (
            <Section inverse={true} padding='0'>
                <HistoryImage src={adjustUrlForEnvironment("../../../../public/assets/images/Apuntes Carta Acuarela Marron.svg")}/>
                <HistoryButton> Siguiente</HistoryButton>
            </Section>
        )
    }
