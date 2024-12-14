import React, { useState, useEffect, useMemo } from 'react';
import StudentService from '../services/StudentService';

const StudentForm = ({ currentStudent, refreshStudents, clearCurrentStudent }) => {
    const initialStudentState = useMemo(() => ({
        id: 0,
        firstName: "",
        lastName: "",
        address: "",
        phoneNumber: ""
    }), []);

    const [student, setStudent] = useState(initialStudentState);

    useEffect(() => {
        if (currentStudent) {
            setStudent(currentStudent);
        } else {
            setStudent(initialStudentState);
        }
    }, [currentStudent, initialStudentState]);

    const handleInputChange = event => {
        const { name, value } = event.target;
        setStudent({ ...student, [name]: value });
    };

    const saveStudent = () => {
        if (student.id) {
            StudentService.updateStudent(student.id, student)
                .then(response => {
                    refreshStudents();
                    clearCurrentStudent();
                })
                .catch(e => {
                    console.error('Error updating student:', e);
                });
        } else {
            StudentService.createStudent(student)
                .then(response => {
                    refreshStudents();
                })
                .catch(e => {
                    console.error('Error creating student:', e);
                });
        }
    };

    return (
        <div style={{padding: '20px auto'}}> 
            <h3>{student.id ? "Edit Student" : "Add Student"}</h3>
            <form>
                <label>First Name</label>
                <input
                    type="text"
                    name="firstName"
                    value={student.firstName}
                    onChange={handleInputChange}
                />
                <label>Last Name</label>
                <input
                    type="text"
                    name="lastName"
                    value={student.lastName}
                    onChange={handleInputChange}
                />
                <label>Address</label>
                <input
                    type="text"
                    name="address"
                    value={student.address}
                    onChange={handleInputChange}
                />
                <label>Phone Number</label>
                <input
                    type="text"
                    name="phoneNumber"
                    value={student.phoneNumber}
                    onChange={handleInputChange}
                />
                <button type="button" onClick={saveStudent}>
                    {student.id ? "Update" : "Save"}
                </button>
            </form>
        </div>
    );
};

export default StudentForm;
