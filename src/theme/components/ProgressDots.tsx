import styled from "styled-components";
import { Column, globalColors, Text } from "../globalStyles";



interface Props {
    numStages: number;
    currentStage: number;
    labels?: string[];
}
const ProgressDotsWrapper = styled.div`
    position: relative;
    display: flex;
    flex-direction: row;
    gap: 8px;
    justify-content: center;
`;
const ProgressLine = styled.div`
    height: 8px;
    inset:0px;
    margin: auto;
    border-radius: 4px;
`;
const BackgroundLine = styled(ProgressLine)`
    width: 100%;
    background-color: ${globalColors.sencondary[100]}
`;
const CurrentProgressLine = styled(ProgressLine)<{progressPercentage:number}>`
    width: ${({ progressPercentage }) => (`${progressPercentage}%`) };
    right: auto;
    background-color: ${globalColors.sencondary[400]};
    transition: width 0.5s;
    z-index: 25;
`;
interface StageProps {
    currentStage?: boolean;
}

const GuestName = styled(Text) <StageProps>`
    margin: auto auto 0;
    color: ${({ currentStage }) => (currentStage === true ? `${globalColors.sencondary[400]}` : `${globalColors.sencondary[200]}`)};
    font-size: ${({ currentStage }) => (currentStage === true ? `14px` : `8px`)};
`;


const StageDot = styled.div<StageProps>`
    width: ${({ currentStage }) => (currentStage === true ? `14px` : `8px`)};
    height: ${({ currentStage }) => (currentStage === true ? `14px` : `8px`)};
    border-radius: 50%;
    margin: 0 auto;
    background-color: ${({ currentStage }) => (currentStage === true ? `${globalColors.sencondary[400]}` : `${globalColors.sencondary[200]}`)};
    z-index: 50;
`;

const StageWrapper = styled(Column)`
    min-width:0;
    gap: 8px;
    justify-content: space-between;
    > *{ transition: all 0.4s ease-in-out; }
`;

export const CustomProguessDots: React.FC<Props> = ({numStages, currentStage, labels}) => {
    const dots = Array.from({ length: numStages }, (_, i) => i+1); // Create an array of numbers from 1 to numStages
    return(
        <ProgressDotsWrapper>
            {dots.map((stageNum,i) => (
                <StageWrapper>
                    {labels?.length !==0 &&
                        <GuestName currentStage= {stageNum === currentStage}>
                            {labels?.[i]}
                        </GuestName>
                    }
                    <StageDot
                        key={i}
                        currentStage = {stageNum === currentStage}
                    />
                    
                </StageWrapper>
                
            ))}
        </ProgressDotsWrapper>
    )
}