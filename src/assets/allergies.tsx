import {adjustUrlForEnvironment } from "../serverConfig";

interface AllergyInterface {
    title: string;
    src: string;
}




export const commonAllergiesList:AllergyInterface[] = [
    {title: 'Altramuces', src:`${adjustUrlForEnvironment('../../assets/icons/legumes.svg')}`},
    {title: 'Apio', src:`${adjustUrlForEnvironment('../../assets/icons/celery.svg')}`},
    {title: 'Crustáceos', src:`${adjustUrlForEnvironment('../../assets/icons/crustacean.svg')}`},
    {title: 'Frutos de cáscara', src:`${adjustUrlForEnvironment('../../assets/icons/peanuts.svg')}`},
    {title: 'Gluten', src:`${adjustUrlForEnvironment('../../assets/icons/gluten.svg')}`},
    {title: 'Huevos', src:`${adjustUrlForEnvironment('../../assets/icons/eggs.svg')}`},
    {title: 'Lactosa', src:`${adjustUrlForEnvironment('../../assets/icons/cheese.svg')}`},
    {title: 'Moluscos', src:`${adjustUrlForEnvironment('../../assets/icons/mollusk.svg')}`},
    {title: 'Mostaza', src:`${adjustUrlForEnvironment('../../assets/icons/mustard.svg')}`},
    {title: 'Pescado', src:`${adjustUrlForEnvironment('../../assets/icons/fish.svg')}`},
    {title: 'Sésamo', src:`${adjustUrlForEnvironment('../../assets/icons/sesame.svg')}`},
    {title: 'Soja', src:`${adjustUrlForEnvironment('../../assets/icons/soy.svg')}`},
    {title: 'Sulfitos', src:`${adjustUrlForEnvironment('../../assets/icons/sulfites.svg')}`}
]
