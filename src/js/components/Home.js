import React from 'react'
import Menu from './Menu'
import ListPage from '../containers/ListPage'
import FormPage from '../containers/FormPage'

const Home = ({ router }) => (
    <section>
        <header className="application-header">
            <a id="main-logo" className="logo">
                Le Livre <span>Scolaire</span>
            </a>
            <Menu />
        </header>


        <div className="pad">
            { router.page === 'new' ? <FormPage className="pad-top" /> : null }
            { router.page === 'list' ? <ListPage /> : null }
            { router.page === 'edit' ? <FormPage className="pad-top" student={router.params.student} /> : null }
        </div>
    </section>
)

export default Home
