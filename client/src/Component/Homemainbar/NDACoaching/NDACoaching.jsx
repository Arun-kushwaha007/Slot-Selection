import React from "react";
import CircleImage from "./CircleImage";
import ChatBubble from "./ChatBubble";

function NDACoaching() {
  return (
    <section className="p-20 max-md:px-5">
      <div className="flex gap-5 max-md:flex-col">
        <header className="flex flex-col w-[34%] max-md:ml-0 max-md:w-full">
          <h1 className="mt-8 text-4xl font-bold leading-[50px] text-neutral-800 max-md:mt-10">
            India's Best{" "}
            <span className="text-amber-500">NDA ONLINE COACHING</span>
            <br /> Provider
          </h1>
        </header>
        <main className="flex flex-col ml-5 w-[66%] max-md:ml-0 max-md:w-full">
          <div className="grow max-md:mt-10 max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col">
              <div className="flex flex-col w-[24%] max-md:ml-0 max-md:w-full">
                <CircleImage className="mt-40 max-md:mt-10" />
              </div>
              <div className="flex flex-col ml-5 w-[76%] max-md:ml-0 max-md:w-full">
                <div className="flex flex-col items-start w-full max-md:mt-3.5 max-md:max-w-full">
                  <div className="flex gap-2.5 self-end">
                    <ChatBubble
                      text="what is this NDA coaching about ?"
                      className="self-end mt-24 max-md:mt-10"
                    />
                    <CircleImage />
                  </div>
                  <div className="z-10 px-3 pt-2 mt-2.5 max-w-full text-xs font-medium leading-5 text-white bg-amber-500 rounded-md shadow-[0px_0px_8px_rgba(0,0,0,0.08)] w-[222px]">
                    In this NDA training section you will <br />
                    be provided wiht the top NDA faculty <br />
                    videos.
                  </div>
                  {[1, 2].map((index) => (
                    <div
                      key={index}
                      className="flex shrink-0 bg-amber-500 rounded-md h-[30px] shadow-[0px_0px_8px_rgba(0,0,0,0.08)] w-[222px]"
                    />
                  ))}
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