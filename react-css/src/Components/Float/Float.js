import React from 'react';
import Header from '../Header/Header';

import styles from './Float.module.scss';

const Float = () => {

    return (
        <>
            <Header title={"Float"} />
            <main>
                <article>
                    <h1 className={styles['title']}>traning 따라해보기</h1>
                    <div className={styles['area']}>
                        <div className={styles["wrap"]}>
                            <section className={styles['profile']}>
                                <p className={styles["thumb"]}><img src="http://placehold.it/100x120?text=Profile" alt="" /></p>
                                <p className={styles["text"]}>
                                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod consequatur sunt in quam repellat ipsam
                                    perspiciatis dolor ex ducimus rem vel quas maxime repellendus distinctio sint culpa placeat repudiandae,
                                    quis blanditiis ullam laborum odio. Sint, a repudiandae sapiente exercitationem voluptates qui recusandae
                                    quae expedita ipsam laboriosam repellendus ipsa fugit voluptate dolore pariatur quam vitae eius in sit
                                    placeat. Ducimus, magni aperiam natus porro tenetur nisi numquam consequuntur fuga, dolore odit suscipit
                                    laborum ea, ab impedit fugiat non autem sequi! Minima et aut dignissimos assumenda, eius soluta earum
                                    dolorem ipsam, voluptas ullam nobis eaque explicabo vitae repudiandae ex rerum error quia?
		                </p>
                            </section>
                            <section className={styles['right']}>
                                <div>float right</div>
                                <p className={styles["thumb2"]} > <img src="http://placehold.it/100x120?text=1" alt="" /></p>
                                <p className={styles["thumb2"]} > <img src="http://placehold.it/100x120?text=2" alt="" /></p>
                                <p className={styles["thumb2"]} > <img src="http://placehold.it/100x120?text=3" alt="" /></p>
                                <p className={styles["thumb2"]} > <img src="http://placehold.it/100x120?text=4" alt="" /></p>
                            </section>
                        </div>
                        <section className={styles['reverse-right']}>
                            <div>float right 순서 반대로</div>
                            <p className={styles["thumb3"]} > <img src="http://placehold.it/100x120?text=1" alt="" /></p>
                            <p className={styles["thumb3"]} > <img src="http://placehold.it/100x120?text=2" alt="" /></p>
                            <p className={styles["thumb3"]} > <img src="http://placehold.it/100x120?text=3" alt="" /></p>
                            <p className={styles["thumb3"]} > <img src="http://placehold.it/100x120?text=4" alt="" /></p>
                        </section>
                    </div>
                </article>
                <hr />
            </main>
        </>
    );
};

export default Float;