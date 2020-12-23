import { createGlobalStyle } from 'styled-components';
import 'react-toastify/dist/ReactToastify.min.css';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    background: #f1f1f1;
    color: #1f1f1f;
    -webkit-font-smoothing: antialiased;
  }

  #root {
    position: relative;
    height: 100%;
    min-height: 100vh;
    width: 100%;
  }

  body, input, button {
    font: 16px "Poppins", sans-serif;
  }

  button {
    cursor: pointer;
  }

  .Toastify__toast {
    border-radius: 5px !important;
  }
`;
