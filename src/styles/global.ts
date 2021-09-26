import { createGlobalStyle } from 'styled-components';
import { BORDER, WHITE_COLOR } from '../constants';
import TRex from '../img/t-rex.png';

export default createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    padding: 30px 10px;
    margin: 0;
    background-color: #fafafa;
    font-family: sans-serif;
  }

  main {
    padding: 20px;
    background: url(${TRex}) no-repeat right bottom;
    background-size: 128px;
    min-height: 200px;
  }

  .container {
    max-width: 768px;
    margin: 0 auto;
    border: ${BORDER};
    border-radius: 10px;
    overflow: hidden;
    background-color: ${WHITE_COLOR};
  }
`;
