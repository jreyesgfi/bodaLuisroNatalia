import { SectionsWrapper } from '../../theme/components/SectionsWrapper'
import { ConfirmationSection } from './sections/ConfirmationSection'
import { HeroSection } from './sections/HeroSection'

import styled from 'styled-components';

import { createContext, useContext, useEffect, useState } from 'react'
import { ListOfGuests, GuestID, UpdateGuest } from '../../types'
import { receiveData } from '../../connection/connectionMethods'

import { LevelContext, ProcessWizard } from '../../theme/components/ProcessWizard'
import { GuestType } from '../../types';

const GlobalWrapper = styled.div`
overflow: hidden;
height: 100vh;
width: 100vw;
padding: 0;
margin: 0;
scroll: none;
`;
// intialize the context
export const UpdateGuestContext = createContext<any>(null);
export const ConfirmationPage: React.FC= () => {
      // States
  const [guests, setGuests] = useState<ListOfGuests>([]);
  const setGuest = (givenGuestID: GuestID, updateFunction: UpdateGuest) => {
    const newGuests = guests.map((guest:GuestType) => guest.guestID === givenGuestID ? updateFunction(guest) : guest);
    setGuests(newGuests)
  }

  const currentLevelContext:any = useContext(LevelContext);
  //const currentSection = currentLevelContext?.levels?.['Section'];

  const handleNewData = (data: ListOfGuests): void => {
    setGuests(data);
  }

  // First load of the data
  useEffect(() => {
    receiveData(handleNewData);
  }, [])
    return (
    <GlobalWrapper>
        <UpdateGuestContext.Provider value={setGuest}>
          <ProcessWizard
            levelName='Section'>
            <SectionsWrapper
              sections={[
                <HeroSection key={1}></HeroSection>,
                <ConfirmationSection key={2} guests={guests}></ConfirmationSection>
              ]} />
          </ProcessWizard>
        </UpdateGuestContext.Provider>
    </GlobalWrapper>
)};