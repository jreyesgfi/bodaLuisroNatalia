import { MultiButtonOption } from "../theme/components/MultiButtonOption";
import { ReactNode} from "react";
import { OptionButtonItf } from "../types";
import { Text, globalColors } from "../theme/globalStyles";
import styled, { css } from 'styled-components';
import { RoundIconWrapper, RoundIconImage } from "../theme/components/Icon";


type DifStages = number;
interface QuestionWrapperItf {
    difStages: DifStages;
}


const sizesDict = {
    button: ['100%' , '100%'],
    icon: ['36pt', '36pt'],
    wrapper: ['auto', 'auto']
};
const transformDict = {
    button: '',
    icon: 'translate(-50%) rotate(180deg);',
    wrapper: ''
}

interface CSSInterface {
    difStages: DifStages;
    element: keyof typeof sizesDict;
}
// checked and not checked styles
const onTheStageStyle = ({difStages, element}:CSSInterface) => css`
    width: ${sizesDict[element][1]};
    height: ${sizesDict[element][0]};
    opacity:${1 - 0.5 * (difStages||0)};
    transform: ${transformDict[element]};
    max-height: ${difStages ===0 ||difStages ===1 ? '500px': '0px'};
    ${element==='wrapper'?
    `border-bottom:1px solid ${globalColors.primary[400]};
    `:``}  
`

const nextStageStyle = css`
    width: 100%;
    height: 0px;
    max-height: 0px;
    opacity:0;
    position:absolute;
`;

const TakeBackButton = styled(RoundIconWrapper)`
    position: absolute;
    background: linear-gradient(to top, rgba(255, 255, 255, 1) 10%, rgba(255, 255, 255,0) 100%);
    padding: 4px;
    width: 100%;
    height: 0px;
    border-radius:0px;
    bottom: 0px;
    border: none;
    cursor: pointer;
    z-index:50;
    &:hover{
        background:linear-gradient(to top, ${globalColors.primary[100]} 0%, rgba(255, 255, 255,0) 30%);
    }
`;
const TakeBackIcon = styled(RoundIconImage)`
    width: 36pt;
    height: 0pt;
    position: absolute;
    background: radial-gradient(
        ellipse farthest-corner at center,
        rgba(255, 255, 255, 1),
        rgba(255, 255, 255, 0)
      );
    border-radius: 50%;
    left: 50%;
    bottom: 4px;
    transform: rotate(-180deg);
`;
const ChildrenWrapper = styled.div`
    display: block;
    min-width: 90%;
    min-height: fit-content;
`;
const QuestionText = styled(Text)`
    margin: auto 48px 16px 0;
`;
const QuestionWrapper = styled.div<QuestionWrapperItf>`
    position: relative;
    max-width: 100%;
    box-sizing: border-box;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    overflow: visible;
    padding:${({ difStages }) => (difStages > 1 ? '0px':'12px 0')};
    transition: transform 0s, opacity 0.7s, max-height 1.3s, padding 0.7s;
    ${({ difStages }) => (difStages >= 0 ? 
                onTheStageStyle({difStages:difStages,element:"wrapper"})
                :nextStageStyle)
            };

        ${TakeBackButton}{
            transition: transform 0.5s, height 0.5s, background 0.3s;
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
            {questionText!=='' && <QuestionText inverse={true}>
                 {questionText}
            </QuestionText>}
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
