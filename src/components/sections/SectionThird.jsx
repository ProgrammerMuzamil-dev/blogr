import React from "react";

function SectionThird() {
  return (
    <>
      <div className="flex mt-36">
        <div className="flex items-center  justify-start pl-[clamp(24px,6vw,96px)] flex-1 overflow-hidden">
          <img
            src="../images/illustration-laptop-desktop.svg"
            alt="laptopimg"
            className="w-full max-w-[100%] h-auto object-contain"
          />
        </div>
        <div className="items-center justify-center flex-1 pr-12 text-balance text-start">
          <h1 className="pt-8 text-3xl font-bold text-blue-900">
            Free,open,simple
          </h1>
          <p className="pt-4 text-xl text-gray-600">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint
            dolorem rerum veniam, in dolor ea, repudiandae aperiam voluptates
            excepturi dignissimos tempore optio corrupti minima quibusdam
            aliquid inventore ducimus, voluptas consequuntur. Lorem ipsum dolor
            sit amet consectetur adipisicing elit. Animi, doloribus, voluptates
            quaerat modi aspernatur cupiditate eveniet voluptate distinctio in
            aliquam facere reiciendis quia deserunt voluptas. Eius quae nemo
            porro voluptatum.
          </p>
          <h1 className="pt-8 text-3xl font-bold text-blue-900">
            Powerfull tooling
          </h1>
          <p className="pt-4 text-xl text-gray-600">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum quos
            nulla praesentium optio, minima ea sit veritatis? Autem voluptatem
            consectetur ullam odit nisi repudiandae saepe. Inventore hic quod
            quisquam adipisci!
          </p>
        </div>
      </div>
    </>
  );
}

export default SectionThird;
