import express from "express";
import { upload } from "../../middleware/common/upload.js";
import { uploadFile } from "../../controllers/common/uploadController.js";

const cloudinaryRouter = express.Router();

cloudinaryRouter.post("/", upload.single("file"), uploadFile);

export default cloudinaryRouter;
