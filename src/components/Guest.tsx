import { useContext, useState } from "react"
import styled from 'styled-components';
import { UpdateGuestContext } from "../App";
import { commonAllergiesList } from "../assets/allergies";
import { answersAllergiesText, answersAssistanceText, answersBusText, questionAllergiesText, questionAssistanceText, questionBusText } from "../assets/texts/guestText";
import { Checkbox } from "../theme/components/Checkbox";
import { MultiOptionSelector } from "../theme/components/MultiOptionSelector";
import { NameHeading, Text } from "../theme/globalStyles";
import { HandleChange, HandleNewAllergy, UpdateGuest, type GuestType } from "../types"
import { Question } from "./Question";
import { questionExtraGuestsText } from "../assets/texts/guestText";





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


        // Define the states
        const [stageNum, setStageNum] = useState<number>(0);

        // Define the handle functions
        const setGuest = useContext(UpdateGuestContext);

        const nextStage = () => { setStageNum(stageNum + 1) }
        const previousStage = () => { setStageNum(stageNum - 1) }

        const handleConfirm: HandleChange = (guestID) => {
            const updateGuest: UpdateGuest = (guest) => {
                guest.attendance = !guest.attendance;
                return guest
            }
            setGuest(guestID, updateGuest);
            nextStage();
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
                <Question
                    difStages={stageNum - 0}
                    questionText={questionAssistanceText}
                    answerButtonList={
                        answersAssistanceText.map((answer: string) => ({ text: answer }))
                    }
                    handleSelection={() => { handleConfirm(guestID) }}
                    handleBack ={()=> {previousStage()}} />
                    
                <Question
                    difStages={stageNum - 1}
                    questionText={questionBusText}
                    answerButtonList={
                        answersBusText.map((answer: string) => ({ text: answer }))
                    }
                    handleSelection={() => { handleConfirm(guestID) }} 
                    handleBack ={()=> {previousStage()}}/>
                <Question
                    difStages={stageNum - 2}
                    questionText={questionAllergiesText}
                    answerButtonList={
                        answersAllergiesText.map((answer: string) => ({ text: answer }))
                    }
                    handleSelection={() => { handleConfirm(guestID) }} 
                    handleBack ={()=> {previousStage()}}/>
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
                        checked={(allergyTitle) => {
                            return (allergiesList?.indexOf(allergyTitle) !== -1)
                        }}
                        handleClick={(allergyTitle) => { handleNewAllergy(guestID, allergyTitle) }}
                    />
                }

            </>
        )
    }