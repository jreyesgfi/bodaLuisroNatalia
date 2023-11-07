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
        const triggerSubmitData = ()=>{submitData(guests)};
        const changeGuest = (next?:boolean) =>{
            setCurrentGuestNum(currentGuestNum + (next===false?-1:1));
            triggerSubmitData();
        }
        return (
            <ChangeGuestContext.Provider value={changeGuest}>
                <Section inverse={true} height='85vh' margin='0 2.5vw;'>
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
                    />
            </Section>
            </ChangeGuestContext.Provider>
            
        )
    }
