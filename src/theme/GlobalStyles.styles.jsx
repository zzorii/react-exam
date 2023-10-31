import { createGlobalStyle } from "styled-components";
// import reset from "styled-reset";
const GlobalStyles = createGlobalStyle`

    :root {
        --primary: #4318FF;
        --S_Light: #CBC8EC;
        --primary-light: rgba(90, 84, 164, 0.80);
        --primary-dark: #2b3674;
        --primary-1: #8A87B3;
        --primary-2: #8D86D5;
        --primary-3: #908EAE;
        // --S_Light: red;

        --secondary-grey-600: #A3AED0;
        --secondary-grey-700: ##707EAE;
        --secondary: #FCA311;
        --secondary-light: #FFBA32;
        --secondary-dark: #C28400;
        --danger: #DC3545;
        --danger-light: #E4606D;
        --danger-dark: #B02A37;
        --success: #198754;
        --success-light: #28A745;
        --success-dark: #157347;
        --warning: #FFC107;
        --warning-light: #FFCA2C;
        --warning-dark: #D39E00;
        --info: #0DCAF0;
        --info-light: #39D4FF;
        --info-dark: #0B9ED7;
        --white: #fff;
        --black: #000;
        --gray-1: #F8F9FA;
        --gray-2: #E9ECEF;
        --gray-3: #DEE2E6;
        --gray-4: #CED4DA;
        --gray-5: #ADB5BD;
        --gray-6: #6C757D;
        --gray-7: #495057;
        --gray-8: #343A40;
        --gray-9: #212529;
        --font-reqular: 1rem;
        --font-small: 0.8rem
        --max-width: 1200px;
        --header-height: 60px;

        --link-default: #f4f7fe;
    }


    // body {
    //      background: url(3.png) no-repeat 0 0 !important;
    //      #root {
    //         opacity: 0.8 !important;
    //      }
    //  } 

/* public에 넣은 이미지와 src에 넣은 이미지는 경로찾기가 다르다 public은 html처럼! 단 ./public/2.jpg가 아니라 2.jpg 넣거나 public 안에 images 폴더 안이면 images/2.jpg 이런 식으로! 완전 상대경로로 쓰는 것이 아니다. */
    *{
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }
    /* 기본 폰트 설정 */
    body, html {
        line-height: 1.5;
        font-family: "Poppins", "Malgun Gothic", "맑은 고딕", sans-serif;
        font-weight: 400;
        color: #333;
      }
    ul, ol, li {
        list-style: none;
    }
    .blind,
    caption,
    legend {
        overflow: hidden;
        position: absolute;
        width: 0;
        height: 0;
        line-height: 0;
        text-indent: -9999px;
    }
`;

export default GlobalStyles;
