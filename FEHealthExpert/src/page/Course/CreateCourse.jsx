// import axios from "axios";
// import { useState } from "react";

// const CreateCourse = () => {
//     const [course, setCourse] = useState({
//         courseId: '',
//         courseName: '',
//         price: '',
//         rating: '',
//         description: '',
//         studentNumber: '',
//         certificate: '',
//         createBy: '',
//         dateUpdate: new Date().toISOString(),
//         language: '',
//         bmiMin: '',
//         bmiMax: '',
//         typeId: 0
//     });

//     const [existingDataError, setExistingDataError] = useState('');

//     const handleChange = async (e) => {
//         const { name, value } = e.target;
//         setCourse({ ...course, [name]: value });

//         // Check existing courseId
//         if (name === 'courseId') {
//             try {
//                 const response = await axios.get(`http://20.2.73.15:8173/api/Course/${value}`);
//                 if (response.data) {
//                     // Course ID already exists
//                     setExistingDataError('Course ID already exists!');
//                 }
//             } catch (error) {
//                 console.log('Error checking Course ID:', error);
//                 setExistingDataError('This Course ID can be used to create.');
//             }
//         }
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         try {
//             const res = await axios.post('http://20.2.73.15:8173/api/Course', course);
//             console.log(res.data);
//         } catch (err) {
//             console.log(err);
//         }
//     };

//     return (
//         <div>
//             <h2>Create Course</h2>
//             <form onSubmit={handleSubmit}>
//                 <input type="text" name="courseId" value={course.courseId} onChange={handleChange} placeholder="Course ID" />
//                 {existingDataError && <p style={{ color: 'red' }}>{existingDataError}</p>}<br></br>
//                 <input type="text" name="courseName" value={course.courseName} onChange={handleChange} placeholder="Course Name" /><br></br>
//                 <input type="number" name="price" value={course.price} onChange={handleChange} placeholder="Price" /><br></br>
//                 <input type="number" name="rating" value={course.rating} onChange={handleChange} placeholder="Rating" /><br></br>
//                 <textarea name="description" value={course.description} onChange={handleChange} placeholder="Description" /><br></br>
//                 <input type="number" name="studentNumber" value={course.studentNumber} onChange={handleChange} placeholder="Student Number" /><br></br>
//                 <input type="text" name="certificate" value={course.certificate} onChange={handleChange} placeholder="Certificate" /><br></br>
//                 <input type="text" name="createBy" value={course.createBy} onChange={handleChange} placeholder="Created By" /><br></br>
//                 <input type="date" name="dateUpdate" value={course.dateUpdate} onChange={handleChange} placeholder="Date Update" /><br></br>
//                 <input type="text" name="language" value={course.language} onChange={handleChange} placeholder="Language" /><br></br>
//                 <input type="number" name="bmiMin" value={course.bmiMin} onChange={handleChange} placeholder="BMI Min" /><br></br>
//                 <input type="number" name="bmiMax" value={course.bmiMax} onChange={handleChange} placeholder="BMI Max" /><br></br>
//                 <input type="number" name="typeId" value={course.typeId} onChange={handleChange} placeholder="Type Id" /><br></br>
//                 <button type="submit">Create</button>
//             </form>
//         </div>
//     );

// }

// export default CreateCourse;