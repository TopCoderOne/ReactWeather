import styles from './ForecastFilter.module.scss';

const ForecastFilter = () => {
    return (
        <div className={styles.forecastFilter}>
            <div className={styles.set_of_buttons}>
                <button type="button">На неделю</button>
                <button type="button">На месяц</button>
                <button type="button">На 10 дней</button>
            </div>
            <button type="button">Отменить</button>
        </div>
    );
};

export default ForecastFilter;