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
import { Link } from "react-router-dom";
export default function DetailCourse() {
  const [course, setCourse] = useState({});
  const { id = "" } = useParams();
  const [accountId, setAccountId] = useState(null);
  //const formattedDate = formatDate(course.dateUpdate);

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



  return (
    <>
      <div className="home-page">
        <Header />
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
                  <Link className="mt-3 ml-5"
                    to={`/learningCourse/${course.courseId}`}>
                    <h3 className=" bg-orange-400 text-white">Tham gia khoa hoc</h3>
                  </Link>
                ) : (
                  // If not paid, show price and PayCourse button
                  <>
                    <div>Price: {course.price}</div>

                    <button className="h-1/2 bg-orange-400 text-white">
                      Thêm vào giỏ hàng
                    </button>
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
