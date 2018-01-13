import React from 'react';
import styled from 'styled-components';
import { observer } from 'mobx-react';
import { string, func } from 'prop-types';
import Input from './Input';
import Label from './Label';
import Header from './Header';
import ProfileImage from '../../ProfileImage';

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px 0;
  margin-bottom: 30px;
`;

const Container = styled.div`
  margin: auto;
  margin-bottom: 10px;
`;

const Upload = styled.button`
  font-size: 0.9em;
  cursor: pointer;
  display: block;
  text-align: center;
  margin: auto;
`;

class PersonalInfo extends React.Component {
  static propTypes = {
    email: string.isRequired,
    phoneNumber: string.isRequired,
    imgUrl: string.isRequired,
    onChange: func.isRequired,
  }

  openFileSubmit = () => {
    this.node.click();
  }

  render() {
    const { email, phoneNumber, imgUrl, onChange } = this.props;
    return (
      <StyledDiv>
        <Header> Personal </Header>
        <Container>
          <ProfileImage width="140px" height="140px" imgUrl={imgUrl} />
        </Container>
        <Upload onClick={this.openFileSubmit}> Upload</Upload>
        <input type="file" ref={(ref) => { this.node = ref; }} hidden />
        <Label>Email</Label>
        <Input placeholder="juan_dela_cruz@gmail.com" value={email} onChange={onChange} id="email" />
        <Label>
          Phone Number: <small>(+63)</small>
        </Label>
        <Input type="tel" placeholder="9876543210" value={phoneNumber} onChange={onChange} id="phoneNumber" />
      </StyledDiv>
    );
  }
}

export default observer(PersonalInfo);
