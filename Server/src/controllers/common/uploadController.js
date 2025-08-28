import { uploadToCloudinary } from "../../services/common/uploadService";

export const uploadFile = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: "No file uploaded" });
    }

    const fileBuffer = req.file.buffer;
    const result = await uploadToCloudinary(fileBuffer, "user_uploads");

    return res.status(200).json({
      message: "File uploaded successfully",
      url: result.secure_url,
      public_id: result.public_id,
    });
  } catch (error) {
    console.error("Error uploading file:", error);
    return res.status(500).json({ message: "Server Error", error: error.message });
  }
};