import {createGlobalStyle} from "styled-components";

export default createGlobalStyle`
  @import url('<https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap>');

  * {
    margin: 0;
    padding: 0;
    outline: 0; 
    border: 0;
    box-sizing: border-box; 
  }
  *:focus {
    outline: 0;
  }
  html, body, #root {
    min-height: 100vh;
    margin-bottom: -10em;
  }
  body {
    -webkit-font-smoothing: antialiased;
  }
  body, input, button {
    font: 16px 'Roboto', sans-serif;
  }
  a {
    text-decoration: none;
  }
  ul {
    list-style: none;
  }
  button {
    cursor: pointer;
  } 
  `;