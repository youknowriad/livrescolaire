import React, { PropTypes } from 'react'

export const StudentProperty = PropTypes.shape({
    id: PropTypes.number.isRequired,
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired
}).isRequired

const Student = ({ onClick, onRemoveClick, student }) => (
    <div onClick={onClick} className="thumbnail student hover-fill">
        <img src={ student.avatar } />
        <div className="caption">
            <h4>{ student.firstName } { student.lastName }</h4>
            <p>{ student.birthday ? student.birthday : 'ND'}</p>
        </div>
        <a onClick={e => {
                    e.stopPropagation()
                    onRemoveClick()
                }} href="#" className="remove-link btn btn-default-full">
            <i className="fa fa-remove" />
        </a>
    </div>
)

Student.propTypes = {
    onClick: PropTypes.func.isRequired,
    student: StudentProperty
}

export default Student
