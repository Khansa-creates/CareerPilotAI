const PDFParser = require("pdf2json");
const express = require("express");
const multer = require("multer");

const router = express.Router();

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },

  filename: function (req, file, cb) {
    cb(
      null,
      Date.now() + "-" + file.originalname
    );
  },
});

const upload = multer({
  storage,
});

router.post(
  "/upload",
  upload.single("resume"),
  (req, res) => {
    const pdfParser =
      new PDFParser();

    pdfParser.on(
      "pdfParser_dataError",
      (errData) => {
        console.error(errData);

        res.status(500).json({
          message:
            "Could not read PDF",
        });
      }
    );

    pdfParser.on(
      "pdfParser_dataReady",
      () => {
        const text =
          pdfParser.getRawTextContent();

        res.json({
          message:
            "Resume uploaded successfully!",
          text,
        });
      }
    );
          pdfParser.on(
           "pdfParser_dataError",
          (errData) => {
             console.log(
              "PDF ERROR:"
             );
             console.log(errData);

             res.status(500).json({
              message:
               "Could not read PDF",
            });
        }
    );
    console.log(
     "Loading PDF:",
     req.file.path
    );

    pdfParser.loadPDF(
      req.file.path
    );
  }
);

module.exports = router;