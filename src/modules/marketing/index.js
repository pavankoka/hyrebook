import React from 'react';
import cx from 'classnames';
import { connect } from 'react-redux';

import Section1 from './components/section-1';
import Section2 from './components/section-2';
import Section3 from './components/section-3';
import Section4 from './components/section-4';
import Section5 from './components/section-5';
import Section6 from './components/section-6';
import Section7 from './components/section-7';
import Section8 from './components/section-8';
import Section9 from './components/section-9';
import Section10 from './components/section-10';

import styles from './index.module.scss';

const width = window.innerWidth;

function Marketing() {
    return (
        <div className={cx(styles.wrapper, { [styles.lowerResolution]: width < 1500 })}>
            <Section1 rootStyles={styles} />
            <Section2 rootStyles={styles} />
            <Section3 rootStyles={styles} />
            <Section4 rootStyles={styles} />
            <Section5 rootStyles={styles} />
            <Section6 rootStyles={styles} />
            <Section7 rootStyles={styles} />
            <Section8 rootStyles={styles} />
            <Section9 rootStyles={styles} />
            <Section10 rootStyles={styles} />
        </div>
    )
}

const mapStateToProps = ({
    auth: {
        user
    }
}) => {
    return {
        user
    };
}

export default connect(mapStateToProps, undefined)(Marketing);