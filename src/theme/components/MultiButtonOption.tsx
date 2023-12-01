import styled, { css } from 'styled-components';
import { globalColors, Text } from '../globalStyles';
import { OptionButtonItf } from '../../types';
import { useState } from 'react';
import { ButtonItf, CustomButton } from './Button';

interface Props {
    activeStage: boolean;
    buttonList: OptionButtonItf[];
    handleSelection: (state: number| null) => void;
}

const checkedStyles = css`
  border: 2px solid ${globalColors.sencondary[400]};
`;
const uncheckedStyles = css`
  border: 2px solid ${globalColors.dark.primary};
`;

const SmallIcon = styled.img`
  width: 2rem;
`;

const OptionButtonWrapper = styled.div`
  display: flex;
  gap: 10px;
  justify-content: left;
  align-items: center;
  margin:0;
  padding:0;
  overflow-x: auto;
`;

interface OptionButton extends ButtonItf {
    activeStage: boolean;
    index: number;
}
const OptionButton = styled(CustomButton) <OptionButton>`
width: 180px;
height: 48px;
margin: 8px auto; 
transition: transform 1s, opacity 0.5s;
  transform: ${({ selected, activeStage, index }) => (!activeStage && selected? 
    `translateX(calc(-${index * (100)}% - ${index * (8)}px))`: 'translateX(0%)')};
        
  opacity: ${({ selected, activeStage }) => (activeStage ? 1:(selected ? 1 : 0))};
`;

export const MultiButtonOption: React.FC<Props> = ({
    activeStage,
    buttonList,
    handleSelection,
}) => {
    const [selectedState, setSelectedState] = useState<number | null>(null);

    const handleClick = (buttonIndex: number, buttonText: string) => {
        if (!activeStage) {return}
        const selectedIndex = selectedState === buttonIndex ? null : buttonIndex;
        setSelectedState(selectedIndex);
        handleSelection(selectedIndex);
    };

    return (
        <OptionButtonWrapper>
            {buttonList.map((buttonData, i) => {
                const lastElement = i === buttonList.length - 1;

                return (
                    <OptionButton
                        key={i}
                        onClick={() => {
                            handleClick(i, buttonData.text);
                        }}
                        index={i}
                        selected={i === selectedState}
                        highlighted={lastElement}
                        activeStage={activeStage}
                    >
                        {buttonData.text}
                    </OptionButton>
                );
            })}
        </OptionButtonWrapper>
    );
};