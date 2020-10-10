import {createGlobalStyle} from 'styled-components';

const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: Roboto;
        src: url("fonts/Roboto-Light.ttf");
        font-weight: 300;
    }
    @font-face {
        font-family: Roboto;
        src: url("fonts/Roboto-Regular.ttf");
        font-weight: 400;
    }
    @font-face {
        font-family: Roboto;
        src: url("fonts/Roboto-Bold.ttf");
        font-weight: 700;
    }
    :root {
        --background-color: #3f51b5;
        --background-shadow: #303f9f;
        --highlight-color: #ff5252;
        --text-icon: #fff;
        --text-icon-shadow: #c5cae9;
        --highlight-shadow-color: #dd3030;
    }
    * {
        margin: 0;
        padding: 0;
        outline: none;
        border: 0;
        font-family: Roboto, sans-serif;
    }
    body {
        background-color: var(--background-color);
    }
    footer {
        background-color: var(--highlight-color);
        padding: 5px 25px;
        color: white;
    }
`;

export default GlobalStyle;
