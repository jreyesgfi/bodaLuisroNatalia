
import { Section } from '../../../theme/globalStyles';

interface Props {
    sectionNum: number;
}

export const OurHistorySection: React.FC<Props> =
    ({sectionNum }) => {
        return (
                <Section inverse={true}>
                   {sectionNum}
                </Section>

        )
    }
