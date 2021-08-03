const express = require('express');
var router = express.Router();

const Item = require('../model/postModel');

router.get('/getPosts', (req, res, next)=>{
    Item.find().sort({createdDate: -1}).then(function(err, items){
        if(err){
            res.json(err);
        }else{
            res.json(items);
        }
    })
})

router.post('/addPost', (req, res, next)=>{
    let newItem = new Item({
        articleTitle: req.body.articleTitle,
        articleBody: req.body.articleBody,
        createdDate: req.body.createdDate
    });
    newItem.save((err, item)=>{
        if(err){
            res.json(err);
        }else{
            Item.find().sort({createdDate: -1}).then(function(err, items){
                if(err){
                    res.json(err);
                }else{
                    res.json(items);
                }
            })
        }
    });
});


module.exports = router;