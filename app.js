const express = require('express');
const path = require('path');
const cwd = process.cwd();
const config = require(path.join(cwd, '/config/config'));

let options = {};
if (config.NODE_ENV !== 'production') {
    options.overrideProcessEnv = true;
    require('dotenv-extended').load();
}

const port = config.port;

const app = express();
app.use(express.static(path.join(cwd, '/src/public')));

app.get('/', (request, response) => {
    response.send("Hello from Server");
});

app.listen(port, () => {
    console.log(`Web app is running on ${port}`);
});