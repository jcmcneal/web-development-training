/** Modules */
var express = require('express');
var app = express();

/** Variables */
const config = require('./package.json');

/** View Config */
app.set('view engine', 'jade');
app.set('views', __dirname);

/** Static Files */
app.use('/css', express.static('css'));

/** Routes */
app.get('/:title?', function (req, res) {
    res.render('index', {
        page: {
            title: req.params.title || ''
        }
    });
});

/** Start Server */
app.listen(config.server.port, () => {
    console.log(`Listening on http://localhost:${config.server.port}/`);
});
