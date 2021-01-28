import React from 'react';
import classnames from 'classnames/bind';
import Header from '../Header/Header';

import styles from './Position.module.scss';

const cn = classnames.bind(styles);

const contents = [
    {
        index: 1,
        title: "static",
        flow: "요소를 일반적인 문서 흐름에 따라 배치",
        comment: "default",
    },
    {
        index: 2,
        title: "relative",
        flow: "요소를 일반적인 문서 흐름에 따라 배치",
        comment: "자기 자신을 기준으로 top, right, bottom, left의 값에 따라 오프셋을 적용",
    },
    {
        index: 3,
        title: "absolute",
        flow: "요소를 일반적인 문서 흐름에서 제거",
        comment: "가장 가까운 위치 지정 조상 요소에 대해 상대적으로 배치",
    },
    {
        index: 4,
        title: "fixed",
        flow: "요소를 일반적인 문서 흐름에서 제거",
        comment: " 뷰포트의 초기 컨테이닝 블록을 기준으로 삼아 배치",
    },
    {
        index: 5,
        title: "sticky",
        flow: "요소를 일반적인 문서 흐름에 따라 배치",
        comment: "테이블 관련 요소를 포함해 스크롤 되는 조상과, 가장 가까운 블록 레벨 조상을 기준으로 오프셋을 적용",
    },
]

