
import { AxiosRequestConfig } from "axios";


interface ConnectionData extends AxiosRequestConfig 
{
    method?: string;
    headers: { [key: string]: string };
    redirect: RequestRedirect;
}

export const connectionUrl = 'https://script.google.com/macros/s/AKfycbwnZ7o7PLRLpnnN9dEz2C9af4fPiXjkKE_M-okHd-kGLwk2gWOD5lsaRRUE7kZ98YAV5A/exec';
export const connectionData:ConnectionData = {
            headers: {'Content-type': 'application/x-www-form-urlencoded' },
            redirect: "follow"
        }

export const postDataMethod = 'addData';
export const getDataMethod = 'getData';