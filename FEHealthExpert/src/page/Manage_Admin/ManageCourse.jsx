import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Menuleft from "../../components/MenuLeft";
import Header from "../../components/Header";
import { Table, Modal } from "antd";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Autosuggest from 'react-autosuggest';
export default function ManageCourse() {
  const { courseId } = useParams();
  const [course, setCourse] = useState(null);
  const [revenue, setRevenue] = useState(null);
  const [learners, setLearners] = useState([]);
  const navigate = useNavigate();
  const [searchValue, setSearchValue] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [selectedUser, setSelectedUser] = useState([]);
  const [showConfirmationModal, setShowConfirmationModal] = useState(false);
  const [searchedUsers, setSearchedUsers] = useState([]);
  const [revenueByMonth, setRevenueByMonth] = useState([]);
  //Thêm trạng thái mới để lưu giữ tháng được chọn:
  const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth());
  //Thêm một state mới để lưu trữ năm được chọn:
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());

  useEffect(() => {
    const fetchCourse = async () => {
      try {
        const response = await axios.get(`http://20.2.73.15:8173/api/Course/${courseId}`);
        setCourse(response.data);
      } catch (error) {
        console.error("Error fetching course details: ", error);
      }
    };
    fetchCourse();
  }, [courseId]);

  useEffect(() => {
    const fetchLearners = async () => {
      try {
        const learnersRes = await axios.get(`http://20.2.73.15:8173/api/course/${courseId}/users`);
        setLearners(learnersRes.data);
      } catch (error) {
        console.error("Error fetching learners: ", error);
      }
    };
    fetchLearners();
  }, [courseId]);

  useEffect(() => {
    if (course) {
      const courseRevenue = course.studentNumber * course.price;
      setRevenue(courseRevenue);
    }
  }, [course]);

  //Search user
  const handleSearchValueChange = (event, { newValue }) => {
    setSearchValue(newValue);
  };
  //Get suggestions by user mail
  const handleSuggestionsFetchRequested = ({ value }) => {
    axios.get(`http://20.2.73.15:8173/api/Account/GetAccountByEmail/${value}`)
      .then((response) => {
        setSuggestions(response.data);
      })
      .catch((error) => {
        console.error("Error fetching suggestions: ", error);
      });
  };
  const handleSuggestionsClearRequested = () => {
    setSuggestions([]);
  };

  const getSuggestionValue = (suggestion) => {
    return suggestion.email;
  };

  const renderSuggestion = (suggestion) => {
    return (
      <div>
        {suggestion.email}
      </div>
    );
  };

  const onSuggestionSelected = (event, { suggestion }) => {
    setSelectedUser(suggestion);
    setShowConfirmationModal(true);
  };

  const handleUserSelection = async (email) => {
    const courseManagerDTO = {
      courseId: courseId,
      courseManagerId: 0,
      accountEmails: [email]
    };

    try {
      const response = await axios.post(`http://20.2.73.15:8173/api/Course/add-manager`, [courseManagerDTO]);
      console.log(response.data);
    } catch (error) {
      console.error("Error adding course manager: ", error);
    }
  };

  //Gọi hàm calculateRevenueByMonth trong useEffect
  useEffect(() => {
    calculateRevenueByMonth(learners);
  }, [learners]);

  //Thay đổi useEffect để gọi hàm calculateRevenueByMonthAndYear khi có sự thay đổi trong selectedMonth và selectedYear:
  useEffect(() => {
    calculateRevenueByMonthAndYear(learners, selectedMonth, selectedYear);
  }, [learners, selectedMonth, selectedYear]);

  const formattedRevenue = new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
  }).format(revenue);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };

  //hàm để tính tổng doanh thu theo tháng dựa trên danh sách học viên:
  const calculateRevenueByMonth = (learners) => {
    const revenueByMonth = {};

    for (const learner of learners) {
      const enrollDate = new Date(learner.enrollDate);
      const month = enrollDate.getMonth();
      const year = enrollDate.getFullYear();

      // Kiểm tra nếu năm của enrollDate khớp với năm được chọn
      if (year === selectedYear) {
        const key = `${month}-${year}`;

        if (revenueByMonth[key]) {
          revenueByMonth[key] += course.price;
        } else {
          revenueByMonth[key] = course.price;
        }
      }
    }

    setRevenueByMonth(revenueByMonth);
  };

  //Tạo một hàm mới để tính tổng doanh thu theo tháng và năm được chọn:
  const calculateRevenueByMonthAndYear = (learners, selectedMonth, selectedYear) => {
    const revenueByMonth = {};

    for (const learner of learners) {
      const enrollDate = new Date(learner.enrollDate);
      const month = enrollDate.getMonth();
      const year = enrollDate.getFullYear();

      // Kiểm tra nếu năm và tháng của enrollDate khớp với năm và tháng được chọn
      if (year === selectedYear && month === selectedMonth) {
        const key = `${month}-${year}`;

        if (revenueByMonth[key]) {
          revenueByMonth[key] += course.price;
        } else {
          revenueByMonth[key] = course.price;
        }
      }
    }

    setRevenueByMonth(revenueByMonth);
  };

  //Thêm một phần tử giao diện người dùng cho phép người dùng chọn tháng:
  const handleMonthChange = (event) => {
    setSelectedMonth(parseInt(event.target.value));
  };
  //Tạo một hàm xử lý sự kiện khi người dùng thay đổi năm:
  const handleYearChange = (event) => {
    setSelectedYear(parseInt(event.target.value));
  };

  //Tạo một hàm để hiển thị danh sách các năm cho người dùng chọn:
  const renderYearOptions = () => {
    const currentYear = new Date().getFullYear();
    const years = [currentYear + 2, currentYear + 1, currentYear, currentYear - 1, currentYear - 2]; // Chọn 3 năm gần nhất

    return (
      <select value={selectedYear} onChange={handleYearChange}>
        {years.map((year) => (
          <option key={year} value={year}>
            {year}
          </option>
        ))}
      </select>
    );
  };
  //</>
  const renderMonthOptions = () => {
    const currentYear = new Date().getFullYear();
    const months = [
      "Tháng 1",
      "Tháng 2",
      "Tháng 3",
      "Tháng 4",
      "Tháng 5",
      "Tháng 6",
      "Tháng 7",
      "Tháng 8",
      "Tháng 9",
      "Tháng 10",
      "Tháng 11",
      "Tháng 12",
    ];

    return (
      <select value={selectedMonth} onChange={handleMonthChange}>
        {months.map((month, index) => (
          <option key={index} value={index}>
            {`${month}`}
          </option>
        ))}
      </select>
    );
  };
  const renderRevenueByMonth = () => {
    const selectedKey = `${selectedMonth}-${selectedYear}`;

    if (!revenueByMonth[selectedKey]) {
      return <div>Không có doanh thu cho tháng và năm này.</div>;
    }

    const revenue = revenueByMonth[selectedKey];
    const formattedRevenue = new Intl.NumberFormat("vi-VN", {
      style: "currency",
      currency: "VND",
    }).format(revenue);

    return (
      <div className="text-lg">
        {formattedRevenue}
      </div>
    );
  };

  //</>

  const learnerColumns = [
    {
      title: "Tên người dùng",
      dataIndex: "userName",
      key: "userName"
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email"
    },
    {
      title: "Ngày tham gia",
      dataIndex: "enrollDate",
      key: "enrollDate",
      render: (text) => formatDate(text),
    }
  ];

  const columns = [
    {
      title: "ID",
      dataIndex: "courseId",
      key: "courseId",
      render: (text, record) => (
        <a onClick={() => navigate(`/manageSession/${record.courseId}`)}>{record.courseId}</a>
      ),
    },
    {
      title: "Tên khóa học",
      dataIndex: "courseName",
      key: "courseName",
    },
    {
      title: "Số lượng học viên",
      dataIndex: "studentNumber",
      key: "studentNumber",
    },
    {
      title: "Giá tiền",
      dataIndex: "price",
      key: "price",
      render: (text) => (
        <span>{new Intl.NumberFormat("vi-VN", {
          style: "currency",
          currency: "VND",
        }).format(text)}</span>
      ),
    },
    {
      title: "Mô tả",
      dataIndex: "description",
      key: "description",
    },
    {
      title: "Người tạo",
      dataIndex: "createBy",
      key: "createBy",
    },
    {
      title: "Ngôn ngữ",
      dataIndex: "language",
      key: "language",
    },
    {
      title: "Ngày tạo",
      dataIndex: "dateUpdate",
      key: "dateUpdate",
      render: (text) => {
        const date = new Date(text);
        const day = date.getDate().toString().padStart(2, '0');
        const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Tháng bắt đầu từ 0
        const year = date.getFullYear();
        return `${day}/${month}/${year}`;
      },
    },
    {
      title: "BMI MIN",
      dataIndex: "bmiMin",
      key: "bmiMin",
    },
    {
      title: "BMI MAX",
      dataIndex: "bmiMax",
      key: "bmiMax",
    }
  ];

  if (!course) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className="w-full">
        <Header />
      </div>
      <div className="w-full flex">
        <div className="w-[20%] h-full">
          <div className="home-page">
            <Menuleft />
          </div>
        </div>
        <div className="w-[80%] mt-3">
          <h2 className="font-bold text-2xl">{course.courseName}</h2>
          <div className="absolute top-[130px] left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-6 rounded-lg z-1000">
            <h3 className="font-bold text-2xl mb-4">Thêm quản lí</h3>
            <div className="absolute items-top justify-center">
              <Autosuggest
                suggestions={suggestions}
                onSuggestionsFetchRequested={handleSuggestionsFetchRequested}
                onSuggestionsClearRequested={handleSuggestionsClearRequested}
                getSuggestionValue={getSuggestionValue}
                renderSuggestion={renderSuggestion}
                inputProps={{
                  placeholder: 'Enter email to search',
                  value: searchValue,
                  onChange: handleSearchValueChange
                }}
                onSuggestionSelected={onSuggestionSelected}
              />
            </div>
          </div>

          <div className="flex top-0 right-0">
            <p className="box w-[350px] mr-[90px] rounded-md bg-orange-400 text-black font-bold py-3 px-4 rounded opacity-100 transition-opacity mt-3">
              Tổng doanh thu <br /> {course.courseName}: <br /> {formattedRevenue}
            </p>

            <p className="absolute right-0 box w-[450px] mr-[90px] rounded-md bg-orange-400 text-black font-bold py-3 px-4 rounded opacity-100 transition-opacity mt-3">
              Tổng doanh thu của Tháng {renderMonthOptions()} Năm {renderYearOptions()} <br /> {course.courseName}: <br /> {renderRevenueByMonth()}
            </p>
          </div>
          <div className=" w-full top-30 mt-10">
            <Table
              columns={columns}
              dataSource={[course]}
              rowKey={(record) => record.courseId}
            />
            <Table
              columns={learnerColumns}
              dataSource={learners}
            />
          </div>
          {/* <div className=" absolute w-full top-100 mt-10">
              
            </div> */}
        </div>
      </div>
      <Modal
        visible={showConfirmationModal}
        onCancel={() => setShowConfirmationModal(false)}
        onOk={() => {
          setShowConfirmationModal(false);
          if (selectedUser) {
            console.log("Selected email:", selectedUser.email);
            handleUserSelection(selectedUser.email);
          }
        }}
        title="Xác nhận"
      >
        {selectedUser && (
          <p>Bạn có chắc chắn muốn chỉ định người dùng <strong>{selectedUser.userName}</strong> làm người quản lý khóa học không?</p>
        )}
      </Modal>
    </>
  );
}