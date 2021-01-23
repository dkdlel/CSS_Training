import React from 'react';
import Header from '../Header/Header';

import styles from './FlexBox.module.scss';

const FlexBox = () => {

    return (
        <>
            <Header title={"FlexBox"} />
            <main className={styles['wrap']}>
                <header className={styles['header']}>
                    <div><div className={styles['logo-text']}>로고</div></div>
                    <nav><div className={styles['text']}>헤더 영역</div></nav>
                </header>
                <section className={styles['slider_section']}>
                    <div className={styles['text']}>슬라이더 영역</div>
                </section>
                <section className={styles['gallery_section']}>
                    <div className={styles['text']}>갤러리 영역</div>
                </section>
                <section className={styles['rankup_section']}>
                    <div className={styles['text']}>인기 검색어 영역</div>
                </section>
                <section className={styles['latest_post_section']}>
                    <div className={styles['text']}>최근 글 영역</div>
                </section>
                <section className={styles['popular_post_section']}>
                    <div className={styles['text']}>인기 글 영역</div>
                </section>
                <section className={styles['banner_section']}>
                    <div className={styles['banner-text']}>배너 영역</div>
                    <div className={styles['banner_box1']}></div>
                    <div className={styles['banner_box2']}></div>
                </section>
                <section className={styles['social_section']}>
                    <div className={styles['text']}>소셜 네트워크 영역</div>
                </section>
                <footer className={styles['footer']}>
                    <div className={styles['text']}>푸터 영역</div>
                </footer>
            </main>
        </>
    );
};

export default FlexBox;