import { mainTitleText } from '../assets/texts/mainText';
import { MainHeading, Section } from '../theme/globalStyles';

export const HeroSection: React.FC =
    ({}) => {
        return (
            <Section inverse={false}>
                <MainHeading inverse={false}>{mainTitleText}</MainHeading>
            </Section>
        )
    }
