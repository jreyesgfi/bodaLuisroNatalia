import { connectionData, connectionUrl, getDataMethod, postDataMethod } from "./connectionConfig";
import { GuestType } from "../types";
import axios from 'axios';

// ----------------------------------------------------------------
export const submitData = (text: string): void => {

    const data = {
        Name: text,
        Description: text,
        Follow: true,
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
                    firstName:row[0],
                    lastName1:row[1],
                    lastName2:row[2],
                    confirmed:row[3] === "No" ? false : true,
                    peopleCount:Number(row[4]),
                    groupID:row[5],
                    guestID:row[6]
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