import styled, { css } from 'styled-components'
import { globalColors } from '../globalStyles';

// checked and not checked styles
const checkedStyles = css`
    border: 1px solid ${globalColors.sencondary[400]};
    background-color:${globalColors.sencondary[400]};
    color: ${globalColors.light.primary};
`

const highlightedStyles = css`
    border: 1px solid ${globalColors.sencondary[400]};
    color: ${globalColors.sencondary[400]};
    background-color: ${globalColors.light.primary};
`
const uncheckedStyles = css`
    border: 1px solid ${globalColors.light.primary};
    background-color: ${globalColors.grey.light};
`


export interface ButtonItf {
	highlighted?: boolean;
    selected?: boolean;
}
const ListItem = styled.div<{ selected:boolean }>`
    margin: 8pt 0;
    padding: 0 8pt;
    border-radius: 8px;
    width: 300px;
    transition: all 0.3s;
    ${({selected}) => (selected===true ? checkedStyles : uncheckedStyles)};
`;
export const CustomButton = styled.button<ButtonItf>`
	${({selected, highlighted}) => {
        if (selected===true){return checkedStyles}
        if(highlighted===true){return highlightedStyles} 
        return uncheckedStyles
    }};
    border-radius: 8px;
    margin: 8pt 4pt;
    padding: 0 8pt;
	white-space: nowrap;
	padding: 10px 20px;
	font-size: 16px;
	font-family: primary-body;
	outline: none;
	transform: all 0.3s;
	cursor: pointer;
	overflow: hidden;
	position: relative;
	user-select: none;
	&:before {
		content: '';
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		z-index: -1;
		transition: all 0.6s ease;
		width: 100%;
		height: 0%;
		transform: translate(-50%, -50%) rotate(45deg);
	}
	&:hover:before {
		height: 500%;
		background-color: ${globalColors.dark.primary};
	}
	&:hover {
		background-color: ${globalColors.sencondary['200']};
		color: ${globalColors.light.primary};
		border:1px solid ${globalColors.light.primary};
	}
`;