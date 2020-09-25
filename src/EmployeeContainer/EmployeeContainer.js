import React, { useState } from 'react';
import Employee from '../Employee/Employee';

const EmployeeContainer = () => {
    
    const [employees, updateEmployee] = useState([]);
    
    const addEmployee = (event) => {
        event.preventDefault();
        // TODO
        // When you Add an employee, display a form
        // the details of that form can be passed 
        // down as props for dynamic employees
        updateEmployee([...employees, (<Employee id={employees.length} key={employees.length}/>)]);
    }

    return (
        <>
        {employees}
        <div className='update'>
                <button className='add' onClick={addEmployee}>Add</button>
            </div>
        </>
    )
}

export default EmployeeContainer;