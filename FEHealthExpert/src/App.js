import "./App.css";
import { Routes, Route } from "react-router-dom";
import { BrowserRouter as Switch } from 'react-router-dom';
import Home from "./page/Home/home";
import SignIn from "./page/Auth/SignIn";

import { useRoutes } from "react-router-dom";
import { Navigate } from "react-router-dom";
import SignUp from "./page/Auth/SignUp";
import Yoga from "./page/Services/yoga";
import Dance from "./page/Services/dance";
import Boxing from "./page/Services/boxing";
import Gym from "./page/Services/gym";
import Center from "./page/center/center";
import LearningCourse from "./page/Course/LearningCourse";
import DetailCourse from "./page/DescriptionCourse/DetailCourse";
import Tranformation from "./page/Tranformation/tranfor";
import CreatCourse from "./page/Center_Admin/CreatCourse";
import Verify from "./page/Auth/Verify";
import YourProfile from "./page/User/profile";
import EditProfile from "./page/User/edit_profile";
import CreateCourse from "./page/Course/CreateCourse";
import Bmi from './page/Services/bmi';
import BmiCoursePage from "./page/Services/BmiCoursePage";

export default function App() {
  return (
    <Routes>
      {/* <Route path="/" element={<Layout />}> */}
      <Route path="/home" element={<Home />} />
      <Route path="/" element={<Home />} />
      <Route path="/yoga" element={<Yoga />} />
      <Route path="/dance" element={<Dance />} />
      {/* <Route path="/boxing" element={<Boxing />} /> */}
      {/* <Route path="/gym" element={<Gym />} /> */}
      <Route path="/center" element={<Center />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/verify" element={<Verify />} />
      <Route path="/learningCourse" element={<LearningCourse />} />
      <Route path="/detailCourse/:id" element={<DetailCourse />} />
      <Route path="/tranformation" element={<Tranformation />} />
      <Route path="/creatcourse" element={<CreatCourse />} />
      <Route path="/profile" element={<YourProfile />} />
      <Route path="/editProfile" element={<EditProfile />} />
      <Route path="/createCourse" element={<CreateCourse />} />
      <Route path="/displayByBmi" element={<BmiCoursePage />} />
      <Route path="/learningCourse/:id/:sessionId?/:lessonId?" element={<LearningCourse />} />

      {/* <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
        <Route path="*" element={<NoPage />} /> */}
      {/* </Route> */}
    </Routes>
  );
}
