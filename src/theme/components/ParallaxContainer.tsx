import styled, { css } from "styled-components";


// checked and not checked styles
const activeStyles = css`
    transform: translateY(0%);
`

const unactiveStyles = (level:number) => css`
    transform: translateY(-${120/level}%);
`

// parallax level 3
const ParallaxWrapper = styled.div<{level:number,active:boolean}>`
    ${({ active, level }) => (active === true ? activeStyles : unactiveStyles(level))}
`;

const GlobalParallaxWrapper = styled.div`
`;




interface Props {
    active: boolean;
    children: {level:number}[];
}

export const ParallaxContainer: React.FC<Props> = ({active, children}) => {
    const groups = () => {
        for (let i = 1; i <= 3; i++) {
            return(
                <ParallaxWrapper level={i} active={active} >
                    {children.filter(child => child.level === i)}
                    {/*I am trying to implement a parallax wrapper so then each time I have to display elements that looks like a parallax effect I just need to upload them inside this wrapper.
So far I have this in my call code:
<ParallaxContainer active={activeState}>
                    <Image src="../../public/assets/images/testSmall.svg" level={2}/>
                    <Image src="../../public/assets/images/testSmall2.svg" level={2}/>
                    <Image src="../../public/assets/images/testSmall3.svg" level={3}/>
</ParallaxContainer>
and this in my parallax container definition file:
import styled, { css } from "styled-components";


// checked and not checked styles
const activeStyles = css`
    transform: translateY(0%);
`

const unactiveStyles = (level:number) => css`
    transform: translateY(-${120/level}%);
`

// parallax level 3
const ParallaxWrapper = styled.div<{level:number,active:boolean}>`
    ${({ active, level }) => (active === true ? activeStyles : unactiveStyles(level))}
`;

const GlobalParallaxWrapper = styled.div`
`;




interface Props {
    active: boolean;
    children: {level:number}[];
}

export const ParallaxContainer: React.FC<Props> = ({active, children}) => {
    const groups = () => {
        for (let i = 1; i <= 3; i++) {
            return(
                <ParallaxWrapper level={i} active={active} >
                    {children.filter(child => child.level === i)}
                </ParallaxWrapper>
            )
        }
    }
    return(
        <GlobalParallaxWrapper>
            {groups()}
        </GlobalParallaxWrapper>
    )
}
the problem is that I dont know the correct types to define it, any advice?*/}
                </ParallaxWrapper>
            )
        }
    }
    return(
        <GlobalParallaxWrapper>
            {groups()}
        </GlobalParallaxWrapper>
    )
}