const express = require('express');
const app = express();
const cors = require('cors');
const itemsRouter = require('./routers/items');

app.get('/', function(req, res) {
    res.send('Hello World!');
});

app.use(cors());
app.use('/api', itemsRouter);


const port = process.env.PORT || 3001;

app.listen(port, function() {
    console.log(`Example app listening on port ${port}!`);
});