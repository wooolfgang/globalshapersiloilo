import React from 'react';
import styled from 'styled-components';
import colors from '../../theme/constants';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${colors.tertiary};
  color: white;
  padding: 0px 20px;
`;

const Dashboard = () => (
  <Container>
    <h1> Hi there! Development is still ongoing on this website. </h1>
  </Container>
);

export default Dashboard;
