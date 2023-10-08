import './App.css'
import { useState } from 'react'
import { Todos } from './components/Todos'
import { ListOfGuests, FilterValue, type TodoCompleted, type TodoId } from './types'
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
  
  const [guests, setGuests] = useState<ListOfGuests>([['']]);

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
    const newGuests = data;
    setGuests(newGuests);
  }

  // const submitData = (text:string):void => {
  //     const data = { Name: text, Description: text };

  //   // Send a preflight (OPTIONS) request
  //   fetch(excelConnectionData.url, {
  //     redirect: "follow",
  //     method: 'POST',
  //     body: "hi",
  //     headers: {
  //       'Content-type': "text/plain;charset=utf-8",
  //     },
  //   })
  //     .then((response) => response.json())
  //     .then((json) => console.log(json));
  // }

  
  
  return (
    <>
      <h1>TEST</h1>
      {/* <Todos
        todos = {filteredTodos}
        onToggleComplete = {handleCompleted}
        onRemoveTodo = {handleRemove}
      /> */}
      <h2>{FILTERS_BUTTONS[0].key}</h2>
      <h2 onClick={(e)=>{submitData('Ester')}}>Submit</h2>
      <h2 onClick={(e)=>{receiveData('2',handleNewData)}}>Receive</h2>
      <Guests
        guests = {guests}
      />

      <button onClick={(e)=>{
        console.log(guests)}}>
          Any change?
      </button>
      <Footer
        filterSelected={filterSelected}
        activeCount={activeCount}
        completedCount={completedCount}
        handleFilterChange={handleFilterChange}
      />
    </>

  )
}

export default App
