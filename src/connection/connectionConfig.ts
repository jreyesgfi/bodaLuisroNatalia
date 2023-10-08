
import { AxiosRequestConfig } from "axios";


interface ConnectionData extends AxiosRequestConfig 
{
    method?: string;
    headers: { [key: string]: string };
    redirect: RequestRedirect;
}

export const connectionUrl = 'https://script.google.com/macros/s/AKfycbw-K1YtBLN7UfeNo_WHpdpX7LE3Y-d7ozBA15tTACE0OK5_3CibeJltvmucImrTJxKd/exec';
export const connectionData:ConnectionData = {
            headers: {'Content-type': 'application/x-www-form-urlencoded' },
            redirect: "follow"
        }

export const postDataMethod = 'addData';
export const getDataMethod = 'getData';