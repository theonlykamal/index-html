const express = require('express');
const app2 = express();
const {v4: uuidv4} = require('uuid');
const server2 = require('http').Server(app2);




const cors = require('cors');
const { log } = require('console');
const corsOptions ={
    origin: '*', 
    credentials: true,            //access-control-allow-credentials:true
    optionSuccessStatus: 200
}
app2.use(cors(corsOptions));



app2.set('view engine', 'ejs');

app2.use(express.static('public'));
 
app2.get('/', (req, res) => {

    var uuid = uuidv4();
    res.send(uuid);

    
})

server2.listen(2500);