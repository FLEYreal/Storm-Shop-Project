import axios from 'axios'
import React from 'react'

export default class Api {
    private ip: string;
    private port: string | number;
    private verPrefix: string;
    public uuid: string;
    private fullIp: string;

    constructor(uuid: string) {
        this.ip = process.env.REACT_APP_BACKEND_IP!;
        this.port = process.env.REACT_APP_BACKEND_PORT!;
        this.verPrefix = process.env.REACT_APP_VERSIONING_PREFIX!;
        this.fullIp = `${this.ip}:${this.port}${this.verPrefix}`;
        this.uuid = uuid;
    }

    async sendRequest(route: string, method: string = 'GET', body: object = {}, callback: Function) {
        let reqData: Record<string, any> = {
            method,
            url: `${this.fullIp}${route}`
        }

        if (method === 'POST') reqData.data = body

        axios(reqData)
            .then((res) => {
                callback(res, res.data);
                return res;
            })
            .catch((error) => console.log(`Error requesting ${reqData.url}: ${error}`))
    }
}