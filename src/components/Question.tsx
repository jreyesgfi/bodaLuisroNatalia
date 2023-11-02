import { MultiButtonOption } from "../theme/components/MultiButtonOption";
import { useState } from "react";
import { OptionButtonItf } from "../types";
import { CustomButton } from "../theme/components/Button";
import { Text, globalColors } from "../theme/globalStyles";
import styled from 'styled-components';


interface QuestionWrapperItf {
    difStages: number;
}
const QuestionWrapper = styled.div<QuestionWrapperItf>`
transition: opacity 0.7s;
opacity: ${({ difStages }) => (difStages < 0 ? 0 : 1 - (0.2 * difStages))};
padding-bottom: 10px;
border-bottom: ${({ difStages }) => (difStages>0? `1px solid ${globalColors.sencondary[400]}`:'')};
`;

interface Props {
    difStages: number;
    questionText: string;
    answerButtonList: OptionButtonItf[];
    handleSelection: (value: string | null) => void;
}

export const Question: React.FC<Props> = ({ difStages, questionText, answerButtonList, handleSelection }) => {
    const [selectedState, setSelectedState] = useState<number | null>(-1);

    const handleClick = (buttonIndex: number, buttonText: string) => {
        var selectedIndex: number | null = buttonIndex;
        var selectedText: string | null = buttonText;
        // check if it was already selected
        if (selectedState === buttonIndex) {
            selectedIndex = null;
            selectedText = null;
        }
        setSelectedState(selectedIndex);
        handleSelection(selectedText);
    }
    return (
        <QuestionWrapper
            difStages={difStages}>
            <Text inverse={true}>{questionText}</Text>
            <MultiButtonOption
                activeStage={difStages===0}
                buttonList={answerButtonList}
                handleSelection={handleSelection}
            />
        </QuestionWrapper>)
}
