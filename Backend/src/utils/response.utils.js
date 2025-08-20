// success res
export const sendSuccess = (res, message, data = {}, status = 200) => {
  return res.status(status).json({
    success: true,
    message,
    data
  });
};

// error res
export const sendError = (res, message, status = 500, errors = {}) => {
  return res.status(status).json({
    seccess: false,
    message,
    errors
  });
};