import styled from 'styled-components';
import media from '../../assets/theme/media';

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  padding: 25px 0px;
  background: ${props => props.theme.grayOne};

  ${media.phone`
    padding: 0px;
  `}

  h1, h2 {
    text-align: center;
    margin-bottom: 30px;
    color: ${props => props.theme.tertiary};
  }

  #container {
    background: white;
    text-align: center;
    box-shadow: ${props => props.theme.cardTwo};
  }

  form {
    display: grid;
  }

  #signup {
    grid-area: signup;
  }

  #account {
    grid-area: account;
    display: flex;
    flex-direction: column;
    align-items: center;  
  }
  
  #personal {
    grid-area: personal;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  #account, #personal {
    font-size: 17px;
  }

  #title {
    margin-bottom: 30px;
  }

  input[type=date] {
    color: gray;
    font-family: ${props => props.theme.fontOne};
  }

  label {
    margin-left: 5px;
  }

  input[type=radio] {
    height: 15px;
    width: 15px;
  }

  @media screen and (max-width: 550px) {
    form {
      grid-template-areas: 
      "account"
      "personal"
      "signup";
    }

    #container {
      padding: 20px;
    }
  }

  @media screen and (min-width: 550px) {
    form {
      grid-template-areas: 
      "account personal"
      "signup signup";
    }

    #container {
      padding: 20px;
      width: 550px; 
      margin: auto;
    }
  }

  #volunteer-span {
    grid-area: volunteer;
  }

  #organizer-span {
    grid-area: organizer;
  }
`;

export default StyledDiv;
