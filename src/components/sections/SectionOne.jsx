import React from "react";

function SectionOne() {
  return (
    <>
      <div className="index-1">
        <h1 className="overflow-hidden font-bold text-center text-7xl text-blue-950 pt-36">
          Designed for the future{" "}
        </h1>
        <div className="flex flex-row-reverse max-w-fit">
          <div className="flex flex-col ml-28 text-balance text-start mt-72">
            <h1 className="text-3xl font-bold text-blue-900">
              Introduction an extensable editor
            </h1>
            <p className="pt-4 text-xl text-gray-600">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
              <br /> labore molestias dicta! Architecto est non magni <br />
              cupiditate accusamus, sapiente deleniti dolorem, harum <br />{" "}
              voluptatum et repudiandae enim sit dolorum! Itaque, earum.
            </p>
            <h1 className="pt-8 text-3xl font-bold text-blue-900">
              Robust contect management
            </h1>
            <p className="pt-4 text-xl text-gray-600">
              Lorem ipsum dolor sit amet consectetur <br />
              adipisicing elit. Perspiciatis eligendi inventore corporis <br />{" "}
              provident pariatur, veniam quae, at iste optio suscipit <br />{" "}
              cupiditate repellendus id impedit, natus aperiam <br />
              facilis ut distinctio! Nesciunt?
            </p>
          </div>
          <div>
            <img
              className="absolute -right-1/4"
              src="../images/illustration-editor-desktop.svg"
              alt="imageOfLaptop"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default SectionOne;
