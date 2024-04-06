import React, { useEffect, useState } from "react";
import Logo from "../img/logo.png";
import FacebookL from "../img/facebookLink.png";
import YoutubeL from "../img/youtubeLink.png";
import FDate from "../img/footerDate.png";
import FMail from "../img/footerMail.png";
import FPhone from "../img/footerPhone.png";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="mt-auto">
        <footer className="bg-black mt-8 px-12 py-12 font-[sans-serif] ">
          <div class="flex">
            <a href="/home">
              <img src={Logo} alt="" className="w-28 mb-5" />
            </a>
          </div>
          <div className="flex">
            {/* col 1 */}
            <div className="w-1/4 text-white space-y-3">
              <div className="flex">
              <img src={FPhone} alt="" className="mr-[15px]" />
              <p>0779692264</p>
              </div>
              <div className="flex">
              <img src={FMail} alt="" className="w-8 h-6 mr-2" />
              <p>healthexpert@gmail.com</p>
              </div>
              <div className="flex">
              <img src={FDate} alt="" className="mr-[18px]" />
              <p>24/7</p>
              </div>
            </div>
            {/* col 2 */}
            <div className="w-1/4 text-white space-y-2">
              <p className="font-extrabold text-orange-400">Dịch vụ</p>
              <p className="hover:text-[#FFA500]">• Gym</p>
              <p className="hover:text-[#FFA500]">• Yoga</p>
              <p className="hover:text-[#FFA500]">• Boxing</p>
              <p className="hover:text-[#FFA500]">• Dance</p>
            </div>
            {/* col 3 */}
            <div className="w-1/4 text-white space-y-1">
              <p className="font-extrabold text-orange-400">Thông tin khác</p>
              <p className="hover:text-[#FFA500]">• Tin tức</p>
              <p className="hover:text-[#FFA500]">• Lịch học</p>
              <p className="hover:text-[#FFA500]">• Về chúng tôi</p>
              <p className="hover:text-[#FFA500]">• Đội ngũ nhân sự</p>
              <p className="hover:text-[#FFA500]">• Tuyển dụng</p>
              <p className="hover:text-[#FFA500]">• Khuyến mãi</p>
              <p className="hover:text-[#FFA500]">• Chính sách member</p>
            </div>
            {/* col 4 */}
            <div className="w-1/4 text-white ">
              <p className="font-extrabold text-orange-400">Theo dõi social</p>
              <div className="flex mt-7 space-x-5">
                <a href="https://facebook.com">
                  <img src={FacebookL} alt="" className="w-12" />
                </a>
                <a href="https://youtube.com/">
                  <img src={YoutubeL} alt="" className="w-12" />
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Footer;
