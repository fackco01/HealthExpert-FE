import React, { useState } from "react";
import splash from '../../img/bg.png';
import pfp from '../../img/pfp.png';
import cover from '../../img/course_cover.png';

function EditProfile() {
  const [pic, setFileP] = useState();
  const [banner, setFileB] = useState();

  function changePfp(e) {
    console.log(e.target.files);
    setFileP(URL.createObjectURL(e.target.files[0]));
  }

  function changeBanner(e) {
    console.log(e.target.files);
    setFileB(URL.createObjectURL(e.target.files[0]));
  }

  return (
    <>
      <base href="./" />
      <meta charSet="utf-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      {/* Main styles for this application*/}
      {/* idk */}
      <div class="grid gap-4 ml-16 mr-16">
        {/* banner and pfp hijinx */}
        <div class="">
          <img src={banner ? banner : splash} alt="" class="relative object-cover w-full h-96 z-0" />
        </div>
        {/* two columns */}
        <div class="flex columns-2 gap-4">
          {/* left column: idk pfp ?? */}
          <div class="flex-auto w-2/5">
            <div class="ml-5 mt-5 mb-5">
              <img src={pic ? pic : pfp} alt="" class="object-scale-down w-48"/>
              <label for="pfp">Change profile pic</label>
              <br/>
              <input type="file" id="pfp" style={{display:"none"}} onChange={changePfp} />
              <label for="banner">Change banner</label>
              <br />
              <input type="file" id="banner" style={{display:"none"}} onChange={changeBanner} />
              <br />
              <p className='text-xl font-bold'>my NAME???</p>
              <br />
              <p class="">About page</p>
            </div>
          </div>
          {/* right column: edit */}
          <div class="flex-auto border rounded shadow-2xl w-3/5">
            <div class="ml-5 mt-5 mb-5 mr-5">
              {/* ----- */}
              <div className="w-36">
                <label htmlFor="uname" className="text-left">
                  Username:
                </label>
              </div>
              <div className="mt-2">
                <input
                  type="text"
                  className="w-full border-2"
                  id="uname"
                  name="uname"
                />
                <br />
                <br />
              </div>
              {/* ----- */}
              <div className="w-36">
                <label htmlFor="pwd" className="text-left">
                  Password:
                </label>
              </div>
              <div className="mt-2">
                <input
                  type="password"
                  className="w-full border-2"
                  id="pwd"
                  name="pwd"
                />
                <br />
                <br />
              </div>
              {/* ----- */}
              <div className="w-36">
                <label htmlFor="rname" className="text-left">
                  Real Name:
                </label>
              </div>
              <div className="mt-2">
                <input
                  type="text"
                  className="w-full border-2"
                  id="rname"
                  name="rname"
                />
                <br />
                <br />
              </div>
              {/* ----- */}
              <div className="w-36">
                <label htmlFor="email" className="text-left">
                  Email:
                </label>
              </div>
              <div className="mt-2">
                <input
                  type="text"
                  className="w-full border-2"
                  id="email"
                  name="email"
                />
                <br />
                <br />
              </div>
              {/* ----- */}
              <div className="w-36">
                <label htmlFor="fname" className="text-left">
                  Phone:
                </label>
              </div>
              <div className="mt-2">
                <input
                  type="text"
                  className="w-full border-2"
                  id="phone"
                  name="phone"
                />
                <br />
                <br />
              </div>
              {/* ----- */}
              <div className="w-36">
                <label htmlFor="fname" className="text-left">
                  Birthday:
                </label>
              </div>
              <div className="mt-2">
                <input
                  type="text"
                  className="w-full border-2"
                  id="bday"
                  name="bday"
                />
                <br />
                <br />
              </div>
              {/* ----- */}

              <button
                type="button"
                className="text-black bg-orange-400 hover:bg-orange-800 border-2 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium w-28 py-1 text-center"
              >
                Save
              </button>

              <button
                type="button"
                className="text-black bg-white hover:bg-orange-800 border-2 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium w-28 py-1 text-center ml-5"
              >
                Cancel
              </button>
            </div>
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


export default EditProfile;