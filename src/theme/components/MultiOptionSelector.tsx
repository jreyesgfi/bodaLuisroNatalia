import { Checkbox } from "./Checkbox"
import styled, { css } from 'styled-components';
import { globalColors, Text } from "../globalStyles";

type ElementType = any;
interface Props {
    listGiven?: ElementType[];
    checked: (element:ElementType)=>boolean;
    handleClick: (element:ElementType)=>void;
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
const SmallIcon = styled.img`
    position:absolute;
	width: 2rem;
`;
const ListItem = styled.div<{ selected:boolean }>`
    margin: 16pt 8pt;
    padding: 0 8pt;
    border-radius: 8px;
    transition: all 0.3s;
    ${({selected}) => (selected===true ? checkedStyles : uncheckedStyles)};
`;

const MultiOptionWrapper = styled.div`
    display: flex;
    flex-wrap: wrap; 
    justify-content: left;
    align-items: center;
`;
export const MultiOptionSelector: React.FC<Props> = ({listGiven, checked, handleClick }) => (
    <MultiOptionWrapper>
        {listGiven?.map((element,i) =>{
            const checkedValue:boolean = checked(element);
            return(
                <ListItem key={i} selected={checkedValue}>
                    <label>
                        <SmallIcon src={element.src} alt={element.title}></SmallIcon>
                        &nbsp; &nbsp;&nbsp;
                        <Checkbox
                            checked={checkedValue}
                            onChange={() => { handleClick(element) }}
                        />
                        <Text inverse={true}>&nbsp;{element.title}</Text>
                    </label>

                </ListItem>
            )}
        )}
    </MultiOptionWrapper>
)