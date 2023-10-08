import { type TodoFunction, type ListOfTodos } from '../types'
import { Todo } from './Todo'

interface Props {
  todos: ListOfTodos
  onRemoveTodo: TodoFunction
  onToggleComplete: TodoFunction
}

export const Todos: React.FC<Props> = ({ todos, onToggleComplete, onRemoveTodo }) => {
  return (
        <ul>
            {todos.map(todo => (
                <li key={todo.id} className={`${todo.completed ? 'completed' : ''}`}>
                    <Todo
                      key={todo.id}
                      id={todo.id}
                      title={todo.title}
                      completed={todo.completed}
                      onToggleComplete={onToggleComplete}
                      onRemoveTodo={onRemoveTodo}
                    />
                </li>
            ))}
        </ul>
  )
}
