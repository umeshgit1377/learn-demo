import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import HandelApi from '../Component/HandelApi';
function Note() {
    const [loading, setLoading] = useState(true)
    const [data, setData] = useState([])
    const [error, setError] = useState(null)
    const apiCalling = () => {
        const apiPath = 'https://jsonplaceholder.typicode.com/todos'
        axios.get(apiPath)
            .then((response) => {
                setData(response.data);
                setLoading(false)
            })
            .catch((err) => {
                setError(err.message)
                setLoading(false)
            });
    }
    useEffect(() => {
        setTimeout(() => {
            apiCalling()
        }, 1000);
    }, []);
    if (loading) {
        return (<div className=''>Loading</div>)
    }
    if (error) {
        return (<div className=''>Api Not Calling..</div>)
    }
    return (
        <div>
            <div >
                {
                    data.map((item, ind) => (
                        <div key={ind}>
                            <h4>{item.id} {item.name}</h4>
                            <h4>{item.body}</h4>
                        </div>
                    ))
                }
            </div>
            <div className=''>
                fetch api 
            </div>
            <div className=''>
            <HandelApi />
            </div>
        </div>
    );
}
export default Note;