const Position = () => {

    return (
        <>
            <Header title={"Position"} />
            <main>
                <article>
                    <h1 className={styles['title']}>position</h1>
                    <table>
                        <tbody>
                            <tr style={{ fontSize: "1.333rem", fontWeight: "bold" }}>
                                <td>값</td>
                                <td>문서 흐름</td>
                                <td>설명</td>
                            </tr>
                            {contents.map(({ index, title, flow, comment }) =>
                                <tr key={index}>
                                    <td>{title}</td>
                                    <td>{flow}</td>
                                    <td>{comment}</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </article>
                <hr />
                <article>
                    <h1 className={styles['title']}>traning 따라해보기</h1>
                    <div className={styles["area"]}>
                        <div className={cn("box", "A")}>
                            A Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi quis doloribus recusandae
                            eaque. Pariatur reiciendis optio nisi labore alias quaerat, nobis at officiis dolore expedita vero veritatis
                            saepe sunt animi?
                        </div>
                        <div className={cn("box", "B")}>
                            B Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi quis doloribus recusandae
                            eaque. Pariatur reiciendis optio nisi labore alias quaerat, nobis at officiis dolore expedita vero veritatis
                            saepe sunt animi?
                        </div>
                        <div className={cn("box", "C")}>
                            C Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi quis doloribus recusandae
                            eaque. Pariatur reiciendis optio nisi labore alias quaerat, nobis at officiis dolore expedita vero veritatis
                            saepe sunt animi?
                        </div>
                    </div>
                    <div className={styles['border']} />
                    <p style={{ width: "73.145245559vw", margin: "0 auto", }}>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo tenetur vel iure assumenda earum? Vitae,
                        aspernatur? Reprehenderit, saepe earum dolorum sint facilis aut perspiciatis repellendus! Totam commodi sequi
                        earum atque velit quae nemo iste, necessitatibus, ex illum, adipisci voluptates! Doloremque ullam facere natus
                        assumenda sequi placeat excepturi autem ipsam officiis reiciendis maiores nam consequuntur eum animi, impedit
                        atque libero. Voluptatibus optio ut impedit, magni assumenda quibusdam eligendi nulla tempora quod laborum totam
                        voluptates nam nesciunt voluptatem tenetur corrupti quaerat consequatur consequuntur repellat dignissimos dolore
                        numquam laudantium. Temporibus, vel, aperiam et molestiae illum nisi enim quia maiores modi dicta autem quaerat.
                    </p>
                    <div className={styles['border']} />
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo tenetur vel iure assumenda earum? Vitae,
                        aspernatur? Reprehenderit, saepe earum dolorum sint facilis aut perspiciatis repellendus! Totam commodi sequi
                        earum atque velit quae nemo iste, necessitatibus, ex illum, adipisci voluptates! Doloremque ullam facere natus
                        assumenda sequi placeat excepturi autem ipsam officiis reiciendis maiores nam consequuntur eum animi, impedit
                        atque libero. Voluptatibus optio ut impedit, magni assumenda quibusdam eligendi nulla tempora quod laborum totam
                        voluptates nam nesciunt voluptatem tenetur corrupti quaerat consequatur consequuntur repellat dignissimos dolore
                        numquam laudantium. Temporibus, vel, aperiam et molestiae illum nisi enim quia maiores modi dicta autem quaerat.
                    </p>
                    <div className={styles['border']} />
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo tenetur vel iure assumenda earum? Vitae,
                        aspernatur? Reprehenderit, saepe earum dolorum sint facilis aut perspiciatis repellendus! Totam commodi sequi
                        earum atque velit quae nemo iste, necessitatibus, ex illum, adipisci voluptates! Doloremque ullam facere natus
                        assumenda sequi placeat excepturi autem ipsam officiis reiciendis maiores nam consequuntur eum animi, impedit
                        atque libero. Voluptatibus optio ut impedit, magni assumenda quibusdam eligendi nulla tempora quod laborum totam
                        voluptates nam nesciunt voluptatem tenetur corrupti quaerat consequatur consequuntur repellat dignissimos dolore
                        numquam laudantium. Temporibus, vel, aperiam et molestiae illum nisi enim quia maiores modi dicta autem quaerat.
                    </p>
                    <div className={styles['border']} />
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo tenetur vel iure assumenda earum? Vitae,
                        aspernatur? Reprehenderit, saepe earum dolorum sint facilis aut perspiciatis repellendus! Totam commodi sequi
                        earum atque velit quae nemo iste, necessitatibus, ex illum, adipisci voluptates! Doloremque ullam facere natus
                        assumenda sequi placeat excepturi autem ipsam officiis reiciendis maiores nam consequuntur eum animi, impedit
                        atque libero. Voluptatibus optio ut impedit, magni assumenda quibusdam eligendi nulla tempora quod laborum totam
                        voluptates nam nesciunt voluptatem tenetur corrupti quaerat consequatur consequuntur repellat dignissimos dolore
                        numquam laudantium. Temporibus, vel, aperiam et molestiae illum nisi enim quia maiores modi dicta autem quaerat.
                    </p>
                    <div className={styles['border']} />
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo tenetur vel iure assumenda earum? Vitae,
                        aspernatur? Reprehenderit, saepe earum dolorum sint facilis aut perspiciatis repellendus! Totam commodi sequi
                        earum atque velit quae nemo iste, necessitatibus, ex illum, adipisci voluptates! Doloremque ullam facere natus
                        assumenda sequi placeat excepturi autem ipsam officiis reiciendis maiores nam consequuntur eum animi, impedit
                        atque libero. Voluptatibus optio ut impedit, magni assumenda quibusdam eligendi nulla tempora quod laborum totam
                        voluptates nam nesciunt voluptatem tenetur corrupti quaerat consequatur consequuntur repellat dignissimos dolore
                        numquam laudantium. Temporibus, vel, aperiam et molestiae illum nisi enim quia maiores modi dicta autem quaerat.
                    </p>
                    <div className={styles['border']} />
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo tenetur vel iure assumenda earum? Vitae,
                        aspernatur? Reprehenderit, saepe earum dolorum sint facilis aut perspiciatis repellendus! Totam commodi sequi
                        earum atque velit quae nemo iste, necessitatibus, ex illum, adipisci voluptates! Doloremque ullam facere natus
                        assumenda sequi placeat excepturi autem ipsam officiis reiciendis maiores nam consequuntur eum animi, impedit
                        atque libero. Voluptatibus optio ut impedit, magni assumenda quibusdam eligendi nulla tempora quod laborum totam
                        voluptates nam nesciunt voluptatem tenetur corrupti quaerat consequatur consequuntur repellat dignissimos dolore
                        numquam laudantium. Temporibus, vel, aperiam et molestiae illum nisi enim quia maiores modi dicta autem quaerat.
                    </p>
                    <div className={styles['border']} />
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo tenetur vel iure assumenda earum? Vitae,
                        aspernatur? Reprehenderit, saepe earum dolorum sint facilis aut perspiciatis repellendus! Totam commodi sequi
                        earum atque velit quae nemo iste, necessitatibus, ex illum, adipisci voluptates! Doloremque ullam facere natus
                        assumenda sequi placeat excepturi autem ipsam officiis reiciendis maiores nam consequuntur eum animi, impedit
                        atque libero. Voluptatibus optio ut impedit, magni assumenda quibusdam eligendi nulla tempora quod laborum totam
                        voluptates nam nesciunt voluptatem tenetur corrupti quaerat consequatur consequuntur repellat dignissimos dolore
                        numquam laudantium. Temporibus, vel, aperiam et molestiae illum nisi enim quia maiores modi dicta autem quaerat.
                    </p>
                </article>
            </main>
        </>
    );
};

export default Position;