import React from 'react';
import { inject, observer } from 'mobx-react';
import styled from 'styled-components';
import Modal from '../Modal';

const Flex = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const P = styled.p`
  font-family: ${props => props.theme.fontOne};
  font-size: 18px;
`;

const CloseButton = styled.button`
  width: 30%;
`;

const SucccessModal = ({ viewStore }) => (
  <Modal showed={viewStore.orgFormSuccessModalViewed}>
    <Flex>
      <P> Thank you for submitting! </P>
      <CloseButton onClick={viewStore.closeOrgFormSuccessModal}> Close </CloseButton>
    </Flex>
  </Modal>
);

export default inject('viewStore')(observer(SucccessModal));
