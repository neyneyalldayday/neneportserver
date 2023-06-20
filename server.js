const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;
const db = require('./config/db')


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}));


// Load routes
app.use('/api/auth', require('./routes/authRoutes'));
app.use('/api/projects', require('./routes/projectRoutes'));


db.once("open", () => {
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
      });
})
