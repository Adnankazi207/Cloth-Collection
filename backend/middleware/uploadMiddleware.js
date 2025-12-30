const multer = require("multer");
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const cloudinary = require("../config/cloudinary");

const storage = new CloudinaryStorage({
  cloudinary,
  params: {
    upload_preset: "Fancy Collection",
    resource_type: "image",
    unsigned: true, // 🔥 THIS IS THE MISSING LINE
  },
});

const upload = multer({ storage });

module.exports = upload;