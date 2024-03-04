const router = require('express').Router();
const thoughtRoutes = require('./thoughtRoutes');
const studentRoutes = require('./userRoutes');

router.use('/thoughts', thoughtRoutesRoutes);
router.use('/users', userRoutes);

module.exports = router;
