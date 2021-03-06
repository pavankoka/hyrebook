import React from 'react';
import cx from 'classnames';
import styles from './section-3.module.scss';

function Section({ rootStyles }) {
    return (
        <div className={cx(styles.wrapper, rootStyles.section)}>
            <div className={styles.content}>
                <p className={rootStyles.header4} style={{ marginBottom: '60px' }}>Our Portfolio Organization</p>
                <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', marginBottom: '70px' }}>
                    <img style={{ marginLeft: '40px' }} src={require('assets/logos/hsbc.svg')} alt='hsbc' />
                    <img src={require('assets/logos/deutsche.svg')} alt='deutsche' />
                    <img style={{ marginRight: '60px' }} src={require('assets/logos/fis.svg')} alt='fis' />
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
                    <img src={require('assets/logos/suisse.svg')} alt='suisse' />
                    <img src={require('assets/logos/jp.svg')} alt='jp' />
                    <img src={require('assets/logos/n-trust.svg')} alt='n-trust' />
                </div>
            </div>
        </div>
    )
}

export default Section;