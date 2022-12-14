const express = require('express');
const app = express();
const serverRoutes = require('./routes');
const cors = require('cors');
const config = require('./config');

app.use(cors(config.CORS));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

serverRoutes(app);

app.listen(process.env.PORT || config.PORT, () => {
    console.log('API started')
})