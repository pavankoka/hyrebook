import React from 'react';
import cx from 'classnames';
import styles from './section-2.module.scss';

function Section({ rootStyles }) {
    return (
        <div className={cx(styles.wrapper, rootStyles.section)}>
            <div className={styles.content}>
                <div>
                    <h3 className={styles.header4} style={{ marginBottom: '22px', textAlign: 'center', fontFamily: 'Roboto' }}>36 +</h3>
                    <p className={styles.text3} style={{ textAlign: 'center', fontFamily: 'Montserrat' }}>Partner companies</p>
                </div>
                <div>
                    <h3 className={styles.header4} style={{ marginBottom: '22px', textAlign: 'center', fontFamily: 'Roboto' }}>12756</h3>
                    <p className={styles.text3} style={{ textAlign: 'center', fontFamily: 'Montserrat' }}>Open job positions</p>
                </div>
                <div>
                    <h3 className={styles.header4} style={{ marginBottom: '22px', textAlign: 'center', fontFamily: 'Roboto' }}>1980</h3>
                    <p className={styles.text3} style={{ textAlign: 'center', fontFamily: 'Montserrat' }}>Canditates hired</p>
                </div>
                <div>
                    <h3 className={styles.header4} style={{ marginBottom: '22px', textAlign: 'center', fontFamily: 'Roboto' }}>7 Days</h3>
                    <p className={styles.text3} style={{ textAlign: 'center', fontFamily: 'Montserrat' }}>Average process time</p>
                </div>
            </div>
        </div>
    )
}

export default Section;