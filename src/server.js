const path = require('path');
const express = require('express');

const app = express();

const staticPath = path.join(__dirname, '/');
app.use(express.static(staticPath));


const port = process.env.PORT || 3000;

app.set('port', port);


app.get('/', (req, res) => res.status(200).sendFile(__dirname + "/index.html"));

app.listen(app.get('port'), function () {
    console.log('listening...on port ' + port + ' - ' + staticPath);
});
