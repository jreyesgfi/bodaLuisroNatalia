import styled, { createGlobalStyle } from 'styled-components'

export const globalColors = {
	dark: {
		primary: '#3b1d0d',
		second: '#235367'
	},
	light: {
		primary: '#ffffff',
		second: '#effafc',
		white: '#fdfdff'
	},
	grey: {
		primary: '#C3C1CA',
		light: '#f6f6fA',
		dark: '#5f6368',
	},
	color: {
		primary: '#7f4421',
		second: '#b2e5ef',
		third: '#E6CE1D',
		light: '#FDEC00'
	},
	primary: {
		100: '#f6eecf',
		200: '#e3c566',
		300: '#e3c566',
		400: '#dcb043',
		500: '#d3942d',
		600: '#bb7424',
		700: '#9b5522',
		800: '#7f4421',
		900: '#69391e'
	},
	sencondary: {
		100: '#d6f2f7',
		200: '#b2e5ef',
		300: '#7dd1e3',
		400: '#40b4d0',
		500: '#2597b5',
		600: '#217a99',
		700: '#21637d',
		800: '#235367',
		900: '#224657'
	},
	transparent: {
		dark: '#3E4463cc',
		dark2: '#3E446399',
		light: 'rgba(252, 255, 255, 0.961)',
		light2: 'rgba(252, 255, 255, 0.561)',
		primaryColor: '#D4DB0022',
		secondColor: '#005C5355',
		grey: '#B3B1AA44',
		red: '#ac2f2f55',
		full: '#ffffff00'
	},
	green: {
		primary: '#aed05e',
		light: '#EBF4D8'

	},
	red: {
		primary: '#ac2f2f',
		light: '#F7E1E1',
	},
	blue: {
		primary: '#83DAFD',
		light: '#DAF4FE'
	}
}

const GlobalStyles = createGlobalStyle`
    
    /*general style*/
    *{
        box-sizing:border-box;
        margin:0;
        padding:0;
		color:${globalColors.dark.primary};
        font-family: primary-normal, sans-serif;
		font-display: auto;
		text-align: left;
    	@media screen and (max-width: 800px) {
			text-align: center;
		}
    }

`;
interface InversedElementItf {
	inverse?: boolean;
}

interface LocatedElementItf {
	width?: string;
	height?: string;
	position?: string;
	margin?: string;
	padding?: string;
	inset?: string;
}

interface ResponsiveElementItf {
	maxWidth?: string;
	maxHeight?: string;
	minWidth?: string;
	minHeight?: string;
	smPadding?: string;
	smWidth?: string;
	mb?: string;
	mt?: string;
}

interface TextItf {
	fontSize?: string;
	weight?: string;
	spacing?: string;
	font?: string;
}

export const movilSize = '550px';
export const mediumSize = '800px';
export const minimumSize = '360px';
export const WaitingContainer = styled.div<{ loading: number }>`
	visibility: ${({ loading }) => (loading == 1 ? 'hidden' : 'visible')}
`

export const Container = styled.div`
    width: 100%;
	max-width: 1300px;
	margin-right: auto;
	margin-left: auto;
	padding: 0 50px;
	@media screen and (max-width: 960px) {
		padding: 0 30px;
	}
`;
export const MainHeading = styled.h1<InversedElementItf>`
    font-size: 48px;
	font-family: primary-light;
	margin: 0;
	padding-bottom:0;
	color: ${({ inverse }) => (inverse ?
		globalColors.dark.primary :
		globalColors.light.primary)};
	width: fit-content;
	height:fit-content;
	letter-spacing: 4px;
	line-height: 1;
	text-align: center;
	user-select: none;
	display:inline-block;
	mb?:string;
	mt?:string;
`;

interface HeadingInterface extends InversedElementItf, LocatedElementItf, TextItf, ResponsiveElementItf {
}

