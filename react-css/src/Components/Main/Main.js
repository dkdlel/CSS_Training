import React from 'react';

import Header from '../Header/Header';

import BookImg from '../../static/img/DoitBook.png';
import styles from './Main.module.scss';

const Main = () => {

    return (
        <>
            <Header title={"CSS Study"} />
            <main className={styles['wrap']}>
                <section className={styles['training']}>트레이닝</section>
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