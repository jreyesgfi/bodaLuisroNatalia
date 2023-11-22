import styled from "styled-components";

interface Props {
    left?: boolean;
    src: string;
}


const Image = styled.img<{left?:boolean}>`
    position: absolute;
    max-width: max(600px, 98vw);
    max-height: 600px;
    margin: auto 24px;
    top: 0;
    bottom: 0;
    border: 1px solid black;
    inset: ${({left})=>(left===true?"0 auto 0 0":"0 0 0 auto")}
    `;
export const LateralBigImage: React.FC<Props> = ({left, src}) => (
	<Image
        left={left}
        src={src}
    />
  )