export const Heading = styled.h2<HeadingInterface>`
	font-size: ${({ fontSize }) => (fontSize ? fontSize : 'clamp(1.2rem, 4.8vw, 3.6rem)')};
	font-family: primary-bold, sans-serif;
	user-select: none;
	margin: ${({ margin }) => (margin ? margin : '')};
	margin-bottom: ${({ mb }) => (mb ? mb : '0.5rem')};
	margin-top: ${({ mt }) => (mt ? mt : '')};
	color: ${({ inverse }) => (inverse ?
		globalColors.dark.primary :
		globalColors.light.primary)};
	letter-spacing: 0.4rem;
	line-height: 1.4;
	display: inline-block;
	width: ${({ width }) => (width ? width : '')};
	max-width: 40vw;
	height: ${({ height }) => (height ? height : 'fit-content')};
	@media screen and (max-width: ${mediumSize}) {
		margin-left:auto;
		margin-right:auto;
		max-width:80vw;
		display: block;
	}
`;

export const NameHeading = styled.h3<HeadingInterface>`
	font-size: ${({ fontSize }) => (fontSize ? fontSize : 'clamp(0.6rem, 3vw, 1.8rem)')};
	font-family: primary-light, sans-serif;
	user-select: none;
	margin: ${({ margin }) => (margin ? margin : '')};
	margin-bottom: ${({ mb }) => (mb ? mb : '0.5rem')};
	margin-top: ${({ mt }) => (mt ? mt : '')};
	color: ${({ inverse }) => (inverse ?
		globalColors.dark.primary :
		globalColors.light.primary)};
	letter-spacing: 0.4rem;
	line-height: 1.4;
	display: block;
	width: ${({ width }) => (width ? width : '')};
	max-width: 40vw;
	height: ${({ height }) => (height ? height : 'fit-content')};
	@media screen and (max-width: ${mediumSize}) {
		margin-left:auto;
		margin-right:auto;
		max-width:80vw;
		display: block;
	}
`;
interface TextWrapperItf extends LocatedElementItf, TextItf, ResponsiveElementItf, InversedElementItf {

}
export const TextWrapper = styled.span<TextWrapperItf>`
	position: ${({ position }) => (position ? position : 'relative')};
    color: ${({ color }) => (color ? color : '')};
	font-size: ${({ fontSize }) => (fontSize ? fontSize : '')};
	font-weight: ${({ weight }) => (weight ? weight : '')};
	letter-spacing: ${({ spacing }) => (spacing ? spacing : '')};
	padding: ${({ padding }) => (padding ? padding : '')};
	margin: ${({ margin }) => (margin ? margin : '')};
	margin-bottom: ${({ mb }) => (mb ? mb : '')};
	margin-top: ${({ mt }) => (mt ? mt : '')};
	height:fit-content;
`;
export const Page = styled.div`
	scroll-snap-type: y mandatory;
	overflow-y:scroll;
	height:100vh;
`
interface Section extends LocatedElementItf, LocatedElementItf, InversedElementItf, ResponsiveElementItf {

}
export const Section = styled.section<Section>`
	scroll-snap-align: start;
	padding: ${({ padding }) => (padding ? padding : '0')};
	user-select: none;
	overflow-x: hidden;
	overflow-y: hidden;
	margin: ${({ margin }) => (margin ? margin : '')};
	background: ${({ inverse }) => (inverse ?
		globalColors.light.primary :
		globalColors.dark.primary)};
	position: ${({ position }) => (position ? position : 'relative')};
	width: ${({ width }) => (width ? width : 'auto')};
	min-width: ${({ minWidth }) => (minWidth ? minWidth : minimumSize)};
	max-width: ${({ maxWidth }) => (maxWidth ? maxWidth : 'auto')};
	height: ${({ height }) => (height ? height : 'auto')};
	max-height: ${({ maxHeight }) => (maxHeight ? maxHeight : 'auto')};
	min-height: ${({ minHeight }) => (minHeight ? minHeight : 'auto')};
	
	@media screen and (max-width: ${mediumSize}) {
		padding: ${({ smPadding }) => (smPadding ? smPadding : '0')};
	}
`;
/*padding-bottom: ${({ bottomWave}) => (bottomWave ? 0 : '')};
	margin-bottom: ${({ bottomWave}) => (bottomWave ? 0 : '')};*/

