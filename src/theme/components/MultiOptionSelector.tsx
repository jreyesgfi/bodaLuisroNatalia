import { Checkbox } from "./Checkbox"
import styled, { css } from 'styled-components';
import { AreaText, globalColors, Text } from "../globalStyles";
import { RoundIconImage, RoundIconWrapper } from "./Icon";
import { ChangeEvent, useState } from "react";
import { HandleChange } from "../../types";

type ElementType = any;
interface Props {
    listGiven?: ElementType[];
    checked: (element: ElementType) => boolean;
    handleClick: (element: ElementType) => void;
    src?: string;
    otherOption?: string;
    handleOtherOption?: (guestID: string) => void;
}

// checked and not checked styles
const checkedStyles = css`
    border: 1px solid ${globalColors.sencondary[400]};
`
const uncheckedStyles = css`
    border: 1px solid ${globalColors.dark.primary};
`

// Styled components
const MultiOptionWrapper = styled.div`
    display: flex;
    flex-wrap: wrap; 
    justify-content: left;
    align-items: center;
    overflow-y: auto;
    max-height: 34vh;
    margin: 0 auto 20px;
`;
const ListItem = styled.span<{ selected: boolean }>`
    box-sizing: content-box;
    margin: 24pt 8pt 0pt;
    padding: 4pt 8pt 0pt 8pt;
    border-radius: 8px;
    transition: all 0.3s;
    position: relative;
    min-width: 100px;
    cursor: pointer;
    ${({ selected }) => (selected === true ? checkedStyles : uncheckedStyles)};
`;


const OptionCheckbox = styled.div`
    position: absolute;
    left: 0;
    transform: translate(-10px, 4pt);
`;
const SmallIconWrapper = styled(RoundIconWrapper)`
    width: 2rem;
    height: 2rem;
    transform: translateY(calc(-1rem - 10pt));
    border: none;
`;
const SmallIcon = styled(RoundIconImage)`
`;

const OptionLabel = styled(Text)`
    margin: 4px 0 4px 1rem;
`;

const OtherArea = styled(AreaText)<{activated:boolean}>`
    margin: 32px 0 4px 4px;
    padding-left: 16px;
    border: ${({activated})=>`1px solid ${activated===true?globalColors.sencondary[400] : globalColors.dark.primary}`}
`;

export const MultiOptionSelector: React.FC<Props> = ({ listGiven, checked, handleClick, otherOption, handleOtherOption }) => {
    const [otherOptionValue, setOtherOptionValue] = useState<string>('');
    const handleOtherOptionChange = (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setOtherOptionValue(value);
        handleOtherOption?.(value);
      };
    return(
    <MultiOptionWrapper>
        {listGiven?.map((element, i) => {
            return (
                <ListItem key={i} selected={checked(element)} >
                        <SmallIconWrapper>
                            <SmallIcon src={element.src} alt={element.title}></SmallIcon>
                        </SmallIconWrapper>
                        <OptionCheckbox>
                            <Checkbox
                                checked={checked(element.title)}
                                handleOnChange={() => { handleClick(element.title)}}// we should check this
                            />
                        </OptionCheckbox>

                        <OptionLabel inverse={true}>{element.title}</OptionLabel>


                </ListItem>
            )
        }
        )}
        {otherOption &&
            <OtherArea
            inverse={true}
            activated={otherOptionValue!=''}
            placeholder={otherOption}
            maxLength={20}
            value={otherOptionValue}
            onChange={handleOtherOptionChange}  
            />
        }
        
    </MultiOptionWrapper>
)}