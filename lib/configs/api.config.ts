import { IApiConfig } from 'lib/interfaces';

const apiConfig: IApiConfig = {
   base_url: process.env.NEXT_PUBLIC_API_BASE_URL as string,
};
export default apiConfig;
