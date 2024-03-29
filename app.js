const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const cwd = process.cwd();
const config = require(path.join(cwd, '/config/config'));
const viewsDirectory = path.join(cwd, '/src/public/views');
let options = {};
if (config.NODE_ENV !== 'production') {
    options.overrideProcessEnv = true;
    require('dotenv-extended').load();
}

const port = config.port;

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(cwd, '/src/public')));

app.set('views', viewsDirectory);
app.set('view engine', 'ejs');

app.get('/', (request, response) => {
});

app.get('/four-cards', (request, response) => {
    response.render('four-cards');
});

app.get('/signup-form', (request, response) => {
    response.render('signup-form');
});

app.post('/signup-form', (request, response) => {
    response.json(request.body);
});

app.get('/pricing-cards', (request, response) => {
    response.render('pricing-cards');
});

app.get('/four-cards-with-flex', (request, response) => {
    response.render('four-cards-flexbox');
});

app.listen(port, () => {
    console.log(`Web app is running on ${port}`);
});