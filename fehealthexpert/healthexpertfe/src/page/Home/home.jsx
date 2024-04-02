import React from "react";
import { GithubOutlined, LogoutOutlined } from "@ant-design/icons";
import { Helmet } from "react-helmet";
import { Button } from "antd";
import { Carousel } from "antd";
import carousel1 from "../../img/carousel_1.png";
import carousel2 from "../../img/carousel_2.png";
import carousel3 from "../../img/carousel_3.png";
import carousel4 from "../../img/carousel_4.png";
import before1 from "../../img/before_1.jpg";
import before2 from "../../img/before_2.jpg";
import before3 from "../../img/before_3.jpg";
import before4 from "../../img/before_4.jpg";
import feedback from "../../img/feedback.jpg";
import feedback2 from "../../img/feedback2.jpg";
import feedback3 from "../../img/feedback3.jpg";
import feedback4 from "../../img/feedback4.jpg";
import Header from "../../components/Header";
import avt1 from "../../img/avt1.jpg";
import avt2 from "../../img/avt2.jpg";
import avt3 from "../../img/avt3.jpg";
import avt4 from "../../img/avt4.jpg";
import center1 from "../../img/center1.jpg";
import center2 from "../../img/center2.jpg";
import center3 from "../../img/center3.jpg";
import background from "../../img/backgroundImage.jpg";
import blog1 from "../../img/blog1.jpg";
import blog2 from "../../img/blog2.jpg";
import blog3 from "../../img/blog3.jpg";
import logo from "../../img/logo.png";
// import { useDispatch } from "react-redux";

