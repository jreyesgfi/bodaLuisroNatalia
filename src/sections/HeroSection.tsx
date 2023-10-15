import { mainTitleText } from '../assets/texts';
import { Section } from '../theme/globalStyles';

export const HeroSection: React.FC =
    ({}) => {
        return (
            <Section inverse={false}>
                <h1>{mainTitleText}</h1>
            </Section>
        )
    }
