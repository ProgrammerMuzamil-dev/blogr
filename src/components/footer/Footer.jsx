import React from "react";

function Footer() {
  return (
    <>
      <div className="flex flex-row justify-around pt-5 pb-4 mt-5 text-center text-white bg-gray-900 rounded-tr-3xl">
        <h1 className="text-4xl ">Blogr</h1>

        <div className="flex flex-col">
          <h1 className="text-2xl">Product</h1>
          <ul className="mt-4 ">
            <li>Overview</li>
            <li>Pricing</li>
            <li>Marketplace</li>
            <li>Features</li>
            <li>Integrations</li>
          </ul>
        </div>
        <div className="flex flex-col">
          <h1 className="text-2xl">Company</h1>
          <ul className="mt-4 ">
            <li>About</li>
            <li>Tram</li>
            <li>Bloge</li>
            <li>Careers</li>
          </ul>
        </div>
        <div className="flex flex-col">
          <h1 className="text-2xl">Connect</h1>
          <ul className="mt-4 ">
            <li>Contact</li>
            <li>Newsletter</li>
            <li>Linkden</li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Footer;
