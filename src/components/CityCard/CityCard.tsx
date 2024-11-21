import styles from "./css/CityCard.module.css";
import { WeatherContext } from "@modules/Home/Home";
import { useContext } from "react";

const CityCard = ({
  cityCardName,
  cityPicture,
}: {
  cityCardName: string;
  cityPicture: string;
}) => {
  const { fetchWeather, setCityName } = useContext(WeatherContext);

  return (
    <div
      className={styles.cityCard}
      onClick={() => {
        fetchWeather(cityCardName, true);
        setCityName(cityCardName);
      }}
    >
      <img src={cityPicture} />
      <span>{cityCardName}</span>
    </div>
  );
};

export default CityCard;
