import React from "react";

import yogabackground from "../../img/yogabackground.jpg";
import Header from "../../components/Header";
import yoga1 from "../../img/yoga1.jpg";
import yoga2 from "../../img/yoga2.jpg";
import yoga3 from "../../img/yoga3.jpg";
import yoga4 from "../../img/yoga4.jpg";
import yoga5 from "../../img/yoga5.jpg";
import yoga6 from "../../img/yoga6.jpg";
import yoga7 from "../../img/yoga7.jpg";
import yoga8 from "../../img/yoga8.jpg";
import yoga9 from "../../img/yoga9.jpg";
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
        <img className="w-full" src={yogabackground} alt="" />
      </div>
      <section>
        {/* contend yoga */}
        <div className="">
          <h2 className=" mt-10 text-center font-bold   text-[30px] text-orange-400">
            KHÓA HỌC YOGA TẠI HELPEXPERT <br /> THƯ GIÃN TÂM TRÍ, TINH THẦN VÀ
            CẢI THIỆN SỨC KHỎE
          </h2>
          <p className="text-center mt-3 ">
            Tập Yoga là một hình thức tập luyện giúp giải thư giãn hiệu quả. Với
            những bài tập giúp <br /> học viên nâng cao nhân thức và tạo ra sự
            cân bằng giữa tinh thần và thể chất. Tập Yoga <br /> mỗi ngày giúp
            bạn trở nên nhẹ nhàng, chữa lành và tích cực hơn. Đến với
            <a href="/home">
              {" "}
              <span className="text-orange-400"> Helpexpert</span>,
            </a>
            <br /> tập luyện và cải thiện thẻ chất và tinh thần của bạn.
          </p>
        </div>
        {/* yoga_course_1*/}
        <div className="flex justify-center w-full ">
          <div className="mt-5 flex w-[70%] flex-wrap gap-5">
            {/* basic yoga */}
            <div className="h-[450px] w-[30%] overflow-hidden transition-transform transform-gpu hover:transform-gpu hover:translate-y-[-5px] hover:shadow-md ">
              <a href="#" className="block">
                <img
                  className="w-full bg-cover transition-transform transform-gpu "
                  src={yoga1}
                  alt=""
                />
              </a>
              <div className="flex flex-col m-8 mt-2">
                <h3 className="text-orange-400 my-[6px] text-xl font-bold">
                  <a href="#" className="block">
                    BASIC YOGA
                  </a>
                </h3>
                <p className="mt-3 text-[14px] max-w-[70%]">
                  Đây là lớp học căn bản dành cho những người mới bắt đầu. Các
                  lớp học Basic tạo tiền đề vững chắc để bạn theo đuổi những lớp
                  học chuyên sâu về sau
                </p>
              </div>
            </div>
            {/* flow yoga */}
            <div className="h-[450px] w-[30%] overflow-hidden transition-transform transform-gpu hover:transform-gpu hover:translate-y-[-5px] hover:shadow-md ">
              <a href="#" className="block">
                <img
                  className="w-full bg-cover transition-transform transform-gpu "
                  src={yoga2}
                  alt=""
                />
              </a>
              <div className="flex flex-col m-8 mt-2">
                <h3 className="text-orange-400 my-[6px] text-xl font-bold">
                  <a href="#" className="block">
                    FLOW YOGA
                  </a>
                </h3>
                <p className="mt-3 text-[14px] max-w-[70%]">
                  Hình thức Yoga đòi hỏi sự di chuyển uyển chuyển của các tư thế
                  trong quá trình luyện tập. Flow Yoga là những bài tập hướng
                  nhiều hơn về tinh thần
                </p>
              </div>
            </div>
            {/* stick yoga */}
            <div className="h-[450px] w-[30%] overflow-hidden transition-transform transform-gpu hover:transform-gpu hover:translate-y-[-5px] hover:shadow-md ">
              <a href="#" className="block">
                <img
                  className="w-full bg-cover transition-transform transform-gpu "
                  src={yoga3}
                  alt=""
                />
              </a>
              <div className="flex flex-col m-8 mt-2">
                <h3 className="text-orange-400 my-[6px] text-xl font-bold">
                  <a href="#" className="block">
                    STICK YOGA
                  </a>
                </h3>
                <p className="mt-3 text-[14px] max-w-[70%]">
                  Những bài tập với gậy giúp rèn luyện thể chất. Cơ thể người
                  tập sẽ được kéo giãn. Những bài tập có công dụng hiệu quả
                  trong điều trị và phục hồi tủy sống
                </p>
              </div>
            </div>
            <div className="h-[450px] w-[30%] overflow-hidden transition-transform transform-gpu hover:transform-gpu hover:translate-y-[-5px] hover:shadow-md ">
              <a href="#" className="block">
                <img
                  className="w-full bg-cover transition-transform transform-gpu "
                  src={yoga4}
                  alt=""
                />
              </a>
              <div className="flex flex-col m-8 mt-2">
                <h3 className="text-orange-400 my-[6px] text-xl font-bold">
                  <a href="#" className="block">
                    HATHA YOGA
                  </a>
                </h3>
                <p className="mt-3 text-[14px] max-w-[70%]">
                  Hatha Yoga là những bài tập sử dụng tư thế, kỹ thuật thở và
                  thiền nhằm đem đến cho người tập một cơ thể khỏe mạnh, tâm hồn
                  thanh thản và an yên
                </p>
              </div>
            </div>
            {/* flow yoga */}
            <div className="h-[450px] w-[30%] overflow-hidden transition-transform transform-gpu hover:transform-gpu hover:translate-y-[-5px] hover:shadow-md ">
              <a href="#" className="block">
                <img
                  className="w-full bg-cover transition-transform transform-gpu "
                  src={yoga5}
                  alt=""
                />
              </a>
              <div className="flex flex-col m-8 mt-2">
                <h3 className="text-orange-400 my-[6px] text-xl font-bold">
                  <a href="#" className="block">
                    CORE YOGA
                  </a>
                </h3>
                <p className="mt-3 text-[14px] max-w-[70%]">
                  Những bài tập hướng tập trung vào phần bụng, lưng, vai và
                  hông. Core Yoga tăng cường sức khỏe và linh hoạt cho cơ thể,
                  tâm trí và tinh thần
                </p>
              </div>
            </div>
            {/* stick yoga */}
            <div className="h-[450px] w-[30%] overflow-hidden transition-transform transform-gpu hover:transform-gpu hover:translate-y-[-5px] hover:shadow-md ">
              <a href="#" className="block">
                <img
                  className="w-full bg-cover transition-transform transform-gpu "
                  src={yoga6}
                  alt=""
                />
              </a>
              <div className="flex flex-col m-8 mt-2">
                <h3 className="text-orange-400 my-[6px] text-xl font-bold">
                  <a href="#" className="block">
                    WHEEL YOGA
                  </a>
                </h3>
                <p className="mt-3 text-[14px] max-w-[70%]">
                  Loại hình Yoga tập trung vào những động tác vặn xoay mình đem
                  lại sự dẻo dai và linh hoạt cho cơ thể. Các tư thế giúp cột
                  sống hoạt động tốt hơn
                </p>
              </div>
            </div>
            <div className="h-[450px] w-[30%] overflow-hidden transition-transform transform-gpu hover:transform-gpu hover:translate-y-[-5px] hover:shadow-md ">
              <a href="#" className="block">
                <img
                  className="w-full bg-cover transition-transform transform-gpu "
                  src={yoga7}
                  alt=""
                />
              </a>
              <div className="flex flex-col m-8 mt-2">
                <h3 className="text-orange-400 my-[6px] text-xl font-bold">
                  <a href="#" className="block">
                    GENTLE YOGA
                  </a>
                </h3>
                <p className="mt-3 text-[14px] max-w-[70%]">
                  Những bài tập nhẹ nhàng và dễ dàng thực hiện. Các bài Gentle
                  Yoga thích hợp với người mới bắt đầu tập luyện, chúng tốt cho
                  hệ thống cơ và khớp
                </p>
              </div>
            </div>
            <div className="h-[450px] w-[30%] overflow-hidden transition-transform transform-gpu hover:transform-gpu hover:translate-y-[-5px] hover:shadow-md ">
              <a href="#" className="block">
                <img
                  className="w-full bg-cover transition-transform transform-gpu "
                  src={yoga8}
                  alt=""
                />
              </a>
              <div className="flex flex-col m-8 mt-2">
                <h3 className="text-orange-400 my-[6px] text-xl font-bold">
                  <a href="#" className="block">
                    HIP OPENING
                  </a>
                </h3>
                <p className="mt-3 text-[14px] max-w-[70%]">
                  Chuỗi các bài tập luyện nhằm hướng tới sự phát triển ở vùng
                  hông. Những bài tập này tập trung kéo căng các cơ vùng xương
                  chậu và hông của bạn
                </p>
              </div>
            </div>
            <div className="h-[450px] w-[30%] overflow-hidden transition-transform transform-gpu hover:transform-gpu hover:translate-y-[-5px] hover:shadow-md ">
              <a href="#" className="block">
                <img
                  className="w-full bg-cover transition-transform transform-gpu "
                  src={yoga9}
                  alt=""
                />
              </a>
              <div className="flex flex-col m-8 mt-2">
                <h3 className="text-orange-400 my-[6px] text-xl font-bold">
                  <a href="#" className="block">
                    TWISTING YOGA
                  </a>
                </h3>
                <p className="mt-3 text-[14px] max-w-[70%]">
                  Loại hình Yoga tập trung vào những động tác vặn xoay mình đem
                  lại sự dẻo dai và linh hoạt cho cơ thể. Các tư thế giúp cột
                  sống hoạt động tốt hơn
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-3">
          <Pagination className="text-center" defaultCurrent={1} total={50} />
        </div>
      </section>
    </>
  );
}
