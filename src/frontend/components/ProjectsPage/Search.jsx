import React from 'react';
import styled from 'styled-components';
import { instanceOf } from 'prop-types';
import { observer, inject } from 'mobx-react';
import ProjectStore from '../../stores/ProjectStore';

const StyledDiv = styled.div`
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 50%;

  @media screen and (max-width: 1012px) {
    width: 100%;
    justify-content: center;
  };
`;

const SearchInput = styled.input`
  background: white;
  height: 80%;
  width: 70%;
  border: none;
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
  border-radius: 0px;
  font-family: ${props => props.theme.fontOne};
  background: ${props => props.theme.buttonPrimary};
  box-shadow: ${props => props.theme.cardOne};

  :hover {
    background: ${props => props.theme.buttonPrimaryDarker};
  }
`;

class Search extends React.Component {
  static propTypes = {
    projectStore: instanceOf(ProjectStore).isRequired,
  }

  componentWillUnmount() {
    const { projectStore } = this.props;
    projectStore.resetSearchFields();
  }

  handleOnEnter = (e) => {
    const { projectStore } = this.props;
    if (e.key === 'Enter') {
      projectStore.search();
    }
  }

  render() {
    const { projectStore } = this.props;
    return (
      <StyledDiv>
        <SearchInput
          placeholder="Search projects..."
          onChange={projectStore.handleInputChange}
          value={projectStore.searchInput}
          onKeyPress={this.handleOnEnter}
        />
        <SearchButton
          type="submit"
          value="Search"
          onClick={projectStore.search}
        />
      </StyledDiv>
    );
  }
}

export default inject('projectStore')(observer(Search));
