const express = require('express')
const router = express.Router()
const { getBootcamps, getSingleBootcamp, createBootcamp, updateBootcamp, deleteBootcamp, getBootcampsInRadius } = require('../controllers/bootcamps')


router.route('/radius/:zipcode/:distance').get(getBootcampsInRadius)
router.route('/').get(getBootcamps).post(createBootcamp)
router.route('/:id').get(getSingleBootcamp).put(updateBootcamp).delete(deleteBootcamp)

module.exports = router