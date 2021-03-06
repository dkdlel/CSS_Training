**Do it! 반응형 웹 만들기 책 참고**

# 가변 폰트
    * em : 부모 기준, rem : 최상위 요소 기준
        - 브라우저의 너비를 100을 기준으로 하여 크기를 결정하는 단위
        - 가변 폰트값 = (가변 폰트를 적용할 글자 크깃값 / 적용할 요소를 감싸고 있는 요소의 글자 크깃값)

    * vw(viewport width) 단위
        - 크깃값 = (vw 단위를 적용할 글자 크깃값 * 브라우저의 너빗값) / 100

    * vh(viewport height) 단위
        - 브라우저의 높이를 100을 기준으로 하여 크기를 결정하는 단위
        - 크깃값 = (vh 단위를 적용할 글자 크깃값 * 브라우저의 높잇값) / 100

    * vmin(viewport minimum), vmax(viewport maximum) 단위
        - 브라우저의 너비와 높이중 (작은, 큰) 쪽을 기준으로 하여 크기를 결정하는 단위

# 페이지 구조

|모바일|태블릿|PC|
|:---:|:---:|:---:|
|320px|768px|960px or 1024px|

> ## 메인페이지
    * 인포메이션 영역
        - 홈, 로그인, 회원가입, 검색 버튼 등의 웹사이트의 기본적인 링크 또는 버튼이 들어 있는 영역

    * 헤더 영역
        - 로고와 메뉴 영역인 내비게이션이 들어 있는 영역

    * 슬라이더 영역
        - 이미지를 효과적으로 보여주기 위한 영역

    * 최근 글, 인기 글 영역
        - 최근에 올라온 글들과 사람들이 많이 본 글들을 보여주는 영역

    * 갤러리 영역
        - 사진을 보여주는 영역

    * 인기 검색어 영역
        - 사람들이 많이 검색한 단어 순서대로 검색어를 보여주는 영역

    * 배너 영역
        - 광고 또는 웹사이트에서 전달하고자 하는 내용을 담고 있는 영역

    * 소셜 네트워크 영역
        - 사람들과의 소통을 위한 소셜 네트워크 링크 아이콘이 들어 있는 공간

    * 푸터 영역
        - 웹사이트의 저작권 정보등이 들어 있는 영역

> ## 메인페이지 구조 예시
<img src="src/static/img/WebPage.png" width="800px" height="400px" alt="웹사이트 화면 구조" ></img>

> ## 서브페이지
    * 소개 페이지
        - 웹사이트의 소개 글을 싣는 페이지

    * 갤러리 페이지
        - 그림들을 보여주기 위한 페이지
    
    * 게시판 페이지
        - 웹사이트를 사용하는 사용자가 문의사항이 있을 때 글을 작성하기 위한 페이지    

> ## 서브페이지 구조 예시
<img src="src/static/img/SubPage.png" width="800px" height="400px" alt="서브페이지 화면 구조" ></img>

> ## 폴백(fallback) 기법
    * px 단위를 먼저 사용하고 바로 이어서 rem 단위를 사용
    * 상속문제의 em, 하위브라우저에서 작동하지 않는 rem 해결

> ## picture, source 태그
>   > 태그 사양 확인 <br/>
>   > * picture : https://goo.gl./Ho5gBr <br/>
>   > * source : https://goo.gl/HA38av<br />
>   > * srcset 속성
>   >   |파일 위치|픽셀 밀도|너빗값|
>   >   |:---:|:---:|:---:|
>   >   |생략 불가|생략 가능|생략 가능|

    * 큰 이미지를 사용할 경우 불러오는 속도가 느려지고, 데이터 용량을 많이 소비하게 되므로 가급적이면 사용하지 않는것이 좋음
        <picture>
            <source
                srcset="파일 위치,[픽셀 밀도],[너비값],{[파일 위치],[픽셀 밀도],[너빗값]}"
                media="[미디어 쿼리]"
                sizes="[너빗값],[미디어 쿼리]"
                type="[파일 유형]"
            />
            <img src="파일 위치" alt="이미지"/>
        </picture>

    * img 태그 : 폴백 기법 사용

# background(배경)
    * background-color : 색

    * background-image : 경로

    * background-repeat : repeat, no-repeat, repeat-x, repeat-y

    * background-attachment : scroll, fixed

    * background-position : left top, x% y%, x y

    * background-size : size, cover, contain
<img src="src/static/img/cover-contain.jpg" width="800px" height="400px" alt="cover vs contain" ></img>

# transfrom
<ul>
    <li><a href="http://ianlunn.github.io/Hover/">Hover.css</a></li>
    <li><a href="http://elrumordelaluz.github.io/csshake/#1">CSShake</a></li>
    <li><a href="https://www.minimamente.com/project/magic/">MAGIC EFFECTS</a></li>
</ul>

# transition
<ul>
    <li><a href="https://matthewlein.com/tools/ceaser">CSS EASING ANIMATION TOOL</a></li>
</ul>