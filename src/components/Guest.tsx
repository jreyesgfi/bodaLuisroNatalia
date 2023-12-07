import { ReactNode, useContext, useState } from "react"
import styled from 'styled-components';

import { commonAllergiesList } from "../assets/allergies";
import { answersAllergiesText, answersAssistanceText, answersBusGoText, answerAllergiesDone, questionAllergiesDone, questionAllergiesText, questionAssistanceText, questionBusText, questionFinishGuest, answersFinishGuest, otherAllergyText, questionHotelText, answersHotelText, questionBusTimeText, answersBusTimeText, answersBusBackText } from "../assets/texts/guestText";
import { UpdateGuestContext } from "../pages/ConfirmationPage";
import { ChangeGuestContext } from "../sections/ConfirmationSection";
import { MultiOptionSelector } from "../theme/components/MultiOptionSelector";
import { NameHeading} from "../theme/globalStyles";
import { HandleChange, HandleNewAllergy,  UpdateGuest, type GuestType, HandleSelection, QuestionAnswerData } from "../types"
import { Question } from "./Question";
import { ProgressPercentageWidget } from "../theme/components/ProgressPercentage";

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
        type StageLabel = "assistance" | 'busGo' | 'busBack' | 'busTime' | 'hotel' | 'allergies' | 'allergiesList' | "finish";
        
        interface StagesFlow { [key:string]: number};
        const [stagesFlow, setStagesFlow] = useState<StagesFlow>({
            assistance: 0,
            busGo: 1,
            busTime: 1,
            hotel: 2,
            allergies: 3,
            allergiesList: 3,
            finish: 4
        });
        
        
        interface NextStagesFlow {[key: string]: StageLabel[];}
        const nextStagesFlow:NextStagesFlow = {
            assistance: ['busGo','finish'],
            busGo: ['busTime','hotel'],
            busTime: ['hotel'],
            hotel: ['allergies'],
            allergies: ['allergiesList','finish'],
            allergiesList: ['finish'],
            finish:['finish']
        }
        

        interface QuestionsAnswerData {
            [key: string]: QuestionAnswerData;
        }
        const questionsAnswerData:QuestionsAnswerData = {
            'assistance':{question:questionAssistanceText, answers:answersAssistanceText, flowChangerAnswers:[0]},
            'busGo':{question:questionBusText, answers:answersBusGoText, flowChangerAnswers:[0,1]},
            'busTime':{question:questionBusTimeText, answers:answersBusTimeText, flowChangerAnswers:[]},
            'hotel':{question:questionHotelText, answers:answersHotelText, flowChangerAnswers:[]},
            'allergies':{question:questionAllergiesText, answers:answersAllergiesText, flowChangerAnswers:[0]},
            'allergiesList':{question:questionAllergiesDone, answers:answerAllergiesDone, flowChangerAnswers:[]},
            'finish':{question:questionFinishGuest, answers:answersFinishGuest, flowChangerAnswers:[]}
        }
        interface OtherWidget {[key: string]: ReactNode;}
        const otherWidget:OtherWidget = {
            allergiesList:(<MultiOptionSelector
                listGiven={commonAllergiesList}
                checked={(allergyTitle) => {
                    return (allergiesList?.indexOf(allergyTitle) !== -1)
                }}
                handleClick={(allergyTitle) => {handleNewAllergy(guestID, allergyTitle) }}
                otherOption={otherAllergyText}
                handleOtherOption={(newAllergy)=>{handleOtherAllergy(guestID, newAllergy)}}
            />)
        }
        
        const handleFinished = (rawState:number|null)=>{
            if (rawState === null){ return}
            const state = answersFinishGuest[rawState].value;
            if (state === true) { 
                changeGuest(true);
            }
            else { previousStage();}
        }

        const handleBus:HandleSelection = (guestID, property,rawState, answers, flowChangerAnswers )=>{
            if (rawState === null) { return }
            // check if the flow has changed
            const changed = rawState in flowChangerAnswers;
            handleFlowChange(property, changed);
            
            // update the guest data
            const stateGo = answersBusGoText[rawState].value;
            const stateBack = answersBusBackText[rawState].value;
            const updateGuest: UpdateGuest = (guest: GuestType) => {
                // @ts-ignore
                guest['busGo'] = stateGo;
                guest['busBack'] = stateBack;
                return guest
            }
            setGuest(guestID, updateGuest);

            // advance in the form
            nextStage();
        }

        interface CustomFunction {[key: string]:HandleSelection;}
        const customFunction:CustomFunction = {
            busGo: (guestID, property, rawState, answers, flowChangerAnswers) =>{
                handleBus(guestID, property, rawState, answers, flowChangerAnswers);
            },
            finish: (guestID, property, rawState, answers, flowChangerAnswers)=>{
                handleFinished(rawState);
            }
        }



        const handleFlowChange = (currentStageLabel: StageLabel, changed: boolean) => {
            const initialNextStage = nextStagesFlow[currentStageLabel as keyof NextStagesFlow][0];
            const newNextStage = nextStagesFlow[currentStageLabel as keyof NextStagesFlow][1];
            setStagesFlow(prevStagesFlow => {
                const updatedFlow = { ...prevStagesFlow };
        
                if (changed === true) {
                    updatedFlow[newNextStage] = stageNum + 1;
                    updatedFlow[initialNextStage] = 7;
                } else {
                    updatedFlow[initialNextStage] = stageNum + 1;
                    updatedFlow[newNextStage] = 7;
                }
                return updatedFlow;
            });
        }
            
        // Define the handle functions
        const setGuest = useContext(UpdateGuestContext);
        const changeGuest = useContext(ChangeGuestContext);

        const nextStage = () => {
            setStageNum(stageNum + 1)
        }
        const previousStage = () => { setStageNum(stageNum - 1) }

        const handleSelection: HandleSelection = (guestID, property, rawState, answers, flowChangerAnswers)=>{
            if (rawState === null) { return }
            // check if the flow has changed
            const changed = rawState in flowChangerAnswers;
            handleFlowChange(property, changed);
            
            // update the guest data
            const state = answers[rawState].value;
            const updateGuest: UpdateGuest = (guest: GuestType) => {
                // @ts-ignore
                guest[property] = state; // we should check it
                return guest
            }
            setGuest(guestID, updateGuest);

            // advance in the form
            nextStage();
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

        return (
            <>  
                <NameHeading inverse={true}>
                    <b>{firstName} {lastName1} {lastName2}</b>
                </NameHeading>
                <ProgressPercentageWidget
                    numStages={stagesFlow['finish']}
                    currentStage={stageNum}
                />
                {Object.entries(questionsAnswerData).map(
                    ([stage,stageData],i)=> {
                        return(<Question
                            key={i}
                            difStages = {stageNum -stagesFlow[stage]}
                            questionText = {stageData.question}
                            answerButtonList = {
                                stageData.answers.map((answer)=>({text:answer.text}))
                            }
                            handleSelection={(state) => {
                                
                                customFunction[stage]?
                                customFunction[stage](guestID, stage as StageLabel, state, stageData.answers, stageData.flowChangerAnswers)
                                :handleSelection(guestID, stage as StageLabel, state, stageData.answers, stageData.flowChangerAnswers);
                            }}
                            handleBack={()=> {previousStage()}}
                        >
                            {otherWidget[stage]}
                        </Question>)
                    }
                )}
            


            </>
        )
    }