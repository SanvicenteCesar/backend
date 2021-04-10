const express = require('express');
const mysql = require('mysql');
const router = express.Router();

//show all
router.post("/get-time", async(req, res) => {
    var moment = require('moment-timezone');
    console.log(req.body)
    const { hour, count } = req.body;

    try {
        if (count) {
            var m = moment(hour, 'HH:mm:ss')
            var resp = moment.utc(m).add(count, 'hours').format('HH:mm:ss')
            return res.json({ response: { time: resp, timezone: 'utc' } });
        } else {
            return res.json({ response: { time: 'invalid', timezone: 'utc' } });
        }

    } catch (error) {
        return res.json({ error: error })
    }



});

module.exports = router