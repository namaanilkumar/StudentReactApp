import React from 'react';
import StudentService from '../services/StudentService';

const StudentTable = ({ students, refreshStudents, setCurrentStudent }) => {

    const deleteStudent = (id) => {
        StudentService.deleteStudent(id)
            .then(response => {
                refreshStudents();
            })
            .catch(e => {
                console.error(e);
            });
    };

    const editStudent = (student) => {
        setCurrentStudent(student);
    };

    return (
        <div>
            <h3>Student List</h3>
            <table>
                <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Address</th>
                        <th>Phone Number</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {students.map(student => (
                        <tr key={student.id}>
                            <td>{student.firstName}</td>
                            <td>{student.lastName}</td>
                            <td>{student.address}</td>
                            <td>{student.phoneNumber}</td>
                            <td>
                                <button onClick={() => editStudent(student)}>Edit</button>
                                <button onClick={() => deleteStudent(student.id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default StudentTable;
