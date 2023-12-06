import { ReactNode } from "react";
import styled from "styled-components";
import { CustomProguessDots } from "../theme/components/ProgressDots";
import { Text, globalColors, GeneralWrapper } from "../theme/globalStyles";
import { ControlPropsItf } from "../types";

interface Props {
    numStages: number;
    currentStage: number;
    guestsNames: string[];
    Control: ControlPropsItf;
}

const GuestsProgressWrapper = styled(GeneralWrapper)`
    width: auto;
    justify-content: center;
    position: absolute;
    display: flex;
    width: 100%;
    bottom: 20px;
    z-index:100;
    > div{
        margin:auto;
    }
`;

export const GuestsProgressWidget: React.FC<Props> = ({ numStages, currentStage, guestsNames, Control}) => {
    const ControlWidget = Control?.ControlComponent;
    const {possibleTakeBack, possibleNext, changeGuest} = Control;
    
    return (
        <GuestsProgressWrapper>
            {ControlWidget ? (
                <ControlWidget possibleTakeBack={possibleTakeBack} possibleNext={possibleNext} changeGuest={changeGuest}>
                    <CustomProguessDots
                        numStages={numStages}
                        currentStage={currentStage + 1}
                        labels={guestsNames}
                    />
                </ControlWidget>
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