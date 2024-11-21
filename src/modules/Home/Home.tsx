import React, { useState } from "react";

import { HeroSection } from "@modules/Home/components/HeroSection/HeroSection";
import { WeatherResponse } from "@api/weatherApi";
import { useFetchWeather } from "@api/hooks/weather";

import { FAQ } from "./components/FAQ/FAQ";
import { Footer } from "./components/Footer/Footer";
import { PopularCities } from "./components/PopularCities/PopularCities";

export interface WeatherContextProps {
  cityName: string;
  weatherList: WeatherResponse[] | null;
  weather: WeatherResponse | null;
  isLoading: boolean;
  fetchWeather: (city: string, initialRender?: boolean) => Promise<void>;
  handleCityChoice: ({ index }: { index: number }) => void;
  setCityName: React.Dispatch<React.SetStateAction<string>>;
}

const initialState: WeatherContextProps = {
  cityName: "",
  weatherList: null,
  weather: null,
  isLoading: false,
  fetchWeather: async () => {},
  handleCityChoice: ({ index }: { index: number }) => {},
  setCityName: () => {},
};

export const WeatherContext =
  React.createContext<WeatherContextProps>(initialState);

const Home = () => {
  const [cityName, setCityName] = useState("");
  const { weatherList, weather, isLoading, fetchWeather, handleCityChoice } =
    useFetchWeather();

  return (
    <>
      <WeatherContext.Provider
        value={{
          cityName,
          fetchWeather,
          handleCityChoice,
          weather,
          weatherList,
          isLoading,
          setCityName,
        }}
      >
        <HeroSection />
        <PopularCities />
      </WeatherContext.Provider>
      <FAQ />

      <Footer />
    </>
  );
};

export default Home;
