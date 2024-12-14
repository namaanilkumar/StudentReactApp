import React, { useEffect, useState } from 'react';
import StudentService from '../services/StudentService';
import StudentForm from './StudentForm';
import StudentTable from './StudentTable';

const StudentList = () => {
    const [students, setStudents] = useState([]);
    const [currentStudent, setCurrentStudent] = useState(null);

    useEffect(() => {
        retrieveStudents();
    }, []);

    const retrieveStudents = () => {
        StudentService.getStudents()
            .then(response => {
                setStudents(response.data);
            })
            .catch(e => {
                console.error(e);
            });
    };

    const clearCurrentStudent = () => {
        setCurrentStudent(null);
    };

    return (
        <div>
            <h2>Student App</h2>
            <StudentForm currentStudent={currentStudent} refreshStudents={retrieveStudents} clearCurrentStudent={clearCurrentStudent} />
            <StudentTable students={students} refreshStudents={retrieveStudents} setCurrentStudent={setCurrentStudent} />
        </div>
    );
};

export default StudentList;
