export interface ApiResponse<T = undefined> {
  isError: boolean;
  payload: T;
  code: number;
  statusCode: number;
  clientMessage: string;
  technicalMessage: string;
}
