import styled, { css, keyframes } from "styled-components";
import { globalColors, Icon } from "./globalStyles";

const checkAnimation = keyframes`
    to {
        stroke-dashoffset: 0;
    }
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
${Icon}{
    visibility: ${props => props.checked ? 'visible' : 'hidden'}
}
${Icon} path {
    visibility: ${props => props.checked ? 'visible' : 'hidden'}
    stroke-dasharray: 500;
    stroke-dashoffset: 500;
    animation-name: ${checkAnimation};
    animation-duration: 8s;
    animation-iteration-count: infinite;
  }
`;

const CheckboxContainer = styled.div`
  display: inline-block;
  vertical-align: middle;
`;

export const Checkbox: React.FC<CheckBoxItf> = ({ checked, onChange, ...props}) => (
	<CheckboxContainer>
	  <HiddenCheckbox checked={checked} onChange={onChange} {...props} />
	  <StyledCheckbox checked={checked}>
        <Icon viewBox="0 0 24 24">
            <polyline points="20 6 9 17 4 12" />
        </Icon>
      </StyledCheckbox>
	</CheckboxContainer>
  )