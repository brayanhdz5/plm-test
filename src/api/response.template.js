

export const SimpleRes = (res, status, message, data) => {

  res.status(status).json({
    message: message,
    data: data,
    errors: {
      message: null
    }
  });
} 

export const SimpleErrorRes = (res, status, message, errorMesage) => {

  res.status(status).json({
    message: message,
    data: null,
    errors: {
      message: errorMesage
    }
  });
} 