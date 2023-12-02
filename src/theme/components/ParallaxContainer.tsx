import React, { ReactNode } from "react";
import styled, { css } from "styled-components";
import { ChildrenType } from "../../types";


// checked and not checked styles
const activeStyles = css`
    transform: translateY(0%);
`

const unactiveStyles = (level: number) => css`
    transform: translateY(-${100 * (1-(level/5))/(level+1)}%);
`
//transition: transform ${1.5-level/3}s;
const permanentStyles = (level: number) => css`
    transition: transform 1.3s ease-in-out;
    
`;

// Styled components
const ParallaxWrapper = styled.div<{ level: number; active: boolean }>`
    ${({ active, level }) => (active === true ? activeStyles : unactiveStyles(level))}
    pointer-events: none;
    width: 100vw;
    height: 100vh;
    position: absolute;
    ${({ level }) => (permanentStyles(level))};
    z-index: ${({ level }) => (level === 0 ? '20': '')};
    opacity: ${({ level }) => (`${1-level*0.3}`)};
    >*{
        pointer-events: auto;
    }
`;

const OtherWrapper = styled.div`
`;

const GlobalParallaxWrapper = styled.div`
    width: 100%;
    height: 100%;
    z-index: 10;
    overflow: hidden;
`;

// Types
interface ChildProps {
    level: number;
}

interface ParallaxContainerProps {
    active: boolean;
    parallaxChildren0?: ChildrenType;
    parallaxChildren1?: ChildrenType;
    parallaxChildren2?: ChildrenType;
    parallaxChildren3?: ChildrenType;
    children?: ChildrenType;// Accepts any ReactNode as children
}

// Component
export const ParallaxContainer: React.FC<ParallaxContainerProps> = ({ active, parallaxChildren0, parallaxChildren1, parallaxChildren2, parallaxChildren3 , children: children }) => {
    // const levels: React.ReactElement<ChildProps>[][] = [];

    // React.Children.toArray(parallaxChildren).forEach((child) => {
    //     const childProps = child && (child as React.ReactElement<ChildProps>).props;
    //     if (childProps && childProps.level) {
    //         const level = childProps.level;
    //         if (!levels[level]) {
    //             levels[level] = [];
    //         }
    //         levels[level].push(child as React.ReactElement<ChildProps>);
    //     }
    // });

    const parallaxGroups = [parallaxChildren0,parallaxChildren1,parallaxChildren2,parallaxChildren3].map((levelChildren, i) => (
        <ParallaxWrapper key={i} level={i} active={active}>
            {levelChildren}
        </ParallaxWrapper>

    ));

    return (
        <GlobalParallaxWrapper>
            {parallaxGroups}
            {children && <OtherWrapper>
                {children}
            </OtherWrapper>}
        </GlobalParallaxWrapper>); // Replace with your GlobalParallaxWrapper
};