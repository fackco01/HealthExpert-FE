import React, { useState } from "react";
import { Button, Modal } from "antd";
import axios from "axios";

const ModalDeleteCourse = ({ courseId, onDelete, isModalOpen, setIsModalOpen }) => {
  const handleOk = async () => {
    try {
      await axios.delete(`http://20.2.73.15:8173/api/Course/${courseId}`);
      onDelete(courseId);
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
        title="Confirm Delete"
        visible={isModalOpen}
        onOk={handleOk}
        onCancel={() => setIsModalOpen(false)}
      >
        <p>Are you sure you want to delete this course?</p>
      </Modal>
    </>
  );
};


export default ModalDeleteCourse;
