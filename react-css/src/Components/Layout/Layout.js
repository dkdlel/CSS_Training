import React from 'react';

import Header from '../Header/Header';

import styles from './Layout.module.scss';

const Layout = () => {

    return (
        <>
            <Header title={"Layout"} />
            <main>
                <article>
                    <h1 className={styles['title']}>traning 따라해보기</h1>
                    <div className={styles["wrap"]}>
                        <div className={styles["header"]}>
                            <h1>LOGO</h1>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia modi corporis ipsa sequi molestiae, dolorum magni? At odit molestias labore in ratione non, sint eaque nihil cupiditate. Tempore, sit temporibus!
			                </p>
                        </div>
                        <div className={styles["container"]}>
                            <div className={styles["nav"]}>
                                <div className={styles["inn"]}>
                                    <h2>Nav</h2>
                                    <ul>
                                        <li>About</li>
                                        <li>Services</li>
                                        <li>Portfolio</li>
                                        <li>Contact us</li>
                                    </ul>
                                </div>
                            </div>
                            <div className={styles["content"]}>
                                <div className={styles["inn"]}>
                                    <h2>Content</h2>
                                    <p>
                                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus repudiandae reprehenderit sapiente soluta inventore facere porro quae rerum. Vitae magnam ex ducimus! Rerum voluptatem quisquam dolor aliquid perferendis, quas repellendus officiis rem debitis eos voluptates amet est hic? Cumque inventore quisquam blanditiis assumenda ut quasi nemo dolorum? Reprehenderit sunt illo recusandae consequatur voluptatibus cum. Cum, saepe! Corrupti aut quam facere dolore consequuntur qui ullam dolorem laudantium at distinctio excepturi dolores cum quo iste, omnis eveniet repellendus deserunt natus. Officia magnam vitae, tempora aliquam facere ducimus. Ea soluta facilis commodi optio iste amet dicta quas rem explicabo ad, maiores aspernatur neque!
					                </p>
                                    <p>
                                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus repudiandae reprehenderit sapiente soluta inventore facere porro quae rerum. Vitae magnam ex ducimus! Rerum voluptatem quisquam dolor aliquid perferendis, quas repellendus officiis rem debitis eos voluptates amet est hic? Cumque inventore quisquam blanditiis assumenda ut quasi nemo dolorum? Reprehenderit sunt illo recusandae consequatur voluptatibus cum. Cum, saepe! Corrupti aut quam facere dolore consequuntur qui ullam dolorem laudantium at distinctio excepturi dolores cum quo iste, omnis eveniet repellendus deserunt natus. Officia magnam vitae, tempora aliquam facere ducimus. Ea soluta facilis commodi optio iste amet dicta quas rem explicabo ad, maiores aspernatur neque!
					                </p>
                                </div>
                            </div>
                            <div className={styles["aside"]}>
                                <div className={styles["inn"]}>
                                    <h2>Aside</h2>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt sapiente nihil eos assumenda? Ducimus labore assumenda, eveniet magnam ut exercitationem, ipsum molestiae aut modi doloribus sunt enim obcaecati eum at illum tempora consequuntur unde, architecto totam voluptatum ipsa! Fuga porro impedit nulla eos ratione, ipsam assumenda soluta itaque deserunt error.
					                </p>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt sapiente nihil eos assumenda? Ducimus labore assumenda, eveniet magnam ut exercitationem, ipsum molestiae aut modi doloribus sunt enim obcaecati eum at illum tempora consequuntur unde, architecto totam voluptatum ipsa! Fuga porro impedit nulla eos ratione, ipsam assumenda soluta itaque deserunt error.
					                </p>
                                </div>
                            </div>
                        </div>
                        <div className={styles["footer"]}>
                            <address>
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores praesentium dolores nostrum ipsum similique earum molestias at quo harum pariatur.
			                </address>
                            <p>Copyright</p>
                        </div>
                    </div>
                </article>
            </main>
        </>
    );
};

export default Layout;