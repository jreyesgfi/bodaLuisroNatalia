import { MultiButtonOption } from "../theme/components/MultiButtonOption";
import { ReactNode, useState } from "react";
import { OptionButtonItf } from "../types";
import { CustomButton } from "../theme/components/Button";
import { Text, globalColors } from "../theme/globalStyles";
import styled, { css } from 'styled-components';
import { RoundIconWrapper, RoundIconImage } from "../theme/components/Icon";


type DifStages = number;
interface QuestionWrapperItf {
    difStages: DifStages;
}


const sizesDict = {
    button: 'calc(2rem + 2px)',
    icon: '2rem',
    wrapper: 'auto'
};
const transformDict = {
    button: 'translate(-50%, 50%);',
    icon: 'rotate(180deg);',
    wrapper: ''
}

interface CSSInterface {
    difStages: DifStages;
    element: keyof typeof sizesDict;
}
// checked and not checked styles
const onTheStageStyle = ({difStages, element}:CSSInterface) => css`
    width: ${sizesDict[element]};
    height: ${sizesDict[element]};
    opacity:${1 - 0.5 * (difStages||0)};
    transform: ${transformDict[element]};
    max-height: ${difStages >1? '0px':'500px'};
    ${element==='wrapper'?
    `border-bottom:1px solid ${globalColors.sencondary[400]};
    `:``}  
`

const nextStageStyle = css`
    width: 0px;
    height: 0px;
    max-height: 0px;
    opacity:0;
`;

const TakeBackButton = styled(RoundIconWrapper)`
    position: absolute;
    background-color: ${globalColors.light.primary};
    padding: 4px;
    left: 50%;
    bottom: 0px;
    border-radius: 50%;
    border: 1px solid ${globalColors.sencondary[400]};
    cursor: pointer;
    z-index:50;
`;
const TakeBackIcon = styled(RoundIconImage)`
    width: 2rem;
    position: absolute;
    transform: rotate(-180deg);
`;
const ChildrenWrapper = styled.div`
    min-height: fit-content;
`;
const QuestionWrapper = styled.div<QuestionWrapperItf>`
    position: relative;
    overflow: visible;
    padding-bottom:${({ difStages }) => (difStages > 1 ? '0px':'10px')};
    transition: transform 0s, opacity 0.7s, max-height 1.3s, padding 0.7s;
    ${({ difStages }) => (difStages >= 0 ? 
                onTheStageStyle({difStages:difStages,element:"wrapper"})
                :nextStageStyle)
            };

        ${TakeBackButton}{
            transition: transform 0.5s, height 0.5s, width 0.5s;
            ${({ difStages }) => (difStages > 0 ? 
                onTheStageStyle({difStages:difStages-1,element:"button"})
                :nextStageStyle)
            };
        }
        ${TakeBackIcon}{
            transition: transform 0s, opacity 0.3s, height 0.5s, width 0.5s;
            ${({ difStages }) => (difStages > 0 ? 
                onTheStageStyle({difStages:difStages-1,element:"icon"})
                :nextStageStyle)
            };
        }
    `;



interface Props {
    children?: ReactNode;
    difStages: number;
    questionText: string;
    answerButtonList: OptionButtonItf[];
    handleSelection: (value: number | null) => void;
    handleBack: ()=>void;
}

export const Question: React.FC<Props> = ({ children, handleBack, difStages, questionText, answerButtonList, handleSelection }) => {

    return (
        <QuestionWrapper
            difStages={difStages}>
            <Text inverse={true}>
                {questionText}
            </Text>
            <MultiButtonOption
                activeStage={difStages === 0}
                buttonList={answerButtonList}
                handleSelection={handleSelection}
            />
            <ChildrenWrapper>{children}
            </ChildrenWrapper>
            <TakeBackButton
                onClick={()=>{if(difStages >0){handleBack()}}}
            >
                <TakeBackIcon
                    src='../assets/icons/drawnArrow.svg'
                />
            </TakeBackButton>


        </QuestionWrapper>)
}
