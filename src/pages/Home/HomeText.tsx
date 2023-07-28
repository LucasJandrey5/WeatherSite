import React from "react";

const HomeText = () => {
  return (
    <div>
      {" "}
      <h2 className="font-sans font-bold text-5xl dark:text-white">
        Modernise with the{" "}
        <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-yellow-300">
          cloud
        </span>{" "}
        that comes to you
      </h2>
      <p className="mt-10 font-sans font-light text-gray-500 dark:text-gray-200">
        We’re helping to spread happiness with our ‘drink happy, spread happy’
        smoothies…read about how ethically sourcing moringa has had a positive
        impact on farmers and communities.
      </p>
    </div>
  );
};

export default HomeText;
