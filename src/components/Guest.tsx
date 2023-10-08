import { HandleConfirm, type GuestType } from "../types"

interface Props extends GuestType {
    handleConfirm: HandleConfirm
}

export const Guest : React.FC<Props> = 
    ({firstName, lastName1, lastName2, confirmed, peopleCount, groupID, guestID, handleConfirm})=>{
    return(
    <>
        <h3>
            <b><i>{firstName} {lastName1} {lastName2}</i></b>
        </h3>
        <input
                className="toggle"
                type="checkbox"
                checked={confirmed}
                onChange={() => { handleConfirm(guestID) }}
                />
        <p>Número de acompañantes* :   {peopleCount-1} </p>
    </>
    )
}