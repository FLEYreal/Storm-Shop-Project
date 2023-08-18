import axios, { AxiosResponse } from 'axios'
import { CallbackFunction, RequestDataWithBody } from '../typings/Request';

export default class Api {

    // Типы базовых переменных
    private ip: string;
    private port: string | number;
    private verPrefix: string;
    private fullIp: string;
    public uuid: string;

    constructor(uuid: string) {

        // Определение базовых переменных
        this.ip = import.meta.env.VITE_BACKEND_IP!;
        this.port = import.meta.env.VITE_BACKEND_PORT!;
        this.verPrefix = import.meta.env.VITE_VERSIONING_PREFIX!;
        this.fullIp = `${this.ip}:${this.port}${this.verPrefix}`;
        this.uuid = uuid;
    }

    // Функция для отправки запросов на бекенд
    async sendRequest(route: string, method: string = 'GET', body: object = {}, callback: CallbackFunction): Promise<AxiosResponse> {
        const reqData: RequestDataWithBody = {
            method,
            url: `${this.fullIp}${route}`
        }

        // Добавить body если это метод, поддерживающий тело запроса
        if (method === 'POST' || method === 'OPTIONS') reqData.data = body

        // Отправить запрос и вернуть ответ в промис
        return (new Promise(resolve => {

            // Отправка запроса
            axios(reqData)

                // Обработка ответа
                .then(async (res) => {

                    // Выполнить callback функцию с ответом
                    await callback(res, res.data);

                    // Вернуть ответ в промис
                    resolve(res);
                })

                // Вывести ошибку в консоль
                .catch((error) => {
                    console.log(`Error requesting ${reqData.url}: ${error}`)
                })
        }))
    }

    // Получить список товаров с бекенда
    async getSubList(): Promise<AxiosResponse> {

        // Отправка запроса на /goods с помощью sendRequest
        const res = await this.sendRequest('/goods?type=sub', 'GET', {}, async () => { });

        // Вернуть результат
        return res;
    }

    // Получить список скриптов с бекенда
    async getScriptList(): Promise<AxiosResponse> {

        // Отправка запроса на /goods с помощью sendRequest
        const res = await this.sendRequest('/goods?type=script', 'GET', {}, async () => { });

        // Вернуть результат
        return res;
    }

    // Получить список скриптов с бекенда
    async getGoodList(): Promise<AxiosResponse> {

        // Отправка запроса на /goods с помощью sendRequest
        const res = await this.sendRequest('/goods?type=all', 'GET', {}, async () => { });

        // Вернуть результат
        return res;
    }

    // Получить список товаров по определенному запросу
    async queryGoodList(type:string = 'all', q: string = '') {

        // Отправка запроса на /goods/find с помощью sendRequest
        const res = await this.sendRequest(`/goods/find?type=${type}&q=${q}`, 'GET', {}, async () => { });

        // Вернуть результат
        return res;
    }

    async getArticle(name: string) {
        // Отправка запроса на /goods/find с помощью sendRequest
        const res = await this.sendRequest(`/article/find?name=${name}`, 'GET', {}, async () => { });

        // Вернуть результат
        return res;
    }

    // Функция для регистрации в бекенде
    async signUp(body: { username: string, password: string, recaptchaToken: string }) {

        // Отправка запроса на /signup с помощью sendRequest, получение ответ
        const res: AxiosResponse = await this.sendRequest('/signup', 'POST', {

            // Базовые данные 
            username: body.username,
            password: body.password,

            // Токен капчи
            recaptchaToken: body.recaptchaToken,

            // Получить уникальный id пользователя, который всегда хранится в local storage
            uuid: localStorage.getItem('uuid')
        }, async () => { })

        // Вернуть ответ
        return res;
    }

    // Функция логина в бекенде
    async login(body: { username: string, password: string, recaptchaToken: string }): Promise<AxiosResponse> {

        // Отправка запроса на /login с помощью sendRequest, получение ответ
        const res: AxiosResponse = await this.sendRequest('/login', 'POST', {

            // Базовые данные 
            username: body.username,
            password: body.password,

            // Токен капчи
            recaptchaToken: body.recaptchaToken,
        }, async () => { })

        // Если успешно, то установить id пользователя, которое установлено у пользователя
        if (res.data.success) localStorage.setItem('uuid', res.data.uuid)

        // Вернуть ответ
        return res;
    }
}