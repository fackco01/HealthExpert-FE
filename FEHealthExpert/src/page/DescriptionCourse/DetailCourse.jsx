import React, { useEffect, useState } from "react";
import axios from "axios";
import Header from "../../components/Header";
import ZumbaBackground from "../../img/ZumbaBackground.jpg";
import ZumbaDes1 from "../../img/zumbaDes.jpg";
import { Carousel } from "antd";
import Yoga1 from "../../img/yoga1.jpg";
import Yoga2 from "../../img/yoga2.jpg";
import Yoga3 from "../../img/yoga3.jpg";
import Yoga4 from "../../img/yoga4.jpg";
import { useParams } from "react-router-dom";
import PayCourse from "../User/PayCourse";
import { Form, Input } from "antd";
import { Link } from "react-router-dom";
import { Footer } from "antd/es/layout/layout";
import { Button, message, Popconfirm, Modal } from "antd";

export default function DetailCourse() {
  const [course, setCourse] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [accountId, setAccountId] = useState(null);
  const [feedbackConfig, setFeedbackConfig] = useState({});
  //feedback
  const [feedback, setFeedback] = useState([]);

  const user = localStorage.getItem("user");
  const { id = "" } = useParams();
  const { TextArea } = Input;
  const [updateForm] = Form.useForm();

  const confirm = () => {
    axios
      .delete(
        `http://20.2.73.15:8173/api/feedback/${accountId}/${course.courseId}`,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then()
      .catch(() => {
        console.log("Error");
      });
  };
  const cancel = (e) => {
    console.log(e);
    message.error("Đã hủy xóa bài đánh giá");
  };

  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = async (values) => {
    await axios
      .put(
        "http://20.2.73.15:8173/api/feedback",
        {
          accountId: accountId,
          courseId: course.courseId,
          detail: values.TextArea,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then()
      .catch(() => {
        console.log("Error");
      });
    setIsModalOpen(false);

    fetch("http://20.2.73.15:8173/api/feedback")
      .then((response) => response.json())
      .then((data) => setFeedback(data));
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const onFinish = (values) => {
    axios
      .post(
        "http://20.2.73.15:8173/api/feedback",
        {
          accountId: accountId,
          courseId: course.courseId,
          detail: values.TextArea,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then()
      .catch(() => {
        console.log("Error");
      });
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  useEffect(() => {
    updateForm.setFieldValue("TextArea", feedbackConfig.detail);
  }, [feedbackConfig]);

  console.log("accountId", accountId);
  //const formattedDate = formatDate(course.dateUpdate);

  console.log(feedback);
  useEffect(() => {
    fetch("http://20.2.73.15:8173/api/feedback")
      .then((response) => response.json())
      .then((data) => setFeedback(data));
  }, []);

  const api = "http://20.2.73.15:8173/api/Course/:id";
  useEffect(() => {
    const fetchCourse = async () => {
      try {
        const response = await axios.get(api.replace(":id", id));
        setCourse(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchCourse();
  }, [id]);

  useEffect(() => {
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
  });

  function formatDate(dateString) {
    // Tạo một đối tượng Date từ chuỗi ngày
    const date = new Date(dateString);

    // Lấy ngày, tháng và năm từ đối tượng Date
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();

    // Định dạng lại ngày và tháng để có hai chữ số, nếu cần
    const formattedDay = day < 10 ? "0" + day : day;
    const formattedMonth = month < 10 ? "0" + month : month;

    // Trả về ngày đã định dạng (vd: dd/mm/yyyy)
    return `${formattedDay}/${formattedMonth}/${year}`;
  }

  const [paid, setPaid] = useState(false);
  const [orderAcc, setOrderAcc] = useState();
  const [billId, setBillId] = useState();
  useEffect(() => {
    const fetchOrder = async () => {
      try {
        const orderRes = await axios.get(`http://20.2.73.15:8173/api/order/getorders`);
        const matchingOrder = orderRes.data.find(order =>
          order.accountId === accountId && order.courseId === id
        );

        if (matchingOrder) {
          const billRes = await axios.get(`http://20.2.73.15:8173/api/Bill/getbills`);
          const matchingBill = billRes.data.find(item =>
            item.accountId === matchingOrder.accountId && item.orderId === matchingOrder.orderId
          );

          if (matchingBill) {
            setPaid(true);
          } else {
            setPaid(false);
          }
        } else {
          setPaid(false);
        }
      } catch (error) {
        console.error("Error fetching order/bill:", error);
      }
    };

    fetchOrder();
  }, [accountId, id]);

  console.log(feedback);

  return (
    <>
      <div className="home-page">
        <Header />
      </div>
      <div className="ml-[395px]">
        <Modal
          title="Người dùng"
          open={isModalOpen}
          // onOk={handleOk}
          footer={null}
          okButtonProps={{
            style: { backgroundColor: "blue" },
          }}
          onCancel={handleCancel}
        >
          <Form
            form={updateForm}
            onFinish={handleOk}
            onFinishFailed={onFinishFailed}
            layout="vertical"
            class="mb-4"
          >
            <Form.Item
              label="Feedback"
              name="TextArea"
              rules={[
                {
                  required: true,
                  message: "Vui lòng nhập đánh giá của bạn",
                },
              ]}
            >
              <Input.TextArea rows={5} />
            </Form.Item>
            <div className="flex space-x-4 justify-end ">
              <button
                onClick={handleCancel}
                className="rounded w-[70px] text-sm border-2 font-bold border-red-600 bg-white py-2 mt-3 text-lg text-red-500 focus:outline-none"
              >
                CANCEL
              </button>
              <button
                type="primary"
                htmlType="submit"
                className="rounded w-[70px] text-sm border-2 border-blue-700  py-2 mt-3 text-lg text-blue-500 font-bold  focus:outline-none"
              >
                Update
              </button>
            </div>
          </Form>
        </Modal>
      </div>
      <div className="relative">
        <div>
          <img className="w-full h-[350px]" src={ZumbaBackground} alt="" />
        </div>
        <div className="flex">
          {/* left content */}
          <div className="w-[70%] mt-10 flex flex-col">
            {/* introduce */}
            <div className="ml-[30%]">
              <div className="">
                <h2 className="text-orange-400 text-3xl">
                  {course.courseName}
                </h2>
              </div>
              {/* đặc điểm khóa học */}
              <div className="mt-5">
                <h2 className="text-black text-xl font-bold">
                  Miêu tả khóa học
                </h2>
                <p className="w-[90%] text-sm mt-3">{course.description}</p>
                <hr />
                <p className="py-5 text-sm">
                  Chi tiết khóa học
                  <div className="ml-5 text-sm mt-2">
                    <li>Người tạo: {course.createBy}</li>
                    <li>
                      Chỉ số phù hợp: {course.bmiMin} - {course.bmiMax}
                    </li>
                    <li>Ngày tạo: {formatDate(course.dateUpdate)}</li>
                    <li>Ngôn ngữ: {course.language}</li>
                  </div>
                </p>
              </div>
              {/* Đem tới gì cho bạn */}
              <div className="mt-5">
                <h2 className="text-black text-xl font-bold">
                  KHÓA HỌC CÓ NHỮNG CHỨNG CHỈ NÀO
                </h2>
                <p className="py-5 text-sm">{course.certificate}</p>
              </div>
              <Carousel autoplay>
                <div>
                  <img className="w-full h-[450px]" src={Yoga1} alt="" />
                </div>
                <div>
                  <img className="w-full h-[450px]" src={Yoga2} alt="" />
                </div>
                <div>
                  <img className="w-full h-[450px]" src={Yoga3} alt="" />
                </div>
                <div>
                  <img className="w-full h-[450px]" src={Yoga4} alt="" />
                </div>
              </Carousel>
              <div className="mt-5">
                <div class="max-w-[700px] mx-auto mt-16 flex w-full flex-col border rounded-lg bg-white p-8">
                  <h2 class="title-font mb-1 text-lg font-medium text-gray-900">
                    Xin chào {feedback.accountId}
                  </h2>
                  <p class="mb-5 leading-relaxed text-gray-600">
                    Hãy chia sẽ feedback của bạn cho chúng tôi để chúng tôi có
                    thể cải thiện hơn!
                  </p>

                  <Form
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    layout="vertical"
                    class="mb-4"
                  >
                    <Form.Item
                      label="Feedback"
                      name="TextArea"
                      rules={[
                        {
                          required: true,
                          message: "Vui lòng nhập đánh giá của bạn",
                        },
                      ]}
                    >
                      <Input.TextArea rows={5} />
                    </Form.Item>

                    <button
                      type="primary"
                      htmlType="submit"
                      className="rounded w-[615px] border-0 bg-indigo-500 py-2 mt-3 text-lg text-white hover:bg-indigo-600 focus:outline-none"
                    >
                      Send
                    </button>
                  </Form>
                </div>
                <div className="max-w-[700px]  mx-auto mt-16 flex w-full flex-col border rounded-lg bg-white p-8 mb-10">
                  <h2 className=" mb-1 text-lg font-medium text-black">
                    ĐÁNH GIÁ SẢN PHẨM
                  </h2>
                  {/* ---bài đánh GIÁ */}
                  <div className="mt-5">
                    {/* nguoi dung 1 */}

                    <p className=" leading-relaxed text-black">
                      {feedback.courseId}
                    </p>
                    <div className="mt-2">
                      <p className=" leading-relaxed text-black">{user}</p>
                      {/* contend */}
                      <div className="mt-2 rounded-lg bg-gray-100">
                        <p className="leading-relaxed text-sm max-w-xl px-2  py-2 text-gray-600">
                          {
                            feedback?.find(
                              (item) => item.accountId === accountId
                            )?.detail
                          }
                        </p>
                      </div>
                    </div>
                    <div className="flex space-x-4 justify-end ">
                      <Popconfirm
                        title="Xóa bài đánh giá"
                        description="Bạn muốn xóa bài đánh giá này ?"
                        onConfirm={confirm}
                        onCancel={cancel}
                        okText="Yes"
                        cancelText="No"
                        okButtonProps={{
                          style: { backgroundColor: "red" },
                        }}
                      >
                        <button className="text-red-500 bg-white rounded-sm border-2 border-red-600 text-[12px] font-bold py-[2px] w-[50px]">
                          Xóa
                        </button>{" "}
                      </Popconfirm>

                      <button
                        type="primary"
                        onClick={() => {
                          showModal();
                          setFeedbackConfig(
                            feedback?.find(
                              (item) => item.accountId === accountId
                            )
                          );
                        }}
                        className="text-blue-600 border-2 border-blue-600 ml-3 font-bold   text-[12px] py-[2px] w-[50px] "
                      >
                        Sửa
                      </button>
                    </div>
                    {/* nguoi dung 2 */}
                  </div>
                  {feedback
                    ?.filter((item) => item.accountId !== accountId)
                    .map((item) => {
                      return (
                        <div className="mt-5">
                          <p className=" leading-relaxed text-black">
                            {item.accountId}
                          </p>
                          {/* contend */}
                          <div className="mt-2 rounded-lg bg-gray-100">
                            <p className="leading-relaxed text-sm max-w-xl px-2 py-2 text-gray-600 w-full">
                              {item.detail}
                            </p>
                          </div>
                        </div>
                      );
                    })}
                </div>
              </div>
            </div>
          </div>
          {/* right content */}
          <div className="w-[20%] flex flex-col h-[620px] ml-[70px] shadow-black absolute fixed right-[100px] top-[300px] shadow-2xl">
            <div className="w-full">
              <img className="w-full" src={ZumbaDes1} alt="" />
              <div className="py-4 px-2 text-sm flex flex-col w-[70%] mx-auto">
                <p className="text-sm">{course.description}</p>
                <p className="py-4 text-sm">RATING: {course.rating}</p>
              </div>
              {/* 2btn */}
              <div className="flex flex-col h-[25%] w-[70%] mx-auto py-4">
                {paid ? (
                  // If paid, show EnrollCourse component
                  <Link
                    className="mt-3 ml-5"
                    to={`/learningCourse/${course.courseId}`}
                  >
                    <h3 className=" bg-orange-400 text-white">
                      Tham gia khoa hoc
                    </h3>
                  </Link>
                ) : (
                  // If not paid, show price and PayCourse button
                  <>
                    <div className="mb-3">Price: {course.price}</div>

                    <PayCourse courseId={id} />
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
