// const express = require('express');
// const multer = require('multer');
// const path = require('path');

// const app = express();

// // Set up storage for uploaded files
// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, 'uploads/')
//   },
//   filename: function (req, file, cb) {
//     cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
//   }
// });

// // Create upload instance
// const upload = multer({ storage: storage });

// // Define your endpoint that accepts file uploads
// app.post('/upload', upload.single('image'), (req, res) => {
//   // Do something with the uploaded file
//   console.log(req.file);
//   res.send('File uploaded successfully');
// });

// module.exports = app;
