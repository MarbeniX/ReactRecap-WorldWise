import styles from "./Sidebar.module.css";
import Logo from "./Logo";
import AppNav from "./AppNav";
import PropTypes from "prop-types";

Sidebar.propTypes = {
    children: PropTypes.node,
};

export default function Sidebar({ children }) {
    return (
        <div className={styles.sidebar}>
            <Logo />
            <AppNav />

            {children}
            <footer className={styles.footer}>
                <p className={styles.copyright}>
                    &copy; Copyright {new Date().getFullYear()} Woldwise. All
                    rights reserved.
                </p>
            </footer>
        </div>
    );
}
