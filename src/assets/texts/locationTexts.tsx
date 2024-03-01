import { Text } from "../../theme/globalStyles";

export const locationTitle = 'Cómo Llegar';
export const locationSubtitle = 'Las ubicaciones más importantes con enlaces a Google Maps';
interface locationDict {
    title:string,
    label:string,
    url:string,
    icon:string
}
export const locationsDict: locationDict[] = [
    {title:'Lugar de la ceremonia',label:'Iglesia de Santiago Apóstol',url:'https://maps.app.goo.gl/DsYMyHYyY7cE2w8H7',icon:'assets/icons/church.svg'},
    {title:'Salida de buses',label:'Estación autobuses Poniente',url:'', icon:'assets/icons/bus.svg'},
    {title:'Lugar del banquete',label:'Monasterio de Santa María de Valbuena',url:'https://maps.app.goo.gl/R4aNEKFCU48EochU7', icon:'assets/icons/restaurant.svg'}
]