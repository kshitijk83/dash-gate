const student = require('../models/student');
const Student = require('../models/student');

exports.postCreate = async (req, res, next) => {
    const studentObj = req.body;
    const student = Student({
        ...studentObj,
        out_of_campus: studentObj.out_of_campus=='T'?true:false
    });
    try {
        const data = await student.save();
        res.status(200).json({
            data,
            message: 'Student info submitted'
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
            message: 'Student deleted!!'
        })
    } catch (err) {
        if (!err.statusCode) {
            err.statusCode = 500;
        }
        next(err);
    }
}
