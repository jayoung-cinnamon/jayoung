import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
const GlobalStyle = createGlobalStyle`
    ${reset};
    body{
        padding: 0;
       margin: 0;
        font-family: 'Noto Sans KR', sans-serif;
        background-color:  #013987;
        box-sizing: border-box;
    };
`;
export default GlobalStyle;
