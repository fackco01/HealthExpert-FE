import "./App.css";
import { Routes, Route } from "react-router-dom";

import Home from "./page/Home";
import SignIn from "./page/Auth/SignIn";

import { useRoutes } from "react-router-dom";
import { Navigate } from "react-router-dom";
import SignUp from "./page/Auth/SignUp";
import CreateCourse from "./admin/course_manager/create_course";
import AdminCourseHome from "./admin/course_manager/manage_course";
import ManageUser from "./admin/user_manager/manage_user";
import ManageCenter from "./admin/center_manager/manage_center";
import ManagePost from "./admin/post_manager/manage_post";
import Verify from "./page/Auth/Verify";
import VideoUploader from "./page/Course/Session";
import VideoPlayer from "./page/Course/VideoPlayer";
import VideoPlayerContainer from "./page/Course/VideoPlayerContainer";
export default function App() {
  return (
    <Routes>
      {/* <Route path="/" element={<Layout />}> */}
      <Route path="/home" element={<Home />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/verify" element={<Verify />} />
      <Route path="/createCourse" element={<CreateCourse />} />
      <Route path="/adminCourseHome" element={<AdminCourseHome />} />
      <Route path="/manageUser" element={<ManageUser />} />
      <Route path="/manageCenter" element={<ManageCenter />} />
      <Route path="/managePost" element={<ManagePost />} />
      <Route path="/videoUploader" element={<VideoUploader />} />
      <Route path="/videoPlayer" element={<VideoPlayer />} />
      <Route path="/videoPlayerContainer" element={<VideoPlayerContainer />} />
      {/* </Route> */}
    </Routes>
  );
}
