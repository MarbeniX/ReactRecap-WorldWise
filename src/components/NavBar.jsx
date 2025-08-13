import { NavLink } from "react-router-dom";
import styles from "./NavBar.module.css";

const Links = {
    home: {
        link: "/",
        label: "Home",
    },
    pricing: {
        link: "/pricing",
        label: "Pricing",
    },
    product: {
        link: "/product",
        label: "Product",
    },
};

export default function NavBar() {
    return (
        <nav className={styles.nav}>
            <ul>
                {Object.values(Links).map((link) => (
                    <li key={link.label}>
                        <NavLink to={link.link}>{link.label}</NavLink>
                    </li>
                ))}
            </ul>
        </nav>
    );
}
