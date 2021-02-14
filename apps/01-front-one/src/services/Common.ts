export enum ApiResponseStatus {
  OK = "OK",
  ERROR = "ERROR"
}

export type ApiResponse =
    | {status: ApiResponseStatus.OK, randomValue: string}
    | {status: ApiResponseStatus.ERROR, error: {code: number, url: string}};
