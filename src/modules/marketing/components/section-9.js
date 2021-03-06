import React from 'react';
import cx from 'classnames';
import styles from './section-9.module.scss';

function Section({ rootStyles }) {
    return (
        <div className={cx(styles.wrapper, rootStyles.footerSection)}>
            <div className={styles.innerWrapper}>
                <div>
                    <p className={rootStyles.text4} style={{ marginBottom: '24px' }}>Stay Connected</p>
                    <div style={{ display: 'flex', marginBottom: '50px' }}>
                        <input
                            className={cx(styles.input, rootStyles.text5)}
                            placeholder='Enter your email address'
                            width={250}
                        />
                        <p
                            className={rootStyles.text6}
                            style={{
                                marginLeft: '12px',
                                padding: '12px',
                                background: '#fff',
                                borderRadius: '5px',
                                cursor: 'pointer',
                            }}
                        >GET IN TOUCH</p>
                    </div>
                    <div style={{ display: 'flex' }}>
                        <img style={{ marginRight: '30px', width: '50px' }} src={require('assets/logos/facebook.svg')} alt='fb' />
                        <img style={{ marginRight: '30px', width: '50px' }} src={require('assets/logos/linkedin.svg')} alt='linkedin' />
                        <img style={{ width: '50px' }} src={require('assets/logos/instagram.svg')} alt='instagram' />
                    </div>
                </div>
                <div>
                    <p style={{ marginBottom: '20px' }} className={rootStyles.text4}>Links</p>
                    <p style={{ marginBottom: '10px' }} className={rootStyles.text5}>Pastelcube</p>
                    <p style={{ marginBottom: '10px' }} className={rootStyles.text5}>Recruiter</p>
                    <p className={rootStyles.text5}>Candidate</p>
                </div>
                <div>
                    <p style={{ marginBottom: '10px' }} className={rootStyles.text4}>Address</p>
                    <p style={{ marginBottom: '30px' }} className={rootStyles.text5}>Emerald Park, Park Street, Pune - 411 057</p>
                    <p style={{ marginBottom: '10px' }} className={rootStyles.text4}>Phone no</p>
                    <p style={{ marginBottom: '30px' }} className={rootStyles.text5}>1800 266 4020</p>
                    <p style={{ marginBottom: '10px' }} className={rootStyles.text4}>Email</p>
                    <p className={rootStyles.text5}>talk2us@pastelcube.com</p>
                </div>
            </div>
        </div >
    )
}

export default Section;