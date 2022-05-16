import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
const GlobalStyle = createGlobalStyle`
    ${reset};
    body{
        padding: 0;
       margin: 0;
        /* font-family: 'Noto Sans KR', sans-serif; */
        font-family: Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, 'Helvetica Neue', 'Segoe UI', 'Apple SD Gothic Neo', 'Noto Sans KR', 'Malgun Gothic', sans-serif;
        /* background-color:  #013987; */
        box-sizing: border-box;
    };
    *{
        box-sizing: border-box;
    }
`;
export default GlobalStyle;
