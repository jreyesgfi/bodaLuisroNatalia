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
    inset: ${({pos})=>(`${pos[1]*100}vh ${pos[0]*100}vw auto auto`)};
    margin: auto;
    transition: transform 0.2s;
`;

interface Props {
    src:string;
}
export const DecorationImage: React.FC<Props> = ({src}) => { //change it to bring back all the html images properties

    const [pos] = useState([0.9+Math.random()/4,Math.random()/2]);
    const [size] = useState(500 - (1.15-pos[0])*1000);
   console.log(pos,size)
    return (
        <Image src={src} pos={pos} size={size}>
            
        </Image>
    )
}