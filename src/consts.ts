type TodoFilterKey = string
type TodoFilterLiteral = string
export const TODO_FILTERS = {
    ALL:"all",
    ACTIVE:"active",
    COMPLETED: "completed"
} as const

export const FILTERS_BUTTONS = [...Object.values(TODO_FILTERS).map((name)=>
{return {key: name, literal: name, href:`/?filter=${name}` }}
)]
