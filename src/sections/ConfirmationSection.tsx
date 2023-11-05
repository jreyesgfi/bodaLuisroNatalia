import { createContext } from 'react';
import { Guests } from '../components/Guests'
import { submitData} from '../connection/connectionMethods';
import { Section } from '../theme/globalStyles';
import { ListOfGuests } from '../types'
interface Props {
    guests: ListOfGuests;
}
export const SubmitDataContext = createContext<any>(null);
export const ConfirmationSection: React.FC<Props> =
    ({guests}) => {
        const triggerSubmitData = ()=>{submitData(guests)};
        return (
            <SubmitDataContext.Provider value={triggerSubmitData}>
                <Section inverse={true}>
                <Guests
                    guests={guests}
                />
                <br /><br /><br /><br /><br />
                <button onClick={(e) => { submitData(guests) }}>Submit</button>
            </Section>
            </SubmitDataContext.Provider>
            
        )
    }
