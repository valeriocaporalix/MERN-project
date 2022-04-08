const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const planSchema = new Schema({
    phase: {type: String},
    activity: {type: String, required: true},
    notes: {type: String},
}, {
    timestamps: true,
});

const Plan = mongoose.model('Plan', planSchema);

module.exports = Plan;