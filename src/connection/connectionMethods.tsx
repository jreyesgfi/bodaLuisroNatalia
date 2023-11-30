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

    // Log the values for demonstration
    console.log('groupID:', groupID);
    console.log('token:', token);

    // Send a POST request to allow the arguments providing
    axios.post(connectionUrl, data, connectionData)
        .then((response) => {
            console.log(response)
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
                        confirmed: row[5] === "Yes",
                        attendance: row[6] === "Yes",
                        busGo: row[7] === "Yes",
                        busBack: row[8] === "Yes",
                        hotel: row[9] === "Yes",
                        allergies: row[10] === "Yes",
                        allergiesList: row[11] ? row[11].split(',') : [],
                        otherAllergy: row[12],
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