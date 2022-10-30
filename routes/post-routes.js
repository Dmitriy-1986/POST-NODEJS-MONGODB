const express = require('express');

const {
    getPost, 
    deletePost,
    getEditPost,
    editPost,
    getPosts,
    getAddPost,
    addPost,
    getEditPostPage,
    getUpdatePostPage
} = require('../controllers/post-controller');

const router = express.Router();

router.get('/posts/:id', getPost);
router.delete('/posts/:id', deletePost);
router.get('/edit/:id', getEditPost);
router.put('/edit/:id', editPost);
router.get('/posts', getPosts);
router.get('/add-post', getAddPost);
router.post('/add-post', addPost);
router.get('/edit-posts', getEditPostPage);
router.get('/update-post/:id', getUpdatePostPage);

module.exports = router;
