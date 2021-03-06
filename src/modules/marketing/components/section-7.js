import React from 'react';
import cx from 'classnames';
import styles from './section-7.module.scss';

function Section({ rootStyles }) {
    return (
        <div className={cx(styles.wrapper, rootStyles.section)}>
            <div className={styles.content}>
                <div className={rootStyles.commonSectionTextLeft}>
                    <p className={rootStyles.header4} style={{ maxWidth: '550px', marginBottom: '30px' }}>Expert advise for your resume</p>
                    <p className={rootStyles.text3} style={{ maxWidth: '500px' }}>Complement your amazing skills with an attractive resume.</p>
                </div>
                <img src={require('assets/images/resume-experts.svg')} alt='resume-experts' style={{ maxWidth: '50%' }} />
            </div>
        </div>
    )
}

export default Section;