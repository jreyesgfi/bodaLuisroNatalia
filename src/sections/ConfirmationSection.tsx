import { createContext, useState } from 'react';
import { Guests } from '../components/Guests'
import { GuestsProguessBar } from '../components/GuestsProgressBar';
import { NextBackGuestControl } from '../components/Next&BackGuest';
import { submitData} from '../connection/connectionMethods';
import { Section } from '../theme/globalStyles';
import { ListOfGuests } from '../types'
interface Props {
    guests: ListOfGuests;
}
export const ChangeGuestContext = createContext<any>(null);
export const ConfirmationSection: React.FC<Props> =
    ({guests}) => {
        const [currentGuestNum, setCurrentGuestNum] = useState<number>(1);
        const [lastGuestChecked, setLastGuestChecked] = useState<number>(0);
        const triggerSubmitData = ()=>{submitData(guests)};
        const changeGuest = (next?:boolean) =>{
            if (currentGuestNum > lastGuestChecked+1) { setLastGuestChecked(currentGuestNum-1);}
            setCurrentGuestNum(currentGuestNum + (next===false?-1:1));
            triggerSubmitData();
        }
        return (
            <ChangeGuestContext.Provider value={changeGuest}>
                <Section inverse={true} margin='16px 2.5vw;'>
                <GuestsProguessBar
                    numStages={guests.length}
                    currentStage={currentGuestNum-1}
                    guestsNames= {guests.map(guest => guest.firstName)}
                />  
                <Guests
                    guests={guests}
                    currentGuestNum={currentGuestNum}
                />
                <NextBackGuestControl
                        changeGuest={changeGuest}
                        possibleNext={currentGuestNum <= lastGuestChecked}
                        possibleTakeBack={currentGuestNum > 1}
                    />
            </Section>
            </ChangeGuestContext.Provider>
            
        )
    }
