import { useContext } from "react"
import { UpdateGuestContext } from "../App";
import { HandleChange, HandleConfirm, UpdateGuest, type GuestType } from "../types"





// Define the function and its props
interface Props extends GuestType {
    handleConfirm: HandleConfirm
}
export const Guest: React.FC<Props> =
    ({
        guestID, firstName, lastName1, lastName2,
        attendance, peopleCount, bus, allergies, allergiesList, handleConfirm }) => {

        // Define the handle functions
        const setGuest = useContext(UpdateGuestContext);
        const handleInputChange: HandleChange = (e, guestID) => {
            const updateGuest: UpdateGuest = (guest) => {
                guest.peopleCount = Number(e?.target?.value) || 0;
                return guest
            }
            setGuest(guestID, updateGuest)
        }

        return (
            <>
                <h3>
                    <b><i>{firstName} {lastName1} {lastName2}</i></b>
                </h3>
                <p>¿Asistirás?</p>
                <input
                    className="toggle"
                    type="checkbox"
                    checked={attendance}
                    onChange={() => { handleConfirm(guestID) }}
                />
                <input
                    className="toggle"
                    type="number"
                    min="0" max="2"
                    value={peopleCount}
                    onChange={(e) => { handleInputChange(e, guestID) }}
                />
                <p>Número de acompañantes* :   {peopleCount - 1} </p>
            </>
        )
    }