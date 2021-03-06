import React from 'react';
import cx from 'classnames';
import styles from './section-4.module.scss';

function Section({ rootStyles }) {
    return (
        <div className={cx(styles.wrapper, rootStyles.section)}>
            <div className={styles.content}>
                <p className={rootStyles.header4} style={{ marginBottom: '80px' }}>3 simple steps to apply</p>
                <div style={{ display: 'flex', width: '100%', justifyContent: 'space-between', alignItems: 'center', fontWeight: '200' }}>
                    <div>
                        <img className={rootStyles.section4Images} src={require('assets/images/resume.svg')} alt='resume' style={{ marginBottom: '32px' }} />
                        <p className={rootStyles.text3} style={{ textAlign: 'right', width: '110%' }}>Upload Resume</p>
                    </div>
                    <img className={rootStyles.section4Dashes} src={require('assets/images/dashed-line.svg')} alt='line' />
                    <div>
                        <img className={rootStyles.section4Images} src={require('assets/images/profile.svg')} alt='profile' style={{ marginBottom: '24px' }} />
                        <p className={rootStyles.text3} style={{ textAlign: 'center', width: '100%' }}>Verify Profile</p>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <img className={rootStyles.section4Dashes} src={require('assets/images/dashed-line-up.svg')} alt='line' style={{ marginBottom: '70px' }} />
                        <img className={rootStyles.section4Dashes} src={require('assets/images/dashed-line-down.svg')} alt='line' />
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <img className={rootStyles.section4Images} style={{ marginBottom: '20px' }} src={require('assets/images/recommended-jobs.svg')} alt='recommended-jobs' />
                        <p style={{ marginBottom: '112px' }} className={rootStyles.text3}>Apply for recommended jobs</p>
                        <div style={{ display: 'flex', marginBottom: '20px' }}>
                            <img style={{ marginRight: '30px' }} src={require('assets/icons/message.svg')} alt='message' />
                            <img style={{ marginRight: '30px' }} src={require('assets/icons/call.svg')} alt='call' />
                            <img src={require('assets/icons/maps.svg')} alt='maps' />
                        </div>
                        <p className={rootStyles.text3} style={{ maxWidth: '310px', textAlign: 'center' }}>Directly get in touch with recruiters</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Section;