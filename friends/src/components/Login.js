import React, { useState } from 'react';
import axios from 'axios';

const initialState = {
    username: '',
    password: ''
}

const Login = (props) => {
    const [ formValue, setFormValue ] = useState(initialState);

    const handleChange = (e) => {
        setFormValue({
            ...formValue,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:5000/api/login', formValue)
            .then(res => {
                localStorage.setItem('token', res.data.payload);
                props.history.push('/friends');
            })
            .catch(err => {
                alert(err);
                props.history.push('/');
            })
            .finally(() => {
                setFormValue(initialState);
            })
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>Username: &nbsp;
                    <input
                        type='text'
                        name='username'
                        onChange={handleChange}
                        value={formValue.username}
                    />
                </label>
                <label>Password: &nbsp;
                    <input
                        type='password'
                        name='password'
                        onChange={handleChange}
                        value={formValue.password}
                    />
                </label>
                <button>Login</button>
            </form>
        </div>
    )
}

export default Login;