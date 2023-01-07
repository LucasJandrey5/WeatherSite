import { Input } from "postcss";
import React from "react";

const Home = () => {
  return (
    <div className="p-5">
      <main className="text-center flex flex-col ">
        <h2 className="font-sans font-bold text-5xl">
          Modernise with the{" "}
          <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-yellow-300">
            cloud
          </span>{" "}
          that comes to you
        </h2>

        <p className="mt-10 font-sans font-light text-gray-500">
          We’re helping to spread happiness with our ‘drink happy, spread happy’
          smoothies…read about how ethically sourcing moringa has had a positive
          impact on farmers and communities.
        </p>

        <button className="mt-10 py-5 flex justify-center items-center bg-gradient-to-r from-red-500 to-yellow-300 rounded-xl text-gray-50 font-sans font-semibold">
          <div>Search your city</div>
          <div className="ml-3">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M21 21L16.514 16.506L21 21ZM19 10.5C19 12.7543 18.1045 14.9163 16.5104 16.5104C14.9163 18.1045 12.7543 19 10.5 19C8.24566 19 6.08365 18.1045 4.48959 16.5104C2.89553 14.9163 2 12.7543 2 10.5C2 8.24566 2.89553 6.08365 4.48959 4.48959C6.08365 2.89553 8.24566 2 10.5 2C12.7543 2 14.9163 2.89553 16.5104 4.48959C18.1045 6.08365 19 8.24566 19 10.5V10.5Z"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </div>
        </button>
      </main>
    </div>
  );
};

export default Home;
