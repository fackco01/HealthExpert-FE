import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MenuLeft from "../../components/MenuLeft";
import { Table } from "antd";
import axios from "axios";


export default function ManageCourse() {
  const { courseId } = useParams();
  const [course, setCourse] = useState(null);
  const [revenue, setRevenue] = useState(null);
  const [learners, setLearners] = useState([]);

  useEffect(() => {
    const fetchCourse = async () => {
      try {
        const response = await axios.get(`http://20.2.73.15:8173/api/Course/${courseId}`);
        setCourse(response.data);
      } catch (error) {
        console.error("Error fetching course details: ", error);
      }
    };
    fetchCourse();
  }, [courseId]);

  useEffect(() => {
    const fetchLearners = async () => {
      try {
        const learnersRes = await axios.get(`http://20.2.73.15:8173/api/course/${courseId}/users`);
        setLearners(learnersRes.data);
      } catch (error) {
        console.error("Error fetching learners: ", error);
      }
    };
    fetchLearners();
  }, [courseId]);

  useEffect(() => {
    if (course) {
      const courseRevenue = course.studentNumber * course.price;
      setRevenue(courseRevenue);
    }
  }, [course]);

  const formattedRevenue = new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
  }).format(revenue);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };

  const learnerColumns = [
    {
      title: "Tên người dùng",
      dataIndex: "userName",
      key: "userName"
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email"
    },
    {
      title: "Ngày tham gia",
      dataIndex: "enrollDate",
      key: "enrollDate",
      render: (text) => formatDate(text),
    }
  ];

  const columns = [
    {
      title: "ID",
      dataIndex: "courseId",
      key: "courseId",
    },
    {
      title: "Tên khóa học",
      dataIndex: "courseName",
      key: "courseName",
    },
    {
      title: "Số lượng học viên",
      dataIndex: "studentNumber",
      key: "studentNumber",
    },
    {
      title: "Giá tiền",
      dataIndex: "price",
      key: "price",
      render: (text) => (
        <span>{new Intl.NumberFormat("vi-VN", {
          style: "currency",
          currency: "VND",
        }).format(text)}</span>
      ),
    },
    {
      title: "Mô tả",
      dataIndex: "description",
      key: "description",
    },
    {
      title: "Người tạo",
      dataIndex: "createBy",
      key: "createBy",
    },
    {
      title: "Ngôn ngữ",
      dataIndex: "language",
      key: "language",
    },
    {
      title: "Ngày tạo",
      dataIndex: "dateUpdate",
      key: "dateUpdate",
      render: (text) => {
        const date = new Date(text);
        const day = date.getDate().toString().padStart(2, '0');
        const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Tháng bắt đầu từ 0
        const year = date.getFullYear();
        return `${day}/${month}/${year}`;
      },
    },
    {
      title: "BMI MIN",
      dataIndex: "bmiMin",
      key: "bmiMin",
    },
    {
      title: "BMI MAX",
      dataIndex: "bmiMax",
      key: "bmiMax",
    }
  ];

  if (!course) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className="w-full flex">
        <div className="w-[20%] h-full">
          <div className="home-page">
            <MenuLeft />
          </div>
        </div>
        <div className="w-[80%] mt-3">
          <h2 className="font-bold text-2xl">{course.courseName}</h2>
          <div className="absolute top-0 right-0">
            <p className="box w-[250px] mr-[90px] rounded-md bg-orange-400 text-black font-bold py-3 px-4 rounded opacity-100 transition-opacity mt-3">
              Tổng doanh thu của <br></br>{course.courseName}: {formattedRevenue}
            </p>
          </div>
          <div className="mt-10">
            <Table
              columns={columns}
              dataSource={[course]}
              rowKey={(record) => record.courseId}
            />
          </div>
          <div className="mt-10">
            <Table
              columns={learnerColumns}
              dataSource={learners}
            />
          </div>
        </div>
      </div>
    </>
  );
}
