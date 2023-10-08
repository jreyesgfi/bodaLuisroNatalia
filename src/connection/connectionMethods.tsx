import { connectionData, connectionUrl, getDataMethod, postDataMethod } from "./connectionConfig";
import { Row } from "../types";
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
export const receiveData = (groupID: Row['groupID'], callback: (data:string[][])=>void): void => {
    
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
            const parsedData = rows.map((row:string) => row.split('\t'));

            // Use the retrieved data
            console.log(parsedData); // Handle the parsed data here
            callback(parsedData);
        })
        .catch((error) => {
            console.error('Error:', error);
        });
};