const { Router } = require('express');
const ctrl = require('../../controllers/products');

const router = Router();

router.get('/', ctrl.getAllProducts);

module.exports = router;
