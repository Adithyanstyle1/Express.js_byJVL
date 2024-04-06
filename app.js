const express = require('express');
const bodyParser = require('body-parser');
const RouterOne = require('./admin'); 

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(RouterOne);

app.use((req,res,next)=>{
    res.status(404).send('<h1>404 error</h1>');

});

const server = app.listen(6001, () => {
    console.log('Server is running on port 7001');
});
