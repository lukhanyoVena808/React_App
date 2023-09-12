
const express = require('express'); //calls express framework
const app = express(); //allows for api request
const cors = require('cors');

app.use(express.json());
app.use(cors());
const db = require('./models');


// Routers
const postRouter = require('./routes/posts');
app.use("/posts", postRouter);

db.sequelize.sync().then( ()=> { //load db at the same time as api starts
    //start api, needs port, but is different from front end
    app.listen(5002, () => { //function that runs when the server starts
    console.log("Server running on port 5002");

    });
});



