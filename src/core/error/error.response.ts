export class ErrorResponse {
  static fail(params: {
    status: number;
    errorCode: string;
    message: string;
  }) {
    return {
      success: false,
      error: {
        code: params.errorCode,
        message: params.message,
      },
      meta: {
        status: params.status,
        timestamp: new Date().toISOString(),
      },
    };
  }
}
