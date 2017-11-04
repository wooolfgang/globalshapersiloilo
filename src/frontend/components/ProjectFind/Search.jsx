import React from 'react';
import styled from 'styled-components';
import { observable, action } from 'mobx';
import { observer, inject } from 'mobx-react';

const StyledDiv = styled.div`
  height: 60px;
  padding: 0px 20px;
  display: flex;
  align-items: center;
`;

const SearchInput = styled.input`
  background: white;
  height: 80%;
  border: none;
  width: 450px;
  font-size: 18px;
  padding: 0px 20px;
  transition: all 0.1s cubic-bezier(.25,.8,.25,1);
  outline: none;
  box-shadow: ${props => props.theme.cardOne};

  :focus, :hover {
    box-shadow: 0 4px 4px rgba(0,0,0,0.25), 0 5px 5px rgba(0,0,0,0.22);
  }, 
`;

const SearchButton = styled.input`
  border: none;
  height: 75%;
  margin-left: 10px;
  padding: 0px 20px;
  cursor: pointer;
  color: white;
  font-size: 16px;
  outline: none;
  transition: all 0.3s;
  font-family: ${props => props.theme.fontOne};
  background: ${props => props.theme.buttonPrimary};
  box-shadow: ${props => props.theme.cardOne};

  :hover {
    background: ${props => props.theme.buttonPrimaryDarker};
  }
`;

class Search extends React.Component {
  componentWillUnmount() {
    const { store: { projectStore } } = this.props;
    projectStore.resetSearchFields();
  }

  render() {
    const { store: { projectStore } } = this.props;
    return (
      <StyledDiv>
        <SearchInput
          placeholder="Search projects..."
          onChange={projectStore.handleInputChange}
          value={projectStore.searchInput}
        />
        <SearchButton type="submit" value="Search" onClick={projectStore.search} />
      </StyledDiv>
    );
  }
}

export default inject('store')(observer(Search));
