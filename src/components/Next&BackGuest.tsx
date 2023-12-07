
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
const ArrowIcon = styled.div<ArrowIconItf>`
    transform: rotate(${({point_to_right})=>(point_to_right===true?'0deg':'180deg')});
    > svg {

        fill: ${globalColors.sencondary[400]};
    }
    `;

const ArrowIconWidget:React.FC<ArrowIconItf> = ({point_to_right}) => (
        <ArrowIcon point_to_right={point_to_right}>
            <svg xmlns="http://www.w3.org/2000/svg" version="1.1" x="0" y="0" viewBox="0 0 492.004 492.004" ><g><path d="M382.678 226.804 163.73 7.86C158.666 2.792 151.906 0 144.698 0s-13.968 2.792-19.032 7.86l-16.124 16.12c-10.492 10.504-10.492 27.576 0 38.064L293.398 245.9l-184.06 184.06c-5.064 5.068-7.86 11.824-7.86 19.028 0 7.212 2.796 13.968 7.86 19.04l16.124 16.116c5.068 5.068 11.824 7.86 19.032 7.86s13.968-2.792 19.032-7.86L382.678 265c5.076-5.084 7.864-11.872 7.848-19.088.016-7.244-2.772-14.028-7.848-19.108z"  opacity="1" data-original="#000000"></path></g></svg>
        </ArrowIcon>
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
