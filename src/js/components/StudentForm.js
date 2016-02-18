import React, { PropTypes } from 'react'

class StudentForm extends React.Component {
    render() {
        const {
            fields: { firstName, lastName, avatar, birthday },
            values, handleSubmit, cancel } = this.props

        return (
            <div>
                <ol className="breadcrumb">
                    <li className="active">
                        { values.id ?  'Éditer ' + [ values.firstName, values.lastName ].join(' ') : 'Ajouter un nouvel élève'}
                    </li>
                </ol>

                <form onSubmit={handleSubmit}>
                    <div className="row">
                        <div className="col-md-6">
                            <div className={['form-group', firstName.touched && firstName.error ? 'has-error has-feedback' : '' ].join(' ')}>
                                <label htmlFor="firstName">Prénom</label>
                                <input type="text" name="firstName" className="form-control" placeholder="Prénom" {...firstName} />
                                {
                                    firstName.touched && firstName.error ? (
                                        <span className="form-control-feedback">
                                            <i className="fa fa-times" />
                                        </span>
                                    ) : null
                                }
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className={['form-group', lastName.touched && lastName.error ? 'has-error has-feedback' : '' ].join(' ')}>
                                <label htmlFor="lastName">Nom</label>
                                <input type="text" name="lastName" className="form-control" placeholder="Nom" {...lastName} />
                                {
                                    lastName.touched && lastName.error ? (
                                        <span className="form-control-feedback">
                                            <i className="fa fa-times" />
                                        </span>
                                    ) : null
                                }
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-6">
                            <div className={['form-group', avatar.touched && avatar.error ? 'has-error has-feedback' : '' ].join(' ')}>
                                <label htmlFor="avatar">Photo</label>
                                <input type="url" name="avatar" className="form-control" placeholder="http://monavatar" {...avatar} />
                                {
                                    avatar.touched && avatar.error ? (
                                        <span className="form-control-feedback">
                                            <i className="fa fa-times" />
                                        </span>
                                    ) : null
                                }
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className={['form-group', birthday.touched && birthday.error ? 'has-error has-feedback' : '' ].join(' ')}>
                                <label htmlFor="birthday">Date de naissance</label>
                                <input type="text" name="birthday" className="form-control" {...birthday} />
                                {
                                    birthday.touched && birthday.error ? (
                                        <span className="form-control-feedback">
                                            <i className="fa fa-times" />
                                        </span>
                                    ) : null
                                }
                            </div>
                        </div>
                    </div>

                    <button type="submit" className="btn btn-primary-full">Valider</button>
                    <a className="pad-left" onClick={(e) => {
                        e.preventDefault()
                        cancel()
                    }}>Annuler</a>
                </form>
            </div>
        )
    }
}

StudentForm.propTypes = {
    fields: PropTypes.object.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    cancel: PropTypes.func.isRequired
}

export default StudentForm
