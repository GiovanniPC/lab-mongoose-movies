const express = require('express');
const router  = express.Router();
const Celebrity = require('../models/celebrity');

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.get('/celebrities', (req,res) => {
  Celebrity.find()
  .then((listCelebritys) => {
    res.render('celebrities/index', {listCelebritys});
  })
  .catch(err => console.log(err))
});

router.get('/celebrities/:id', (req,res) => {
  Celebrity.findById(req.params.id)
  .then((celebrity) => {
    console.log(celebrity);
    res.render('celebrities/details', celebrity);
  })
  .catch(err => console.log(err))
});

module.exports = router;
