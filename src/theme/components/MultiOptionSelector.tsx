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
    border: 2px solid ${globalColors.sencondary[400]};
`
const uncheckedStyles = css`
    border: 2px solid ${globalColors.dark.primary};
`

// Styled components
const SmallIcon = styled.img`
	width: 2rem;
`;
const ListItem = styled.div<{ selected:boolean }>`
    margin: 8pt 0;
    padding: 0 8pt;
    border-radius: 8px;
    width: 300px;
    transition: all 0.3s;
    ${({selected}) => (selected===true ? checkedStyles : uncheckedStyles)};
`;
export const MultiOptionSelector: React.FC<Props> = ({listGiven, checked, handleClick }) => (
    <ul>

        {listGiven?.map((element,i) =>{
            const checkedValue:boolean = checked(element);
            return(
                <ListItem key={i} selected={checkedValue}>
                    <label>
                        <Checkbox
                            checked={checkedValue}
                            onChange={() => { handleClick(element) }}
                        />
                        <SmallIcon src={element.src} alt={element.title}></SmallIcon>
                        <Text inverse={true}>&nbsp; &nbsp;&nbsp;{element.title}</Text>
                    </label>

                </ListItem>
            )}
        )}
    </ul>
)