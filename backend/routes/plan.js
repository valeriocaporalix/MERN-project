const router = require('express').Router();
let Plan = require('../models/plan.model');



router.route('/').get((req, res) => {
    Plan.find()
        .then(plans => res.json(plans))
        .catch(err => res.status(400).json('Error: ' + err));
});



router.route('/add').post((req,res) => {
    const phase = req.body.phase;
    const activity = req.body.activity;
    const notes = req.body.notes;

    const  newPlan = new Plan({
        phase,
        activity,
        notes,
    });

    newPlan.save()
        .then(() => res.json('Work Plan added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});


router.route('/:id').get((req, res) => {
    Plan.findById(req.params.id)
        .then(plan => res.json(plan))
        .catch(err => res.status(400).json('Error: ' + err));
});



router.route('/:id').delete((req, res) => {
    Plan.findByIdAndDelete(req.params.id)
        .then(() => res.json('Work Plan solved.'))
        .catch(err => res.status(400).json('Error: ' + err));
});



router.route('/update/:id').post((req, res) => {
    Plan.findById(req.params.id)
        .then(plan => {
            plan.phase = req.body.phase;
            plan.activity = req.body.activity;
            plan.notes = req.body.notes;

            plan.save()
                .then(() => res.json("Work Plan updated!"))
                .catch(err => res.status(400).json('Error: ' + err))
        })
        .catch(err => res.status(400).json('Error: ' + err))
});


module.exports = router;
