import axios from 'axios';

export function getUUID() {
    const ip: string = process.env.REACT_APP_BACKEND_IP!;
    const port: string | number = process.env.REACT_APP_BACKEND_PORT!;
    const verPrefix: string = process.env.REACT_APP_VERSIONING_PREFIX!;
    const fullIp: string = `${ip}:${port}${verPrefix}`;

    const reqData: Record<string, any> = {
        method: 'GET',
        url: `${fullIp}/getUUID`,
    };

    return new Promise((resolve, reject) => {
        axios(reqData)
            .then((res) => {
                localStorage.setItem('uuid', res.data)
                resolve(res.data);
            })
            .catch((error) => {
                console.log(`Error requesting UUID: ${error}`);
                reject(error);
            });
    });
}

export function checkUUID() {
    if(localStorage.getItem('uuid')) return true;
    else return false;
}


export function findUUID():string {
    if(localStorage.getItem('uuid')) return localStorage.getItem('uuid')!;
    else return '';
}