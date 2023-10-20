import { connectionData, connectionUrl, getDataMethod, postDataMethod } from "./connectionConfig";
import { GuestType, ListOfGuests } from "../types";
import axios from 'axios';

// ----------------------------------------------------------------
export const submitData = (guests:ListOfGuests): void => {
    // check that is confirmed
    const confirmedGuests = guests.map((guest) => {
        guest.confirmed = true;
        return guest
    })

    // define the structure of the data
    const data = {
        Guests:JSON.stringify(guests),
        Method: postDataMethod
    }
    console.log(data);
    // Send a POST request with the data string to your Google Apps Script
    axios.post(connectionUrl, data, connectionData)
        .then(response => {
            console.log(response);
        })
        .catch((error) => {
            console.error('Error:', error);
        });
};

//----------------------------------------------------------------
export const receiveData = (groupID: GuestType['groupID'], callback: (data:GuestType[])=>void): void => {
    
    const data = {
        GroupID: groupID,
        Method: getDataMethod
    }

    // Send a POST request to allow the arguments providing
    axios.post(connectionUrl, data, connectionData)
        .then((response) => {
            // Transform the data
            const text = response.data;
            const rows = text.split('\n');
            const arrayParsedData = rows.map((row:string) => row.split('\t'));
            const objectParsedData = arrayParsedData.map((row:string)=> {
                const guest: GuestType = {
                        guestID: row[0],
                        groupID : row[1],
                        firstName: row[2],
                        lastName1: row[3],
                        lastName2: row[4],
                        confirmed: row[5] === "No" ? false : true,
                        attendance: row[6] === "No" ? false : true,
                        extraGuestsNum: Number(row[7])||0,
                        bus: row[8] === "No" ? false : true,
                        allergies: row[9] === "No" ? false : true,
                        allergiesList: row[10]?.split(',')||[],
                }
                return guest;
            });
            
            // Use the retrieved data
            console.log(objectParsedData); // Handle the parsed data here
            callback(objectParsedData);
        })
        .catch((error) => {
            console.error('Error:', error);
        });
};