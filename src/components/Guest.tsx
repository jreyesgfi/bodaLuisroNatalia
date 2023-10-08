
interface Props {
    firstName : string
    lastName1: string
    lastName2?: string
    confirmed: boolean
    peopleCount: number
    groupID?: string
    guestID: string

}

export const Guest : React.FC<Props> = 
    ({firstName, lastName1, lastName2, confirmed, peopleCount, groupID, guestID})=>{
    return(
    <>
        <h3>
            <b><i>{firstName} {lastName1} {lastName2}</i></b>
        </h3>
        <input
                className="toggle"
                type="checkbox"
                checked={confirmed}
                />
        <p>Número de acompañantes -sin incluirle-: {peopleCount-1} </p>
    </>
    )
}