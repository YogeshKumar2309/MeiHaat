import multer from "multer";

const storage = multer.memoryStorage(); // file buffer
export const upload = multer({ storage });
