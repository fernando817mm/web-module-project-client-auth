import React from 'react';
import styled from 'styled-components';

const Div = styled.div`
    width: 35%;
    margin: 1% auto;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    text-align: center;

    & span{
        font-weight: 700;
    }
`

const Friend = (props) => {
    const { name, age, email } = props;
    return (
        <Div>
            <p>Name: <span>{name}</span></p>
            <p>Age: <span>{age}</span></p>
            <p>Email: <span>{email}</span></p>
        </Div>
    )
}

export default Friend;