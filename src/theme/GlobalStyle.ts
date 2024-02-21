import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';
import { textCss } from '../components/reusable/Layouts';

const GlobalStyle = createGlobalStyle`
    ${normalize};
    :root {
      font-size:1em;
    }
    
    html {
      box-sizing: border-box;
    }
    
    *, *:before, *:after {
      box-sizing: inherit;
    }
    ::-webkit-scrollbar {
      display: none;
    }

    body {
        margin: 0;
        padding: 0;
        font-family: "Inter";
        font-size: 1rem;
        font-weight: 400;
        line-height: 1.2;
        letter-spacing: 0em;
        text-align: left; 
      }
      
    button, input, optgroup, select, textarea {
      ${textCss};
      font-size: 1rem;

  }
`;

export default GlobalStyle;
