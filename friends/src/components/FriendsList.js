import React, { useState, useEffect } from 'react';
import axiosWithAuth from '../utils/axiosWithAuth';

import AddFriend from './AddFriend';
import Friend from './Friend';

import styled from 'styled-components';

const Button = styled.button`
    background-color: white;
    font-size: 1.5rem;
    font-weight: bolder;
    border: 0.25em solid lightgreen;
    border-radius: 0.25em;
    margin: 0.5% auto;
    
    &:hover{
        cursor: pointer;
        background-color: lightgreen;
    }
`

const FriendsList = (props) => {
    const [ data, setData ] = useState([]);
    const [ modal, setModal ] = useState(false);

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

    const handleClick = () => {
        setModal(!modal);
    }

    return (
        <div>
            <h1>Friends List</h1>
            <Button onClick={handleClick}>{!modal ? 'Add Friend' : 'Close'}</Button>
            { modal && <AddFriend setState={setData}/> }
            {
                data.map((friend, idx) => {
                    return <Friend name={friend.name} age={friend.age} email={friend.email} key={idx}/>
                })
            }
        </div>
    )
}

export default FriendsList;