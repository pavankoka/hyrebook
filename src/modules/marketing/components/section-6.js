import React from 'react';
import cx from 'classnames';
import styles from './section-6.module.scss';

function Section({ rootStyles }) {
    return (
        <div className={cx(styles.wrapper, rootStyles.section)}>
            <div className={styles.content}>
                <img src={require('assets/images/network.svg')} alt='network' style={{ maxWidth: '50%' }} />
                <div className={rootStyles.commonSectionTextRight} style={{ maxWidth: '50%' }}>
                    <p className={rootStyles.header4} style={{ maxWidth: '505px', marginBottom: '30px' }}>Easy connect with recruiters</p>
                    <p className={rootStyles.text3} style={{ maxWidth: '545px' }}>We have a global team of expert recruiters to connect you to your dream organization.</p>
                </div>
            </div>
        </div>
    )
}

export default Section;