const { Router } = require('express');

const productsRouter = require('./products');
const reviewsRouter = require('./reviews');
const viewsRouter = require('./views');

const router = Router();

router.use('/products', productsRouter);
router.use('/reviews', reviewsRouter);
router.use('/views', viewsRouter);

module.exports = router;
