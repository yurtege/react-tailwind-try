import { ReactTyped } from "react-typed";

function Hero() {
  return (
  <div className="text-white">
      <div className="max-w-200 w-full -mt-24 h-screen mx-auto flex flex-col text-center justify-center">
          <p className="text-green-500 font-bold text-xl sm:text-2xl md:text-4xl md:p-6">GROWING WITH DATA ANALYTICS</p>
          <h1 className="font-bold text-3xl sm:text-4xl md:text-6xl">Grow with data,</h1>
          <div className="font-bold text-xl sm:text-2xl md:text-4xl flex justify-center p-2">
              <p className="mr-2">Fast, flexible financing for</p>
              <ReactTyped className="text-gray-600" strings={["BTC", "BTB", "SASS"]} typeSpeed={120} backSpeed={140} loop />
          </div>
          <p className="text-gray-600 text-xl md:text-2xl p-6">Monitor your data analytics to increase revenue for BTB, BTC, & SASS platforms.</p>
          <button className="text-xl sm:text-2xl md:4xl bg-green-500 rounded-md sm:px-3 sm:py-4 md:px-4 md:py-3 py-2 mx-auto w-40 md:w-50 text-black font-medium cursor-pointer">Get Started</button>
      </div>
  </div>
);
}

export default Hero