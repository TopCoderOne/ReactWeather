import styles from './CurrentWeatherCard.module.scss';
import SunIcon from '../../assets/icons/forecast-card/sun.svg?react';

const CurrentWeatherCard = () => {
    return (
        <div className={styles.current_weather_card}>
            <div className={styles.header}>
                <p>
                    <span>20°</span>
                    <span>Сегодня</span>
                </p>
                <SunIcon />
            </div>
            <p>Время: 21:54</p>
            <p>Город: Санкт-Петербург</p>
        </div>
    );
};

export default CurrentWeatherCard;