const express = require('express');

const router = express.Router();

// router.use('/accounts', require('./routes/accounts'));

router.use('/:accountId/schedules', require('./routes/schedules'));

// router.use('/:accountId/:scheduleId/availabilities', require('./routes/availabilities'));
// router.use('/:accountId/:scheduleId/pendingEvents', require('./routes/pendingEvents'));
// router.use('/:accountId/:scheduleId/events', require('./routes/events'));

module.exports = router;