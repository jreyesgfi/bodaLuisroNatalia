
import { ReactNode, useContext } from 'react';
import styled, { css } from 'styled-components';
import { backGuestText, nextGuestText } from '../assets/texts/controlTexts';
import { CustomButton } from '../theme/components/Button';
import { globalColors } from '../theme/globalStyles';
import { ChangeGuestContext } from '../sections/ConfirmationSection';
import { ControlItf } from '../types';



//styled components
const ButtonsWrapper = styled.div`
    border-top: 1px solid ${globalColors.sencondary[400]};
    display: flex;
    justify-content: right;
    position: absolute;
    width: 100%;
    bottom: 0;
    background-color:${globalColors.transparent.full};
    z-index:100;
`;

interface OptionButton {

}
const OptionButton = styled(CustomButton) <OptionButton>`
    
`;

export const NextBackGuestControl: React.FC<ControlItf> = ({possibleTakeBack, possibleNext, changeGuest, children:children }) => {
    return (
        <ButtonsWrapper>
            <OptionButton
                onClick={() => {
                    if(possibleTakeBack === true){changeGuest?.(false)}
                }}
                highlighted= {possibleTakeBack === true}
            >{backGuestText}</OptionButton>
            {children}
            <OptionButton
                onClick={() => {
                    if(possibleNext === true){changeGuest?.(true)}
                }}
                highlighted= {possibleNext === true}
            >{nextGuestText}</OptionButton>
        </ButtonsWrapper>)
}
