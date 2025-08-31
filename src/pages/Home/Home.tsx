import CurrentWeatherCard from '../../components/CurrentWeatherCard/CurrentWeatherCard';
import ForecastFilter from '../../components/ForecastFilter/ForecastFilter';
import ForecastList from '../../components/ForecastList/ForecastList';
import Header from '../../components/Header/Header';
import WeatherDetailsCard from '../../components/WeatherDetailsCard/WeatherDetailsCard';
import styles from './Home.module.scss';

const Home = () => {
    return (
        <div className={styles.home}>
            <div className={`${styles.homeContainer} container`}>
                <Header />
                <div className={styles.content}>
                    <CurrentWeatherCard />
                    <WeatherDetailsCard />
                    <ForecastFilter />
                    <ForecastList />
                </div>
            </div>
        </div>
    );
};

export default Home;