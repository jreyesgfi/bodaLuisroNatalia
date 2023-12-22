import { PUBLIC_BASE_PATH } from "../serverConfig";

interface AllergyInterface {
    title: string;
    src: string;
}




export const commonAllergiesList:AllergyInterface[] = [
    {title: 'Altramuces', src: `${PUBLIC_BASE_PATH}`+'/assets/icons/legumes.svg'},
    {title: 'Apio', src: `${PUBLIC_BASE_PATH}`+'/assets/icons/celery.svg'},
    {title: 'Crustáceos', src: `${PUBLIC_BASE_PATH}`+'/assets/icons/crustacean.svg'},
    {title: 'Frutos de cáscara', src: `${PUBLIC_BASE_PATH}`+'/assets/icons/peanuts.svg'},
    {title: 'Gluten', src: `${PUBLIC_BASE_PATH}`+'/assets/icons/gluten.svg'},
    {title: 'Huevos', src: `${PUBLIC_BASE_PATH}`+'/assets/icons/eggs.svg'},
    {title: 'Lactosa', src: `${PUBLIC_BASE_PATH}`+'/assets/icons/cheese.svg'},
    {title: 'Moluscos', src: `${PUBLIC_BASE_PATH}`+'/assets/icons/mollusk.svg'},
    {title: 'Mostaza', src: `${PUBLIC_BASE_PATH}`+'/assets/icons/mustard.svg'},
    {title: 'Pescado', src: `${PUBLIC_BASE_PATH}`+'/assets/icons/fish.svg'},
    {title: 'Sésamo', src: `${PUBLIC_BASE_PATH}`+'/assets/icons/sesame.svg'},
    {title: 'Soja', src: `${PUBLIC_BASE_PATH}`+'/assets/icons/soy.svg'},
    {title: 'Sulfitos', src: `${PUBLIC_BASE_PATH}`+'/assets/icons/sulfites.svg'}
]
