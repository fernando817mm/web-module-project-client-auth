import React, { useState } from 'react';

const initialState = {
    id: Date.now(),
    name: '',
    age: '',
    email: ''
}

const AddFriend = (props) => {
    const { friends, setFriends } = props;
    const [ formValue, setFormValue ] = useState(initialState);

    const handleChange = (e) => {
        setFormValue({
            ...formValue,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setFriends([...friends, formValue]);
        setFormValue(initialState);
        console.log(friends);
    }

    return (
        <div>
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
        </div>
    )
}

export default AddFriend;