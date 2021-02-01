import React from 'react';
import { FormControlLabel, Radio, RadioGroup } from '@material-ui/core';
import classnames from 'classnames/bind';

import Header from '../Header/Header';

import styles from './Flex.module.scss';
import useInput from '../../hooks/useInput';

const cn = classnames.bind(styles);

const Flex = () => {

    const [displayValue, onChangeDisplay] = useInput('block');
    const [dirValue, onChangeDir] = useInput('row');
    const [wrapValue, onChangeWrap] = useInput('nowrap');
    const [justifyValue, onChangeJustify] = useInput('flex-start');
    const [alignValue, onChangeAlign] = useInput('stretch');
    const [contentValue, onChangeContent] = useInput('stretch');

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
                        <div className={styles['flex-display']}>
                            - display : flex
                            <div className={cn('container1', displayValue)}>
                                <div className={cn('item')}>AAA</div>
                                <div className={cn('item')}>BBBBBBBBBB</div>
                                <div className={cn('item')}>CCCCC</div>
                            </div>
                            <RadioGroup className={styles['radio']} name="display-type" value={displayValue} onChange={onChangeDisplay}>
                                <FormControlLabel value="block" control={<Radio />} label="block" />
                                <FormControlLabel value="flex" control={<Radio />} label="flex" />
                            </RadioGroup>
                        </div>
                        <div className={styles['flex-display']}>
                            - flex-direction : 아이템들이 배치되는 축의 방향을 결정
                            <div className={cn('container2', dirValue)}>
                                <div className={cn('item')}>AAA</div>
                                <div className={cn('item')}>BBBBBBBBBB</div>
                                <div className={cn('item')}>CCCCC</div>
                            </div>
                            <RadioGroup className={styles['radio']} name="display-type" value={dirValue} onChange={onChangeDir}>
                                <FormControlLabel value="row" control={<Radio />} label="row" />
                                <FormControlLabel value="row-reverse" control={<Radio />} label="row-reverse" />
                                <FormControlLabel value="column" control={<Radio />} label="column" />
                                <FormControlLabel value="column-reverse" control={<Radio />} label="column-reverse" />
                            </RadioGroup>
                        </div>
                        <div className={styles['flex-display']}>
                            - flex-wrap : 컨테이너가 더 이상 아이템들을 한 줄에 담을 여유 공간이 없을 때 아이템 줄바꿈을 어떻게 할지 결정하는 속성
                            <div className={cn('container3', wrapValue)}>
                                <div className={cn('item')}>AAA</div>
                                <div className={cn('item')}>BBBBBBBBBB</div>
                                <div className={cn('item')}>CCCCC</div>
                            </div>
                            <RadioGroup className={styles['radio']} name="display-type" value={wrapValue} onChange={onChangeWrap}>
                                <FormControlLabel value="nowrap" control={<Radio />} label="nowrap" />
                                <FormControlLabel value="wrap" control={<Radio />} label="wrap" />
                                <FormControlLabel value="wrap-reverse" control={<Radio />} label="wrap-reverse" />
                            </RadioGroup>
                            - flex-flow : flex-direction + flex-wrap
                        </div>
                        <h1 style={{ padding: "0 10px" }}>정렬</h1>
                        <h1 style={{ padding: "10px" }}>justify : 메인축 방향 정렬 / align : 수직출 방향 정렬</h1>
                        <div className={styles['flex-display']}>
                            - justify-content : 메인축 방향으로 아이템을들 정렬하는 속성
                            <div className={cn('container4', justifyValue)}>
                                <div className={cn('item')}>AAA</div>
                                <div className={cn('item')}>BBBBBBBBBB</div>
                                <div className={cn('item')}>CCCCC</div>
                            </div>
                            <RadioGroup className={styles['radio']} name="display-type" value={justifyValue} onChange={onChangeJustify}>
                                <FormControlLabel value="flex-start" control={<Radio />} label="flex-start" />
                                <FormControlLabel value="flex-end" control={<Radio />} label="flex-end" />
                                <FormControlLabel value="center" control={<Radio />} label="center" />
                                <FormControlLabel value="space-between" control={<Radio />} label="space-between" />
                                <FormControlLabel value="space-around" control={<Radio />} label="space-around" />
                                <FormControlLabel value="space-evenly" control={<Radio />} label="space-evenly" />
                            </RadioGroup>
                            <table>
                                <tbody>
                                    <tr><th style={{ width: "100px" }}>value</th><th>description</th></tr>
                                    <tr><td>space-between</td><td>아이템 사이 간격을 동일하게</td></tr>
                                    <tr><td>space-around</td><td>아이템의 둘레 간격을 동일하게</td></tr>
                                    <tr><td>sapce-evenly</td><td>아이템 사이와 양 끝에 간격을 동일하게(단, IE와 Edge 지원 안함)</td></tr>
                                </tbody>
                            </table>
                        </div>
                        <div className={styles['flex-display']}>
                            - align-items : 수직축 방향으로 아이템을들 정렬하는 속성
                            <div className={cn('container5', alignValue)}>
                                <div className={cn('item', 'A')}>AAA</div>
                                <div className={cn('item', 'B')}>BBBBBBBBBB</div>
                                <div className={cn('item', 'C')}>CCCCC</div>
                            </div>
                            <RadioGroup className={styles['radio']} name="display-type" value={alignValue} onChange={onChangeAlign}>
                                <FormControlLabel value="stretch" control={<Radio />} label="stretch" />
                                <FormControlLabel value="flex-start" control={<Radio />} label="flex-start" />
                                <FormControlLabel value="flex-end" control={<Radio />} label="flex-end" />
                                <FormControlLabel value="center" control={<Radio />} label="center" />
                                <FormControlLabel value="baseline" control={<Radio />} label="baseline" />
                            </RadioGroup>
                            baseline : 텍스트 베이스라인 기준으로 정렬
                        </div>
                        <div className={styles['flex-display']}>
                            - align-content : 여러 행 정렬
                            <div className={cn('container6', contentValue)}>
                                <div className={cn('item')}>AAA</div>
                                <div className={cn('item')}>BBBBBBBBBB</div>
                                <div className={cn('item')}>CCCCC</div>
                            </div>
                            <RadioGroup className={styles['radio']} name="display-type" value={contentValue} onChange={onChangeContent}>
                                <FormControlLabel value="stretch" control={<Radio />} label="stretch" />
                                <FormControlLabel value="flex-start" control={<Radio />} label="flex-start" />
                                <FormControlLabel value="flex-end" control={<Radio />} label="flex-end" />
                                <FormControlLabel value="center" control={<Radio />} label="center" />
                                <FormControlLabel value="space-between" control={<Radio />} label="space-between" />
                                <FormControlLabel value="space-around" control={<Radio />} label="space-around" />
                                <FormControlLabel value="space-evenly" control={<Radio />} label="space-evenly" />
                            </RadioGroup>
                        </div>
                    </section>
                    <section className={styles['flex-items']}>
                        <h1>* 아이템에 적용하는 속성</h1>
                        <table>
                            <tbody>
                                <tr><th style={{ width: "100px" }}>key</th><th>description</th></tr>
                                <tr><td>flex-basis</td><td>Flex 아이템의 기본 크기를 설정</td></tr>
                                <tr><td>flex-grow</td><td>flex-basis를 제외한 여백 부분을 flex-grow에 지정된 숫자의 비율로 나누어 가짐</td></tr>
                                <tr><td>flex-shrink</td><td>flex-basis의 값보다 작아질 수 있는지를 결정</td></tr>
                                <tr><td>flex</td><td>flex-grow, flex-shrink, flex-basis (default : 1 1 0)</td></tr>
                                <tr><td>align-self</td><td>해당 아이템의 수직축 방향 정렬</td></tr>
                                <tr><td>order</td><td>각 아이템들의 시각적 나열 순서를 결정하는 속성</td></tr>
                            </tbody>
                        </table>
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