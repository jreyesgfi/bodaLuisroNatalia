import { createContext, useState } from 'react';
import { Guests } from '../../../components/Guests'
import { NextBackControl } from '../../../theme/components/Next&BackGuest';
import { submitData } from '../../../connection/connectionMethods';
import { Section } from '../../../theme/globalStyles';
import { ControlPropsItf, ListOfGuests } from '../../../types'
import { DotsProgressWidget } from '../../../theme/components/DotsProgressWidget';
interface Props {
    guests: ListOfGuests;
}
export const ChangeGuestContext = createContext<any>(null);


export const ConfirmationSection: React.FC<Props> =
    ({ guests }) => {
        const [currentGuestNum, setCurrentGuestNum] = useState<number>(0);
        const [lastGuestChecked, setLastGuestChecked] = useState<number>(0);
        const triggerSubmitData = () => { submitData(guests) };
        const changeGuest = (next?: boolean) => {
            if (currentGuestNum > lastGuestChecked + 1) { setLastGuestChecked(currentGuestNum - 1); }
            setCurrentGuestNum(currentGuestNum + (next === false ? -1 : 1));
            triggerSubmitData();
        }
        // interface ControlPropsItf {
        //     ControlComponent
        //     changeGuest: (next?: boolean) => void;
        //     possibleNext: boolean;
        //     possibleTakeBack: boolean;
        //   }
          
          //...
          
          const controlProps: ControlPropsItf = {
            ControlComponent: NextBackControl,
            changeStage: changeGuest,
            possibleNext: currentGuestNum <= lastGuestChecked,
            possibleTakeBack: currentGuestNum > 0  
          };
          
        return (
            <ChangeGuestContext.Provider value={changeGuest}>
                <Section inverse={true}>

                    <Guests
                        guests={guests}
                        currentGuestNum={currentGuestNum}
                    />
                   <DotsProgressWidget
                    numStages={guests.length}
                    currentStage={currentGuestNum}
                    labels={guests.map(guest => guest.firstName)}
                    Control={controlProps}/>
                </Section>
            </ChangeGuestContext.Provider>

        )
    }
