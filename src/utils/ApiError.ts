import { ApiResponse } from '@interfaces/APIGatewayResponse';
import { AxiosError } from 'axios';

class CustomApiError extends Error {
  code?: number;

  constructor(error: AxiosError<ApiResponse>, code?: number) {
    let message;

    if (error.response) {
      const errorData = error.response.data;
      message =
        `(${errorData.code}) ${errorData.clientMessage}` ||
        'Hubo un error inesperado.';
    } else if (error.request) {
      message = 'Hubo un error de conexión, vuelva a intentarlo más tarde.';
    } else {
      message = 'Hubo un error inesperado.';
    }

    super(message);
    this.code = code;
  }
}

export default CustomApiError;
