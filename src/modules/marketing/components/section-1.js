import React from 'react';
import cx from 'classnames';
import styles from './section-1.module.scss';

function Section({ rootStyles }) {
    return (
        <div className={cx(styles.wrapper, rootStyles.section)}>
            <img
                className={styles.logo}
                src={require('assets/logos/logo.svg')}
                alt='logo'
            />
            <div className={styles.content}>
                <div>
                    <div className={rootStyles.header1} style={{ display: 'flex', maxWidth: '680px', justifyContent: 'flex-start' }}>
                        <p style={{ color: '#1F96C7' }}>Hyrebook</p>
                        <p>, your next</p>
                    </div>
                    <p className={rootStyles.header1} style={{ marginBottom: '30px' }}>career Move</p>
                    <p className={cx(rootStyles.text1, rootStyles.section1Text)}>A smarter, faster and better job portal</p>
                </div>
                <div className={cx(styles.box, rootStyles.section1Box)}>
                    <p className={rootStyles.text5} style={{ marginBottom: '10px' }}>Phone No</p>
                    <input
                        className={cx(styles.input, rootStyles.text5)}
                        placeholder='Enter your email address'
                        style={{ marginBottom: '40px', width: '100%' }}
                    />
                    <p className={rootStyles.text5} style={{ marginBottom: '10px' }}>Verify key</p>
                    <input
                        className={cx(styles.input, rootStyles.text5)}
                        placeholder='Enter your email address'
                        style={{ marginBottom: '56px', width: '100%' }}
                    />
                    <p
                        className={rootStyles.text5}
                        style={{
                            padding: '14px 0',
                            textAlign: 'center',
                            borderRadius: '24px',
                            width: '260px',
                            background: '#F89C1C',
                            margin: '0 auto 20px',
                        }}
                    >
                        Log In As Candidate
                    </p>
                    <p
                        className={rootStyles.text5}
                        style={{
                            border: '2px solid #F89C1C',
                            boxSizing: 'border-box',
                            boxShadow: '10px 10px 80px rgba(0, 0, 0, 0.1)',
                            borderRadius: '50px',
                            padding: '14px 0',
                            textAlign: 'center',
                            width: '260px',
                            margin: '0 auto 70px',
                        }}
                    >
                        Log In As Recruiter
                    </p>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                        <p
                            style={{
                                height: '1px',
                                width: 'calc(50% - 32px)',
                                background: '#3b5958',
                            }}
                        />
                        <p className={rootStyles.text6}>OR</p>
                        <p
                            style={{
                                height: '1px',
                                width: 'calc(50% - 32px)',
                                background: '#3b5958',
                            }}
                        />
                    </div>
                    <p className={rootStyles.text6} style={{ margin: '50px auto 30px', textAlign: 'center' }}>Login With Google</p>
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <p
                            style={{
                                width: '56px',
                                height: '56px',
                                background: '#DB4437',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                borderRadius: '24px',
                                marginRight: '30px',
                            }}
                        >
                            G
                        </p>
                        <p
                            style={{
                                width: '56px',
                                height: '56px',
                                background: '#0E76A8',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                borderRadius: '24px',
                                marginRight: '30px',
                            }}
                        >
                            Li
                        </p>
                        <p
                            style={{
                                width: '56px',
                                height: '56px',
                                background: '#3B5998',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                borderRadius: '24px',
                            }}
                        >F</p>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Section;