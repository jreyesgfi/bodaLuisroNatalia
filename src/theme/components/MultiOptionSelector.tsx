import { Checkbox } from "./Checkbox"
import styled, { css } from 'styled-components';
import { globalColors, Text } from "../globalStyles";
import { RoundIconImage, RoundIconWrapper } from "./Icon";

type ElementType = any;
interface Props {
    listGiven?: ElementType[];
    checked: (element: ElementType) => boolean;
    handleClick: (element: ElementType) => void;
    src?: string;
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
`;
const ListItem = styled.div<{ selected: boolean }>`
    box-sizing: content-box;
    margin: 24pt 8pt 0pt;
    padding: 4pt 8pt 0pt 8pt;
    border-radius: 8px;
    transition: all 0.3s;
    position: relative;
    min-width: 100px;
    ${({ selected }) => (selected === true ? checkedStyles : uncheckedStyles)};
`;


const OptionCheckbox = styled.div`
    position: absolute;
    left: 0;
    transform: translate(-10px, 16pt);
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
    margin-left: 1rem;
`;


export const MultiOptionSelector: React.FC<Props> = ({ listGiven, checked, handleClick }) => (
    <MultiOptionWrapper>
        {listGiven?.map((element, i) => {
            const checkedValue: boolean = checked(element);
            return (
                <ListItem key={i} selected={checkedValue}>
                        <SmallIconWrapper>
                            <SmallIcon src={element.src} alt={element.title}></SmallIcon>
                        </SmallIconWrapper>
                        <OptionCheckbox>
                            <Checkbox
                                checked={checkedValue}
                                onChange={() => { handleClick(element) }}
                            />
                        </OptionCheckbox>

                        <OptionLabel inverse={true}>{element.title}</OptionLabel>


                </ListItem>
            )
        }
        )}
    </MultiOptionWrapper>
)