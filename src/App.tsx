import './theme/globalFonts.css'
import { createContext, useEffect, useState } from 'react'
import { Todos } from './components/Todos'
import { ListOfGuests, FilterValue, type TodoCompleted, type TodoId, GuestID, UpdateGuest } from './types'
import { FILTERS_BUTTONS, TODO_FILTERS } from './consts'
import { Footer } from './components/Footer'
import { receiveData, submitData } from './connection/connectionMethods'
import { ConfirmationSection } from './sections/ConfirmationSection'
import { HeroSection } from './sections/HeroSection'



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
// intialize the context
export const UpdateGuestContext = createContext<any>(null);

const App = (): JSX.Element => {
  const [todos, setTodos] = useState(mockTodos)
  const [filterSelected, setFilterSelected] = useState<FilterValue>(TODO_FILTERS.ALL)
  
  const [guests, setGuests] = useState<ListOfGuests>([]);
  const setGuest = (givenGuestID:GuestID,updateFunction:UpdateGuest)  => {
    console.log(updateFunction(guests[0]))
    const newGuests = guests.map((guest) => guest.guestID === givenGuestID? updateFunction(guest):guest);
    setGuests(newGuests)
  }

  // Footer properties
  const activeCount = todos.filter(todo => !todo.completed).length
  const completedCount = todos.length - activeCount
  const filteredTodos = todos.filter(todo =>{
    if (filterSelected===TODO_FILTERS.ACTIVE){return !todo.completed}
    if (filterSelected === TODO_FILTERS.COMPLETED){return todo.completed}
    return true 
  })


  const handleRemove = (id: TodoId): void => {
    const newTodos = todos.filter(todo => todo.id !== id)
    setTodos(newTodos)
  }
  const handleCompleted = (id: TodoId): void => {
    const newTodos = todos.map(todo => {
      if (todo.id === id) {
        return {
          ...todo,
          completed: !todo.completed
        }
      }
      return todo
    })
    setTodos(newTodos)
  }

  const handleFilterChange = (filter:FilterValue):void =>{
    setFilterSelected(filter)
  }

  const handleNewData = (data:ListOfGuests):void => {
    setGuests(data);
  }

  // First load of the data
  useEffect(()=>{
    receiveData('2',handleNewData);
  },[])

  
  return (
    <UpdateGuestContext.Provider value={setGuest}>
      <HeroSection></HeroSection>
      {/* <Todos
        todos = {filteredTodos}
        onToggleComplete = {handleCompleted}
        onRemoveTodo = {handleRemove}
      /> 
      <h2>{FILTERS_BUTTONS[0].key}</h2>
      */}
      <br/>
      <ConfirmationSection
        guests={guests}
      ></ConfirmationSection>
      {/*
      <button onClick={(e)=>{receiveData('2',handleNewData)}}>Receive</button>
      <Footer
        filterSelected={filterSelected}
        activeCount={activeCount}
        completedCount={completedCount}
        handleFilterChange={handleFilterChange}
    />*/}
    </UpdateGuestContext.Provider>

  )
}

export default App
