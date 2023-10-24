import styled, { css, keyframes } from "styled-components";
import { globalColors, Icon } from "./globalStyles";

const checkAnimation = keyframes`
0% { stroke-dashoffset: 30; }
10% { stroke-dashoffset: 30; }
35% { stroke-dashoffset: 18;}
50% { stroke-dashoffset: 18; }
100% { stroke-dashoffset: 0; }
`;

// Checkbox
interface CheckBoxItf {
	checked: boolean;
    props?: any;
    onChange?: (value: any) => void;
}
const checkedStyles = css`
    border: 2px solid ${globalColors.sencondary[200]};
    background:${globalColors.sencondary[200]};
`
const uncheckedStyles = css`
    border: 2px solid ${globalColors.dark.second};
    background:${globalColors.transparent};
`

const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
	border: 0;
	clip: rect(0 0 0 0);
	clippath: inset(50%);
	height: 1px;
	margin: -1px;
	overflow: hidden;
	padding: 0;
	position: absolute;
	white-space: nowrap;
	width: 1px;
`;

const StyledCheckbox = styled.div<CheckBoxItf>`
display: inline-block;
width: 16px;
height: 16px;
${props => props.checked ? checkedStyles : uncheckedStyles};
border-radius: 3px;
transition: all 0.3s;

svg path {
    stroke-dasharray: 30;
    stroke-dashoffset: 0;
    stroke-width: 3px;
    fill: none;
    animation:${({ checked }) =>
    checked ? css`${checkAnimation} 0.7s linear 1` : "none"};
}

stroke: ${globalColors.light.second}; // Add this here
`;

const CheckboxContainer = styled.div`
  display: inline-block;
  vertical-align: middle;
`;

export const Checkbox: React.FC<CheckBoxItf> = ({ checked, onChange, ...props}) => (
	<CheckboxContainer>
	  <HiddenCheckbox checked={checked} onChange={onChange} {...props} />
	  <StyledCheckbox checked={checked} >
        <svg viewBox="0 0 22 18">
            <path d="M1 6.85L8.09677 14L21 1" />
        </svg>
      </StyledCheckbox>
	</CheckboxContainer>
  )