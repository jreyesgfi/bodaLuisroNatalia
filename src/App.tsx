import './App.css'
import { useEffect, useState } from 'react'
import { Todos } from './components/Todos'
import { ListOfGuests, FilterValue, type TodoCompleted, type TodoId, GuestID, HandleConfirm } from './types'
import { FILTERS_BUTTONS, TODO_FILTERS } from './consts'
import { Footer } from './components/Footer'
import { receiveData, submitData } from './connection/connectionMethods'
import { Guests } from './components/Guests'


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

const App = (): JSX.Element => {
  const [todos, setTodos] = useState(mockTodos)
  const [filterSelected, setFilterSelected] = useState<FilterValue>(TODO_FILTERS.ALL)
  
  const [guests, setGuests] = useState<ListOfGuests>([]);

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

  const handleConfirm:HandleConfirm = (id:GuestID):void => {
    const newGuests:ListOfGuests = guests.map(guest => {
      guest.confirmed = (guest.guestID === id? !guest.confirmed :guest.confirmed)
      return guest
    });
    setGuests(newGuests);
  }

  // First load of the data
  useEffect(()=>{
    receiveData('2',handleNewData);
  },[])

  
  return (
    <>
      <h1>Boda Luisro y Natalia</h1>
      {/* <Todos
        todos = {filteredTodos}
        onToggleComplete = {handleCompleted}
        onRemoveTodo = {handleRemove}
      /> 
      <h2>{FILTERS_BUTTONS[0].key}</h2>
      */}
      <br/>
      <Guests
        guests = {guests}
        handleConfirm = {handleConfirm}
      />
      <br/><br/><br/><br/><br/>
      <button onClick={(e)=>{submitData(guests)}}>Submit</button>
      {/*
      <button onClick={(e)=>{receiveData('2',handleNewData)}}>Receive</button>
      <Footer
        filterSelected={filterSelected}
        activeCount={activeCount}
        completedCount={completedCount}
        handleFilterChange={handleFilterChange}
    />*/}
    </>

  )
}

export default App
