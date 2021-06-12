const express = require('express');
const exphbs  = require('express-handlebars');
const section = express();
const port = 3000;

//to make the whole html be used if changing, revealing, etc.
section.engine('handlebars', exphbs());
section.set('view engine', 'handlebars');
section.use(express.static('public'));

section.get('/', (req, res) => {
    res.render('index');
});

//tabs that lead to specific movies
section.get('/dark-knight', (req, res) => {
    res.render('darkKnight');
}); 

section.get('/violet-evergarden', (req, res) => {
    res.send('Violet Evergarden');
});

//GET method - show
section.get('/', function(req, res) {
    res.send('GET request to the list');
});

//PUT method route - update
section.put('/', function(req, res) {
    res.send('PUT request to the list');
});

//giving website
section.listen(port, () => {
    console.log(`http://localhost:${port}`);
});
