import styled from "styled-components";
import { CustomProguessDots } from "../theme/components/ProgressDots";
import { Text, globalColors, GeneralWrapper } from "../theme/globalStyles";



interface Props {
    numStages: number;
    currentStage: number;
    guestsNames: string[];
}

const GuestsProgressWrapper = styled(GeneralWrapper)`
    width: auto;
    justify-content: center;
`;

export const GuestsProgressWidget: React.FC<Props> = ({ numStages, currentStage, guestsNames }) => {
    return (
        <GuestsProgressWrapper>

            <CustomProguessDots
                numStages={numStages}
                currentStage={currentStage + 1}
                labels={guestsNames}
            />

        </GuestsProgressWrapper>
    )
}