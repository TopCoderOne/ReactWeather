import styles from './ForecastCard.module.scss';
import SunIcon from '../../assets/icons/forecast-card/sun.svg?react';

const ForecastCard = () => {
    return (
        <div className={styles.forecastCard}>
            <p className={styles.day}>Сегодня</p>
            <p className={styles.data}>28 авг</p>
            <SunIcon />
            <p className={styles.temperatureNew}>+18°</p>
            <p className={styles.temperaturePrev}>+15°</p>
            <p className={styles.weather}>Облачно</p>
        </div>
    );
};

export default ForecastCard;