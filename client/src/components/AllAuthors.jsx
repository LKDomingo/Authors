import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';

const AllAuthors = () => {
    const [authorList, setAuthorList] = useState([]);
    const [deleteToggle, setDeleteToggle] = useState(false);


    const SortArrayByName = (x, y) => {
        return x.name.localeCompare(y.name);
    }


    useEffect(() => {
        axios.get('http://localhost:8000/api/authors')
            .then(res => {
                console.log(res.data.results);
                setAuthorList(res.data.results.sort(SortArrayByName));
            })
            .catch(err => {
                console.log("error: ", err);
            })
    }, [deleteToggle])

    const deleteAuthor = (e, id) => {
        e.preventDefault();
        axios.delete(`http://localhost:8000/api/authors/${id}`)
            .then(res => {
                console.log(res);
                setDeleteToggle(!deleteToggle);
            })
            .catch(err => {
                console.log("Error: ", err);
            })
    }

    return (
        <div>
            <p><Link to={'/authors/add'}>Add an author</Link></p>
            <p>We have quotes by:</p>
            <table className='table table-dark table-sm table-bordered table-hover table-striped'>
                <thead>
                    <tr>
                        <th>Author</th>
                        <th>Is Best Seller?</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        authorList.map((authorObj, idx) => {
                            return (
                                <tr key={idx}>
                                    <td>{authorObj.name}</td>
                                    <td>
                                        {authorObj.isBestSeller ? 'Of course' : 'Not a chance'}
                                    </td>
                                    <td className='d-flex justify-content-center align-items-center gap-3'>
                                        <button className='btn btn-outline-warning'><Link to={`/authors/edit/${authorObj._id}`} style={{ color: 'goldenrod', textDecoration: 'none' }}>Edit</Link></button>
                                        <button className='btn btn-outline-danger' onClick={(e) => deleteAuthor(e, authorObj._id)}>Delete</button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>

        </div>
    )
}

export default AllAuthors;