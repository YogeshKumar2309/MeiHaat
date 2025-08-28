
import { sendError } from "../../utils/helpers/response.js";

export const verifySession = async (req,res, next) => {
  try {
    if(req.session || req.session.user) {
      req.user = req.session.user;
      return next();
    }
  } catch (error) {
    return sendError(res,"User not authenticated !",401)
  }  
}