import React from 'react';
import cx from 'classnames';
import styles from './section-5.module.scss';

function Section({ rootStyles }) {
    return (
        <div className={cx(styles.wrapper, rootStyles.section)}>
            <div className={styles.content}>
                <div className={rootStyles.commonSectionTextLeft}>
                    <p className={rootStyles.header4} style={{ maxWidth: '470px', marginBottom: '30px' }}>AI based job recommendations</p>
                    <p className={rootStyles.text3} style={{ maxWidth: '460px' }}>95% of candidates find the perfect job within the first 10 recommendations.</p>
                </div>
                <img src={require('assets/images/man-working.svg')} alt='man-working' style={{ maxWidth: '50%' }} />
            </div>
        </div>
    )
}

export default Section;