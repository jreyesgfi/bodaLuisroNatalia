import { createContext, useState } from 'react';
import { Guests } from '../../../components/Guests'
import { NextBackControl } from '../../../theme/components/Next&BackGuest';
import { submitData } from '../../../connection/connectionMethods';
import { Section } from '../../../theme/globalStyles';
import { ControlPropsItf } from '../../../types'
import { DotsProgressWidget } from '../../../theme/components/DotsProgressWidget';

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
