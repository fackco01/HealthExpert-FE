import React from "react";
import Header from "../../components/Header";
import ZumbaBackground from "../../img/ZumbaBackground.jpg";
import ZumbaDes1 from "../../img/zumbaDes.jpg";
import { Carousel } from "antd";
import Yoga1 from "../../img/yoga1.jpg";
import Yoga2 from "../../img/yoga2.jpg";
import Yoga3 from "../../img/yoga3.jpg";
import Yoga4 from "../../img/yoga4.jpg";

export default function ZumbaDes() {
  const contentStyle = {
    height: "160px",
    color: "#fff",
    lineHeight: "160px",
    textAlign: "center",
    background: "#364d79",
  };
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
          {/* left contend */}
          <div className="w-[70%] mt-10 flex flex-col">
            {/* introduce */}
            <div className="ml-[30%]">
              <div className="">
                <h2 className="text-orange-400 text-3xl">
                  ZUMBA DANCE FITNESS
                </h2>
                <p className="w-[90%] text-sm	 mt-3">
                  Zumba Dance Fitness là bộ môn do vũ công tài năng Alberto
                  ‘Beto’ Pérez người Colombia sáng tạo ra từ những năm 1990. Bộ
                  môn có nguồn gốc từ Nam Mỹ, nơi ra đời của những điệu nhảy nổi
                  tiếng thế giới. Với những động tác khiêu vũ kết hợp các động
                  tác thể dục đơn giản, dễ thuộc, dễ học trên nền giai điệu nhạc
                  Latinh sôi động, khiến Zumba trở thành bộ môn rất được ưa
                  chuộng. Vậy tham gia lớp nhảy Zumba Dance Fitness sẽ đem lại
                  cho bạn lợi ích gì? Hãy cùng HD Fitness Đà Nẵng tìm hiểu nhé!
                </p>
              </div>
              {/* đặc điểm khóa học  */}
              <div className="mt-5">
                <h2 className="text-black text-xl font-bold">
                  ĐẶC ĐIỂM LỚP ZUMBA DANCE FITNESS
                </h2>
                <p className="py-5 text-sm	">
                  Sau mỗi buổi học <span className="font-bold">Basic Yoga</span>{" "}
                  tại HDFitness, bạn có gì?
                  <div className="ml-5 text-sm	 mt-2">
                    <li>Thời lượng chỉ cần 60 phút/ buổi học</li>
                    <li>
                      Lượng Calories tiêu hao sau mỗi buổi học là từ 400 – 500
                    </li>
                    <li>Trình độ: Cơ bản – Nâng cao</li>
                    <li>
                      Lớp học có mặt trên tất cả 04 cơ sở phòng tập HD Fitness
                      tại Đà Nẵng
                    </li>
                  </div>
                </p>
              </div>
              {/* lớp học basiu yoga */}
              <div className="mt-5">
                <h2 className="text-black text-xl font-bold">
                  LỚP HỌC BASIC YOGA
                </h2>
                <p className="py-5 text-sm	">
                  Lớp học Basic Yoga là lớp học đầu tiên dành cho học viên bước
                  đầu tập luyện Yoga. Tại đây, bạn được dạy về những thứ căn bản
                  nhất mà người học Yoga cần phải biết. Bạn sẽ học về cách thở,
                  cách khởi động, cách thư giãn và những động tác đơn giãn.
                  Những buổi học Yoga Basic đem lại cho bạn những lợi ích thiết
                  thực như:
                  <div className="ml-5 text-sm	 mt-2">
                    <li>Đem lại sự tươi mới cho cơ thể</li>
                    <li>Giải tỏa mọi căng thẳng trong cuộc sống</li>
                    <li>Giúp bạn có một cơ thể dẻo dai</li>
                    <li>Hỗ trợ rèn luyện tư thế của bạn</li>
                    <li>Giúp tinh thần sảng khoái</li>
                    <li>
                      Học hỏi và giao lưu với nhiều hội viên tại phòng tập
                    </li>
                  </div>
                </p>
              </div>
              {/* Đem tới gì cho bạn  */}
              <div className="mt-5">
                <h2 className="text-black text-xl font-bold">
                  HELPEXPERT MANG GÌ ĐẾN CHO BẠN?
                </h2>
                <p className="py-5 text-sm	">
                  Tập luyện Basic Yoga tại HDF, bạn được tập luyện tại những lớp
                  học thoải mái với người dạy vui tính, nhiệt tình và giàu kinh
                  nghiệm. Hệ thống bài giảng thiết kế bài bản, toàn diện cho bạn
                  những buổi Basic Yoga chất lượng nhất. Bên cạnh đó, bạn được
                  tham gia những buổi giao lưu, học hỏi với những học viên đáng
                  yêu của trung tâm.
                </p>
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
          {/* right contend  */}
          <div className="w-[20%] flex flex-col h-[620px] ml-[70px] shadow-black absolute	fixed right-[100px] top-[300px]	shadow-2xl">
            <div className="w-full">
              <img className="w-full" src={ZumbaDes1} alt="" />
              <div className="py-4 px-2 text-sm flex flex-col w-[70%] mx-auto">
                <p className=" text-sm	">
                  Hiện nay HDF đang tổ chức rất nhiều lớp Basic Yoga tại các cơ
                  sở tại Đà Nẵng. Với nhiều khung giờ khác nhau, giúp bạn linh
                  hoạt trong việc tập luyện của mình.
                </p>
                <p className="py-4 text-sm ">
                  Còn đợi gì nữa, mà không đến trải nghiệm ngay tại HD Fitness
                  Đà Nẵng! Lựa chọn phòng tập gần bạn và liên hệ đặt lịch ngay
                  với chúng tôi.
                </p>
              </div>
              {/* 2btn */}
              <div className="flex flex-col h-[25%] w-[70%] mx-auto py-4 ">
                <button className="h-1/2 bg-black text-white ">
                  999.000 VND
                </button>
                <button className="h-1/2 bg-orange-400 text-white ">
                  THÊM VÀO GIỎ HÀNG
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
