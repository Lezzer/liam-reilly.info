import { createGlobalStyle } from 'styled-components';
export const GlobalStyles = createGlobalStyle`

html { 
  height: 100%; 
  width: 100%;
}

body {
  min-height: 100%;
  min-width: 100%;
  background-color ${({theme}) => theme.background};
  padding: 0;
  margin: 0;
  font-family: Ubuntu, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
  Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  //font-family: Lato Black, Ubuntu, sans-serif;
}


ul {
  padding-inline-start: 0;
  padding-inline-end: 0;
}

a {
  color: inherit;
  text-decoration: none;
}

* {
  box-sizing: border-box;
  }

  
  //@font-face {
  //  font-family: 'Lato Black';
  //  src: 
  //    url('/static/fonts/Lato-Black.ttf') format('truetype'),
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

