import { MultiButtonOption } from "../theme/components/MultiButtonOption";
import { useState } from "react";
import { OptionButtonItf } from "../types";
import { CustomButton } from "../theme/components/Button";
import { Text } from "../theme/globalStyles";


interface Props {
    questionText: string;
    answerButtonList: OptionButtonItf[];
    handleSelection: (value: string | null) => void;
}


export const Question: React.FC<Props> = ({ questionText, answerButtonList, handleSelection }) => {
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
        <>
            <Text inverse={true}>{questionText}</Text>
            <MultiButtonOption
                buttonList={answerButtonList}
                handleSelection={handleSelection}
            />
        </>)
}
