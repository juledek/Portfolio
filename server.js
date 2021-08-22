//Install express server
const express = require('express');
const path = require('path');

const app = express();

// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/dist/portfolio'));

app.get('*', (req, res) => {
    res.sendFile(__dirname + `/dist/index.html`); // load the single view file (angular will handle the page changes on the front-end)
});

res.sendFile(path.join(__dirname+'/dist/portfolio/index.html'));
});

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);