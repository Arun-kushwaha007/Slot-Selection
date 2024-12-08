import React from "react";
import CircleImage from "./CircleImage";
import ChatBubble from "./ChatBubble";
import person1 from "../../../Assets/charcters/person1.png";
import person2 from "../../../Assets/charcters/person2.png";

function NDACoaching() {
  return (
    <section className="p-20 pb-40 bg-[#EBEEFF] max-md:px-5">
      <div className="flex gap-5 max-md:flex-col">
        {/* Header Section */}
        <header className="flex flex-col w-[34%] max-md:w-full">
          <h1 className="mt-8 text-4xl font-bold leading-[50px] text-neutral-800 max-md:text-2xl max-md:leading-8 max-md:mt-4">
            India's Best{" "}
            <span className="text-amber-500">NDA ONLINE COACHING</span>
            <br /> Provider
          </h1>
        </header>
        {/* Main Section */}
        <main className="flex flex-col ml-5 w-[66%] max-md:ml-0 max-md:w-full">
          <div className="grow max-md:mt-5">
            <div className="flex gap-5 max-md:flex-col">
              {/* Circle Image */}
              <div className="flex gap-2.5 self-start max-md:justify-center max-md:mt-2">
                <CircleImage className="mt-40 max-md:mt-1" image={person1} />
              </div>
              {/* Chat Bubble Section */}
              <div className="flex flex-col ml-5 w-[76%] max-md:ml-0 max-md:w-full">
                <div className="flex flex-col items-start w-full max-md:mt-3.5 ">
                  <div className="flex gap-2.5 self-end max-md:justify-center max-md:flex-col-reverse">
                    <ChatBubble
                      text="what is this NDA coaching about ?"
                      className="self-end mt-24 max-md:mt-3 lg:mb-16"
                    />
                    <CircleImage image={person2} className="mb-20 max-md:mt-1"/>
                  </div>
                  {/* Description Box */}
                  <div className="z-10 px-3 pt-2 mb-2.5 relative bottom-8 max-w-full text-xs font-medium leading-5 text-white bg-amber-500 rounded-md shadow-[0px_0px_8px_rgba(0,0,0,0.08)] w-[222px] max-md:w-full">
                    In this NDA training section you will <br />
                    be provided with the top NDA faculty <br />
                    videos.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </section>
  );
}

export default NDACoaching;
