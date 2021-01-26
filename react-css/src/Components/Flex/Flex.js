import React, { useCallback, useState } from 'react';
import classnames from 'classnames/bind';
import Header from '../Header/Header';

import styles from './Flex.module.scss';
import { FormControlLabel, Radio, RadioGroup } from '@material-ui/core';

const cn = classnames.bind(styles);

const Flex = () => {

    const [typeValue, setTypeValue] = useState();

    const onChangeType = useCallback((e) => {
        setTypeValue(e.target.value);
    }, []);

    return (
        <>
            <Header title={"Flex"} />
            <main>
                <article>
                    <a
                        href="https://studiomeal.com/archives/197"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <h1 className={styles['title']}>참고사이트(click)</h1>
                    </a>
                </article>
                <hr />
                <article>
                    <section className={styles['flex-container']}>
                        <h1>* 컨테이너에 적용하는 속성</h1>
                        <div className={styles['flex-area']}>
                            - display : flex
                            <div className={cn('container1')}>
                                <div className={styles['item']}>AAA</div>
                                <div className={styles['item']}>BBBBBBBBBB</div>
                                <div className={styles['item']}>CCCCC</div>
                            </div>
                            <RadioGroup name="display-type" value={typeValue} onChange={onChangeType}>
                                <FormControlLabel value="female" control={<Radio />} label="block" />
                                <FormControlLabel value="male" control={<Radio />} label="flex" />
                            </RadioGroup>
                        </div>
                    </section>
                    <section className={styles['flex-items']}>
                        <h1>* 아이템에 적용하는 속성</h1>
                    </section>
                </article>
                <hr />
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
            </main>
        </>
    );
};

export default Flex;