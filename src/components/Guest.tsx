import { useContext } from "react"
import styled from 'styled-components';
import { UpdateGuestContext } from "../App";
import { commonAllergiesList } from "../assets/allergies";
import { globalColors } from "../theme/globalStyles";
import { HandleChange, UpdateGuest, type GuestType } from "../types"





// Styled components
const SmallIcon = styled.img`
	width: 2rem;
`;



// Define the function and its props
interface Props extends GuestType {
}
export const Guest: React.FC<Props> =
    ({
        guestID, firstName, lastName1, lastName2,
        attendance, extraGuestsNum, bus, allergies, allergiesList }) => {

        // Define the handle functions
        const setGuest = useContext(UpdateGuestContext);


        const handleConfirm: HandleChange = (e, guestID) => {
            const updateGuest: UpdateGuest = (guest) => {
                guest.attendance = !guest.attendance;
                return guest
            }
            setGuest(guestID, updateGuest);
        }

        const handleBus: HandleChange = (e, guestID) => {
            const updateGuest: UpdateGuest = (guest) => {
                guest.bus = !guest.bus;
                return guest
            }
            setGuest(guestID, updateGuest);
        }
        const handleAllergies: HandleChange = (e, guestID) => {
            const updateGuest: UpdateGuest = (guest) => {
                guest.allergies = !guest.allergies;
                return guest
            }
            setGuest(guestID, updateGuest);
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
                    onChange={(e) => { handleConfirm(e, guestID) }}
                />
                <p>¿Se necesita autobús?</p>
                <input
                    className="toggle"
                    type="checkbox"
                    checked={bus}
                    onChange={(e) => { handleBus(e, guestID) }}
                />
                <p>¿Alguna alergia alimentaria?</p>
                <input
                    className="toggle"
                    type="checkbox"
                    checked={allergies}
                    onChange={(e) => { handleAllergies(e, guestID) }}
                />
                {allergies === true &&
                    <ul>

                        {commonAllergiesList.map((allergy, i) =>
                            <li key={i}>
                                <input
                                    className="toggle"
                                    type="checkbox"
                                    checked={allergies}
                                    onChange={(e) => { }}
                                />
                                <SmallIcon src={allergy.src} alt={allergy.title}></SmallIcon>
                                &nbsp;&nbsp;&nbsp;{allergy.title}
                            </li>
                        )}
                    </ul>

                }
            </>
        )
    }