import { createGlobalStyle } from 'styled-components';
export const GlobalStyles = createGlobalStyle`
  
body {
  //display: grid;
  ////grid-area: content;
  //height:  100vh;
  //width:  100vw;
  //grid-template-rows:1fr auto 1fr;
  //grid-template-columns: auto;
  //grid-template-areas:
  //      "header"
  //      "content"
  //      "footer";
  //
  background-color ${({theme}) => theme.background};
  padding: 0;
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
  Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
}

a {
  color: inherit;
  text-decoration: none;
}

* {
  box-sizing: border-box;
  }

  
  //@font-face {
  //  font-family: 'Ubuntu Bold';
  //  src: 
  //    url('/static/fonts/Ubuntu-Bold.ttf') format('truetype'),
  //}
  //
  //@font-face {
  //  font-family: 'Ubuntu Bold Italic';
  //  src: 
  //    url('/static/fonts/Ubuntu-BoldItalic.ttf') format('truetype'),
  //}
  //
  //@font-face {
  //  font-family: 'Ubuntu Italic';
  //  src: 
  //    url('/static/fonts/Ubuntu-Italic.ttf') format('truetype'),
  //}
  //
  //@font-face {
  //  font-family: 'Ubuntu Light';
  //  src: 
  //    url('/static/fonts/Ubuntu-Light.ttf') format('truetype'),
  //}
  //
  //@font-face {
  //  font-family: 'Ubuntu Light Italic';
  //  src: 
  //    url('/static/fonts/Ubuntu-LightItalic.ttf') format('truetype'),
  //}
  //
  //@font-face {
  //  font-family: 'Ubuntu Medium';
  //  src: 
  //    url('/static/fonts/Ubuntu-Medium.ttf') format('truetype'),
  //}
  //
  //@font-face {
  //  font-family: 'Ubuntu Medium Italic';
  //  src: 
  //    url('/static/fonts/Ubuntu-MediumItalic.ttf') format('truetype'),
  //}
  //
  //@font-face {
  //  font-family: 'Ubuntu Regular';
  //  src: 
  //    url('/static/fonts/Ubuntu-Regular.ttf') format('truetype'),
  //}
  //    
  
  `;

