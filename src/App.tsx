import './theme/globalFonts.css'
import { createContext, useContext, useEffect, useState } from 'react'
import { Todos } from './components/Todos'
import { ListOfGuests, FilterValue, type TodoCompleted, type TodoId, GuestID, UpdateGuest } from './types'
import { FILTERS_BUTTONS, TODO_FILTERS } from './consts'
import { Footer } from './components/Footer'
import { receiveData, submitData } from './connection/connectionMethods'
import { ConfirmationSection } from './sections/ConfirmationSection'
import { HeroSection } from './sections/HeroSection'
import styled from 'styled-components';
import { ParallaxContainer } from './theme/components/ParallaxContainer'

import { LevelContext, ProcessWizard } from './theme/components/ProcessWizard'
import { SectionsWrapper } from './theme/components/SectionsWrapper'


const mockTodos = [
  {
    id: '1',
    title: 'todo 1',
    completed: false
  },
  {
    id: '2',
    title: 'todo 2',
    completed: false
  },
  {
    id: '3',
    title: 'todo 3',
    completed: false
  }
]

const GlobalWrapper = styled.div`
overflow: hidden;
height: 98vh;
width: 98vw;
padding: 0;
margin: 0;
scroll: auto;
`;

// intialize the context
export const UpdateGuestContext = createContext<any>(null);

const App = (): JSX.Element => {

  // States

  const [guests, setGuests] = useState<ListOfGuests>([]);
  const setGuest = (givenGuestID: GuestID, updateFunction: UpdateGuest) => {
    const newGuests = guests.map((guest) => guest.guestID === givenGuestID ? updateFunction(guest) : guest);
    setGuests(newGuests)
  }

  const currentLevelContext = useContext(LevelContext);
  const currentSection = currentLevelContext?.levels?.['Section'];

  // const [todos, setTodos] = useState(mockTodos)
  // const [filterSelected, setFilterSelected] = useState<FilterValue>(TODO_FILTERS.ALL)
  // // Footer properties
  // const activeCount = todos.filter(todo => !todo.completed).length
  // const completedCount = todos.length - activeCount
  // const filteredTodos = todos.filter(todo => {
  //   if (filterSelected === TODO_FILTERS.ACTIVE) { return !todo.completed }
  //   if (filterSelected === TODO_FILTERS.COMPLETED) { return todo.completed }
  //   return true
  // })


  // const handleRemove = (id: TodoId): void => {
  //   const newTodos = todos.filter(todo => todo.id !== id)
  //   setTodos(newTodos)
  // }
  // const handleCompleted = (id: TodoId): void => {
  //   const newTodos = todos.map(todo => {
  //     if (todo.id === id) {
  //       return {
  //         ...todo,
  //         completed: !todo.completed
  //       }
  //     }
  //     return todo
  //   })
  //   setTodos(newTodos)
  // }

  // const handleFilterChange = (filter: FilterValue): void => {
  //   setFilterSelected(filter)
  // }

  const handleNewData = (data: ListOfGuests): void => {
    setGuests(data);
  }

  // First load of the data
  useEffect(() => {
    receiveData('2', handleNewData);
    console.log(currentLevelContext);
  }, [])

  console.log(currentLevelContext);

  return (
    <GlobalWrapper>
      <UpdateGuestContext.Provider value={setGuest}>
        <ProcessWizard
          levelName='Section'>
          <SectionsWrapper 
            sections={[
                <HeroSection></HeroSection>,
                <ConfirmationSection guests={guests}></ConfirmationSection>
            ]}/>
        </ProcessWizard>
      </UpdateGuestContext.Provider>
    </GlobalWrapper>
  )
}

export default App
