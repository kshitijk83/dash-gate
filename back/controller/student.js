const Student = require('../models/student');

exports.postCreate = async (req, res, next) => {
    const studentObj = req.body;
    const student = Student({
        ...studentObj
    });
    try {
        const data = await student.save();
        res.status(200).json({
            data,
            msg: 'Student info submitted'
        })
    } catch (err) {
        if (!err.statusCode) {
            err.statusCode = 500;
        }
        next(err);
    }
}

exports.deleteStudent = async (req, res, next) => {
    const id = req.params.id;
    try {
        const student = await Student.findById(id);
        if (!student) {
            const error = new Error('Student doesn\'t have enty in database');
            error.statusCode = 404;
            throw error;
        }
        const data = await Student.findByIdAndDelete(id);
        res.status(200).json({
            data,
            msg: 'Student deleted!!'
        })
    } catch (err) {
        if (!err.statusCode) {
            err.statusCode = 500;
        }
        next(err);
    }
}