const express = require('express');
const multer = require('multer');
const port = process.env.PORT || 3000;
const app = express();

// Multer storage configuration
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './uploads');
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + "-" + Date.now() + ".jpg");
    }
});

// Multer upload middleware
const upload = multer({ storage });

// Set EJS as the view engine
app.set('view engine', 'ejs');

// Route to render the upload form
app.get('/upload', (req, res) => {
    res.render("index.ejs");
});

// Route to handle file upload
app.post('/upload', upload.single("image"), (req, res) => {
    res.send("File uploaded successfully.");
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running @ ${port}`);
});
