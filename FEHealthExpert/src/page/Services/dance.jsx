import React from "react";

import danceackground from "../../img/dancebackground.jpg";
import Header from "../../components/Header";
import dance1 from "../../img/dance1.jpg";
import dance2 from "../../img/dance2.jpg";
import dance3 from "../../img/dance3.jpg";
import dance4 from "../../img/dance4.jpg";
import dance5 from "../../img/dance5.jpg";
import dance6 from "../../img/dance6.jpg";
import dance7 from "../../img/dance7.jpg";
import dance8 from "../../img/dance8.jpg";
import dance9 from "../../img/dance9.jpg";
import { Pagination } from "antd";

export default function yoga() {
  // const dispatch = useDispatch();

  return (
    <>
      <div className="home-page">
        <Header />
      </div>
      {/* background yoga */}
      <div>
        <img className="w-full" src={danceackground} alt="" />
      </div>
      <section>
        {/* contend yoga */}
        <div className="">
          <h2 className=" mt-10 text-center   text-[30px] text-orange-400">
            KHÓA HỌC DANCE TẠI HELPEXPERT <br /> THƯ GIÃN TÂM TRÍ, TINH THẦN VÀ
            CẢI THIỆN SỨC KHỎE
          </h2>
          <p className="text-center mt-3">
            Tập dance là một hình thức tập luyện giúp giảm cân thư giãn hiệu
            quả. Với những bài tập giúp <br /> học viên nâng cao nhân thức và
            tạo ra sự cân bằng giữa tinh thần và thể chất. Tập Dance <br /> mỗi
            ngày giúp bạn trở nên nhẹ nhàng, chữa lành và tích cực hơn. Đến với
            <a href="/home">
              {" "}
              <span className="text-orange-400"> Helpexpert</span>,
            </a>
            <br /> tập luyện và cải thiện thẻ chất và tinh thần của bạn.
          </p>
        </div>
      </section>
      <div className="w-full mt-10">
        <div className="flex justify-center mx-auto w-[70%] ">
          <div className="flex flex-col h-[450px] hover:shadow-md">
            <img className="w-[350px] h-[250px] " src={dance1} alt="" />
            <a href="#" className="mt-3 ml-5">
              <h3 className="text-orange-400 text-[20px] mt-2 ">CARDIO</h3>
            </a>
            <p className="w-[50%] text-[14px] mt-3 ml-5">
              Cardio là từ viết tắt của Cardiovascular là phương pháp tập luyện
              có tác dụng đốt cháy calo nhanh chóng, góp phần tăng nhịp tim, cải
              thiện quá trình trao đổi chất
            </p>
          </div>
          <div className="flex flex-col h-[450px] hover:shadow-md">
            <img className="w-[350px] h-[250px] " src={dance2} alt="" />
            <a href="#" className="mt-3 ml-5">
              <h3 className="text-orange-400 text-[20px] mt-2 ">ZUMBA DANCE</h3>
            </a>
            <p className="w-[50%] text-[14px] mt-3 ml-5">
              Zumba là bộ môn trở thành một trong những lớp Dance Fitness được
              yêu thích nhất, được tạo nên trên nền nhạc Latin, kết hợp từ bốn
              thể loại âm nhạc Latin
            </p>
          </div>
          <div className="flex flex-col h-[450px] hover:shadow-md">
            <img className="w-[350px] h-[250px] " src={dance3} alt="" />
            <a href="#" className="mt-3 ml-5">
              <h3 className="text-orange-400 text-[20px] mt-2 ">AEROBICS</h3>
            </a>
            <p className="w-[50%] text-[14px] mt-3 ml-5">
              Tập Aerobics hay còn gọi là thể dục nhịp điệu, là lớp nhảy trên
              nền nhạc pop, Aerobics là lớp có động tác đơn giản nhất nên người
              tập rất dễ nhớ được nhịp độ của bài tập.
            </p>
          </div>
        </div>
      </div>
      <div className="w-full mt-5">
        <div className="flex justify-center mx-auto w-[70%] ">
          <div className="flex flex-col h-[450px] hover:shadow-md">
            <img className="w-[350px] h-[250px] " src={dance4} alt="" />
            <a href="#" className="mt-3 ml-5">
              <h3 className="text-orange-400 text-[20px] mt-2 ">BELLY DANCE</h3>
            </a>
            <p className="w-[50%] text-[14px] mt-3 ml-5">
              Tập Belly Dance, hay còn được gọi là múa bụng, là một lớp tập với
              các động tác múa được thực hiện trên nền nhạc pop. Đặc điểm nổi
              bật của Belly Dance là các động tác đơn giản nhất
            </p>
          </div>
          <div className="flex flex-col h-[450px] hover:shadow-md">
            <img className="w-[350px] h-[250px] " src={dance5} alt="" />
            <a href="#" className="mt-3 ml-5">
              <h3 className="text-orange-400 text-[20px] mt-2 ">
                MODERN DANCE
              </h3>
            </a>
            <p className="w-[50%] text-[14px] mt-3 ml-5">
              Tập nhảy hiện đại là một lớp tập với các động tác nhảy phức tạp
              thường được biểu diễn trên nền nhạc điện tử. Điều đặc biệt của tập
              nhảy này chính là sự đa dạng và sáng tạo trong các động tác.
            </p>
          </div>
          <div className="flex flex-col h-[450px] hover:shadow-md">
            <img className="w-[350px] h-[250px] " src={dance6} alt="" />
            <a href="#" className="mt-3 ml-5">
              <h3 className="text-orange-400 text-[20px] mt-2 ">
                HIPHOP DANCE
              </h3>
            </a>
            <p className="w-[50%] text-[14px] mt-3 ml-5">
              Tập Hip-hop là một lớp tập với các động tác nhảy phức tạp trên nền
              nhạc hip-hop. Điều đặc biệt là sự đa dạng và sáng tạo trong các
              động tác, mang lại sự thú vị và thách thức cho người tập.
            </p>
          </div>
        </div>
      </div>
      <div className="w-full mt-10">
        <div className="flex justify-center mx-auto w-[70%] ">
          <div className="flex flex-col h-[450px] hover:shadow-md">
            <img className="w-[350px] h-[250px] " src={dance7} alt="" />
            <a href="#" className="mt-3 ml-5">
              <h3 className="text-orange-400 text-[20px] mt-2 ">BASIC YOGA</h3>
            </a>
            <p className="w-[50%] text-[14px] mt-3 ml-5">
              Tập Aerobics hay còn gọi là thể dục nhịp điệu, là lớp nhảy trên
              nền nhạc pop, Aerobics là lớp có động tác đơn giản nhất nên người
              tập rất dễ nhớ được nhịp độ của bài tập.
            </p>
          </div>
          <div className="flex flex-col h-[450px] hover:shadow-md">
            <img className="w-[350px] h-[250px] " src={dance8} alt="" />
            <a href="#" className="mt-3 ml-5">
              <h3 className="text-orange-400 text-[20px] mt-2 ">BASIC YOGA</h3>
            </a>
            <p className="w-[50%] text-[14px] mt-3 ml-5">
              Tập Aerobics hay còn gọi là thể dục nhịp điệu, là lớp nhảy trên
              nền nhạc pop, Aerobics là lớp có động tác đơn giản nhất nên người
              tập rất dễ nhớ được nhịp độ của bài tập.
            </p>
          </div>
          <div className="flex flex-col h-[450px] hover:shadow-md">
            <img className="w-[350px] h-[250px] " src={dance9} alt="" />
            <a href="#" className="mt-3 ml-5">
              <h3 className="text-orange-400 text-[20px] mt-2 ">BASIC YOGA</h3>
            </a>
            <p className="w-[50%] text-[14px] mt-3 ml-5">
              Tập Aerobics hay còn gọi là thể dục nhịp điệu, là lớp nhảy trên
              nền nhạc pop, Aerobics là lớp có động tác đơn giản nhất nên người
              tập rất dễ nhớ được nhịp độ của bài tập.
            </p>
          </div>
        </div>
      </div>
      <div className="mt-3">
        <Pagination className="text-center" defaultCurrent={1} total={50} />
      </div>
    </>
  );
}
