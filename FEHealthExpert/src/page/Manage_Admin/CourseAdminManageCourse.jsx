import React, { useEffect, useState } from "react";
import axios from "axios";
import Menuleft from "../../components/MenuLeft";
import Header from "../../components/Header";
import { Table, Modal, Button } from "antd";
import { useNavigate } from "react-router-dom";
import { Space, Tag } from "antd";

export default function ManageCourseManager() {
    const [accounts, setAccounts] = useState([]);
    const [admin, setAdmin] = useState('');
    const [revenue, setRevenue] = useState(0); // Thêm state để lưu tổng doanh thu
    const navigate = useNavigate(); // Sử dụng useHistory

    useEffect(() => {
        const user = localStorage.getItem("user");
        if (!user) {
            console.error("Không có người dùng trong localStorage!");
            return;
        }
        setAdmin(user);
    }, []);

    // Fetch
    useEffect(() => {
        const fetchCourseManager = async () => {
            try {
                const userRes = await axios.get(`http://20.2.73.15:8173/api/Account/GetListAccount`);
                const matchingUser = userRes.data.filter(user => user.roleId === 3);
                const accumulatedAccounts = [];
                for (const user of matchingUser) {
                    const cmRes = await axios.get(`http://20.2.73.15:8173/api/Course/managers/email/${user.email}`);
                    const coursesWithId = cmRes.data.map(course => ({ ...course, email: user.email })); // Add email to each course
                    accumulatedAccounts.push(...coursesWithId);
                }
                setAccounts(accumulatedAccounts);
            } catch (error) {
                console.error("Error fetching courses: ", error);
            }
        };
        if (admin) {
            fetchCourseManager();
        }
    }, [admin]);




    //Collumn
    const columns = [
        {
            title: "Course ID",
            dataIndex: "courseId",
            key: "courseId",
        },
        {
            title: "Email",
            dataIndex: "email",
            key: "email",
        },
        {
            title: "Thao tác",
            dataIndex: "name",
            render: (_, record) => (
                <Space size="middle">
                    <button
                        type="primary"
                        onClick={showModalDelete}
                        className="bg-orange-400  w-[50px] py-1 rounded-xl "
                    >
                        Delete
                    </button>
                    <button className="bg-orange-400  w-[50px] py-1 rounded-xl">
                        Edit
                    </button>
                </Space>
            ),
            filterMode: "tree",
            filterSearch: true,
            onFilter: (value, record) => record.name.includes(value),
            width: "30%",
        },
    ];

    const [isModalCreateOpen, setIsModalCreateOpen] = useState(false);
    const [isModalDeleteOpen, setIsModalDeleteOpen] = useState(false);

    const showModalDelete = () => {
        setIsModalDeleteOpen(true);
    };


    //HTML
    return (
        <>
            <div className="w-full" >
                <Header />
            </div>
            <div className="w-full flex">
                {/* Side bar */}
                <div className="w-[20%]">
                    <div className="home-page">
                        <Menuleft />
                    </div>
                </div>
                {/* End Side Bar */}

                {/* Body */}
                <div className="w-[80%] mt-3">
                    <h2 className="font-bold text-2xl">WELCOME {admin}</h2>
                    <div className="mt-10">
                        <Table
                            columns={columns}
                            dataSource={accounts.filter(account => account.courseId !== null).map(account => ({ ...account, key: account.accountId }))}
                        />


                    </div>
                </div>
                {/* End Body */}
            </div>
        </>
    );
}