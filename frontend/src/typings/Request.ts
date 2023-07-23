import { AxiosResponse } from 'axios';

export interface RequestData {
    method: string;
    url: string;
}

export interface RequestDataWithBody extends RequestData {
    data?: object;
}

export type CallbackFunction = (res: AxiosResponse, data: AxiosResponse["data"]) => Promise<void>;