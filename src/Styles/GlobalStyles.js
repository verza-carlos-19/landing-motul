import { createGlobalStyle } from "styled-components";
export const GlobalStyle = createGlobalStyle`

    :root {
        --primary: #2f2618;
        --secondary: #ff9d01;
        --tertiary: #ff005c;
        --shadows: #2b2b2c;
        
    --white: #fff;
    --background: #000;
    --primary: #4F46E5;
    --error: #B91C1C;
    --gray: #6B7280

    --font1:"Russo One", serif;
    --font2:"Rowdies", serif;
    --font3:"Quantico", serif;
    --font4:"Play", serif;
    --font5:"Orbitron", serif;
    --font6:"Inter Tight", serif;
    --font7:"Chakra Petch", serif;
    --font8:"Audiowide", serif;
    }

    html {
        scroll-behavior: smooth;
  
    }
    *{
        cursor: default;
    }
    body {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        background-color: #0d0e0e;
        font-family: "Montserrat",sans-serif;
        color: white;
        overflow-x:hidden;
    }

    a {
        text-decoration: none;
        color: white;
    }
    a:visited {
        color: white;
    }
    li {
        list-style: none;
    }
`;
