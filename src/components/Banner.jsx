import React from "react";

const Banner = () => {
  return (
    <div className="py-12">
      <div className="container px-3 lg:px-12">
        <div className="bg-[#f8f9fa] p-6 lg:p-12 rounded-lg">
          <div className="m-6 lg:m-12 text-center">
            <h1 className="text-[30px] lg:text-5xl text-[#212529] font-bold mb-2">
              A warm welcome!
            </h1>
            <p className="text-xl lg:text-2xl mb-4 text-[#212529]">
              Bootstrap utility classes are used to create this jumbotron since
              the old component has been removed from the framework. Why create
              custom CSS when you can use utilities?
            </p>
            <a
              href="#"
              className="cursor-pointer inline-block text-white text-xl bg-[#0d6efd] border border-transparent py-2 px-4 rounded-lg shadow-sm hover:bg-[#0b5ed7] hover:border-[#0a58ca]"
            >
              Call to action
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
