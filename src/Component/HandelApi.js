import React from 'react';
import { useEffect, useState } from 'react';
function HandelApi() { 
    const [fetchloading, setFetchLoading] = useState(true)
    const [datafetch, setDataFetch] = useState([])
    const [errorfetch, setErrorFetch] = useState(null)
    const apiCalling = () => {
        const apiPath = 'https://jsonplaceholder.typicode.com/todos'
        fetch(apiPath)
            .then((res) => res.json())
            .then((response) => {
                console.log(response);
                setDataFetch(response);
                setFetchLoading(false)
            })
            .catch((err) => {
                setErrorFetch(err.message)
                setFetchLoading(false)
            });
    }
    useEffect(() => {
        setTimeout(() => {
            apiCalling()
        }, 1000);
    }, []);
    if (fetchloading) {
        return (<div className=''>Loading</div>)
    }
    if (errorfetch) {
        return (<div className=''>Api Not Calling..</div>)
    }
    return (
        <div>
            <div>
                {
                    datafetch && datafetch.map((item, ind) => (
                        <div key={ind}>
                            <h4>{item.id} {item.name}</h4>
                            <h4>{item.body}</h4>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

export default HandelApi;