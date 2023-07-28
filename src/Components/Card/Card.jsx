import React, { useState } from "react";
import { useEffect } from "react";
import { cardsOptions } from "./cardsOptions";
import useAPI from "../../api/useAPI";

import axios from "axios";

const apiWeather = axios.create({
  baseURL: process.env.REACT_APP_WEATHER_API,
});

const apiCountries = axios.create({
  baseURL: process.env.REACT_APP_COUNTRIES_API,
});

const Card = ({ location }) => {
  const [info, setInfo] = useState();
  const [currentCard, setCurrentCard] = useState();
  const [uf, setUf] = useState();
  const [time, setTime] = useState("00:00");
  const [dayName, setDayName] = useState("Monday");

  useEffect(() => {
    const getInfo = async () => {
      const res = await apiWeather.get(
        "/current.json?key=" +
          process.env.REACT_APP_WEATHER_KEY +
          "&q=" +
          location
      );

      setInfo(res.data);
    };

    getInfo().catch(console.error);
  }, [location]);

  useEffect(() => {
    const setCard = async () => {
      const card = await cardsOptions.find((item) => {
        return item.code === info.current.condition.code;
      });
      setCurrentCard(card);
    };

    const get2LettersCode = async () => {
      const res = await apiCountries.get("/name/" + info.location.country);
      setUf(res.data[0].cca2);
    };

    if (!info) return;

    setCard();
    get2LettersCode();
    setTime(info.current.last_updated.split(" ")[1]);

    setDayName(getDayName("01/06/2023", "en-us")); //mm/dd/yyyy
    //console.log(info.current.last_updated.split(" ")[0]);
  }, [info]);

  function getDayName(dateStr, locale) {
    var currentDate = info.current.last_updated.split(" ")[0].split("/");
    var day = currentDate[2];
    var month = currentDate[1];
    var year = currentDate[0];
    var date = new Date(month + "/" + day + "/" + year);
    return date.toLocaleDateString(locale, { weekday: "long" });
  }

  return (
    <div>
      {currentCard && info && uf ? (
        <div
          className={
            "max-w-xs p-6 mt-16 mx-10 flex flex-col items-center border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 bg-gradient-to-br " +
            (info.current.is_day === 1
              ? currentCard.bg_day_from
              : currentCard.bg_night_from) +
            " " +
            (info.current.is_day === 1
              ? currentCard.bg_day_to
              : currentCard.bg_night_to)
          }
        >
          <img
            src={require("../../images/weatherImages/" +
              (info.current.is_day === 1
                ? currentCard.imgDay
                : currentCard.imgNight))}
            className="w-48 -mt-28 -ml-10"
          ></img>
          <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-50 ">
            {info.location.name}, {uf}
          </h5>

          <p className="mb-3 font-normal text-white opacity-50 text-center">
            {dayName}, {time} <br />
            {info.current.condition.text}
          </p>
          <p className="mb-3 font-medium text-white">
            {info.current.temp_c}° C
          </p>
        </div>
      ) : (
        <p></p>
      )}
    </div>
  );
};

export default Card;
