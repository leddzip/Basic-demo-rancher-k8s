import {ApiErrorEmitter} from '../event/ErrorEmitter';
import {ApiResponse, ApiResponseStatus} from './Common';
import axios, {AxiosError} from 'axios';

interface ApiObject {
  uuid: string
}

export class ApiServiceBasicPython {

  constructor(private readonly apiErrorEmitter: ApiErrorEmitter) {}

  public getRandom = async (): Promise<ApiResponse> => {
    const url: string = `${(window as any)._env_?.REACT_APP_API_URL_2 || process.env.REACT_APP_API_URL_2}/api/v1/random`;
    try {
      let randomResponse = await axios.get<ApiObject>(url);
      return {
        status: ApiResponseStatus.OK,
        randomValue: randomResponse.data.uuid
      };
    } catch (error) {
      const responseError = error as AxiosError;
      const errorPayload = {
        code: responseError.response?.status || 0,
        url: url
      };

      this.apiErrorEmitter.emit(errorPayload);

      return {
        status: ApiResponseStatus.ERROR,
        error: errorPayload
      }
    }
  }

}