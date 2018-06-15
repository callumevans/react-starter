import React from 'react';
import cx from 'classnames';
import { NavLink } from 'react-router-dom';
import styles from './main-nav.scss';

const MainNav = ({ minimised }) => (
    <div>
        <ul className={cx(styles.navItemsContainer, minimised ? styles.minimised : '')}>
            <li className={styles.navItemsGroup}>
                <NavLink exact to="/" activeClassName={styles.active} >
                    <i className={cx('fal fa-home', styles.icon)} />
                    <span className={styles.navText}>Home</span>
                </NavLink>
            </li>

            <li className={styles.navItemsGroup}>
                <NavLink to="/events" activeClassName={styles.active}>
                    <i className={cx('fal fa-ticket-alt', styles.icon)} />
                    <span className={styles.navText}>Events</span>
                </NavLink>
            </li>
        </ul>
    </div>
);

export default MainNav;