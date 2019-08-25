import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
html {
  font-family: 'Montserrat', sans-serif;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  font-size: 10px;
  overflow-x: hidden;
}
body {
  margin: 0;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  overflow-x: hidden;
}
* {
  color: #05324F;
  font-family: 'Montserrat', sans-serif;
  box-sizing: border-box;
}
.navbar-hidden {
  transform: translateY(-80px);
  color: white;
}
.nav-top {
    background: transparent !important;
}
.nav-top .logo{
    display: none !important;
}
.nav-top {
  ul{
    li{
      a{
        color: ${props => props.theme.blue} !important;
      }
      .active{
          color: ${props => props.theme.red} !important;
        }
    }
  }
}
#gatsby-focus-wrapper{
  position: relative;
}
h1, h2, h3, h4, h5, ul, ol {
  margin: 0;
  padding: 0;
}
`;

export default GlobalStyle;