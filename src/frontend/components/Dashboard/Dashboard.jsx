import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  padding: 0px 20px;
  background: ${props => props.theme.tertiary};
`;

const Dashboard = () => (
  <Container>
    <h1> Hi there! Development is still ongoing on this website. </h1>
  </Container>
);

export default Dashboard;
