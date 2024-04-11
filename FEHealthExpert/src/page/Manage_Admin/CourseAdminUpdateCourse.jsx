import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import Menuleft from "../../components/MenuLeft";
import Header from "../../components/Header";

function CourseAdminUpdateCourse() {
  const { courseId } = useParams();
  const [courseData, setCourseData] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCourseData = async () => {
      try {
        const response = await axios.get(
          `http://20.2.73.15:8173/api/Course/${courseId}`
        );
        setCourseData(response.data);
      } catch (error) {
        console.error("Error fetching course data: ", error);
      }
    };
    fetchCourseData();
  }, [courseId]);

  const HandleSubmit = (e) => {
    e.preventDefault();
    try {
      const response = axios.put(
        `http://20.2.73.15:8173/api/Course/${courseId}`,
        courseData
      );
      if (response) {
        window.location.reload();
      } else {
        console.error("Error fetching course data: ");
      }
    } catch (error) {
      console.error("Error fetching course data: ", error);
    }
  };

  return (
    <>
      <div className="w-full" >
        <Header />
      </div>
      <div className="w-full flex">
        {/* Side bar */}
        <div className="w-[20%] h-full">
          <div className="home-page">
            <Menuleft />
          </div>
        </div>
        {/* End Side Bar */}
      </div>
      <div className="  text-black p-5">
        <form
          className="bg-orange-400 h-[500px] w-[70%]  mx-auto"
          onSubmit={HandleSubmit}
        >
          <div className="flex  flex-col">
            <div>
              <h1 className="text-center text-2xl">CHỈNH SỬA KHÓA HỌC</h1>
            </div>
            <div className="flex">
              <div className="w-1/2 mt-5 ml-5">
                <div className="">
                  <div>Course ID:</div>
                  <input
                    type="text"
                    name="courseId"
                    className="form-control  w-[300px] rounded-md
                  rounded-md py-2 mt-3"
                    placeholder="Enter course id"
                    value={courseData.courseId}
                    onChange={(e) =>
                      setCourseData({ ...courseData, courseId: e.target.value })
                    }
                  />
                </div>
                <div className="mt-3">
                  <div className="">Course Name:</div>
                  <input
                    type="text"
                    name="courseName"
                    className="form-control w-[300px] py-2 mt-3 rounded-md"
                    placeholder="Enter course name"
                    value={courseData.courseName}
                    onChange={(e) =>
                      setCourseData({ ...courseData, courseName: e.target.value })
                    }
                  />
                </div>
                <div className="mt-3">
                  <div>Description:</div>
                  <input
                    type="text"
                    name="description"
                    className="form-control w-[300px] py-2 mt-3 rounded-md"
                    placeholder="Enter description"
                    value={courseData.description}
                    onChange={(e) =>
                      setCourseData({
                        ...courseData,
                        description: e.target.value,
                      })
                    }
                  />
                </div>
                <div className="mt-3">
                  <div>Certificate:</div>
                  <input
                    type="text"
                    name="certificate"
                    className="form-control w-[300px] py-2 mt-3 rounded-md"
                    placeholder="Enter certificate"
                    value={courseData.certificate}
                    onChange={(e) =>
                      setCourseData({
                        ...courseData,
                        certificate: e.target.value,
                      })
                    }
                  />
                </div>
              </div>
              <div className="w-1/2 mt-5">
                <div className="">
                  <div>Last Updated:</div>
                  <input
                    type="text"
                    name="dateUpdate"
                    className="form-control w-[300px] py-2 mt-3 rounded-md"
                    placeholder="Enter last updated date"
                    value={courseData.dateUpdate}
                    onChange={(e) =>
                      setCourseData({ ...courseData, dateUpdate: e.target.value })
                    }
                  />
                </div>
                <div className="mt-3">
                  <div>Language:</div>
                  <input
                    type="text"
                    name="language"
                    className="form-control w-[300px] py-2 mt-3 rounded-md"
                    placeholder="Enter language"
                    value={courseData.language}
                    onChange={(e) =>
                      setCourseData({ ...courseData, language: e.target.value })
                    }
                  />
                </div>
                <div className="mt-3">
                  <div>BMI Min:</div>
                  <input
                    type="number"
                    name="bmiMin"
                    className="form-control w-[300px] py-2 mt-3 rounded-md"
                    placeholder="Enter minimum BMI"
                    value={courseData.bmiMin}
                    onChange={(e) =>
                      setCourseData({ ...courseData, bmiMin: e.target.value })
                    }
                  />
                </div>
                <div className="mt-3">
                  <div>BMI Max:</div>
                  <input
                    type="number"
                    name="bmiMax"
                    className="form-control w-[300px] py-2 mt-3 rounded-md"
                    placeholder="Enter maximum BMI"
                    value={courseData.bmiMax}
                    onChange={(e) =>
                      setCourseData({ ...courseData, bmiMax: e.target.value })
                    }
                  />
                </div>
                <div className="mt-3">
                  <div>Type ID:</div>
                  <input
                    type="number"
                    name="typeId"
                    className="form-control w-[300px] py-2 mt-3 rounded-md"
                    placeholder="Enter type ID"
                    value={courseData.typeId}
                    onChange={(e) =>
                      setCourseData({ ...courseData, typeId: e.target.value })
                    }
                  />
                </div>
              </div>
            </div>
          </div>
          <button className="w-[250px] mr-[90px] rounded-md absolute bottom-20 right-[140px]	 bg-black hover:bg-blue-600 text-white font-bold py-3 px-4 rounded opacity-100 hover:opacity-80 transition-opacity mt-3">
            Chỉnh sửa
          </button>
        </form>
      </div>
    </>

  );
}

export default CourseAdminUpdateCourse;
