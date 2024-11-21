import { useState } from "react";

import { WeatherResponse, fetchWeatherData } from "@api/weatherApi";

export const useFetchWeather = () => {
  const [weatherList, setWeatherList] = useState<WeatherResponse[] | null>(
    null,
  );
  const [weather, setWeather] = useState<WeatherResponse | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleCityChoice = ({ index }: { index: number }) => {
    if (weatherList) {
      setWeather(weatherList[index]);
    }
  };

  const fetchWeather = async (city: string, initialRender?: boolean) => {
    setIsLoading(true);
    setError(null);
    if (initialRender) {
      try {
        const weatherData = await fetchWeatherData({ cityName: city });
        setWeather(weatherData[0]);
      } catch {
        setError("Something went wrong");
      } finally {
        setIsLoading(false);
      }
    } else {
      try {
        const weatherData = await fetchWeatherData({ cityName: city });
        setWeatherList(weatherData);
      } catch {
        setError("Something went wrong");
      } finally {
        setIsLoading(false);
      }
    }
  };

  return {
    weatherList,
    weather,
    isLoading,
    error,
    fetchWeather,
    handleCityChoice,
  };
};
