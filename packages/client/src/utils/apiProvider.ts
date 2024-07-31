import { eApiRequestMethods } from '@enums/eApiRequestMethods';
import axios from 'axios';
axios.defaults.withCredentials = true;

export async function apiRequest(url: string, method: eApiRequestMethods): Promise<any> {
    try {
        let response;
        if (method === eApiRequestMethods.Get) {
            response = await axios.get(url);
        } else if (method === eApiRequestMethods.Post) {
            response = await axios.post(url);
        } else {
            throw new Error('Invalid or not supported method');
        }
        return response.data;
    } catch (error) {
        console.error(error);
    }
}