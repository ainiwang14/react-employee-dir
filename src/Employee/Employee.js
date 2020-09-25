import React, { useState } from 'react';
import './Employee.css'
const Employee = (props) => {
    const { id } = props;
    const [showEmployee, toggleEmployee] = useState(true);
    const hideEmployee = (event) => {
        event.preventDefault();
        toggleEmployee(false);
    }
    return (
        showEmployee && 
            (<div className='card'>
                <div>Employee Number: {id}</div>
                <div>Name: Aileen Wang</div>
                <div>Department: Legal</div>
                <div>Role: Cat Sitter</div>
                <div>Email: email@email.com</div>
                <button className='remove' onClick={hideEmployee}>Remove</button>
            </div>)
    )
}

export default Employee;