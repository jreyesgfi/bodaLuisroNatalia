import styled, { css } from 'styled-components';
import { globalColors, Text } from "../globalStyles";
import { OptionButtonItf } from "../../types";
import { useState } from "react";
import { CustomButton } from './Button';


interface Props {
    buttonList:OptionButtonItf[];
    handleSelection: (value:string|null)=>void;
}

// checked and not checked styles
const checkedStyles = css`
    border: 2px solid ${globalColors.sencondary[400]};
`
const uncheckedStyles = css`
    border: 2px solid ${globalColors.dark.primary};
`

// Styled components
const SmallIcon = styled.img`
	width: 2rem;
`;


export const MultiButtonOption: React.FC<Props> = ({buttonList, handleSelection }) => {
    const [selectedState, setSelectedState] = useState<number|null>(-1);
    
    const handleClick = (buttonIndex:number,buttonText:string) => {
        var selectedIndex:number|null = buttonIndex;
        var selectedText:string|null = buttonText;
        // check if it was already selected
        if (selectedState===buttonIndex){
            selectedIndex = null;
            selectedText = null;
        }
        setSelectedState(selectedIndex);
        handleSelection(selectedText);
    }
    return(
    <div>
        {buttonList.map((buttonData,i) =>(
            <CustomButton
                key = {i}
                onClick={()=>{handleClick(i,buttonData.text)}}
                highlighted={i===selectedState}>
                {buttonData.text}
            </CustomButton>
        ))}
    </div>)
}
