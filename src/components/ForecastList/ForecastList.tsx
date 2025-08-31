import ForecastCard from '../ForecastCard/ForecastCard';
import styles from './ForecastList.module.scss';

const ForecastList = () => {
    return (
        <div className={styles.forecastList}>
            <ForecastCard />
        </div>
    );
};

export default ForecastList;