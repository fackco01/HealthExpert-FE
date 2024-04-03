import React, { useEffect, useState } from "react";
import splash from '../../img/bg.png';
import pfp from '../../img/pfp.png';
import cover from '../../img/course_cover.png';
import Header from "../../components/Header";
import {
  useNavigate
} from "react-router-dom";

function YourProfile() {

  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [gender, setGender] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const formattedDate = formatDate(birthDate);

  const navigateToRegistered = () => {
    navigate('/registeredCourse');
  };

  function getProfile(username) {
    fetch(`http://20.2.73.15:8173/api/Account/GetListAccount`, {
      method: "GET",
      headers: {
        "Authorization": "Bearer YOUR_ACCESS_TOKEN",
      }
    })
      .then(response => {
        if (!response.ok) {
          console.error(`Lỗi load dữ liệu!`);
          alert("Lỗi load dữ liệu!");
          throw new Error("Lỗi load dữ liệu!");
        }
        return response.json();
      })
      .then(data => {

        if (Array.isArray(data)) {
          const foundUser = data.find(accountList => accountList.userName === username);
          if (foundUser) {
            console.log(data);
            setFullName(foundUser.fullName);
            setEmail(foundUser.email);
            setGender(foundUser.gender);
            setPhone(foundUser.phone);
            setBirthDate(foundUser.birthDate);
            if (foundUser.gender) {
              setGender("Nam")
            } else {
              setGender("Nu")
            }
          } else {
            console.error("Lỗi load dữ liệu!");
          }
        } else {
          console.error("Lỗi load dữ liệu!");
        }
      })
      .catch(error => {
        console.error("Lỗi load dữ liệu!", error);

      });
  }

  useEffect(() => {
    // Check if user is logged in using your preferred method (e.g., checking local storage)
    const username = localStorage.getItem("user");
    if (username) {
      getProfile(username);
    }
  }, []);

  function formatDate(dateString) {
    const date = new Date(dateString);
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();

    // Ensure leading zero for single-digit days and months
    const formattedDay = day < 10 ? '0' + day : day;
    const formattedMonth = month < 10 ? '0' + month : month;

    return `${formattedDay}/${formattedMonth}/${year}`;
  }

  return (
    <>
      <base href="./" />
      <meta charSet="utf-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      {/* Main styles for this application*/}
      {/* idk */}
      <div className="home-page">
        <Header />
      </div>
      <div className="grid gap-4 ml-16 mr-16">
        {/* banner and pfp hijinx */}
        <div className="">
          <img src={splash} alt="" className="relative object-cover w-full h-96 z-0" />
          <div className="flex">
            <div className="flex ml-5 -mt-28 z-10 px-2">
              <img src={pfp} alt="" className="z-10 object-scale-down w-48" />
              {/* <p className='text-xl font-bold ml-8 mt-32'></p> */}
              <p className="ml-3 text-center">{fullName}</p>
            </div>
          </div>
        </div>
        {/* two columns */}
        <div className="flex columns-2 gap-4">
          {/* left column: about */}
          <div className="flex-auto w-2/6">
            <div className="border rounded-t-lg shadow-2xl ">
              <p className="ml-3 mt-3 font-bold">Giới thiệu</p>
              <br />

              <hr />
              <p className="ml-3 text-center">Email: {email}</p>
              <br />
              <p className="ml-3 text-center">Số điện thoại: {phone}</p>
              <br />
              <p className="ml-3 text-center">Giới tính: {gender}</p>
              <br />
              <p className="ml-3 text-center">Ngày sinh: {formattedDate}</p>
              <br />
              <hr />
            </div>
            <a href="/editProfile">
              <div class="border rounded-b-lg shadow-2xl bg-orange-400 hover:bg-orange-600 hover:underline hover:text-blue-400" style={{ cursor: 'pointer' }}>
                <p class="flex justify-center my-6 font-bold">CẬP NHẬT</p>
              </div>
            </a>
          </div>
          {/* right column: joined courses */}
          <div className="flex-auto border rounded shadow-2xl w-4/6">
            <p className="ml-3 mt-3 font-bold">Các khóa học đã tham gia</p>
            <br />
            {/* section for one course begins */}
            <div className="flex px-2 ml-6 mb-7">
              <div className="flex w-4/5">
                <img src={cover} alt="" className="rounded object-scale-down w-48" />
                <div className="">
                  <p className='text-xl font-bold ml-8'>my COURSE???</p>
                  <p className="text-ellipsis overflow-hidden line-clamp-4 ml-8 mr-5">my desc???</p>
                </div>
              </div>
              <div className="w-1/5 flex flex-col">
                <button
                  type="button"
                  className="m-auto text-black bg-orange-400 hover:bg-orange-800 border-2 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium w-28 py-1 text-center"
                >
                  Update
                </button>
              </div>
            </div>
            <hr />
            <br />
            {/* section for one course ends */}
            {/* dummy data */}
            <div className="flex px-2 ml-6 mb-7">
              <div className="flex w-4/5">
                <img src={cover} alt="" className="rounded object-scale-down w-48" />
                <div className="">
                  <p className='text-xl font-bold ml-8'>my COURSE???</p>
                  <p className="text-ellipsis overflow-hidden line-clamp-4 ml-8 mr-5">
                    Pizza Hut was launched on May 31, 1958, by two brothers, Dan and Frank Carney, both Wichita State
                    students, as a single location in Wichita, Kansas. Six months later they opened a second outlet, and
                    within a year they were operating six locations.</p>
                </div>
              </div>
              <div className="w-1/5 flex flex-col">
                <button
                  type="button"
                  className="m-auto text-black bg-orange-400 hover:bg-orange-800 border-2 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium w-28 py-1 text-center"
                >
                  Update
                </button>
              </div>
            </div>
            <hr />
            <br />
            <a onClick={navigateToRegistered} style={{ cursor: 'pointer' }} className="flex px-2 ml-6 hover:underline hover:text-blue-500">Danh sách các khóa học bạn đã đăng ký</a>
            <br />
          </div>
        </div>
      </div>
      <div className="mt-auto">
        <footer className="bg-white">
          <br />
          <hr />
          <br />
          <div>HealtExpert © 2024</div>
        </footer>
      </div>
      {/* FOOTER */}
    </>

  );
};

export default YourProfile;