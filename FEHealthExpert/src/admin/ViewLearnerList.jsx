import React, { useEffect, useState } from 'react';
import axios from 'axios';


const ViewListLearner = () => {
  const [enrollments, setEnrollments] = useState([]);

  useEffect(() => {
    fetchEnrollments();
  }, []);

  const fetchEnrollments = async () => {
    try {
      const enrollmentsResponse = await axios.get('http://20.2.73.15:8173/api/Course/enrollments');
      const enrollmentsData = enrollmentsResponse.data;

      const accountResponse = await axios.get('http://20.2.73.15:8173/api/Account/GetListAccount');
      const accountData = accountResponse.data;

      const courseResponse = await axios.get('http://20.2.73.15:8173/api/Course');
      const courseData = courseResponse.data;

      const enrichedEnrollments = enrollmentsData.map((enrollment) => {
        const account = accountData.find((account) => account.accountId === enrollment.accountId);
        const accountUsername = account ? account.userName : ''; // Use 'userName' property
        const course = courseData.find((course) => course.courseId === enrollment.courseId);
        const courseName = course ? course.courseName : ''; // Use 'courseName' property
        return { ...enrollment, accountUsername, courseName };
      });

      setEnrollments(enrichedEnrollments);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1>Enrollments</h1>
      <table className="enrollment-table">
        <thead>
          <tr>
            <th>Account Username</th>
            <th>Course Name</th>
            <th>Enroll Date</th>
          </tr>
        </thead>
        <tbody>
          {enrollments.map((enrollment) => (
            <tr key={enrollment.accountId}>
              <td>{enrollment.accountUsername}</td>
              <td>{enrollment.courseName}</td>
              <td>{enrollment.enrollDate}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ViewListLearner;