import React from 'react';
import cx from 'classnames';
import styles from './section-8.module.scss';

function Section({ rootStyles }) {
    return (
        <div className={cx(styles.wrapper)}>
            <div className={styles.innerWrapper}>
                <p className={rootStyles.header4} style={{ width: '100%', textAlign: 'center', marginBottom: '90px' }}>What our users say</p>
                <div className={styles.content}>
                    <div style={{ marginRight: '75px' }}>
                        <div className={styles.box}>
                            <p>Nascetur faucibus aliquet scelerisque porta tincidunt aliquam velit diam. Urna turpis ut scelerisque rhoncus amet, feugiat nunc tortor ornare. Vel vestibulum dignissim in sed. Felis risus elit senectus elit proin nulla aliquet sodales velit. Ut sapien quam cursus pretium, fringilla maecenas nam. A dui nulla tellus amet, ipsum quis fermentum vivamus nisl.</p>
                            <img className={styles.img} src={require('assets/logos/rushikesh.svg')} alt='rushikesh' />
                        </div>
                        <h4 style={{ marginTop: '45px', width: '100%', textAlign: 'center', fontSize: '18px', lineHeight: '21px' }}>Rushikesh Veer</h4>
                        <p
                            style={{
                                width: '100%',
                                textAlign: 'center',
                                fontSize: '16px',
                                lineHeight: '19px',
                                marginBottom: '5px',
                                fontFamily: 'RobotoLight'
                            }}
                        >UI/UX Designer</p>
                        <p
                            style={{
                                width: '100%',
                                textAlign: 'center',
                                fontSize: '14px',
                                lineHeight: '16px',
                                color: '#002737',
                            }}
                        >Pastelcube Technology</p>
                    </div>
                    <div style={{ marginRight: '75px' }}>
                        <div className={styles.box}>
                            <p>Nascetur faucibus aliquet scelerisque porta tincidunt aliquam velit diam. Urna turpis ut scelerisque rhoncus amet, feugiat nunc tortor ornare. Vel vestibulum dignissim in sed. Felis risus elit senectus elit proin nulla aliquet sodales velit. Ut sapien quam cursus pretium, fringilla maecenas nam. A dui nulla tellus amet, ipsum quis fermentum vivamus nisl.</p>
                            <img className={styles.img} src={require('assets/logos/rushikesh.svg')} alt='rushikesh' />
                        </div>
                        <h4 style={{ marginTop: '45px', width: '100%', textAlign: 'center', fontSize: '18px', lineHeight: '21px' }}>Rushikesh Veer</h4>
                        <p
                            style={{
                                width: '100%',
                                textAlign: 'center',
                                fontSize: '16px',
                                lineHeight: '19px',
                                marginBottom: '5px',
                                fontFamily: 'RobotoLight'
                            }}
                        >UI/UX Designer</p>
                        <p
                            style={{
                                width: '100%',
                                textAlign: 'center',
                                fontSize: '14px',
                                lineHeight: '16px',
                                color: '#002737',
                            }}
                        >Pastelcube Technology</p>
                    </div>
                    <div>
                        <div className={styles.box}>
                            <p>Nascetur faucibus aliquet scelerisque porta tincidunt aliquam velit diam. Urna turpis ut scelerisque rhoncus amet, feugiat nunc tortor ornare. Vel vestibulum dignissim in sed. Felis risus elit senectus elit proin nulla aliquet sodales velit. Ut sapien quam cursus pretium, fringilla maecenas nam. A dui nulla tellus amet, ipsum quis fermentum vivamus nisl.</p>
                            <img className={styles.img} src={require('assets/logos/rushikesh.svg')} alt='rushikesh' />
                        </div>
                        <h4 style={{ marginTop: '45px', width: '100%', textAlign: 'center', fontSize: '18px', lineHeight: '21px' }}>Rushikesh Veer</h4>
                        <p
                            style={{
                                width: '100%',
                                textAlign: 'center',
                                fontSize: '16px',
                                lineHeight: '19px',
                                marginBottom: '5px',
                                fontFamily: 'RobotoLight'
                            }}
                        >UI/UX Designer</p>
                        <p
                            style={{
                                width: '100%',
                                textAlign: 'center',
                                fontSize: '14px',
                                lineHeight: '16px',
                                color: '#002737',
                            }}
                        >Pastelcube Technology</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Section;