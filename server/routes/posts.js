const express = require('express');
const router = express.Router();
const {posts} = require("../models"); //getting table


//gets info from db and dsiplays it
router.get("/", async (req, res) => {
   const listOfPosts = await posts.findAll();
   res.json(listOfPosts);
});

//inserting data into db
router.post("/", async (req, res) =>{
    const post = req.body
    await posts.create(post); //wait till done
    res.json(post);

});

module.exports = router;