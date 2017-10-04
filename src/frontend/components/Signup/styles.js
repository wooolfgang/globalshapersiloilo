import styled from 'styled-components';
import colors from '../../theme/constants';
import media from '../../theme/media';

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  padding: 25px 0px;

  ${media.phone`
    padding: 0px;
  `}

  h1, h2 {
    color: ${colors.tertiary};
    text-align: center;
    margin-bottom: 30px;
  }

  #container {
    background-color: #fafafa;
    text-align: center;
  }

  form {
    display: grid;
  }

  #signupbtn {
    background-color: ${colors.buttonPrimary};
    width: 180px;
    border: none;
    color: white;
    height: 40px;
    width: 200px;
    font-size: 15px;
    cursor: pointer;
    transition-duration: .2s;

    :hover {
      background-color: ${colors.buttonPrimaryDarker};
    }
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

    p {
      margin-bottom: 30px;
    }
  }

  input[type=date] {
    color: gray;
    font-family: 'Open Sans', 'sans-serif';
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
      width: 500px; 
      margin: auto;
    }
  }

  #volunteer-span {
    grid-area: volunteer;
  }

  #organizer-span {
    grid-area: organizer;
  }

  label {
    margin-left: 5px;
  }

  input[type=radio] {
    height: 15px;
    width: 15px;
  }

  #fblogin, #googlelogin {
    height: 35px;
    margin: 10px;
    cursor: pointer;
  }
`;

export default StyledDiv;
