import React from "react";
import {
  useNavigate
} from "react-router-dom";

function CreateCourse() {
  const navigate = useNavigate();

  const navigateToManageUser = () => {
    navigate('/manageUser');
  };

  const navigateToManageCourse = () => {
    navigate('/adminCourseHome');
  };

  const navigateToManageCenter = () => {
    navigate('/manageCenter');
  };

  const navigateToManagePost = () => {
    navigate('/managePost');
  };

    return (
        <>
  <base href="./" />
  <meta charSet="utf-8" />
  <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
  <title>Create New Course</title>
  {/* Main styles for this application*/}
  {/* SIDEBAR */}
      <aside
        id="logo-sidebar"
        className="fixed flex flex-col min-h-screen top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
        aria-label="Sidebar"
      >    <div className="h-full overflow-y-auto bg-amber-500">
      <ul className="space-y-2 font-medium">
        <li>
          <a
            className="flex items-center p-7 text-yellow-900 group bg-yellow-600"
          ></a>
        </li>
        <li>
          <a
            className="flex items-center p-2 text-yellow-900 rounded-lg group"
          >
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 22 21"
            ></svg>
            <span className="ms-3">Dashboard</span>
          </a>
        </li>
        <h2 className="px-3 py-4 text-yellow-900">MANAGE</h2>
        <li>
          <a
            onClick = {navigateToManageUser}
            className="flex items-center p-2 text-yellow-900 rounded-lg group"
          >
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 22 21"
            ></svg>
            <span className="ms-3">MANAGE LEARNER</span>
          </a>
        </li>
        <li>
          <a
            onClick = {navigateToManageCourse}
            className="flex items-center p-2 text-yellow-900 rounded-lg group"
          >
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 22 21"
            ></svg>
            <span className="ms-3">MANAGE COURSE</span>
          </a>
        </li>
        <li>
          <a
            onClick = {navigateToManageCenter}
            className="flex items-center p-2 text-yellow-900 rounded-lg group"
          >
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 22 21"
            ></svg>
            <span className="ms-3">MANAGE CENTER</span>
          </a>
        </li>
        <li>
          <a
            onClick = {navigateToManagePost}
            className="flex items-center p-2 text-yellow-900 rounded-lg group"
          >
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 22 21"
            ></svg>
            <span className="ms-3">MANAGE POST</span>
          </a>
        </li>
      </ul>
      <footer className="fixed inset-x-0 bottom-0 items-center p-8 text-yellow-900 group bg-yellow-600"></footer>
    </div>
      </aside>
  <div className="flex flex-col h-screen p-4 sm:ml-64">
    {/* HEADER */}
    <header className="ml-5 h-10 header text-neutral-500">
      <nav className="flex justify-start gap-x-5">
        <a className="nav-link" href="#">
          COURSE ADMIN
        </a>
        <a className="nav-link" href="#">
          placeholder
        </a>
        <a className="nav-link" href="#">
          lol
        </a>
      </nav>
    </header>
    <hr />
    <br />
    {/* Breadcrumb */}
    <p className="ml-5 mb-5 text-2xl">CREATE COURSE</p>
    <hr />
    {/* MAIN CONTENT */}
    <br />
    <div className="md:flex">
      <div>
        <div className="ml-5">
          <label htmlFor="fname" className="text-left">
            Course Code:
          </label>
        </div>
        <div className="ml-5">
          <input type="text" className="border-2 w-64" id="cid" name="cid" />
          <br />
          <br />
        </div>
      </div>
      <div>
        <div className="ml-5">
          <label htmlFor="fname" className="text-left">
            Course Name:
          </label>
        </div>
        <div className="ml-5">
          <input type="text" className="border-2 w-64" id="cid" name="cid" />
          <br />
          <br />
        </div>
      </div>
    </div>
    <div className="md:flex">
      <div>
        <div className="ml-5">
          <label htmlFor="fname" className="text-left">
            Programme:
          </label>
        </div>
        <div className="ml-5">
          <input type="text" className="border-2 w-64" id="cid" name="cid" />
          <br />
          <br />
        </div>
      </div>
      <div>
        <div className="ml-5">
          <label htmlFor="fname" className="text-left">
            Course Manager:
          </label>
        </div>
        <div className="ml-5">
          <input type="text" className="border-2 w-64" id="cid" name="cid" />
          <br />
          <br />
        </div>
      </div>
    </div>
    <div>
      <div className="ml-5">
        <label htmlFor="fname" className="text-left">
          Co-course Manager:
        </label>
      </div>
      <div className="ml-5">
        <textarea
          type="text"
          className="border-2 w-3/5"
          id="cid"
          name="cid"
          defaultValue={""}
        />
        <br />
        <br />
      </div>
    </div>
    <div className="md:flex">
      <div>
        <div className="ml-5">
          <label htmlFor="fname" className="text-left">
            Course Type:
          </label>
        </div>
        <div className="ml-5">
          <input type="text" className="border-2 w-64" id="cid" name="cid" />
          <br />
          <br />
        </div>
      </div>
      <div>
        <div className="ml-5">
          <label htmlFor="fname" className="text-left">
            Course Size:
          </label>
        </div>
        <div className="ml-5">
          <input type="text" className="border-2 w-64" id="cid" name="cid" />
          <br />
          <br />
        </div>
      </div>
    </div>
    <div className="md:flex">
      <div>
        <div className="ml-5">
          <label htmlFor="fname" className="text-left">
            Member Course Fee ($):
          </label>
        </div>
        <div className="ml-5">
          <input type="text" className="border-2 w-64" id="cid" name="cid" />
          <br />
          <br />
        </div>
      </div>
      <div>
        <div className="ml-5">
          <label htmlFor="fname" className="text-left">
            Non-member Course Fee ($):
          </label>
        </div>
        <div className="ml-5">
          <input type="text" className="border-2 w-64" id="cid" name="cid" />
          <br />
          <br />
        </div>
      </div>
    </div>
    <div className="md:flex">
      <button
        type="button"
        className="text-black bg-white hover:bg-orange-800 border-2 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium w-28 py-1 text-center ml-5"
        onClick = {navigateToManageCourse}
      >
        Cancel
      </button>
      <button
        type="button"
        className="text-black bg-white hover:bg-orange-800 border-2 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium w-28 py-1 text-center ml-5"
        onclick="signUp()"
      >
        Save
      </button>
      <button
        type="button"
        className="text-white bg-orange-600 hover:bg-orange-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium py-1 text-center w-40 ml-5"
        onclick="signUp()"
      >
        Save and Release
      </button>
    </div>
    <br />
    {/* FOOTER */}
    <div className="mt-auto">
      <hr />
      <br />
      <footer className="bg-white">
        <div>HealtExpert © 2024</div>
      </footer>
    </div>
  </div>
</>

    );
};

export default CreateCourse;