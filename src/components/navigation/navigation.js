import React from 'react';
import styles from './navigation.scss';

import MainNav from './main-nav/main-nav';
import EventSubNav from './event-sub-nav/event-sub-nav';

const Navigation = ({ context }) => (
    <div className={styles.container}>
        <MainNav minimised={!!context} />
        { context && context.type === 'manageEvent' &&
            <aside className={styles.subNavContainer}>
                <EventSubNav />
            </aside>
        }
    </div>
);

export default Navigation;