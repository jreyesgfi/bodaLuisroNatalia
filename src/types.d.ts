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


// Guest Data
export type GuestID = string;

export interface GuestType {
  guestID: GuestID,
  groupID : string,
  firstName: string,
  lastName1: string,
  lastName2: string,
  confirmed: boolean,
  willGo: boolean,
  peopleCount: number
}

export type ListOfGuests = GuestType[];

// Handle Functions
export type HandleConfirm = (id: GuestID) => void;