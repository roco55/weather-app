import { SearchIcon } from "@icons/SearchIcon";
import styles from "./css/HeroSection.module.css";
import { WeatherIcon } from "@icons/WeatherIcon";

export const HeroSection = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.contentWrapper}>
        <div className={styles.searchBar}>
          <input type="text" placeholder="Start typing to search..." />
          <button>
            <SearchIcon />
          </button>
        </div>
        <div className={styles.weatherDetails}>
          <div className={styles.cardHeader}>
            <div className={styles.weatherIcon}>
              <WeatherIcon />
            </div>
            <div className={styles.dataWrapper}>
              <div className={styles.currentWeather}>
                <h2>+23°C</h2>
                <h3>Drizzle</h3>
                <span>Light intensity drizzle</span>
              </div>
              <div className={styles.cityAndDate}>
                <h2>Odessa, Ukraine</h2>
                <span>10 March 2020</span>
              </div>
            </div>
          </div>
          <hr />
          <div className={styles.cardFooter}>
            <div className={styles.tempMin}>
              <span>Min</span>
              <h2>-33°C</h2>
            </div>
            <hr />
            <div className={styles.tempMax}>
              <span>Max</span>
              <h2>+33°C</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
