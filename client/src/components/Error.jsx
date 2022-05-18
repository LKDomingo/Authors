import React from 'react'
import { Link } from 'react-router-dom'

const Error = () => {

    return (
        <div className='d-flex flex-column align-items-center'>
            <h5 className='text-danger'>We're sorry, but we could not find the author you are looking for. Would you like to add this author to our database?</h5>\
            
            <button className='btn btn-primary'><Link to={'/authors/add'} style={{color: 'white', textDecoration: 'none'}}>Add an author</Link></button>
        </div>
    )
}

export default Error;