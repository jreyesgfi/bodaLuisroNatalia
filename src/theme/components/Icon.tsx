import styled from 'styled-components';
import { globalColors } from '../globalStyles';

export const RoundButton = styled.span`
    position: absolute;
    background-color: ${globalColors.light.primary};
    padding: 4px;
    border-radius: 50%;
    border: 1px solid ${globalColors.sencondary[400]};
    cursor: pointer;
    z-index:50;
`;
export const RoundButtonIcon = styled.img`
    width: 2rem;
    position: absolute;
    z-index:50;
`;