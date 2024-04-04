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

export default function DetailCourse() {
  const [course, setCourse] = useState({});
  const { id = "" } = useParams();
  //const formattedDate = formatDate(course.dateUpdate);

  const api = "http://20.2.73.15:8173/api/Course/:id"
  useEffect(() => {
    const fetchCourse = async () => {
      try {
        const response = await axios.get(api.replace(":id", id)
        );
        //console.log(response.data);
        setCourse(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchCourse();
  }, [id]);

  const contentStyle = {
    height: "160px",
    color: "#fff",
    lineHeight: "160px",
    textAlign: "center",
    background: "#364d79",
  };

  function formatDate(dateString) {
    // Tạo một đối tượng Date từ chuỗi ngày
    const date = new Date(dateString);

    // Lấy ngày, tháng và năm từ đối tượng Date
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();

    // Định dạng lại ngày và tháng để có hai chữ số, nếu cần
    const formattedDay = day < 10 ? '0' + day : day;
    const formattedMonth = month < 10 ? '0' + month : month;

    // Trả về ngày đã định dạng (vd: dd/mm/yyyy)
    return `${formattedDay}/${formattedMonth}/${year}`;
  }

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
              {/* đặc điểm khóa học  */}
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
                    <li>Chỉ số phù hợp:
                      {course.bmiMin} - {course.bmiMax}
                    </li>
                    <li>Ngày tạo: {formatDate(course.dateUpdate)}</li>
                    <li>Ngôn ngữ: {course.language}</li>
                  </div>
                </p>
              </div>
              {/* Đem tới gì cho bạn  */}
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
          {/* right content  */}
          <div className="w-[20%] flex flex-col h-[620px] ml-[70px] shadow-black absolute fixed right-[100px] top-[300px] shadow-2xl">
            <div className="w-full">
              <img className="w-full" src={ZumbaDes1} alt="" />
              <div className="py-4 px-2 text-sm flex flex-col w-[70%] mx-auto">
                <p className="text-sm">{course.description}</p>
                <p className="py-4 text-sm">RATING: {course.rating}</p>
              </div>
              {/* 2btn */}
              <div className="flex flex-col h-[25%] w-[70%] mx-auto py-4">
                <button className="h-1/2 bg-black text-white">
                  {course.price}
                </button>
                <button className="h-1/2 bg-orange-400 text-white">
                  Thêm vào giỏ hàng
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}