export default function Home() {
  // const dispatch = useDispatch();
  const onChange = (currentSlide) => {
    console.log(currentSlide);
  };

  return (
    <>
      <div className="home-page">
        <Header />
      </div>
      {/* carousel */}
      <div className="h-screen ">
        <Carousel autoplay className="h-[80%] w-full ">
          <img src={carousel1} alt="" />

          <img src={carousel2} alt="" />

          <img src={carousel3} alt="" />

          <img src={carousel4} alt="" />
        </Carousel>
      </div>

      {/* introduce */}
      <section>
        {/* left intro */}
        <div className="h-full flex items-center justify-center mt-40">
          <div className="w-1/2">
            <img className="w-3/4 h-full mx-auto" src={carousel4} alt="" />
          </div>

          {/* right introduce  */}
          <div className="w-1/2 flex">
            <div className="flex-col">
              <h1 className="text-yellow-600 text-3xl	">Healthexpert</h1>
              <p className="mt-3">
                Nơi kết nối giữa người mong muốn cải thiện chất lượng cơ thể và
                trung tâm gym. Chúng tôi tự hào là cầu nối đưa bạn đến với cộng
                đồng các trung tâm gym hàng đầu, giúp bạn dễ dàng khám phá và
                lựa chọn nơi tập luyện phù hợp với nhu cầu của mình.
              </p>
              <a href="#">
                <button className="bg-blue-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded opacity-100 hover:opacity-80 transition-opacity mt-3 ">
                  Xem thêm
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* services
       */}
      <section>
        <div className="flex-col mt-5 bg-black">
          {/* content */}
          <div className="flex-col text-center mb-5">
            <h2 className="text-orange-600 text-2xl mt-3">
              CÁC DỊCH VỤ TẠI HEALEXPERT
            </h2>
            <p className="text-xl text-white mb-2">
              Tập luyện tai HD Fitness Center sẽ giúp bạn đạt được mục tiêu về
              sức khoẻ và hình thể
            </p>
          </div>
          {/* các service */}
          <div className="flex justify-center px-20">
            {/* item 1 */}
            <div className="relative group mr-10">
              <a href="/yoga-page">
                <div className="mx-auto relative">
                  <img
                    src={carousel1}
                    alt=""
                    className="h-64 w-64 object-cover group-hover:opacity-80 filter group-hover:filter-brightness-75 transition-opacity transition-filter"
                  />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <h3 className="text-white text-center text-2xl">YOGA</h3>
                  </div>
                </div>
              </a>
            </div>

            {/* item 2 */}
            <div className="relative group mr-10">
              <a href="/gym-page">
                <div className="mx-auto relative">
                  <img
                    src={carousel2}
                    alt=""
                    className="h-64 w-64 object-cover group-hover:opacity-80 filter group-hover:filter-brightness-75 transition-opacity transition-filter"
                  />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <h3 className="text-white text-center text-2xl">GYM</h3>
                  </div>
                </div>
              </a>
            </div>

            {/* item 3 */}
            <div className="relative group mr-10">
              <a href="/boxing-page">
                <div className="mx-auto relative">
                  <img
                    src={carousel3}
                    alt=""
                    className="h-64 w-64 object-cover group-hover:opacity-80 filter group-hover:filter-brightness-75 transition-opacity transition-filter"
                  />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <h3 className="text-white text-center text-2xl">BOXING</h3>
                  </div>
                </div>
              </a>
            </div>

            {/* item 4 */}
            <div className="relative group">
              <a href="/dance-page">
                <div className="mx-auto relative">
                  <img
                    src={carousel4}
                    alt=""
                    className="h-64 w-64 object-cover group-hover:opacity-80 filter group-hover:filter-brightness-75 transition-opacity transition-filter"
                  />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <h3 className="text-white text-center text-2xl">DANCE</h3>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* tranformation */}
      <section>
        {/* tranformation_content */}
        <div className="flex-col text-center">
          <h3 className=" text-[30px] mt-3">HỘI VIÊN TRANSFORMATION</h3>
          <p className="text-[20px]">
            Với các trung tâm gym uy tín hàng đầu, Healexpert chắc chắn sẽ giúp
            bạn đạt mục tiêu sức khoẻ hiệu quả nhất
          </p>
        </div>
        <div className="flex  justify-center mb-[100px ] mb-5 w-full align-middle bg-orange-400 ">
          <div className="w-[100%]">
            <Carousel className="W-[100%]">
              <div className="w-full">
                <div className="flex justify-between">
                  <img className="  w-[20%]" src={before1} alt="" />
                  <img className="  w-[20%]" src={before2} alt="" />
                  <img className="  w-[20%]" src={before2} alt="" />
                  <img className="  w-[20%]" src={before2} alt="" />
                </div>
              </div>
              <div className="w-full">
                <div className="flex justify-between">
                  <img className=" w-[20%]" src={before1} alt="" />
                  <img className="  w-[20%]" src={before2} alt="" />
                  <img className="  w-[20%]" src={before2} alt="" />
                  <img className="  w-[20%]" src={before2} alt="" />
                </div>
              </div>
              <div className="w-full">
                <div className="flex justify-between">
                  <img className=" w-[20%]" src={before1} alt="" />
                  <img className="  w-[20%]" src={before2} alt="" />
                  <img className="  w-[20%]" src={before2} alt="" />
                  <img className="  w-[20%]" src={before2} alt="" />
                </div>
              </div>
              <div className="w-full">
                <div className="flex justify-between">
                  <img className=" w-[20%]" src={before1} alt="" />
                  <img className="  w-[20%]" src={before2} alt="" />
                  <img className="  w-[20%]" src={before2} alt="" />
                  <img className="  w-[20%]" src={before2} alt="" />
                </div>
              </div>
            </Carousel>
          </div>
        </div>
        <div className=" mt-4 text-center">
          <button className="bg-blue-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded opacity-100 hover:opacity-80 transition-opacity ">
            Xem thêm
          </button>
        </div>
      </section>
      <section
        style={{
          backgroundImage: `url(${background})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="mt-5">
          <h2 className="text-orange-600 text-[30px] justify-center text-center mt-3">
            HỌC VIÊN CẢM NHẬN GÌ?
          </h2>
          <p className="text-center">
            Hãy cùng xem cảm nhận của hội viên đã trải nghiệm tại phòng tập HD
            Đà Nẵng, có gì thú vị nhé?
          </p>
        </div>
        {/* left intro */}
        <div className="h-full flex items-center justify-center mt-5">
          <div className="w-1/2">
            <div className="w-full  ">
              <Carousel
                className="item-center w-[600px] h-[400px] mx-auto"
                autoplay
              >
                <div>
                  <img className="w-[600px] h-[400px]" src={feedback} alt="" />
                </div>
                <div>
                  <img className="w-[600px] h-[400px]" src={feedback2} alt="" />
                </div>
                <div>
                  <img className="w-[600px] h-[400px]" src={feedback3} alt="" />
                </div>
                <div>
                  <img className="w-[600px] h-[400px]" src={feedback4} alt="" />
                </div>
              </Carousel>
            </div>
          </div>

          {/* right introduce  */}
          <div className="w-1/2 ">
            {/* //this is feedback */}

            <Carousel
              className="item-center w-[700px] h-[400px] mx-auto"
              autoplay
            >
              <div className=" w-[90%] mb-40 flex-col border border-gray-300 p-4 bg-orange-400	">
                <p>
                  Mình đã gắn bó với HD từ năm đầu tiên của HD, là một thành
                  viên “kì cựu” mình thật sự rất vui khi nhìn thấy sự đổi thay
                  ngày càng tích cực của HD, các PT thường xuyên được huấn luyện
                  nâng cao trình độ
                </p>
                <div className="flex ">
                  <img
                    className="w-10 h-10 rounded-full mr-4 mt-3"
                    src={avt1}
                    alt=""
                  />
                  <p className="mt-4">Trần Nhật Hoàng</p>
                </div>
              </div>
              <div className=" w-[90%] mb-40 flex-col border border-gray-300 p-4 bg-orange-400	">
                <p>
                  Mình đã gắn bó với HD từ năm đầu tiên của HD, là một thành
                  viên “kì cựu” mình thật sự rất vui khi nhìn thấy sự đổi thay
                  ngày càng tích cực của HD, các PT thường xuyên được huấn luyện
                  nâng cao trình độ
                </p>
                <div className="flex ">
                  <img
                    className="w-10 h-10 rounded-full mr-4 mt-3"
                    src={avt2}
                    alt=""
                  />
                  <p className="mt-4">Nguyễn Phát</p>
                </div>
              </div>
              <div className=" w-[90%] mb-40 flex-col border border-gray-300 p-4 bg-orange-400	">
                <p>
                  Mình đã gắn bó với HD từ năm đầu tiên của HD, là một thành
                  viên “kì cựu” mình thật sự rất vui khi nhìn thấy sự đổi thay
                  ngày càng tích cực của HD, các PT thường xuyên được huấn luyện
                  nâng cao trình độ
                </p>
                <div className="flex ">
                  <img
                    className="w-10 h-10 rounded-full mr-4 mt-3"
                    src={avt3}
                    alt=""
                  />
                  <p className="mt-4">Ngô Thị Kim Bông</p>
                </div>
              </div>
              <div className=" w-[90%] mb-40 flex-col border border-gray-300 p-4 bg-orange-400	">
                <p>
                  Mình đã gắn bó với HD từ năm đầu tiên của HD, là một thành
                  viên “kì cựu” mình thật sự rất vui khi nhìn thấy sự đổi thay
                  ngày càng tích cực của HD, các PT thường xuyên được huấn luyện
                  nâng cao trình độ
                </p>
                <div className="flex ">
                  <img
                    className="w-10 h-10 rounded-full mr-4 mt-3"
                    src={avt4}
                    alt=""
                  />
                  <p className="mt-4">Trương Thị Khánh Hòa</p>
                </div>
              </div>
            </Carousel>
          </div>
        </div>
      </section>
      <section>
        <div className="flex-col text-center mt-3">
          <h2 className="text-orange-600 text-[30px] ">
            HỆ THỐNG PHÒNG TẬP ĐẲNG CẤP
          </h2>
          <div className="mx-auto w-[50%]">
            <p>
              Nơi tập trung những trung tâm gym hàng đầu, với đa dạng không gian
              tập luyện bao gồm phòng yoga, dance và nhiều hoạt động khác, giúp
              bạn tìm thấy sự hoàn hảo cho mọi nhu cầu về sức khỏe và thể chất
            </p>
          </div>
        </div>
        {/* hệ thống các center */}
        <div className="flex bg-orange-400 w-full ">
          <img className="w-[25%]" src={center1} alt="" />
          <img className="w-[25%]" src={center2} alt="" />
          <img className="w-[25%]" src={center3} alt="" />
          <img className="w-[25%]" src={center2} alt="" />
        </div>
        <a className="flex  justify-center" href="#page">
          <button className="bg-blue-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded opacity-100 hover:opacity-80 transition-opacity mt-3">
            XEM THÊM TRUNG TÂM
          </button>
        </a>
      </section>
      {/* BLOG  */}
      <section className="">
        <h2 className="text-orange-400 mt-5 text-center text-[30px] ">BLOG</h2>
        {/* các blog */}

        <div
          className="flex justify-center items-center h-screen px-10"
          style={{
            background:
              "linear-gradient(to bottom, rgba(0, 0, 0, 0.2) 20%, rgba(0, 0, 0, 0.8) 80%)",
          }}
        >
          {/* item 1 */}
          <div className="mx-auto mr-4 h-[600px] bg-gradient-to-b from-white to-orange-500 p-8 rounded-lg transition-all duration-300 ease-in-out hover:opacity-80 hover:from-white hover:to-orange-500">
            <a href="">
              <img className="w-[350px] h-[300px]" src={blog1} alt="" />
              <h3 className="text-[18px] w-[70%] mt-4 mx-3 mb-3">
                Ăn bánh Chưng bánh tét sao cho không tăng cân ngày tết
              </h3>
            </a>
            <p className="text-[14px] w-[70%] mx-3 mb-3">
              Tết cổ truyền đến rồi, bạn có nghe mùi bánh Chưng bánh Tét khắp
              mọi nơi. Vào dịp này, không
            </p>
            <a className="text-orange-600 text-[18px] mx-3" href="">
              Xem thêm
            </a>
          </div>

          {/* item 2 */}
          <div className="mx-auto mr-4 h-[600px] bg-gradient-to-b from-white to-orange-500 p-8 rounded-lg transition-all duration-300 ease-in-out hover:opacity-80 hover:from-white hover:to-orange-500">
            <a href="">
              <img className="w-[350px] h-[300px]" src={blog1} alt="" />
              <h3 className="text-[18px] w-[70%] mt-4 mx-3 mb-3">
                Ăn bánh Chưng bánh tét sao cho không tăng cân ngày tết
              </h3>
            </a>
            <p className="text-[14px] w-[70%] mx-3 mb-3">
              Tết cổ truyền đến rồi, bạn có nghe mùi bánh Chưng bánh Tét khắp
              mọi nơi. Vào dịp này, không
            </p>
            <a className="text-orange-600 text-[18px] mx-3" href="">
              Xem thêm bài viết
            </a>
          </div>

          {/* item 3 */}
          <div className="mx-auto h-[600px] bg-gradient-to-b from-white to-orange-500 p-8 rounded-lg transition-all duration-300 ease-in-out hover:opacity-80 hover:from-white hover:to-orange-500">
            <a href="">
              <img className="w-[350px] h-[300px]" src={blog1} alt="" />
              <h3 className="text-[18px] w-[70%] mt-4 mx-3 mb-3">
                Ăn bánh Chưng bánh tét sao cho không tăng cân ngày tết
              </h3>
            </a>
            <p className="text-[14px] w-[70%] mx-3 mb-3">
              Tết cổ truyền đến rồi, bạn có nghe mùi bánh Chưng bánh Tét khắp
              mọi nơi. Vào dịp này, không
            </p>
            <a className="text-orange-600 text-[18px] mx-3" href="">
              Xem thêm
            </a>
          </div>
        </div>
        <a className="flex  justify-center" href="#page">
          <button className="bg-blue-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded opacity-100 hover:opacity-80 transition-opacity mt-3">
            XEM THÊM TRUNG TÂM
          </button>
        </a>
      </section>
    </>
  );
}
