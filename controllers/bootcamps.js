// @desc    Get all bootcamps
// @route   GET /api/vi/bootcamps
// @access  Public
const getBootcamps = (req, res) => {
    res.status(200).json({success: true, msg: 'Show all bootcamps'})
}
// @desc    Get single bootcamps
// @route   GET /api/vi/bootcamps/:id
// @access  Public
const getSingleBootcamp = (req, res) => {
    res.status(200).json({success: true, msg: `Show bootcamp ${req.params.id}` })
}
// @desc    Create bootcamp
// @route   POST /api/vi/bootcamps
// @access  Private
const createBootcamp = (req, res) => {
    res.status(200).json({success: true, msg: 'Create new bootcamp'})
}
// @desc    Update bootcamp
// @route   PUT /api/vi/bootcamps/:id
// @access  Private
const updateBootcamp = (req, res) => {
    res.status(200).json({success: true, msg: `Update bootcamp ${req.params.id}`})
}
// @desc   Delete single bootcamp
// @route   DELETE /api/vi/bootcamps/:id
// @access  Private
const deleteBootcamp = (req, res) => {
    res.status(200).json({success: true, msg: `Delete bootcamp ${req.params.id}`})
}

module.exports = {
    getBootcamps,
    getSingleBootcamp,
    createBootcamp,
    updateBootcamp,
    deleteBootcamp
}