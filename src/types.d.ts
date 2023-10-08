export interface Todo {
  id: TodoId
  title: TodoTitle
  completed: TodoCompleted
}
export type TodoId = string
export type TodoTitle = string
export type TodoCompleted = boolean

export type ListOfTodos = Todo[]

export type TodoFunction = (id: TodoId) => void

export type FilterValue = typeof TODO_FILTERS[keyof typeof TODO_FILTERS]

export type ListOfGuests = string[][];



// connection
export interface Row {
  ID: string,
  groupID : string,
  nombre: string,
  apellido1: string,
  apellido2: string,
  asistencia: boolean,
  numPersonas: number
}