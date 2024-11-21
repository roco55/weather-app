import { useContext, useEffect, useState } from "react";

import { SearchIcon } from "@icons/SearchIcon";
import { getFormattedCurrentDate } from "@/utils/date";
import { WeatherContext } from "@modules/Home/Home";

import styles from "./css/HeroSection.module.css";

export const HeroSection = () => {
  const {
    cityName,
    fetchWeather,
    handleCityChoice,
    isLoading,
    setCityName,
    weather,
    weatherList,
  } = useContext(WeatherContext);

  const [openPopover, setOpenPopover] = useState(false);

  const handleCitySearch = (event?: React.KeyboardEvent<HTMLInputElement>) => {
    if (!event || event.key === "Enter") {
      if (!cityName?.trim()) {
        return;
      }
      fetchWeather(cityName);
      setOpenPopover(true);
    }
  };

  useEffect(() => {
    fetchWeather("Kyiv", true);
  }, []);

  return (
    <div className={styles.wrapper}>
      <div className={styles.contentWrapper}>
        <div className={styles.searchBar}>
          <input
            type="text"
            placeholder="Start typing to search..."
            value={cityName}
            onChange={(event) => setCityName(event.target.value)}
            onKeyDown={(event) => handleCitySearch(event)}
          />
          <button onClick={() => handleCitySearch()}>
            <SearchIcon />
          </button>
        </div>

        {openPopover && (
          <div className={styles.weatherFindResponce}>
            {weatherList?.length ? (
              weatherList.map((el, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    handleCityChoice({ index: idx });
                    setOpenPopover(false);
                  }}
                >
                  {el.name}, {el.sys.country}
                </button>
              ))
            ) : (
              <span>
                City not found, please try to change your search query
              </span>
            )}
          </div>
        )}

        <div className={styles.weatherDetails}>
          {weather && (
            <>
              <div className={styles.cardHeader}>
                <div className={styles.cardContent}>
                  {" "}
                  <div className={styles.weatherIcon}>
                    <img
                      src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
                    />
                  </div>
                  <div className={styles.currentWeather}>
                    {weather.main ? (
                      <>
                        <h2>{Math.round(weather.main.temp)}°C</h2>
                        <h3>{weather.weather[0].main}</h3>
                        <span>{weather.weather[0].description}</span>
                      </>
                    ) : null}
                  </div>
                </div>
                <div className={styles.cityAndDate}>
                  {weather.sys ? (
                    <h2>
                      {weather.name}, {weather.sys.country}
                    </h2>
                  ) : null}
                  <span>{getFormattedCurrentDate()}</span>
                </div>
              </div>
              <hr />
              <div className={styles.cardFooter}>
                <div className={styles.tempMin}>
                  <span>Min</span>
                  <h2>{Math.round(weather.main.temp_min)}°C</h2>
                </div>
                <hr />
                <div className={styles.tempMax}>
                  <span>Max</span>
                  <h2>{Math.round(weather.main.temp_max)}°C</h2>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
