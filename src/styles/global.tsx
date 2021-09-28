import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    padding: 30px 10px;
    margin: 0;
    background-color: #fafafa;
  }

  .container {
    max-width: 996px;
    padding: 20px;
    margin: 0 auto;
    background-color: #fff;
    border: solid 1px #e6e6e6;
    border-radius: 10px;
  }
`;
