import { injectGlobal } from 'styled-components';

const globalStyle = () => injectGlobal`
  @import url('https://fonts.googleapis.com/css?family=Open+Sans|Raleway|Playfair+Display:700i');

  body {
    margin: 0px;
    padding: 0px;
    height: 100vh;
    width: 100vw;
    font-family: 'Open Sans', sans-serif;
    font-size: 17px;
    color: #333;
    overflow-x: hidden;
  }

  h1, h2, h3, h4, h5 {
    font-family: 'Raleway', 'sans-serif';
    -webkit-font-smoothing: antialiased;
	  -moz-osx-font-smoothing: grayscale;
  }
`;

export default globalStyle;
