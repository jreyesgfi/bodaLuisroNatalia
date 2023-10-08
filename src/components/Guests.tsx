import { ListOfGuests } from "../types"
import { Guest } from "./Guest"


interface Props {
    guests:ListOfGuests
}

export const Guests: React.FC<Props> = ({guests}) => {
    return(
        <>
            {guests.map((guest)=>{
                
                <Guest 
                    key = {guest[6]}
                    firstName={guest[0]}
                    lastName1={guest[1]}
                    lastName2={guest[2]}
                    confirmed={guest[3] === "No" ? false : true}
                    peopleCount={Number(guest[4])}
                    groupID={guest[5]}
                    guestID={guest[6]}

                />
            })}
        </> 
    )
    
}