import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
const GlobalStyle = createGlobalStyle`
    ${reset};
    body{
        padding: 0;
       margin: 0;
        font-family: Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, 'Helvetica Neue', 'Segoe UI', 'Apple SD Gothic Neo', 'Noto Sans KR', 'Malgun Gothic', sans-serif;
        box-sizing: border-box;
      
    };
 
    a:link {text-decoration: none; color:black;}
    a:visited {text-decoration: none; color: black;}
    a:hover {text-decoration: none; color: #0F60D1;}
    *{
        box-sizing: border-box;
        scroll-behavior: smooth;
    }
`;
export default GlobalStyle;
