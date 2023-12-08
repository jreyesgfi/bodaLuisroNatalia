
import { AxiosRequestConfig } from "axios";


interface ConnectionData extends AxiosRequestConfig 
{
    method?: string;
    headers: { [key: string]: string };
    redirect: RequestRedirect;
}

export const connectionUrl = 'https://script.google.com/macros/s/AKfycbxRf9HNl-PR3dCTCxhOS9wyZpNzzi4AXE4kOwOFmkKD_JwFYFB_XeAxNn82JN4JOz3G/exec';
export const connectionData:ConnectionData = {
            headers: {'Content-type': 'application/x-www-form-urlencoded' },
            redirect: "follow"
        }

export const postDataMethod = 'addData';
export const getDataMethod = 'getData';