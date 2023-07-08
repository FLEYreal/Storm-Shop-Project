import axios from 'axios'

export default class Api {
    private ip: string;
    private port: string | number;
    private verPrefix: string;
    private fullIp: string;

    public uuid: string;

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

        return (new Promise((resolve, reject) => {
            axios(reqData)
            .then(async (res) => {
                await callback(res, res.data);
                resolve(res);
            })
            .catch((error) => console.log(`Error requesting ${reqData.url}: ${error}`))
        }))
    }

    async getGoodList() {
        let res = await this.sendRequest('/goods', 'GET', {}, <T>(res:T, data:T) => {console.log('API: ', res)})
        return res
    }
}