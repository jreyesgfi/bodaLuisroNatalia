import styled from "styled-components";
import { Text, globalColors } from "../globalStyles";
import { useSpring, animated } from "react-spring";


const ProgressNumber = styled(animated(Text))`
    color: ${globalColors.primary[400]};
    font-size: 32pt;
    text-align: right;
    transition: transform 0.5s ease-in-out;
    max-width: 82px;
    margin-right: 0px;
    margin-left: auto;
    display:inline-block;
`;


interface Props {
    numStages: number;
    currentStage: number;
}

export const ProgressPercentageWidget: React.FC<Props> = ({numStages, currentStage}) => {
    const {number} = useSpring({
        from: {number:0},
        number:Math.floor(currentStage / numStages * 100),
        delay:200,
        config:{mass:1, tension:20, friction:9}
    })
    return(
        <ProgressNumber>
            {number.to((n) => `${n.toFixed(0)}%`)}
        </ProgressNumber>
    )
}