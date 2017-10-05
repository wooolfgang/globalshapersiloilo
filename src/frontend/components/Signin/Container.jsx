import styled from 'styled-components';
import colors from '../../theme/constants';
import media from '../../theme/media';

const Container = styled.div`
  background: ${colors.secondary};
  height: 80vh;
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;

  ${media.desktop`
    height: 100vh;
  `}

  ${media.phone`
    height: 135vh;
  `}

  #heading {
    width: 400px;
    color: white;
    line-height: 1.5;
    padding: 15px;
    margin-top: -175px;
    margin-left: 20px;

    h1 {
      font-family: 'Playfair Display', 'sans-serif';
    }
  }

  #form-container {    
    text-align: center;
    background: white;
    padding: 30px;
    background: #FAFAFA;
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

  @media screen and (max-width: 600px) {
    #container {
      width: 100vw;
    }
  }

  @media screen and (min-width: 600px) {
    #container {
      width: 600px;
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
    display: flex;
    align-items: center;
    flex-direction: column;
    margin-top: 35px;
  }

  #btn-container {
    grid-area: btn-container;
  }
`;

export default Container;
