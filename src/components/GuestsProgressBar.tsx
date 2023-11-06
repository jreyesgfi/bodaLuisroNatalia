import styled from "styled-components";
import { CustomProguessBar } from "../theme/components/ProgressBar";
import { Text, globalColors } from "../theme/globalStyles";



interface Props {
    numStages: number;
    currentStage: number;
    guestsNames: string[];
}

interface NameProps {
    stagePosition:number;
    passedStage?: boolean;
}
const NamesWrapper = styled.div`
    position: relative;
    height: 30px;
`

const GuestName = styled(Text)<NameProps>`
    position: absolute;

    margin: auto;
    top: 0;
    left: ${({ stagePosition }) => (`${stagePosition}%`) };
    transform: translateX(-50%);
    color: ${({ passedStage }) => (passedStage===true?`${globalColors.sencondary[400]}`:`${globalColors.dark.primary}`) };
`;

export const GuestsProguessBar: React.FC<Props> = ({numStages, currentStage, guestsNames}) => {

    const namesOffset = 50 / numStages;
    return(
        <>
            <NamesWrapper>
            {guestsNames.map((name,i) => (
                <GuestName
                    stagePosition={(i+1)/numStages*100 - namesOffset}
                    passedStage = {(i+1) <= currentStage}
                    inverse = {true}
                >
                    {name}
                </GuestName>
                ))}
            </NamesWrapper>
                    

            
            <CustomProguessBar
                numStages={numStages}
                currentStage={currentStage}
            />
            
        </>
    )
}