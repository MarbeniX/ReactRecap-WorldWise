import { useOutletContext } from "react-router-dom";
import styles from "./CountryList.module.css";

import Spinner from "./Spinner";
import Message from "./Message";
import CountryItem from "./CountryItem";

export default function CountryList() {
    const { loading, cities } = useOutletContext();

    console.log(cities);

    const countries = cities.reduce((acc, city) => {
        if (!acc.map((el) => el.country).includes(city.country)) {
            return [...acc, { country: city.country, emoji: city.emoji }];
        } else return acc;
    }, []);

    if (loading) return <Spinner />;
    if (countries.lenght === 0)
        return <Message message="No countries available" />;
    return (
        <ul className={styles.countryList}>
            {countries.map((country, index) => (
                <CountryItem key={index} country={country} />
            ))}
        </ul>
    );
}
