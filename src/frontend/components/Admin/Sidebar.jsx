import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 12vw;
  height: 100vh;
  background: ${props => props.theme.primary};
  position: absolute;
  left: 0;
  display: flex;
  flex-direction: column;
`

const SideCategories = styled.div`
  width: 100%;
  background: ${props => props.theme.buttonPrimary};
  color: white;
  border: 1px solid black; 
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Open Sans', 'sans-serif';
  font-size: 100%; 

  :hover {
    cursor: pointer;
    background: none;
    transition: .3s;
  }
`

const Sidebar = () => (
  <Container>
    <SideCategories>
      USERS
    </SideCategories>
    <SideCategories>
      SEND
    </SideCategories>
    <SideCategories>
      NUDES
    </SideCategories>
    <SideCategories>
      SEND
    </SideCategories>
    <SideCategories>
      NUDES
    </SideCategories>
    <SideCategories>
      NUDES
    </SideCategories>
  </Container>
);

export default Sidebar;