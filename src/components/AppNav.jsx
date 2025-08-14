import { NavLink } from "react-router-dom";
import styles from "./AppNav.module.css";

const tabs = [
    { to: "cities", label: "Cities" },
    { to: "countries", label: "Countries" },
];

export default function AppNav() {
    return (
        <nav className={styles.nav}>
            <ul>
                {tabs.map((tab) => (
                    <li key={tab.label}>
                        <NavLink to={tab.to}>{tab.label}</NavLink>
                    </li>
                ))}
            </ul>
        </nav>
    );
}
