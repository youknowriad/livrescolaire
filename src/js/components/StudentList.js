import React, { PropTypes } from 'react'
import Student, { StudentProperty } from './Student'

const StudentList = ({ students, onStudentClick, onStudentRemoveClick }) => {
    return (
        <div>
            <ol className="breadcrumb">
                <li className="active">Élèves</li>
            </ol>
            <div className="row">
                {students.map(student =>
                    <div key={student.id} className="col-lg-2 col-xs-4 col-md-3">
                        <Student
                            student={student}
                            onClick={() => onStudentClick(student.id)}
                            onRemoveClick={() => onStudentRemoveClick(student.id)}
                        />
                    </div>
                )}
            </div>
        </div>
    )
}

StudentList.propTypes = {
    students: PropTypes.arrayOf(StudentProperty).isRequired,
    onStudentClick: PropTypes.func.isRequired
}

export default StudentList
