import React, { useState } from "react";
import { Button, Modal } from "antd";
import axios from "axios";

const ModalDeleteSession = ({ sessionId, onDelete, isModalOpen, setIsModalOpen }) => {
    const handleOk = async () => {
        try {
            await axios.delete(`http://20.2.73.15:8173/api/Session/DeleteSession/${sessionId}`);
            onDelete(sessionId);
            window.location.reload();
        } catch (error) {
            console.error("Error deleting course: ", error);
        } finally {
            setIsModalOpen(false);
        }
    };

    return (
        <>
            <Modal
                title="Xóa buổi học"
                visible={isModalOpen}
                onOk={handleOk}
                onCancel={() => setIsModalOpen(false)}
            >
                <p>Bạn có chắc sẽ xóa buổi học này?</p>
            </Modal>
        </>
    );
};


export default ModalDeleteSession;
