import { Guests } from '../components/Guests'
import { submitData } from '../connection/connectionMethods';
import { Section } from '../theme/globalStyles';
import { HandleConfirm, ListOfGuests } from '../types'
interface Props {
    guests: ListOfGuests;
    handleConfirm: HandleConfirm;
}
export const ConfirmationSection: React.FC<Props> =
    ({guests, handleConfirm}) => {
        return (
            <Section inverse={true}>
                <Guests
                    guests={guests}
                    handleConfirm={handleConfirm}
                />
                <br /><br /><br /><br /><br />
                <button onClick={(e) => { submitData(guests) }}>Submit</button>
            </Section>
        )
    }
