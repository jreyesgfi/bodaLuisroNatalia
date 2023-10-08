import { type Todo as TodoType, type TodoFunction } from '../types'

interface Props extends TodoType {
  onRemoveTodo: TodoFunction
  onToggleComplete: TodoFunction
}

export const Todo: React.FC<Props> = ({ id, title, completed, onRemoveTodo, onToggleComplete }) => {
  return (
        <div className="view">
            <input
                className="toggle"
                type="checkbox"
                checked={completed}
                onChange={() => { onToggleComplete(id) }}/>
            <label>{title}</label>
            <button
                className="destroy"
                onClick={() => { onRemoveTodo(id) } }
            />
        </div>
  )
}
