import { Text} from "../../theme/globalStyles";
export const homeTitle = 'Bienvenido!';
export const homeSubtitle = 'Este es el Home de Nuestra Boda';
export const HomeBody = () => {return(
    <Text inverse fontSize='10pt' letterSpacing="1px">
        Aquí podrás explorar <b>Nuestra Historia</b>, el <b>Itinerario</b>,  indicaciones de <b>Cómo Llegar</b>  y ¡todas las <b>fotos</b> que subamos!
    </Text>
)}

export const HomeLinks = [
    {title: 'Nuestra Historia',
    href: 'nuestra-historia',
    background: 'assets/svgs/',
    icon: 'assets/svgs/one-line-rings.svg'},

    {title: 'Asistencia',
    href: 'asistencia',
    background: 'assets/svgs/attendance.svg',
    icon: ''},

    {title: 'Planning',
    href: 'planning',
    background: 'assets/svgs/planning.svg',
    icon: ''},

    {title: 'Cómo Llegar',
    href: 'como-llegar',
    background: 'assets/svgs/geography.svg',
    icon: ''},

    {title: 'Galería',
    href: 'galeria',
    background: 'assets/svgs/gallery.svg',
    icon: ''},

    {title: 'Ayúdanos',
    href: 'ayudanos',
    background: '',
    icon: 'assets/svgs/gift.svg'},
]