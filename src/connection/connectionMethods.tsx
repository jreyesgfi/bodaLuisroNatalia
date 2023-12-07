import { connectionData, connectionUrl, getDataMethod, postDataMethod } from "./connectionConfig";
import { GuestType, ListOfGuests } from "../types";
import axios from 'axios';

// ----------------------------------------------------------------
export const submitData = (guests:ListOfGuests): void => {
    // Get the URL parameters
    const urlSearchParams = new URLSearchParams(window.location.search);
    const params = Object.fromEntries(urlSearchParams.entries());
    
    // Access groupID and token from the params object
    const { groupID, token } = params;

    // check that is confirmed
    const confirmedGuests = guests.map((guest) => {
        guest.confirmed = true;
        return guest
    })

    // define the structure of the data
    const data = {
        Guests:JSON.stringify(guests),
        GroupID: groupID,
        token: token,
        Method: postDataMethod
    }

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
export const receiveData = (callback: (data:GuestType[])=>void): void => {
    
    // Get the URL parameters
    const urlSearchParams = new URLSearchParams(window.location.search);
    const params = Object.fromEntries(urlSearchParams.entries());
    
    // Access groupID and token from the params object
    const { groupID, token } = params;

    const data = {
        GroupID: groupID,
        token: token,
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
                        confirmed: row[5] === "1",
                        attendance: row[6] === "1",
                        busGo: row[7] === "1",
                        busBack: row[8] === "1",
                        busTime: row[9],
                        hotel: row[10] === "1",
                        allergies: row[11] === "1",
                        allergiesList: row[12] ? row[12].split(',') : [],
                        otherAllergy: row[13],
                }
                return guest;
            });
            
            // Use the retrieved data
            callback(objectParsedData);
        })
        .catch((error) => {
            console.error('Error:', error);
        });
};