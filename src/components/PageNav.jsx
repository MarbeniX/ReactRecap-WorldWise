import { NavLink } from "react-router-dom";
import styles from "./PageNav.module.css";
import Logo from "./Logo";

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
    login: {
        link: "/login",
        label: "Login",
    },
};

export default function NavBar() {
    return (
        <nav className={styles.nav}>
            <Logo />
            <ul>
                {Object.values(Links).map((link) => (
                    <li key={link.label}>
                        <NavLink
                            className={`${
                                link.label === "Login" ? styles.ctaLink : ""
                            }`}
                            to={link.link}
                        >
                            {link.label}
                        </NavLink>
                    </li>
                ))}
            </ul>
        </nav>
    );
}
