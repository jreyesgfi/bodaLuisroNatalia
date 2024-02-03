import { Text} from "../../theme/globalStyles";
export const homeTitle = 'Bienvenido!';
export const homeSubtitle = 'Este es el Home de Nuestra Boda';
export const HomeBody = () => {return(
    <Text inverse fontSize='9pt' letterSpacing="1px">
        Aquí podrás explorar <b>Nuestra Historia</b>, el <b>Itinerario</b>,  indicaciones de <b>Cómo Llegar</b>  y ¡todas las <b>fotos</b> que subamos!
    </Text>
)}

export const HomeLinks = [
    {title: 'Nuestra Historia',
    href: 'nuestra-historia',
    icon: 'history'},

    {title: 'Itinerario',
    href: 'itinerario',
    icon: 'directions_walk'},

    {title: 'Cómo Llegar',
    href: 'como-llegar',
    icon: 'flight'}
]