import React from 'react';
import { Link } from 'react-router-dom';
import { ButtonBase } from '@material-ui/core';

import styles from './Header.module.scss';

const navTitles = [
    {
        index: 0,
        path: '/',
        title: 'Main',
    },
    {
        index: 1,
        path: '/display',
        title: 'Display',
    },
    {
        index: 2,
        path: '/flex',
        title: 'Flex',
    },
    {
        index: 3,
        path: '/flexBox',
        title: 'FlexBox',
    },
    {
        index: 4,
        path: '/float',
        title: 'Float',
    },
    {
        index: 5,
        path: '/position',
        title: 'Position',
    },
    {
        index: 6,
        path: '/layout',
        title: 'Layout',
    },
]
const Header = ({ title }) => {

    return (
        <>
            <header className={styles['header']}>
                {title}
            </header>
            <nav className={styles['nav']}>
                {navTitles.map(({ index, path, title }) =>
                    <ButtonBase component="div" className={styles['nav-button']} key={index}>
                        <Link to={path} className={styles['nav-link']}>
                            <div className={styles['text']}>{title}</div>
                        </Link>
                    </ButtonBase>
                )}
            </nav>
        </>
    );
};

export default Header;