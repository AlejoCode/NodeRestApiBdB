const express = require ('express');
const router = express.Router();
const PersonModel = require('../models/Person')

// -> POST , CREATE
router.post('/persons', (req, res, next) => {
    console.log("req.body");
    console.log(req.body);

    PersonModel.create(req.body).then((band)=>{
        res.send(band);
    }).catch(next);
});

// -> GET / READ
router.get('/persons', (req, res, next) => {
    PersonModel.find({}).then((persons) => {
        res.send(persons);
    }).catch(next);
});

// -> PUT / UPDATE
router.put('/persons/:id', (req, res, next) => {
    PersonModel.findByIdAndUpdate({_id: req.params.id}, req.body).then(() => {
        PersonModel.findOne({_id: req.params.id}).then((band) => {
            res.send(band);
        })
    }).catch(next);
});


// -> DELETE 
router.delete('/persons/:id', (req, res, next) => {
    PersonModel.findOneAndRemove({_id: req.params.id}).then((band) => {
        res.send(band);
    }).catch(next);
})

module.exports = router;