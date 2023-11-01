import { useContext } from "react";
import { UpdateGuestContext } from "../App";
import { ListOfGuests, HandleChange, UpdateGuest, HandleNumberChange } from "../types"
import { Guest } from "./Guest"


interface Props {
    guests: ListOfGuests
}

export const Guests: React.FC<Props> = ({ guests }) => {

    // Define the handle functions
    const setGuest = useContext(UpdateGuestContext);
    const handleInputChange: HandleNumberChange = (e, guestID) => {
        const updateGuest: UpdateGuest = (guest) => {
            guest.extraGuestsNum = Number(e?.target?.value) || 0;
            return guest
        }
        setGuest(guestID, updateGuest);
    }

    return (
        <>
            {guests.length > 0 &&
                <>
                    {guests.map((guest) => {
                        return (
                            <Guest
                                key={guest.guestID}
                                guestID={guest.guestID}
                                groupID={guest.groupID}
                                firstName={guest.firstName}
                                lastName1={guest.lastName1}
                                lastName2={guest.lastName2}
                                confirmed={guest.confirmed}
                                attendance={guest.attendance}
                                extraGuestsNum={guest.extraGuestsNum}
                                bus={guest.bus}
                                allergies={guest.allergies}
                                allergiesList={guest.allergiesList}
                            />
                        )
                    })}
                    <br></br>
                    <br></br>
                    <br></br>
                    
                    {/* <p>{questionExtraGuestsText}</p>
                    <input
                        className="toggle"
                        type="number"
                        min="0" max="2"
                        value={guests[0].extraGuestsNum}
                        onChange={(e) => {
                            guests.forEach((guest) => {
                                handleInputChange(e,guest.guestID)
                            });
                        }}
                    /> */}
                </>
            }
        </>
    )

}