interface ContainerItf extends LocatedElementItf, ResponsiveElementItf {
	justify: string;
	align: string;
	gap: string;
	wrap: string;
}

export const Row = styled.div<ContainerItf>`
    display: flex;
	flex-direction: row;
	user-select: none;
	justify-content: ${({ justify }) => (justify ? justify : '')};
	align-items: ${({ align }) => (align ? align : '')};
	gap: ${({ gap }) => (gap ? gap : '')};
	padding: ${({ padding }) => (padding ? padding : '')};
	margin: ${({ margin }) => (margin ? margin : '')};
	position: ${({ position }) => (position ? position : '')};
	width: ${({ width }) => (width ? width : 'auto')};
	min-width: ${({ minWidth }) => (minWidth ? minWidth : 'auto')};
	max-width: ${({ maxWidth }) => (maxWidth ? maxWidth : 'auto')};
	height: ${({ height }) => (height ? height : 'auto')};
	max-height: ${({ maxHeight }) => (maxHeight ? maxHeight : 'auto')};
	min-height: ${({ minHeight }) => (minHeight ? minHeight : 'auto')};
	flex-wrap: ${({ wrap }) => (wrap ? wrap : '')};
`;
export const Column = styled.div<ContainerItf>`
    display: flex;
	flex-direction: column;
	user-select: none;
	justify-content: ${({ justify }) => (justify ? justify : '')};
	align-items: ${({ align }) => (align ? align : '')};
	gap: ${({ gap }) => (gap ? gap : '')};
	padding: ${({ padding }) => (padding ? padding : '')};
	margin: ${({ margin }) => (margin ? margin : '')};
	position: ${({ position }) => (position ? position : 'auto')};
	width: ${({ width }) => (width ? width : 'fit-content')};
	min-width: ${({ minWidth }) => (minWidth ? minWidth : '30px')};
	max-width: ${({ maxWidth }) => (maxWidth ? maxWidth : 'auto')};
	height: ${({ height }) => (height ? height : 'auto')};
	max-height: ${({ maxHeight }) => (maxHeight ? maxHeight : 'auto')};
	min-height: ${({ minHeight }) => (minHeight ? minHeight : 'auto')};
`;



export const Text = styled.p<TextWrapperItf>`
    color:${({ inverse }) => inverse ? globalColors.dark.primary : globalColors.light.primary};
    width:${({ width }) => width ? width : 'auto'};
	font-size:${({ fontSize }) => fontSize ? fontSize : '16pt'};
	user-select: none;
	max-width: 45vw;
	font-family:${({ font }) => font ? font : 'primary-light'};
	display: inline-block;
    @media screen and (max-width: 800px) {
		max-width: 80vw;
		width:${({ smWidth }) => smWidth ? smWidth : 'auto'};
	}
`;
export const Image = styled.img`
	object-fit:cover;
	max-width:${({ width }) => width ? width : '45vw'};
	max-height:${({ height }) => height ? height : '60vh'};
	@media screen and (max-width: ${mediumSize}) {
		max-width:${({ width }) => width ? width : '60vw'};
		max-height:${({ height }) => height ? height : '40vh'};
		margin:0 auto;
	}
`
export const CenterWrapper = styled.div<ContainerItf>`
	position:absolute;
	inset:${({ inset }) => inset ? inset : '10vh 0 0 0'};
	width:95%;
	height:${({ height }) => (height ? height : 'fit-content')};
	margin:auto;
	display:flex;
	flex-wrap: wrap;
	gap:1.5rem;
	justify-content:space-around;
`;

export const Icon = styled.svg`
`;



export default GlobalStyles;