import React, { useState } from 'react';
import axiosWithAuth from '../utils/axiosWithAuth';
import styled from 'styled-components';

const Form = styled.div`
    width: 35%;
    margin: auto;
    padding: 2% 0;
    background-color: lightgreen;
    border-radius: 3em;
    display: flex;
    flex-direction: column;
    align-self: center;
    justify-content: center;
    & form{
        display: flex;
        flex-direction: column;
        width: 50%;
        margin: auto;

        & input{
            margin: 2% 0;
        }
    }
    button{
        width: auto;
        margin: auto;
    }
    label{
        font-weight: bold;
    }
`

const initialState = {
    name: '',
    age: '',
    email: '',
}

const AddFriend = (props) => {
    const [ formValue, setFormValue ] = useState(initialState);

    const { setState } = props;

    const handleChange = (e) => {
        setFormValue({
            ...formValue,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        axiosWithAuth().post('/friends', { ...formValue, id: Date.now() })
            .then(res => {
                setState(res.data);
                setFormValue(initialState);
            })
            .catch(err => {
                alert(err);
            })
    }

    return (
        <Form>
            <h2>Add Friend: </h2>
            <form onSubmit={handleSubmit}>
                <label>Name: &nbsp;
                    <input
                        type='text'
                        name='name'
                        onChange={handleChange}
                        value={formValue.name}
                    />
                </label>
                <label>Age: &nbsp;
                    <input
                        type='text'
                        name='age'
                        onChange={handleChange}
                        value={formValue.age}
                    />
                </label>
                <label>Email: &nbsp;
                    <input
                        type='email'
                        name='email'
                        onChange={handleChange}
                        value={formValue.email}
                    />
                </label>
                <button>Add Friend</button>
            </form>
        </Form>
    )
}

export default AddFriend;