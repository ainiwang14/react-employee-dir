import React from 'react';
import './Employee.css'
const Employee = (props) => {
    const { id } = props;
    return (
        <div key={id} className='card'>
            <div>{id}</div>
            <div>Name: </div>
            <div>Department: </div>
            <div>Role: </div>
            <div>Email: </div>
            <button className='remove' >Remove</button>
        </div>
    )
}

export default Employee;