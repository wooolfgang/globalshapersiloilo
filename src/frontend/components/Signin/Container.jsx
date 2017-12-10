import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  display: grid;
  background: #3a7bd5;  /* fallback for old browsers */
background: -webkit-linear-gradient(to right, #3a6073, #3a7bd5);  /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to right, #3a6073, #3a7bd5); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

  @media screen and (min-width: 700px) {
    height: 80vh;
    grid-template-areas: "heading . form-container";
    grid-auto-columns: auto 1fr auto;

    #form-container {
      height: 400px;
      margin: 50px;
      padding: 30px;
    }

    #heading {
      padding: 50px 100px;
      width: 80%;
    }
  }

  @media screen and (max-width: 700px) {
    height: 100%;
    grid-template-areas: "heading" "form-container";
    width: 100%;

    #heading {
      text-align: center;
      width: 70%;
    }

    #form-container > div {
      margin: auto;
      padding: 30px 0;
    }
  }

  #heading {
    color: white;
    grid-area: heading;
    margin: 0 auto;
    width: 580px;
  }

  #title {
    font-family: ${props => props.theme.fontThree};
    font-size: 2.3em;
  }

  #form-container {
    display: flex;
    text-align: center;
    background: white;
    background: #FAFAFA;
    grid-area: form-container;
  }

  #line {
    grid-area: line;
    border-top: 1px solid #aaa;
  }

  #loginvia {
    font-size: 15px;
    grid-area: loginvia;
  }

  #field-container {
    grid-area: field-container;
    align-items: center;
    flex-direction: column;
    margin-top: 35px;
    width: 100%;
    display: flex;
  }

  #btn-container {
    grid-area: btn-container;
  }
`;

export default Container;
