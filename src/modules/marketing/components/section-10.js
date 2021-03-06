import React from 'react';
import cx from 'classnames';
import styles from './section-10.module.scss';

function Section({ rootStyles }) {
    return (
        <div className={cx(styles.wrapper, rootStyles.footerSection)}>
            <div className={styles.innerWrapper}>
                <p className={rootStyles.text5}>CIN : U72900PN2020PTC193934</p>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <img src={require('assets/icons/copyright.svg')} alt='copyright' style={{ marginRight: '5px', height: '18px' }} />
                    <p className={rootStyles.text5}>Pastelcube Technologies Private Limited</p>
                </div>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <p className={rootStyles.text5} style={{ marginRight: '10px' }}>Made in India with</p>
                    <img src={require('assets/icons/love.svg')} alt='love' style={{ height: '18px' }} />
                </div>
            </div>
        </div >
    )
}

export default Section;