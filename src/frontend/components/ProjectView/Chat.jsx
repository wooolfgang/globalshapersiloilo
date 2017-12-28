import React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
  display: grid;
  background: #00244d;
  height: 100vh;
  @media screen and (max-width: 700px) {
    grid-template-areas: 'sidebar' 'mainContainer';
    grid-auto-rows: 200px 1fr;
  }

  @media screen and (min-width: 700px) {
    grid-template-areas: 'sidebar mainContainer';
    grid-auto-rows: 1fr;
    grid-auto-columns: 300px 1fr;
  }
`;

const Sidebar = styled.div`
  grid-area: sidebar;
  background: lightgray;
  text-align: center;
  padding: 20px;
  display: grid;

  @media screen and (max-width: 700px) {
    grid-template-areas: 'sidebarDiv adminContainer';
    grid-auto-colums: 80% 20%;
    grid-gap: 20px;
  }

  @media screen and (min-width: 700px) {
    grid-template-areas: 'sidebarDiv' 'adminContainer';
  }
`;

const MainContainer = styled.div`
  grid-area: mainContainer;
  display: grid;
  grid-template-areas: 'chatArea' 'chatInput';
  grid-auto-rows: 1fr 70px;
  grid-auto-columns: 1fr;
`;

const OrganizerLogo = styled.div`
  height: 150px;
  width: 150px;
  margin: 30px auto;
  border-radius: 50%;
  background: gray;
  grid-area: logo;
  @media screen and (max-width: 700px) {
    height: 80px;
    width: 80px;
    margin: 0 auto;
  }
`;

const ProjectTitleContainer = styled.div`
  grid-area: title;
`;

const DetailsContainer = styled.div`
  grid-area: details;
`;

const SidebarDiv = styled.div`
  grid-area: sidebarDiv;
  display: grid;
  grid-template-areas: 'logo' 'title' 'details';
  /* grid-auto-rows: 1fr; */
  grid-auto-columns: 250px;
  @media screen and (max-width: 700px) {
    grid-template-areas: 'logo details' 'title details';
    grid-auto-rows: 1fr 1fr;
    grid-auto-columns: 1fr;
  }
`;

const AdminContainer = styled.div`
  grid-area: adminContainer;
  text-align: left;
`;

const StyledText = styled.div`
  margin: 10px auto;
  color: white;
  font-size: 1.3em;
  background: #00244d; /* green if online or whatevs*/
  text-align: center;
  padding: 2px;
  width: 60%;
  border-radius: 5px;
`;

const ChatArea = styled.div`
  grid-area: chatArea;
  border: 1px solid white;
  margin: 10px;
  border-radius: 10px;
  padding: 10px;
  vertical-align: bottom;
`;

const ChatInputContainer = styled.div`
  grid-area: chatInput;
  border-radius: 10px;
  margin: 10px;
  text-align: center;
`;

const ChatInput = styled.input`
  background: inherit;
  width: 90%;
  height: 50px;
  border-radius: 10px;
  font-size: 1.2em;
  color: white;
  padding: 20px;
`;

const ChatContainer = styled.div`
  min-height: 50px;
  width: 95%;
  background: rgba(255, 255, 255, 0.3);
  border-radius: 10px;
  padding: 5px;
  margin: 10px auto;
  color: white;
`;

const ChatPicture = styled.nav`
  height: 40px;
  width: 40px;
  border-radius: 50%;
  background: url('http://doge2048.com/meta/doge-600.png');
  background-size: cover;
  grid-area: picture;
`;

const ChatMessage = styled.div`
  margin-left: 30px;
`;

const Volunteer = styled.p`
  font-size: 1.1em;
  font-weight: bold;
  grid-area: sender;
  margin-left: 5px;
`;

const Admin = styled.p`
  font-size: 1.2em;
  font-weight: bold;
  grid-area: sender;
  margin-left: 5px;
  color: #00244f;
  background: white;
  width: auto;
  padding: 3px;
  border-radius: 5px;
`;

const SenderContainer = styled.div`
  display: grid;
  grid-template-areas: 'picture sender .';
  grid-auto-columns: auto auto 1fr;
`;

const PinnedChat = styled.div`
  border-radius: 10px;
  width: 97%;
  height: 100px;
  background: rgba(150, 150, 255, 0.3);
  padding: 10px;
  color: white;
  font-weight: bold;
  font-size: 1.1em;
  margin: 0 auto;
`;

class Chat extends React.Component {
  render() {
    return (
      <StyledDiv>
        <Sidebar>
          <SidebarDiv>
            <OrganizerLogo />
            <ProjectTitleContainer>
              <h2>Project Name</h2>
            </ProjectTitleContainer>
            <DetailsContainer>
              <small>
                A little Details about the project. Lorem ipsum dolor, sit amet
                consectetur adipisicing elit. Incidunt, sapiente?
              </small>
            </DetailsContainer>
          </SidebarDiv>
          <AdminContainer>
            <h3>Admins</h3>
            <StyledText>Juan dela Cruz</StyledText>
            <StyledText>Pedro Penduko</StyledText>
          </AdminContainer>
        </Sidebar>
        <MainContainer>
          <ChatArea>
            <PinnedChat>
              <SenderContainer>
                <ChatPicture />
                <Admin>Juan dela Cruz</Admin>
              </SenderContainer>
              <ChatMessage>This is important stuff.</ChatMessage>
            </PinnedChat>
            <ChatContainer>
              <SenderContainer>
                <ChatPicture />
                <Volunteer>John Doe</Volunteer>
              </SenderContainer>
              <ChatMessage>Hello World!</ChatMessage>
            </ChatContainer>
            <ChatContainer>
              <SenderContainer>
                <ChatPicture />
                <Volunteer>James Smith</Volunteer>
              </SenderContainer>
              <ChatMessage>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla
                modi corrupti dolores officiis aspernatur numquam repellat magni
                tempore velit sint? Vitae aliquid ipsa odit recusandae ab,
                molestias voluptatem illum dicta laborum aut non omnis repellat
                corporis optio alias quam reiciendis! Lorem ipsum dolor, sit
                amet consectetur adipisicing elit. Nulla modi corrupti dolores
                officiis aspernatur numquam repellat magni tempore velit sint?
                Vitae aliquid ipsa odit recusandae ab, molestias voluptatem
                illum dicta laborum aut non omnis repellat corporis optio alias
                quam reiciendis!
              </ChatMessage>
            </ChatContainer>
            <ChatContainer>
              <SenderContainer>
                <ChatPicture />
                <Admin>Juan dela Cruz</Admin>
              </SenderContainer>
              <ChatMessage>Sup boys!</ChatMessage>
            </ChatContainer>
          </ChatArea>
          <ChatInputContainer>
            <ChatInput placeholder="Press &quot;Enter&quot; to send" />
          </ChatInputContainer>
        </MainContainer>
      </StyledDiv>
    );
  }
}

export default Chat;
