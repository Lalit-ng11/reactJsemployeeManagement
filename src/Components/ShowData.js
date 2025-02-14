import React from 'react';
import { useEffect,useState } from 'react';
import {fetchEmployees , deleteEmployee , updateEmployee} from '../services/api';



const ShowData = () => {
    const [employees , setEmployees]=useState([]);

    useEffect(()=>{
        fetchEmployees()
        .then((data)=>{
            console.log("Setting Employees State", data);
            setEmployees(data);
        }).catch((error)=>{
            console.error(`Failed to Fetch Data..${error}`);
        });
    },[]);

    const handleDelete = async (id)=>{
        await deleteEmployee(id);
        setEmployees(employees.filter(emp=>emp.id !== id));
    }

    const handleUpdate = async(id,updatedData)=>{
        await updateEmployee(id,updatedData);
        setEmployees(employees.map(emp=>(emp.id === id)? {...emp , 
            ...updatedData}:emp
        ))
    };
  return (
    <section className='container'> 
    {/* <pre>{JSON.stringify(employees,null,2)}</pre> */}
        <table className='table table-bordered mt-3 '>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Password</th>
                    <th>Department</th>
                    <th>Actions</th>
                </tr>
            </thead>

            <tbody>
                {employees.length > 0 ? (
                    employees.map(emp=>(
                        <tr key={emp.id}>
                            <td>{emp.name}</td>
                            <td>{emp.email}</td>
                            <td>{emp.password}</td>
                            <td>{emp.department}</td>
                            <td>
                                <button className='btn btn-primary me-3' onClick={()=>handleUpdate(emp)}>Edit</button>
                                <button className='btn btn-danger' onClick={()=>handleDelete(emp.id)}>Delete</button>
                            </td>

                        </tr>
                    ))
                ):(
                    <tr>
                        <td colSpan={4} className='text-danger'>No Employees Found</td>
                    </tr>
                )
            }

                {/* {employees.map(emp =>(
                    <tr key={emp.id}>
                        <td>{emp.name}</td>
                        <td>{emp.email}</td>
                        <td>{emp.password}</td>
                        <td>{emp.department}</td>
                        <td>
                            <button className='btn btn-primary' 
                            onClick={()=>handleUpdate(emp)}>Edit</button>
                            <button className='btn btn-danger'
                            onClick={()=>handleDelete(emp.id)}>Delete</button>
                        </td>
                    </tr>
                ))} */}

            </tbody>
        </table>
    </section>
  )
}

export default ShowData
