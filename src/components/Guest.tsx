import { useContext, useState } from "react"
import styled from 'styled-components';

import { commonAllergiesList } from "../assets/allergies";
import { answersAllergiesText, answersAssistanceText, answersBusText, answerAllergiesDone, questionAllergiesDone, questionAllergiesText, questionAssistanceText, questionBusText, questionFinishGuest, answersFinishGuest, otherAllergyText, questionHotelText, answersHotelText } from "../assets/texts/guestText";
import { UpdateGuestContext } from "../pages/ConfirmationPage";
import { ChangeGuestContext } from "../sections/ConfirmationSection";
import { MultiOptionSelector } from "../theme/components/MultiOptionSelector";
import { NameHeading} from "../theme/globalStyles";
import { HandleChange, HandleNewAllergy, HandleSelection, UpdateGuest, type GuestType } from "../types"
import { Question } from "./Question";


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
        attendance, busGo, busBack, allergies, allergiesList, otherAllergy }) => {


        // Define the states
        const [stageNum, setStageNum] = useState<number>(0);

        // Define the handle functions
        const setGuest = useContext(UpdateGuestContext);
        const changeGuest = useContext(ChangeGuestContext);

        const nextStage = () => {
            setStageNum(stageNum + 1)
        }
        const previousStage = () => { setStageNum(stageNum - 1) }
        const handleSelection: HandleSelection = (guestID, property, state) => {
            const updateGuest: UpdateGuest = (guest: GuestType) => {
                // @ts-ignore
                guest[property] = state; // we should check it
                return guest
            }
            setGuest(guestID, updateGuest);
            nextStage();
        }
        
        const handleConfirm: HandleChange = (guestID, rawState) => {

            if (rawState === null) { return }
            const state = answersAssistanceText[rawState].value;
            handleSelection(guestID, 'attendance', state);
            if (state === false) {
                setStageNum(4);
            }
        }

        const handleHotel: HandleChange = (guestID, rawState) => {

            if (rawState === null) { return }
            const state = answersHotelText[rawState].value;
            handleSelection(guestID, 'hotel', state);
        }

        const handleBus: HandleChange = (guestID, rawState) => {
            if (rawState === null) { return }
            const state = answersBusText[rawState].value;
            handleSelection(guestID, 'busGo', state[0]);
            handleSelection(guestID, 'busBack', state[1]);
        }
        const handleAllergies: HandleChange = (guestID, rawState) => {
            if (rawState === null) { return }
            const state = answersAllergiesText[rawState].value;
            handleSelection(guestID, 'allergies', state);
        }
        
        const handleNewAllergy: HandleNewAllergy = (guestID, allergyName) => {
            const updateGuest: UpdateGuest = (guest) => {
                // if it isn't yet
                const guestCopy = {...guest}
                const position = guest.allergiesList?.indexOf(allergyName) || -1;
                if (position === -1) {
                    guestCopy.allergiesList?.push(allergyName);
                    return guestCopy
                }
                //else
                guestCopy.allergiesList?.splice(position,1);
                return guestCopy
            }
            setGuest(guestID, updateGuest);
        }
        const handleOtherAllergy: HandleChange = (guestID,otherAllergy) => {
            const updateGuest: UpdateGuest = (guest) => {
                const guestCopy = {...guest}
                guestCopy.otherAllergy = otherAllergy;
                return guestCopy
            }
            setGuest(guestID, updateGuest);
        }

        const returnBeginning = ()=>{
            setStageNum(0);
        }

        const handleFinished = (rawState:number|null)=>{
            if (rawState === null){ return}
            const state = answersFinishGuest[rawState].value;
            if (state === true) { 
                nextStage();
                changeGuest(true);
            }
            else { handleBack();}
        }
        const handleBack = (toBeggining?:boolean)=>{
            if (attendance === false || toBeggining === true){
                return returnBeginning();
                
            }
            return previousStage();
        }

        const handleReturnToGuest = () => {
            returnBeginning();
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
                        answersAssistanceText.map((answer) => ({ text: answer.text }))
                    }
                    handleSelection={(state) => { handleConfirm(guestID, state) }}
                    handleBack={() => { handleBack() }} />

                <Question
                    difStages={stageNum - 1}
                    questionText={questionBusText}
                    answerButtonList={
                        answersBusText.map((answer) => ({ text: answer.text }))
                    }
                    handleSelection={(state) => { handleBus(guestID, state) }}
                    handleBack={() => { handleBack() }} />
                
                <Question
                    difStages={stageNum - 2}
                    questionText={questionHotelText}
                    answerButtonList={
                        answersHotelText.map((answer) => ({ text: answer.text }))
                    }
                    handleSelection={(state) => { handleHotel(guestID, state) }}
                    handleBack={() => { handleBack() }}>

                </Question>
                <Question
                    difStages={stageNum - 3}
                    questionText={questionAllergiesText}
                    answerButtonList={
                        answersAllergiesText.map((answer) => ({ text: answer.text }))
                    }
                    handleSelection={(state) => { handleAllergies(guestID, state) }}
                    handleBack={() => { handleBack() }}>

                </Question>
                {allergies === true && 
                    <Question
                        difStages={stageNum - 4}
                        questionText={questionAllergiesDone}
                        answerButtonList={
                            answerAllergiesDone.map((answer) => ({ text: answer.text }))
                        }
                        handleSelection={() => { nextStage() }}
                        handleBack={() => { handleBack() }}>
                        {stageNum ===4 &&
                            <MultiOptionSelector
                                listGiven={commonAllergiesList}
                                checked={(allergyTitle) => {
                                    return (allergiesList?.indexOf(allergyTitle) !== -1)
                                }}
                                handleClick={(allergyTitle) => {handleNewAllergy(guestID, allergyTitle) }}
                                otherOption={otherAllergyText}
                                handleOtherOption={(newAllergy)=>{handleOtherAllergy(guestID, newAllergy)}}
                            />
                        }
                        
                    </Question>
                }
                
                <Question
                    difStages={stageNum - (allergies === true? 5:4)}
                    questionText={questionFinishGuest}
                    answerButtonList={
                        answersFinishGuest.map((answer) => ({ text: answer.text }))
                    }
                    handleSelection={(value) => { handleFinished(value) }}
                    handleBack={() => { 
                        handleBack();
                    }}>
                </Question>
            


            </>
        )
    }