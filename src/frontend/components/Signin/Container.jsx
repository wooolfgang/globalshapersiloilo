import styled from 'styled-components';
import colors from '../../theme/constants';
import media from '../../theme/media';

const Container = styled.div`
  background: ${colors.secondary};
  width: 100%;
  display: grid;

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
    line-height: 1.5;
    grid-area: heading;
    margin: 0 auto;
  }

  #title {
    font-family: 'Playfair Display', serif;
    font-size: 3em;
    font-style: italic;
    font-weight: bolder;
  }

  #form-container {
    display: flex;
    text-align: center;
    background: white;
    background: #FAFAFA;
    grid-area: form-container;
  }
  
  #loginbtn {
    background-color: ${colors.buttonPrimary};
    border: none;
    color: white;
    height: 40px;
    font-size: 16px;
    cursor: pointer;  
    text-align: center;  
    width: 290px;
    font-family: 'Raleway', 'sans-serif';

    :hover {
      background-color: ${colors.buttonPrimaryDarker};
    }
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
