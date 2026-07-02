import React from "react";

function Header() {
  return (
    <>
      <div className="overflow-hidden bg-gradient-to-bl from-red-600 to-red-300 rounded-bl-3xl">
        <div className="flex flex-col">
          <div className="flex flex-row justify-around mt-5 ">
            <div className="flex flex-row items-center gap-8 text-white">
              <h1 className="text-4xl font-bold">Blogr</h1>
              <a className="flex gap-1 place-items-baseline" href="#">
                Product <img src="../images/icon-arrow-light.svg" alt="arrow" />
              </a>
              <a className="flex gap-1 place-items-baseline" href="#">
                Company <img src="../images/icon-arrow-light.svg" alt="arrow" />
              </a>
              <a className="flex gap-1 place-items-baseline" href="#">
                connect <img src="../images/icon-arrow-light.svg" alt="arrow" />
              </a>
            </div>
            <div className="flex gap-7">
              <button className="text-white">Login</button>
              <button className="w-20 h-10 text-red-500 duration-700 bg-white rounded-3xl hover:text-white hover:bg-transparent">
                SignUp
              </button>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center gap-4 mt-20 text-white">
            <h1 className="text-5xl font-bold">A Modern Publishing Platfrom</h1>
            <p className="text-xl">
              {" "}
              Grow your audience and build your online brand
            </p>
          </div>
          <div className="flex items-center justify-center gap-10 mt-14 mb-14">
            <button className="w-32 h-10 font-semibold text-red-500 duration-700 bg-white rounded-3xl hover:text-white hover:bg-transparent">
              Strat for Free
            </button>
            <button className="w-32 h-10 font-semibold text-white duration-700 border-2 rounded-3xl hover:bg-transparent">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
