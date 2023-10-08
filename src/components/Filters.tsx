import { FILTERS_BUTTONS } from "../consts"
import { type FilterValue } from "../types"

interface Props { 
    onFilterChanged:(filter: FilterValue) => void
    filterSelected: FilterValue
}


export const Filters : React.FC<Props> = (
    {onFilterChanged, filterSelected}
    ) => {
    return (
        <ul className= "filters">
            {FILTERS_BUTTONS.map(({key, literal, href}) => {
                const className = key === filterSelected ? "selected" : ''

                return(
                    <li key={key}>
                        <a
                            href={href}
                            className={className}
                            onClick={(e)=>{
                                e.preventDefault();
                                onFilterChanged(key)}}>
                            {literal}
                        </a>
                    </li>
                )
            }
                
            )}
        </ul>
    )
}