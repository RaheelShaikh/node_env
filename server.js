const config =  require('./config.js');
const express =  require('express');
const app =  express();
let mode = '';

console.log(`NODE_ENV=${config.NODE_ENV}`);

app.get('/', (req, res) => {
    res.send('Hello World !!');
});

app.listen(config.PORT, config.HOST, () => {
    console.log(`APP LISTENING ON http://${config.HOST}:${config.PORT}`);
})