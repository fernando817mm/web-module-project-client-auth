import React, { useState, useEffect } from 'react';
import axiosWithAuth from '../utils/axiosWithAuth';

import AddFriend from './AddFriend';
import Friend from './Friend';

const FriendsList = (props) => {
    const [ data, setData ] = useState([]);

    useEffect(() => {
        getData();
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
            <AddFriend setState={setData}/>
            {
                data.map((friend, idx) => {
                    return <Friend name={friend.name} age={friend.age} email={friend.email} key={idx}/>
                })
            }
        </div>
    )
}

export default FriendsList;