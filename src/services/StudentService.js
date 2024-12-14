import axios from 'axios';

const API_URL = 'http://localhost:5201/api/Student';

const getStudents = () => {
    return axios.get(API_URL);
};

const createStudent = (student) => {
    console.log(student);
    return axios.post(API_URL, student);
};

const updateStudent = (id, student) => {
    return axios.put(`${API_URL}/${id}`, student);
};

const deleteStudent = (id) => {
    return axios.delete(`${API_URL}/${id}`);
};

const StudentService = 
{ 
    getStudents, 
    createStudent, 
    updateStudent, 
    deleteStudent 

}; 

export default StudentService;
