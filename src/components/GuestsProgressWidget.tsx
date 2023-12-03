import { ReactNode } from "react";
import styled from "styled-components";
import { CustomProguessDots } from "../theme/components/ProgressDots";
import { Text, globalColors, GeneralWrapper } from "../theme/globalStyles";
import { ControlItf } from "../types";

interface Props {
    numStages: number;
    currentStage: number;
    guestsNames: string[];
    Control: React.FC<ControlItf>;
}

const GuestsProgressWrapper = styled(GeneralWrapper)`
    width: auto;
    justify-content: center;
    position: absolute;
    width: 100%;
    bottom: 20px;
    z-index:100;
`;

export const GuestsProgressWidget: React.FC<Props> = ({ numStages, currentStage, guestsNames, Control}) => {
    return (
        <GuestsProgressWrapper>
            {Control ? (
                <Control>
                    <CustomProguessDots
                        numStages={numStages}
                        currentStage={currentStage + 1}
                        labels={guestsNames}
                    />
                </Control>
            ) : (
                <CustomProguessDots
                    numStages={numStages}
                    currentStage={currentStage + 1}
                    labels={guestsNames}
                />
            )}
        </GuestsProgressWrapper>
    );
};