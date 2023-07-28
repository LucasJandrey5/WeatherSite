import React, { useEffect, useState } from "react";
import Card from "../../Components/Card/Card";
import SearchBox from "./SearchBox";
import HomeText from "./HomeText.tsx";

const Home = () => {
  const [inputText, setInputText] = useState("");
  const [searchCardText, setSearchCardText] = useState("");

  function handleSearchCard() {
    setSearchCardText(inputText);
  }

  return (
    <div className="p-5 dark:bg-gray-900">
      <main className="text-center flex flex-col items-center">
        <HomeText />

        <SearchBox
          setInputText={setInputText}
          handleSearchCard={handleSearchCard}
        />
      </main>

      {searchCardText != "" && (
        <div className="flex flex-wrap justify-center mb-16">
          <Card location={searchCardText} />
        </div>
      )}

      <hr />

      <h3 className="font-sans font-bold text-3xl text-center mt-5 mb-3 dark:text-white">
        Major cities
      </h3>
      <div className="flex flex-wrap justify-center">
        <Card location="Chapecó" />
        <Card location="Brasilia" />
        <Card location="Peru" />
        <Card location="China" />
      </div>
    </div>
  );
};

export default Home;
