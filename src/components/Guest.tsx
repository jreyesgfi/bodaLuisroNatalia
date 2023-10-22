import { useContext } from "react"
import styled from 'styled-components';
import { UpdateGuestContext } from "../App";
import { commonAllergiesList } from "../assets/allergies";
import { questionAllergiesText, questionAssistanceText, questionBusText } from "../assets/texts/guestText";
import { Checkbox } from "../theme/Checkbox";
import {NameHeading, Text } from "../theme/globalStyles";
import { HandleChange, HandleNewAllergy, UpdateGuest, type GuestType } from "../types"





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


        const handleConfirm: HandleChange = (guestID) => {
            const updateGuest: UpdateGuest = (guest) => {
                guest.attendance = !guest.attendance;
                return guest
            }
            setGuest(guestID, updateGuest);
        }

        const handleBus: HandleChange = (guestID) => {
            const updateGuest: UpdateGuest = (guest) => {
                guest.bus = !guest.bus;
                return guest
            }
            setGuest(guestID, updateGuest);
        }
        const handleAllergies: HandleChange = (guestID) => {
            const updateGuest: UpdateGuest = (guest) => {
                guest.allergies = !guest.allergies;
                return guest
            }
            setGuest(guestID, updateGuest);
        }
        const handleNewAllergy: HandleNewAllergy = (guestID, allergyName) => {
            const updateGuest: UpdateGuest = (guest) => {
                // if it isn't yet
                const position = guest.allergiesList?.indexOf(allergyName) || -1;
                if (position === -1) {
                    guest.allergiesList?.push(allergyName);
                }
                else {
                    guest.allergiesList?.splice(position, 1)
                }
                return guest
            }
            setGuest(guestID, updateGuest);
        }
        return (
            <>
                <NameHeading inverse={true}>
                    <b><i>{firstName} {lastName1} {lastName2}</i></b>
                </NameHeading>
                <label>
                    <Text inverse={true}>{questionAssistanceText}</Text>
                    <Checkbox
                        checked={attendance}
                        onChange={() => { handleConfirm(guestID) }}
                    />
                </label>
                <label>
                    <Text inverse={true}>{questionBusText}</Text>
                    <input
                        className="toggle"
                        type="checkbox"
                        checked={bus}
                        onChange={() => { handleBus(guestID) }}
                    />
                </label>
                <label>
                    <Text inverse={true}>{questionAllergiesText}</Text>
                    <input
                        className="toggle"
                        type="checkbox"
                        checked={allergies}
                        onChange={() => { handleAllergies(guestID) }}
                    />
                </label>

                {allergies === true &&
                    <ul>

                        {commonAllergiesList.map((allergy, i) =>
                            <li key={i}>
                                <input
                                    className="toggle"
                                    type="checkbox"
                                    checked={allergiesList?.indexOf(allergy.title) !== -1}
                                    onChange={() => { handleNewAllergy(guestID, allergy.title) }}
                                />
                                <SmallIcon src={allergy.src} alt={allergy.title}></SmallIcon>
                                <Text inverse={true}>&nbsp;&nbsp;&nbsp;{allergy.title}</Text>
                            </li>
                        )}
                    </ul>

                }
            </>
        )
    }