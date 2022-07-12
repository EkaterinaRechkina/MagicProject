import React from 'react'
import axios from 'axios'

function FutureApi() {
    function getFuture(){
        axios.get(`${process.env.REACT_APP_API_URL}/api/future`, {withCredentials: true})
        .then(response => {
            console.log(response.data);
        })
    }
    getFuture()
    return (
        <div>FutureApi</div>
  )
}

export default FutureApi
