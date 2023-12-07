import styled from "styled-components";
import { Text, globalColors } from "../globalStyles";


const ProgressNumber = styled(Text)`
    color: ${globalColors.sencondary[400]};
    font-size: 36pt;
    width:100%;
    text-align: right;
`;

interface Props {
    numStages: number;
    currentStage: number;
}
export const ProgressPercentageWidget: React.FC<Props> = ({numStages, currentStage}) => {
    return(
        <ProgressNumber>
            {Math.floor(currentStage / numStages * 100)}%
        </ProgressNumber>
    )
}