import React, { ImgHTMLAttributes, useEffect, useState } from "react";
import styled from "styled-components";

interface ImageItf {
    pos : number[];
    size : number;
}
const Image = styled.img<ImageItf>`
    ${({size})=>(`
    width: ${size}px; 
    height: ${size}px;`)};

    position: absolute;
    inset: ${({pos})=>(`${pos[1]*100}vh auto auto ${pos[0]*100}vw`)};
    margin: auto;
    transform: translate(-50%, -50%);
    transition: transform 0.2s linear;
    transition-delay: 0s;
`;

interface Props {
    src:string;
    initialPos:number[];
    initialSize:number;
}
export const DecorationImage: React.FC<Props> = ({src, initialPos, initialSize}) => { //change it to bring back all the html images properties

    const [pos] = useState<number[]>(initialPos);
    const [size] = useState(initialSize);
    return (
        <Image src={src} pos={pos} size={size}>
            
        </Image>
    )
}