import React, { useState } from "react";
import { Button, Modal } from "antd";

const ModalDelete = ({ onDelete }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleOk = () => {
    setIsModalOpen(false);
    onDelete(); // Gọi hàm onDelete để xóa bài học
  };

  return (
    <>
      <Modal
        title="Basic Modal"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      ></Modal>
    </>
  );
};

export default ModalDelete;
