import React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div``;

const MainContainer = styled.div`
  height: 400px;
  background: lightblue;
  display: flex;
  flex-direction: column;
`;

const Cover = styled.div`
  flex: 2;
  background: url('http://i0.kym-cdn.com/photos/images/original/000/653/568/388.jpg');
  background-size: cover;
`;

const Details = styled.div`
  grid-area: details;
  background: lightblue;
  flex: 3;
  text-align: center;
`;

const Picture = styled.div`
  background: blue;
  position: absolute;
  top: 80px;
  left: 50vw;
  transform: translateX(-50%);
  width: 150px;
  height: 150px;
  border-radius: 50%;
  background: url('https://i.pinimg.com/736x/d9/56/88/d9568870abe1741fad8998060b5df0c4--square-faces-squares.jpg');
  background-size: cover;
`;

const Name = styled.p`
  margin: 80px 0 0 0;
  font-size: 2.5em;
  font-weight: bold;
`;

const Occupation = styled.p`
  font-size: 1.5em;
  margin: 0;
`;

const Motto = styled.p`
  font-size: 1.3em;
  font-style: italic;
  color: rgb(70, 70, 70);
  margin: 5px;
`;

const SecondaryContainer = styled.div`
  text-align: center;
`;

const HeaderText = styled.h1`
  margin-top: 20px;
`;

const ProjectContainer = styled.div`
  width: 60%;
  margin: 30px auto;
  border-left: 2px solid gray;
  background: rgb(245, 245, 245);
  text-align: left;
  padding: 30px;
`;

const StyledH2 = styled.h2`
  margin: 0;
`;

const StyledP = styled.p`
  margin: 0;
`;

class Profile extends React.Component {
  render() {
    return (
      <StyledDiv>
        <MainContainer>
          <Cover />
          <Picture />
          <Details>
            <Name>Shiba Inu</Name>
            <Occupation>Like A Boss @ My Owners House (duh!)</Occupation>
            <Motto>"The Walking Doge."</Motto>
          </Details>
        </MainContainer>
        <SecondaryContainer>
          <HeaderText>Completed Projects</HeaderText>
          <ProjectContainer>
            <StyledH2>Eating tissues and slippers</StyledH2>
            <StyledP>25 October 2017</StyledP>
          </ProjectContainer>
          <ProjectContainer>
            <StyledH2>Destroying Vases</StyledH2>
            <StyledP>26 October 2017</StyledP>
          </ProjectContainer>
          <ProjectContainer>
            <StyledH2>Do literally nothing</StyledH2>
            <StyledP>28 October 2017</StyledP>
          </ProjectContainer>
        </SecondaryContainer>
      </StyledDiv>
    );
  }
}

export default Profile;
