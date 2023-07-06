import axios from 'axios'
import React from 'react'

export default class Api {
     private ip:string;
     private port:string | number;
     private verPrefix:string;
     public uuid:string;

     constructor(uuid:string) {
          this.ip = process.env.REACT_APP_BACKEND_IP!;
          this.port = process.env.REACT_APP_BACKEND_PORT!;
          this.verPrefix = process.env.REACT_APP_VERSIONING_PREFIX!;
          this.uuid = uuid;
     }

     sendRequest(route:string, method:string = 'GET', body:object = {}, callback:Function) {
          let reqData: Record<string, any> = {
               method,
               url: `${this.ip}:${this.port}${this.verPrefix}${route}`
          }

          if(method === 'POST') reqData.data = body

          console.log(reqData)

          axios(reqData).then((res) => callback(res, res.data));
     }

     getUUID() {
          
     }
}