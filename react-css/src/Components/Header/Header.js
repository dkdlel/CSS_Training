import React from 'react';
import { Link } from 'react-router-dom';
import { ButtonBase } from '@material-ui/core';

import { Paths } from '../../Paths';

import styles from './Header.module.scss';

const Header = ({ title }) => {

    return (
        <>
            <header className={styles['header']}>
                {title}
            </header>
            <nav className={styles['nav']}>
                <ButtonBase component="div" className={styles['nav-button']}>
                    <Link to={Paths.index} className={styles['nav-link']}>
                        <div className={styles['text']}>Main</div>
                    </Link>
                </ButtonBase>
                <ButtonBase component="div" className={styles['nav-button']}>
                    <Link to={Paths.flex} className={styles['nav-link']}>
                        <div className={styles['text']}>Flex</div>
                    </Link>
                </ButtonBase>
                <ButtonBase component="div" className={styles['nav-button']}>
                    <Link to={Paths.float} className={styles['nav-link']}>
                        <div className={styles['text']}>Float</div>
                    </Link>
                </ButtonBase>
            </nav>
        </>
    );
};

export default Header;