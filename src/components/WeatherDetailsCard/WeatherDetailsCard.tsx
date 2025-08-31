import styles from './WeatherDetailsCard.module.scss';
import CloudImg from '../../assets/images/weather-details-card/cloud.png';
import ThermometerIcon from '../../assets/icons/weather-details-card/thermometer.svg?react';
import HumidityIcon from '../../assets/icons/weather-details-card/humidity.svg?react';
import EvaporationIcon from '../../assets/icons/weather-details-card/evaporation.svg?react';
import WindIcon from '../../assets/icons/weather-details-card/wind.svg?react';

const WeatherDetailsCard = () => {
    return (
        <div className={styles.weatherDetailsCard}>
            <div className={styles.content}>
                <img src={CloudImg} alt="Image cloud" />
                <p>
                    <span><ThermometerIcon /></span>
                    <span>Температура</span> <span>20° - ощущается как 17°</span>
                </p>
                <p>
                    <span><HumidityIcon /></span>
                    <span>Давление</span> <span>765 мм ртутного столба - нормальное</span>
                </p>
                <p>
                    <span><EvaporationIcon /></span>
                    <span>Осадки</span> <span>Без осадков</span>
                </p>
                <p>
                    <span><WindIcon /></span>
                    <span>Ветер</span> <span>3 м/с юго-запад - легкий ветер</span>
                </p>
            </div>
        </div>
    );
};

export default WeatherDetailsCard;