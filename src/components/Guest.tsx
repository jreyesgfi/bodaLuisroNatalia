import { ReactNode, useContext, useEffect, useState } from "react"
import styled from 'styled-components';

import { commonAllergiesList } from "../assets/allergies";
import { answersAllergiesText, answersAssistanceText, answersBusGoText, answerAllergiesDone, questionAllergiesDone, questionAllergiesText, questionAssistanceText, questionBusText, questionFinishGuest, answersFinishGuest, otherAllergyText, questionHotelText, answersHotelText, questionBusTimeText, answersBusTimeText, answersBusBackText } from "../assets/texts/guestText";
import { UpdateGuestContext } from "../pages/ConfirmationPage";
import { ChangeGuestContext } from "../sections/ConfirmationSection";
import { MultiOptionSelector } from "../theme/components/MultiOptionSelector";
import { NameHeading} from "../theme/globalStyles";
import { HandleChange, HandleNewAllergy,  UpdateGuest, type GuestType, HandleSelection, QuestionAnswerData, StageLabel } from "../types"
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
        const [progress, setProgress] = useState<number>(0);
        
        type StagesFlow = StageLabel[];
        const [stagesFlow, setStagesFlow] = useState<StagesFlow>(
            ['assistance']);
        
        const fullFlow = ['assistance','busGo','busTime','hotel','allergies','allergiesList','finish'];
        useEffect(() => {
            // Calculate the index of the last element in stagesFlow
            const lastStageIndex = stagesFlow.length - 1;
            console.log(stagesFlow[lastStageIndex]);
            // If stagesFlow has elements
            if (lastStageIndex >= 0) {
              // Find the index of the last stage in the fullFlow array
              const indexInFullFlow = fullFlow.indexOf(stagesFlow[lastStageIndex]);
          
              // If the last stage is found in fullFlow
              if (indexInFullFlow !== -1) {
                // Update the currentStage based on the index
                setProgress(indexInFullFlow);
              }
            }
          }, [stagesFlow]);
        
        
        
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
            setStagesFlow(prevStagesFlow => {
                const updatedFlow = [ ...prevStagesFlow];
                const nextStage = nextStagesFlow[currentStageLabel][Number(changed)];
                updatedFlow.push(nextStage);
                return updatedFlow;
            });
        }
            
        // Define the handle functions
        const setGuest = useContext(UpdateGuestContext);
        const changeGuest = useContext(ChangeGuestContext);

        const nextStage = () => {
            setStageNum(stageNum + 1);
        }
        const previousStage = () => {
            setStagesFlow(prevStagesFlow => {
                const updatedFlow = [ ...prevStagesFlow]; 
                updatedFlow.pop();
                return updatedFlow;
            });
            setStageNum(stageNum - 1);
        }

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
                    numStages={fullFlow.length-1}
                    currentStage={progress}
                />
                {Object.entries(questionsAnswerData).map(
                    ([stage,stageData],i)=> {
                        console.log()
                        return(<Question
                            key={i}
                            difStages = {stageNum - (stagesFlow.indexOf(stage as StageLabel)!==-1?
                                stagesFlow.indexOf(stage as StageLabel):100)
                            }
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