import React, { useEffect, useState } from "react";
import Logo from "../img/logo.png";
import FacebookL from "../img/facebookLink.png";
import YoutubeL from "../img/youtubeLink.png";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="mt-auto">
        <footer className="bg-black mt-8 px-12 py-12 font-[sans-serif] ">
          <img src={Logo} alt="" className="w-28 mb-5" />
          <div className="flex">
            {/* col 1 */}
            <div className="w-1/4 text-white space-y-3">
              <p>0779692264</p>
              <p>healthexpert@gmail.com</p>
              <p>24/7</p>
            </div>
            {/* col 2 */}
            <div className="w-1/4 text-white space-y-2">
              <p className="font-extrabold text-orange-400">Dịch vụ</p>
              <p>• Gym</p>
              <p>• Yoga</p>
              <p>• Boxing</p>
              <p>• Dance</p>
            </div>
            {/* col 3 */}
            <div className="w-1/4 text-white space-y-1">
              <p className="font-extrabold text-orange-400">Thông tin khác</p>
              <p>• Tin tức</p>
              <p>• Lịch học</p>
              <p>• Về chúng tôi</p>
              <p>• Đội ngũ nhân sự</p>
              <p>• Tuyển dụng</p>
              <p>• Khuyến mãi</p>
              <p>• Chính sách member</p>
            </div>
            {/* col 4 */}
            <div className="w-1/4 text-white ">
              <p className="font-extrabold text-orange-400">Theo dõi social</p>
              <div className="flex mt-7 space-x-5">
                <img src={FacebookL} alt="" className="w-12" />
                <img src={YoutubeL} alt="" className="w-12" />
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Footer;
