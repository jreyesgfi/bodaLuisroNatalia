
import { ReactNode, useContext } from 'react';
import styled, { css } from 'styled-components';
import { backGuestText, nextGuestText } from '../assets/texts/controlTexts';
import { CustomButton } from '../theme/components/Button';
import { Icon, globalColors } from '../theme/globalStyles';
import { ChangeGuestContext } from '../sections/ConfirmationSection';
import { ControlItf, ControlPropsItf } from '../types';
import { ChangingShape } from '../theme/components/ChangingShape';



//styled components
const ButtonsWrapper = styled.div`
    border-top: 1px solid ${globalColors.sencondary[400]};
    display: flex;
    justify-content: right;
    align-items: center;
    background-color:${globalColors.transparent.full};
    z-index:100;
`;


const ArrowButton = styled(CustomButton)`
    border-radius: 50%;
    width: 36px;
    height:36px;
    padding:4px;
    > img {
        width:28px;
        height:28px;
    }
`;

interface ArrowIconItf {
    point_to_right?:boolean
}
const ArrowIcon = styled(Icon)<ArrowIconItf>`
    transform: rotate(${({point_to_right})=>(point_to_right===true?'0deg':'180deg')});
`;

const ArrowIconWidget:React.FC<ArrowIconItf> = ({point_to_right}) => (
        <ArrowIcon src="../assets/icons/arrow.svg" point_to_right={point_to_right}/>
)

export const NextBackGuestControl: React.FC<ControlItf> = ({possibleTakeBack, possibleNext, changeGuest, children:children }) => {
    return (
        <ButtonsWrapper>
            <ArrowButton
                hidden_style= {possibleTakeBack === false}
                none_style ={ true}
                onClick={() => {
                    if(possibleTakeBack === true){
                        changeGuest?.(false)}
                }}
            >
                <ArrowIconWidget point_to_right={false}/>
            </ArrowButton>
            {children}
            <ArrowButton
                none_style ={ true}
                hidden_style= {possibleNext === false}
                onClick={() => {
                    if(possibleNext === true){changeGuest?.(true)}
                }}
            >
                <ArrowIconWidget point_to_right={true}/>
            </ArrowButton>
        </ButtonsWrapper>)
}
