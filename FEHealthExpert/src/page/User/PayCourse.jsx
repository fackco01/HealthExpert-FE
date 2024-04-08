import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

const PayCourse = () => {
    const [accountId, setAccountId] = useState(null);
    const { id } = useParams();
    const [result, setResult] = useState('');
    const paymentMethod = "VnPay"; // Specify the payment method here
    const navigate = useNavigate();
    const [isReady, setIsReady] = useState(false);

    useEffect(() => {
        const user = localStorage.getItem("user");
        if (!user) {
            console.error("Không có người dùng trong localStorage!");
            return;
        }

        const fetchAccountId = async () => {
            try {
                const response = await axios.get(
                    `http://20.2.73.15:8173/api/Account/GetAccountIdByUserName/${user}`
                );
                setAccountId(response.data);
            } catch (error) {
                console.error("Lỗi khi tải người dùng:", error);
            }
        };

        fetchAccountId();
    }, []);

    const payCourse = async () => {
        const orderDTO = { courseId: id, accountId: accountId };
        try {
            const addResponse = await axios.post('http://20.2.73.15:8173/api/Order/AddOrder', orderDTO);
            setResult('Order added successfully. Checking out...');

            const checkoutResponse = await axios.post('http://20.2.73.15:8173/api/Order/CheckoutOrder', { payment: paymentMethod });
            setResult('Order added and checked out successfully.');

            if (checkoutResponse.status === 200) {
                // Redirect to the payment gateway
                window.location.href = checkoutResponse.data;
                setIsReady(true);
            } else {
                setResult('Failed to initiate payment.');
            }
        } catch (error) {
            setResult('Error: ' + error.response.data);
        }
    };

    useEffect(() => {
        const handlePaymentCallback = async () => {
            if (isReady) {
                // Thanh toán thành công, điều hướng đến trang chi tiết khóa học
                //navigate(`/detailCourse/${id}`);
                try {
                    // After successful payment, enroll into the course
                    const enrollResponse = await axios.post(`http://20.2.73.15:8173/api/Course/enroll/${accountId}/${id}`);
                    console.log('Enrollment response:', enrollResponse.data);
                    await axios.post(`http://20.2.73.15:8173/api/Course/increase-student-number/${id}`);

                } catch (error) {
                    console.error('Error enrolling in course:', error.response.data);
                    setResult('Error enrolling in course.');
                }
            } else {
                // Thanh toán thất bại, có thể hiển thị một thông báo lỗi hoặc điều hướng đến trang lỗi
                console.error('Payment failed');
            }
        };
        handlePaymentCallback();
        // if (isReady) {
        //     handlePaymentCallback();
        // }

    }, [isReady]);

    return (
        <button className="h-1/2 bg-black text-white" onClick={payCourse}>
            Buy
        </button>
    );
};

export default PayCourse;
