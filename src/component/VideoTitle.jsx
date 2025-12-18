import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
      <div className="w-screen aspect-video absolute pt-[20%] px-24 text-white bg-gradient-to-r from-black">
        <h1 className=" text-4xl text-white font-bold text-left">
          {title}
        </h1>
        <p className=" w-5/12 text-left pt-10 text-[1rem] text-white">
          {overview}
        </p>
        <div className="left-10 top-1/2 py-8 flex flex-row w-5/12">
          <button className="m-2 px-12 h-11 text-black bg-white  text-xl rounded hover:bg-opacity-80 ">▶ Play</button>
          <button className="m-2 px-10 h-11 bg-gray-500 bg-opacity-30 rounded text-xl" >More Info</button>
        </div>
      </div>
  );
};

export default VideoTitle;
