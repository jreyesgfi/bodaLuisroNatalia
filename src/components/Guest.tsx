import { useContext } from "react"
import styled from 'styled-components';
import { UpdateGuestContext } from "../App";
import { commonAllergiesList } from "../assets/allergies";
import { questionAllergiesText, questionAssistanceText, questionBusText } from "../assets/texts/guestText";
import { Checkbox } from "../theme/components/Checkbox";
import { MultiOptionSelector } from "../theme/components/MultiOptionSelector";
import { NameHeading, Text } from "../theme/globalStyles";
import { HandleChange, HandleNewAllergy, UpdateGuest, type GuestType } from "../types"
import { Question } from "./Question";
import { answerAssistanceText1, answerAssistanceText2, questionExtraGuestsText } from "../assets/texts/guestText";





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
                {<Question
                    questionText={questionAssistanceText}
                    answerButtonList={[
                        {text: answerAssistanceText1},
                        {text: answerAssistanceText2}
                    ]}
                    handleSelection={() => {handleConfirm(guestID)}}/>
                }
                <label>
                    <Checkbox
                        checked={bus}
                        onChange={() => { handleBus(guestID) }}
                    />
                    <Text inverse={true}>{questionBusText}</Text>
                </label>
                <label>
                    <Checkbox
                        checked={allergies}
                        onChange={() => { handleAllergies(guestID) }}
                    />
                    <Text inverse={true}>{questionAllergiesText}</Text>
                </label>

                {allergies === true &&
                    <MultiOptionSelector 
                        listGiven={commonAllergiesList}
                        checked={(allergyTitle)=>{
                            return(allergiesList?.indexOf(allergyTitle) !== -1)
                            }}
                        handleClick={(allergyTitle)=>{handleNewAllergy(guestID, allergyTitle)}}
                            />
                }
                
            </>
        )
    }