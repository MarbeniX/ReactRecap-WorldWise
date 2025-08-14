import styles from "./CityItem.module.css";
import PropTypes from "prop-types";
import { formatDate } from "../utils/FormDate";

CityItem.propTypes = {
    city: PropTypes.shape({
        emoji: PropTypes.string.isRequired,
        cityName: PropTypes.string.isRequired,
        date: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.instanceOf(Date),
        ]).isRequired,
    }).isRequired,
};

export default function CityItem({ city }) {
    const { cityName, emoji, date } = city;
    return (
        <li className={styles.cityItem}>
            <span className={styles.emoji}>{emoji}</span>
            <h3 className={styles.name}>{cityName}</h3>
            <time className={styles.date}>({formatDate(date)})</time>
            <button className={styles.deleteBtn}>&times;</button>
        </li>
    );
}
