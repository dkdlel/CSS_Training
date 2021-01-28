import React from 'react';

import Header from '../Header/Header';

import BookImg from '../../static/img/DoitBook.png';
import styles from './Main.module.scss';

const Main = () => {

    return (
        <>
            <Header title={"CSS Study"} />
            <main className={styles['wrap']}>
                <section className={styles['training']}>
                    <ul className={styles['text']}>
                        <li>1. 리액트 라우팅 재정리</li>
                        <li>2. 인프런 자료를 통한 css 연습</li>
                        <li>3. React SCSS 연습</li>
                        <li>4. Doit! 반응형 웹 만들기</li>
                        <li>5. 마크다운(Markdown)</li>
                        <li>6. 커스텀 훅</li>
                    </ul>
                </section>
                <section className={styles['book']}>
                    <figcaption>참고 서적</figcaption>
                    <figure className={styles['doit']}>
                        <img src={BookImg} alt="참고 서적" />
                    </figure>
                </section>
            </main>
        </>
    );
};

export default Main;