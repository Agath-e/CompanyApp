const express = require('express');
const router = express.Router();

const DepartmentController = require('../controllers/employees.controller');

router.get('/employees', DepartmentController.getAll);
router.get('/employees/random', DepartmentController.getRandom);
router.get('/employees/:id', DepartmentController.getId);
router.post('/employees', DepartmentController.postId);
router.put('/employees/:id', DepartmentController.putId);
router.delete('/employees/:id', DepartmentController.deleteId);


module.exports = router;
