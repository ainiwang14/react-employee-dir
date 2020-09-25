import React from 'react';
import Employee from '../Employee/Employee';

const EmployeeContainer = () => {
    
    const employees = [];
    for(let i = 0; i < 10; i++){
        employees.push(<Employee id={i} key={i}/>)
    }
    const addEmployee = (event) => {
        event.preventDefault();
        employees.push( <Employee id={employees.length} key={employees.length}/> );
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