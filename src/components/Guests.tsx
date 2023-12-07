import { useContext } from "react";
import styled from "styled-components";

import { ChangeGuestContext } from "../sections/ConfirmationSection";
import { ListOfGuests, UpdateGuest, HandleNumberChange } from "../types"
import { Guest } from "./Guest"
import { NextBackGuestControl } from "./Next&BackGuest";


// styled components
const GlobalContainer = styled.div`
    overflow: hidden;
    max-height: 80vh;
    display: flex;
`;
const GuestsWrapper = styled.div<{ currentPosition: number }>`
    display: flex;
    transition: transform 1s;
    transform: ${({ currentPosition }) => (`translateX(-${currentPosition}vw)`)};
    max-width: none;
    `;

const GuestWrapper = styled.div`
    width: 95vw;
`;

interface Props {
    guests: ListOfGuests;
    currentGuestNum: number;
}

export const Guests: React.FC<Props> = ({ guests, currentGuestNum }) => {

    // Define the handle functions
    const changeGuest = useContext(ChangeGuestContext);

    return (
        <GlobalContainer>

            {guests.length > 0 &&
                    <GuestsWrapper currentPosition={(currentGuestNum - 1) * 95}>
                        {guests.map((guest) => {
                            return (
                                <GuestWrapper>
                                    <Guest
                                        key={guest.guestID}
                                        guestID={guest.guestID}
                                        groupID={guest.groupID}
                                        firstName={guest.firstName}
                                        lastName1={guest.lastName1}
                                        lastName2={guest.lastName2}
                                        confirmed={guest.confirmed}
                                        attendance={guest.attendance}
                                        busGo={guest.busGo}
                                        busBack={guest.busBack}
                                        hotel = {guest.hotel}
                                        allergies={guest.allergies}
                                        allergiesList={guest.allergiesList}
                                        otherAllergy={guest.otherAllergy}
                                    />
                                </GuestWrapper>

                            )
                        })}
                        {/* <p>{questionExtraGuestsText}</p>
                    <input
                        className="toggle"
                        type="number"
                        min="0" max="2"
                        value={guests[0].extraGuestsNum}
                        onChange={(e) => {
                            guests.forEach((guest) => {
                                handleInputChange(e,guest.guestID)
                            });
                        }}
                    /> */}
                    </GuestsWrapper>
            }
        </GlobalContainer>
    )

}