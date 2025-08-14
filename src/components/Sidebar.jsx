import styles from "./Sidebar.module.css";
import Logo from "./Logo";
import AppNav from "./AppNav";
import { Outlet } from "react-router-dom";
import PropTypes from "prop-types";

Sidebar.propTypes = {
    cities: PropTypes.array,
    loading: PropTypes.bool,
};
export default function Sidebar({ cities, loading }) {
    return (
        <div className={styles.sidebar}>
            <Logo />
            <AppNav />

            <Outlet context={{ cities, loading }} />
            <footer className={styles.footer}>
                <p className={styles.copyright}>
                    &copy; Copyright {new Date().getFullYear()} Woldwise. All
                    rights reserved.
                </p>
            </footer>
        </div>
    );
}
