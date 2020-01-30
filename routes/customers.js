const express = require('express');
const router = express.Router();
const Post = require('../models/Customer')


router.get('/', async (req, res) => {  
    try {
        const posts = await Post.find();
        res.json(posts);
    } catch (err) {
        res.json({ message: err });
    }
});

router.post('/', async (req, res) => {
    const customer = new Post({
        name: req.body.name,
        email: req.body.email
    });

    try {
        const saveCustomer = await customer.save();
        res.json(saveCustomer);
    } catch (err) {
        res.json({ message: err });
    }
});

router.get('/:postId', async (req, res) => {
    try {
        const customer = await Post.findById(req.params.postId);
        res.json(customer);
    } catch (err) {
        res.json({ message: err });
    }
});

router.delete('/:postId', async (req, res) => {
    try {
        const removeCustomer = await Post.remove({ _id: req.params.postId });
        res.json(removeCustomer);
    } catch (err) {
        res.json({ message: err });
    }
});

router.patch('/:postId', async (req, res) => {
    try {
        const updatePost = await Post.updateOne(
            { _id: req.params.postId },
            { $set: { title: req.body.name } }
        );
        res.json(updatePost);
    } catch (err) {
        res.json({ message: err });
    }
});


module.exports = router;