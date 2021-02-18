import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import { api } from 'lib/configs';
import { IHttpClient } from 'lib/interfaces';

export default class FetchAPI implements IHttpClient {
   base_url: string;
   instance: AxiosInstance;
   constructor() {
      this.base_url = api.base_url;
      this.instance = axios.create({
         baseURL: this.base_url,
         timeout: 5000,
      });
   }
   async get(url: string, config?: AxiosRequestConfig): Promise<AxiosResponse> {
      return this.instance.get(url, config);
   }
   async post(
      url: string,
      data: unknown,
      config?: AxiosRequestConfig
   ): Promise<AxiosResponse> {
      return this.instance.post(url, data, config);
   }
   async put(
      url: string,
      data: unknown,
      config?: AxiosRequestConfig
   ): Promise<AxiosResponse> {
      return this.instance.post(url, data, config);
   }
}
