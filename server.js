const express = require("express");
const cors = require("cors");
const router = require('./routes/api.js');

const app = express();

require('./database');

const corsOption = {
    origin: 'https:localhost:8081'
};

const urlencodedOption = {
    extended: true
}

app.use(cors(corsOption));
app.use(express.json());
app.use(express.urlencoded(urlencodedOption));
app.use(router);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log('Servidor rodando');
})