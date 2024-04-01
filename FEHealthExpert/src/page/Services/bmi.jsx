import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { UploadOutlined, CloseCircleOutlined } from '@ant-design/icons';
import type { UploadProps } from 'antd';
import { Button, message, Upload } from 'antd';
import { Form, Input } from 'antd';
import axios from 'axios';
import BmiCoursePage from './BmiCoursePage';
import { useNavigate } from 'react-router-dom';

const Bmi = ({ onClose }) => {
    const [height, setHeight] = useState('');
    const [weight, setWeight] = useState('');
    const [bmiResult, setBmiResult] = useState(null);
    const [courseList, setCourseList] = useState([]);
    const [calculated, setCalculated] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        const bmiValue = weight / (height * height);
        let bmiStatus = '';

        if (bmiValue < 18.5) {
            bmiStatus = 'Underweight';
        } else if (bmiValue >= 18.5 && bmiValue <= 24.9) {
            bmiStatus = 'Normal';
        } else if (bmiValue >= 25 && bmiValue <= 29.9) {
            bmiStatus = 'Overweight';
        } else {
            bmiStatus = 'Obese';
        }

        const bmiResult = {
            weight,
            height,
            bmiValue,
            bmiStatus
        };

        setBmiResult(bmiResult);

        try {
            const response = await axios.get('http://20.2.73.15:8173/api/Course');
            const filteredCourses = response.data.filter(
                (course) => bmiValue >= course.bmiMin && bmiValue <= course.bmiMax
            );
            setCourseList(filteredCourses);
            console.log(filteredCourses);
            localStorage.setItem('ProposeCourse', JSON.stringify(filteredCourses));
        } catch (error) {
            console.error('Error fetching courses:', error);
        }

        setCalculated(true);
    };

    const handleNavigate = () => {
        // Chuyển trang khi click vào nút
        navigate('/displayByBmi'); // Thay đổi '/next-page' bằng đường dẫn bạn muốn chuyển đến
    };

    return (
        <div className="fixed inset-0 bg-opacity-30 flex justify-center items-center" style={{ zIndex: 10 }}>
            <div className='mt-10 flex flex-col gap-5 text-black'>
                <div className='bg-white rounded-xl px-20 py-10 flex flex-col gap-5 items-center mx-4'>
                    <div className='place-self-end'><Button icon={<CloseCircleOutlined />} onClick={onClose}></Button></div>
                    <div className="bmi-form">
                        <h1>BMI Calculator</h1>
                        <form onSubmit={handleSubmit}>
                            <div>
                                <label htmlFor="weight">Weight (kg):</label>
                                <input
                                    type="number"
                                    id="weight"
                                    value={weight}
                                    onChange={(e) => setWeight(e.target.value)}
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="height">Height (m):</label>
                                <input
                                    type="number"
                                    id="height"
                                    value={height}
                                    onChange={(e) => setHeight(e.target.value)}
                                    required
                                />
                            </div>
                            <button type="submit">Calculate BMI</button>
                        </form>
                        {calculated && (
                            <button onClick={handleNavigate}>Khóa học đề xuất</button>
                        )}
                    </div>
                </div>
            </div>
            {/* <BmiCoursePage courseList={courseList} /> */}
        </div>
    );
};

export default Bmi;