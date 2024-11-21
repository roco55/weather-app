import CityCard from "@components/CityCard/CityCard";

import styles from "./css/PopularCities.module.css";
import DubaiPicture from "/images/dubai.jpg";
import LondonPicture from "/images/london.jpg";
import NewYorkPicture from "/images/ny.jpg";
import ParisPicture from "/images/paris.jpg";

const CityCards = [
  { cityName: "New York", cityPicture: NewYorkPicture },
  { cityName: "London", cityPicture: LondonPicture },
  { cityName: "Dubai", cityPicture: DubaiPicture },
  { cityName: "Paris", cityPicture: ParisPicture },
];

export const PopularCities = () => {
  return (
    <div className={styles.wrapper}>
      <h1>Check the weather in most popular cities in the world</h1>
      <div className={styles.cityGrid}>
        {CityCards.map((props, idx) => (
          <CityCard
            cityCardName={props.cityName}
            cityPicture={props.cityPicture}
            key={idx}
          />
        ))}
      </div>
    </div>
  );
};
