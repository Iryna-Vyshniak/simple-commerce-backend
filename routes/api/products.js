const { Router } = require('express');
const ctrl = require('../../controllers/products');
const { isValidId } = require('../../middlewares');

const router = Router();

router.get('/', ctrl.getAllProducts);
router.get('/:id', isValidId, ctrl.getById);

module.exports = router;
