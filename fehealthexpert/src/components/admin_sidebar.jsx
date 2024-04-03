import React from "react";
import {
  useNavigate
} from "react-router-dom";

function AdminSidebar() {
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
      <div className="h-full overflow-y-auto bg-amber-500">
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
              onClick={navigateToManageUser}
              className="flex items-center p-2 text-yellow-900 rounded-lg group hover:bg-yellow-200"
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
              onClick={navigateToManageCourse}
              className="flex items-center p-2 text-yellow-900 rounded-lg group hover:bg-yellow-200"
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
              onClick={navigateToManageCenter}
              className="flex items-center p-2 text-yellow-900 rounded-lg group hover:bg-yellow-200"
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
              onClick={navigateToManagePost}
              className="flex items-center p-2 text-yellow-900 rounded-lg group hover:bg-yellow-200"
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
    </>
  )
}

export default AdminSidebar;