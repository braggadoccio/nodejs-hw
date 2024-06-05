import multer from "multer";
import path from "path";

const tempath = path.join(tmp);

const multerConfig = multer.diskStorage({
  destination: tempath,
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const upload = multer({
  storage: multerConfig,
});

export { upload };
