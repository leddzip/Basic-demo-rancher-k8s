import EventEmitter from 'eventemitter3';

export enum ErrorType {
  API_RESPONSE_ERROR = "API_RESPONSE_ERROR"
}

export interface IErrorEventPayload {
  code: number,
  url: string
}

export class ApiErrorEmitter {

  private eventEmitter = new EventEmitter();

  public onError = (fn: (error: IErrorEventPayload) => void) => this.eventEmitter.on(ErrorType.API_RESPONSE_ERROR, fn);
  public once = (fn: () => void) => this.eventEmitter.once(ErrorType.API_RESPONSE_ERROR, fn);
  public off = (fn?: () => void) => this.eventEmitter.off(ErrorType.API_RESPONSE_ERROR, fn);
  public emit = (payload: IErrorEventPayload) => this.eventEmitter.emit(ErrorType.API_RESPONSE_ERROR, payload);

}