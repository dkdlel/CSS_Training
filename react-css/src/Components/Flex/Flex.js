import React from 'react';
import Header from '../Header/Header';

import styles from './Flex.module.scss';

const Flex = () => {

    return (
        <>
            <Header title={"Flex"} />
            <main>
                <article>
                    <h1 className={styles['title']}>traning 따라해보기</h1>
                    <div className={styles['wrap']}>
                        <div className={styles['thumb']}><img src="http://placehold.it/100x120?text=1" alt="" /></div>
                        <div className={styles['thumb']}><img src="http://placehold.it/100x120?text=2" alt="" /></div>
                        <div className={styles['thumb']}><img src="http://placehold.it/100x120?text=3" alt="" /></div>
                        <div className={styles['thumb']}><img src="http://placehold.it/100x120?text=4" alt="" /></div>
                        <div className={styles['thumb']}><img src="http://placehold.it/100x120?text=5" alt="" /></div>
                    </div>
                </article>
                <hr />
            </main>
        </>
    );
};

export default Flex;