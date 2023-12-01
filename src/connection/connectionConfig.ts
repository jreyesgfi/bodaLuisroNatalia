
import { AxiosRequestConfig } from "axios";


interface ConnectionData extends AxiosRequestConfig 
{
    method?: string;
    headers: { [key: string]: string };
    redirect: RequestRedirect;
}

export const connectionUrl = 'https://script.google.com/macros/s/AKfycbyYeS7eVLiw5nmIRrIlilqrejlK7vQrhTDT7Dl0KqhnmTAnCnkMEb-xaNMXqrNz2_b3/exec';
export const connectionData:ConnectionData = {
            headers: {'Content-type': 'application/x-www-form-urlencoded' },
            redirect: "follow"
        }

export const postDataMethod = 'addData';
export const getDataMethod = 'getData';