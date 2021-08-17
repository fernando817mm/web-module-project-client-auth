import React, { useState, useEffect } from 'react';
import axiosWithAuth from '../utils/axiosWithAuth';

import AddFriend from './AddFriend';

const FriendsList = (props) => {
    const [ data, setData ] = useState([]);

    useEffect(() => {
        getData();
        console.log('sanity check');
    }, [])

    const getData = () => {
        axiosWithAuth().get('/friends')
            .then(res => {
                setData(res.data);
            })
            .catch(err => {
                alert(err);
            })
    }

    return (
        <div>
            <h1>Friends List</h1>
            <AddFriend/>
            {
                data.map((friend, idx) => {
                    return (
                        <h2 key={idx}>{friend.name}</h2>
                    )
                })
            }
        </div>
    )
}

export default FriendsList;