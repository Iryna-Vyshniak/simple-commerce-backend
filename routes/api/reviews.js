const { Router } = require('express');
const ctrl = require('../../controllers/reviews');

const router = Router();

router.get('/', ctrl.getAllReviews);

module.exports = router;
