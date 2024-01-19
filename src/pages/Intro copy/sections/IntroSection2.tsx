import { MainHeading, Section, Text } from '../../../theme/globalStyles';
import {historyText1, historyTitle1} from '../../../assets/texts/historyTexts'
import { adjustUrlForEnvironment } from '../../../serverConfig';
import styled from 'styled-components';


interface Props {
    
}

const HistoryTitleWrapper = styled(MainHeading)`
    margin-top: 32px;
    text-align: center;
    font-size: 48px;
`;
const HistoryTextWrapper = styled(Text)`
    text-align: center;
`;
const HistoryImage = styled.img`
    max-width: 100%;
    max-height: 70%;
`;
export const IntroSection2: React.FC<Props> =
    () => {
        return (
            <Section inverse={true}>
                <HistoryTitleWrapper inverse={true}>{historyTitle1}</HistoryTitleWrapper>
                <HistoryTextWrapper inverse={true}>{historyText1}</HistoryTextWrapper>
                <HistoryImage src={adjustUrlForEnvironment("../../../../public/assets/images/Catedral Acuarela.png")}/>
            </Section>
        )
    }
