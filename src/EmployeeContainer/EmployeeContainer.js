import React, { useState } from 'react';
import Employee from '../Employee/Employee';

const EmployeeContainer = () => {
    
    const [employees, updateEmployee] = useState([]);
    
    const addEmployee = (event) => {
        event.preventDefault();
        updateEmployee([...employees, (<Employee id={employees.length} key={employees.length}/>)]);
    }

    return (
        <>
        {employees}
        <div className='update'>
                <button className='add' onClick={addEmployee}>Add</button>
                <button className='remove' >Remove</button>
            </div>
        </>
    )
}

export default EmployeeContainer;