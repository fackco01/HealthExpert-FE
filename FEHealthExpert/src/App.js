import "./App.css";
import { Routes, Route } from "react-router-dom";

import Home from "./page/Home/home";
import SignIn from "./page/Auth/SignIn";

import { useRoutes } from "react-router-dom";
import { Navigate } from "react-router-dom";
import SignUp from "./page/Auth/SignUp";
import Categories from "./page/Services/categories";
import Dance from "./page/Services/dance";
import Boxing from "./page/Services/boxing";
import Gym from "./page/Services/gym";
import Center from "./page/center/center";
import DetailCourse from "./page/Course/DetailCourse";
import Course from "./page/DescriptionCourse/Course";
import Tranformation from "./page/Tranformation/tranfor";
import CreatCourse from "./page/Manage_Admin/CreatCourse";
import ManageCourse from "./page/Manage_Admin/ManageCourse";
import ManageSession from "./page/Manage_Admin/ManageSession";
import ManageLession from "./page/Manage_Admin/ManageLession";
export default function App() {
  return (
    <Routes>
      {/* <Route path="/" element={<Layout />}> */}
      <Route path="/home" element={<Home />} />
      <Route path="/managecourse" element={<ManageCourse />} />
      <Route path="/managesession" element={<ManageSession />} />
      <Route path="/managelession" element={<ManageLession />} />

      <Route path="/categories" element={<Categories />} />
      <Route path="/dance" element={<Dance />} />
      <Route path="/boxing" element={<Boxing />} />
      <Route path="/gym" element={<Gym />} />
      <Route path="/center" element={<Center />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/detailCourse" element={<DetailCourse />} />
      <Route path="/course" element={<Course />} />
      <Route path="/tranformation" element={<Tranformation />} />
      <Route path="/creatcourse" element={<CreatCourse />} />
      {/* <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
        <Route path="*" element={<NoPage />} /> */}
      {/* </Route> */}
    </Routes>
  );
}
