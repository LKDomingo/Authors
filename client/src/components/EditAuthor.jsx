import React, { useEffect, useState } from 'react'
import { useParams, Link, useHistory } from 'react-router-dom';
import axios from 'axios';

const EditAuthor = () => {
    const history = useHistory();
    const { id } = useParams();
    const [formInfo, setFormInfo] = useState({
        name : '',
        isBestSeller : false
    })
    const [errors, setErrors] = useState({}); 

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/authors/${id}`)
            .then(res=>{
                if(res.data.results) {
                console.log(res.data.results);
                setFormInfo({
                    name : res.data.results.name,
                    isBestSeller : res.data.results.isBestSeller
                })
            } else {
                history.push('/error')
            }
            })
            .catch(err=>{
                console.log("Error: ", err);
            })
    }, [id])


    const changeHandler = (e) => {
        setFormInfo({
            ...formInfo,
            [e.target.name] : e.target.value
        })
    }

    const toggleIsBestSeller = (e) => {
        let {...copyFormInfo} = formInfo;
        copyFormInfo.isBestSeller = e.target.checked;
        setFormInfo(copyFormInfo);
    }

    const submitHandler = (e) => {
        axios.put(`http://localhost:8000/api/authors/${id}`, formInfo)
            .then(res=>{
                console.log(res);
                if(res.data.error){
                    setErrors(res.data.error.errors)
                } else {
                history.push('/');
                }
            })
            .catch(err=>{
                console.log('Error: ', err);
            })
    }

    return (
        <div>
            <Link to={'/'}>Home</Link>
            <h5 className='mt-3'>Edit this author</h5>
            <div className='d-flex flex-column gap-1 p-2' style={{maxWidth: 400, border: '1px solid lightgray', borderRadius: 5, backgroundColor: '#E3E3E3', boxShadow: '3px 3px 3px #D8D8D8'}}>
                <div>
                    <label className='me-2' htmlFor="name">Name:</label>
                    <input type="text" name='name' onChange={ changeHandler } value={formInfo.name} />
                    <p className='text-danger'>{errors.name?.message}</p>
                </div>
                <div className='mt-1'>
                    <label htmlFor="isBestSeller">Best Seller?</label>
                    <input className='mx-2' type="checkbox" name='isBestSeller' onChange={(e) => toggleIsBestSeller(e) }  checked={formInfo.isBestSeller} />
                </div>
                <div className='mt-3'>
                    <button className='btn btn-primary'><Link to={'/'} style={{color: 'white', textDecoration: 'none'}}>Cancel</Link></button>
                    <button className='btn btn-primary mx-2' onClick={ submitHandler }>Submit</button>
                </div>
            </div>
        </div>
    )
}

export default EditAuthor