import { ListOfGuests, GuestID, HandleConfirm } from "../types"
import { Guest } from "./Guest"


interface Props {
    guests: ListOfGuests
    handleConfirm: HandleConfirm
}

export const Guests: React.FC<Props> = ({ guests, handleConfirm }) => {
    return (
        <>
            {guests.length >0 && guests.map((guest) => {
                return (
                    <Guest
                        key={guest.guestID}
                        firstName={guest.firstName}
                        lastName1={guest.lastName1}
                        lastName2={guest.lastName2}
                        confirmed={guest.confirmed}
                        peopleCount={guest.peopleCount}
                        groupID={guest.groupID}
                        guestID={guest.guestID}
                        handleConfirm={handleConfirm}

                    />
                )

            })}
        </>
    )

}