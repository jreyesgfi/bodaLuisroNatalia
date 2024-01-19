
import styled from 'styled-components';
import { adjustUrlForEnvironment } from '../../../serverConfig';
import { MainHeading, Section, Text } from '../../../theme/globalStyles';

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
    height: 100%;
    position:absolute;
    inset: 0;
    object-fit: cover;
`;

export const IntroSection: React.FC<Props> =
    () => {
        return (
            <Section inverse={true} padding='0'>
                <HistoryImage src={adjustUrlForEnvironment("../../../../public/assets/images/ApuntesCartaAcuarelaMarron.svg")}/>
            </Section>
        )
    }
