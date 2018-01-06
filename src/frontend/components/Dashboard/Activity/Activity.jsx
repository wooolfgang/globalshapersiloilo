import React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
  width: 60%;
  margin: 0 auto;
  padding: 30px;
`;

const TitleContainer = styled.div`
  margin-bottom: 30px;
`;

const ActivityContainer = styled.div`
  padding: 10px;
  margin: 0 auto 20px auto;
  background: #3a7bd5;
  border-radius: 20px;
  min-height: 30px;
  color: white;
`;

const ActivityName = styled.p`
  font-size: 1.5em;
  font-weight: bold;
  margin: 0 0 5px 0;
`;

const ActivityDescription = styled.p`
  background: white;
  color: black;
  padding: 20px;
  border-radius: 5px;
`;

class Activity extends React.Component {
  render() {
    return (
      <StyledDiv>
        <h1>Activity</h1>
        <ActivityContainer>
          <ActivityName>Give Love on Christmas Day</ActivityName>
          <ActivityDescription>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
            doloribus nobis accusamus beatae nulla porro, nesciunt velit
            suscipit voluptates consequuntur?
          </ActivityDescription>
        </ActivityContainer>
        <ActivityContainer>
          <ActivityName>Give Love on Christmas Day</ActivityName>
          <ActivityDescription>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
            doloribus nobis accusamus beatae nulla porro, nesciunt velit
            suscipit voluptates consequuntur?
          </ActivityDescription>
        </ActivityContainer>
        <ActivityContainer>
          <ActivityName>Give Love on Christmas Day</ActivityName>
          <ActivityDescription>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
            doloribus nobis accusamus beatae nulla porro, nesciunt velit
            suscipit voluptates consequuntur?
          </ActivityDescription>
        </ActivityContainer>
        <ActivityContainer>
          <ActivityName>Give Love on Christmas Day</ActivityName>
          <ActivityDescription>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
            doloribus nobis accusamus beatae nulla porro, nesciunt velit
            suscipit voluptates consequuntur?
          </ActivityDescription>
        </ActivityContainer>
        <ActivityContainer>
          <ActivityName>Give Love on Christmas Day</ActivityName>
          <ActivityDescription>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
            doloribus nobis accusamus beatae nulla porro, nesciunt velit
            suscipit voluptates consequuntur?
          </ActivityDescription>
        </ActivityContainer>
        <ActivityContainer>
          <ActivityName>Give Love on Christmas Day</ActivityName>
          <ActivityDescription>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
            doloribus nobis accusamus beatae nulla porro, nesciunt velit
            suscipit voluptates consequuntur?
          </ActivityDescription>
        </ActivityContainer>
        <ActivityContainer>
          <ActivityName>Give Love on Christmas Day</ActivityName>
          <ActivityDescription>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
            doloribus nobis accusamus beatae nulla porro, nesciunt velit
            suscipit voluptates consequuntur?
          </ActivityDescription>
        </ActivityContainer>
      </StyledDiv>
    );
  }
}

export default Activity;
