import React, { useState, useEffect } from "react";
import { Modal } from "antd";
import axios from "axios";

const ModalDeleteCourseManager = ({ accountId, onDelete, isModalOpen, setIsModalOpen }) => {
    const [accountEmail, setAccountEmail] = useState("");

    useEffect(() => {
        const fetchAccountEmail = async () => {
            try {
                const response = await axios.get(`http://20.2.73.15:8173/api/Account/GetAccountById/${accountId}`);
                const accountData = response.data;
                setAccountEmail(accountData.email);
            } catch (error) {
                console.error("Error fetching account data: ", error);
            }
        };

        if (isModalOpen) {
            fetchAccountEmail();
        }
    }, [accountId, isModalOpen]);

    const handleOk = async () => {
        try {
            await axios.delete(`http://20.2.73.15:8173/api/Course/managers/email/${accountEmail}`);
            onDelete(accountId); // Corrected from courseId to postId
            window.location.reload();
        } catch (error) {
            console.error("Error deleting Manager: ", error);
        } finally {
            setIsModalOpen(false);
        }
    };

    return (
        <Modal
            title="Confirm Delete"
            visible={isModalOpen}
            onOk={handleOk}
            onCancel={() => setIsModalOpen(false)}
        >
            <p>Bạn có chắc xóa người quản lý này không?</p>
        </Modal>
    );
};

export default ModalDeleteCourseManager;