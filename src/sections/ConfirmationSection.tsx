import { Guests } from '../components/Guests'
import { submitData } from '../connection/connectionMethods';
import { Section } from '../theme/globalStyles';
import { HandleConfirm, ListOfGuests } from '../types'
interface Props {
    guests: ListOfGuests;
}
export const ConfirmationSection: React.FC<Props> =
    ({guests}) => {
        return (
            <Section inverse={true}>
                <Guests
                    guests={guests}
                />
                <br /><br /><br /><br /><br />
                <button onClick={(e) => { submitData(guests) }}>Submit</button>
            </Section>
        )
    }
