import React from 'react';

import Header from '../Header/Header';

import styles from './Display.module.scss';

const Display = () => {

    return (
        <>
            <Header title={"Display"} />
            <main className={styles['wrap']}>
                <section>
                    <h1 className={styles['title']}>주로 사용하는 4가지</h1>
                    <table className={styles['table']}>
                        <tbody>
                            <tr style={{ fontSize: "1.333rem" }}>
                                <th style={{ width: "75px" }}>key</th>
                                <th colSpan="3">설 명</th>
                            </tr>
                            <tr>
                                <td>none</td>
                                <td>요소를 렌더링하지 않도록 설정</td>
                                <td colSpan="2">visibility 속성을 hidden으로 설정한 것과 달리 영역을 차지하지 않음</td>
                            </tr>
                            <tr>
                                <td>block</td>
                                <td>가로 영역을 모두 채움(항상 다음줄에 렌더링)</td>
                                <td colSpan="2">width, height 속성을 지정 할 수 있음</td>
                            </tr>
                            <tr>
                                <td>inline</td>
                                <td>줄 바꿈이 되지 않음</td>
                                <td>width와 height를 지정 할 수 없음</td>
                                <td>글자나 문장에 효과를 주기 위해 존재하는 단위</td>
                            </tr>
                            <tr>
                                <td>inline-block</td>
                                <td>줄 바꿈이 되지 않지만 크기를 지정 할 수 있음(block과 inline의 중간 형태)</td>
                                <td colSpan="2">Internet Explorer 7 이하에서는 사용할 수 없음</td>
                            </tr>
                        </tbody>
                    </table>
                </section>
            </main>
        </>
    );
};

export default Display;