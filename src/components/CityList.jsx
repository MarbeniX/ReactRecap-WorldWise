import Spinner from "./Spinner";
import Message from "./Message";
import styles from "./CityList.module.css";
import CityItem from "./CityItem";
import { useOutletContext } from "react-router-dom";

export default function CityList() {
    const { cities, loading } = useOutletContext();

    if (loading) return <Spinner />;
    if (!cities.length)
        return (
            <Message message="Add your first city by clicking on a city on the map" />
        );
    return (
        <ul className={styles.cityList}>
            {cities.map((city) => (
                <CityItem key={city.id} city={city} />
            ))}
        </ul>
    );
}
