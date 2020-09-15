import React, { FunctionComponent } from 'react';
import styled from 'styled-components';

import spooksAvatar from '../../assets/img/spooks.svg';
import cleoAvatar from '../assets/img/cleo.svg';
import tibouAvatar from '../assets/img/tibou.svg';
import nougatAvatar from '../assets/img/nougat.svg';

interface AvatarProps {
  name?: string;
}

const StyledAvatar = styled.div`
  width: 100px;
  height: 100px;
  background-color: ${(props) => props.theme.pink};
  display: flex;
  img {
    display: flex;
    width: 100%;
    height: auto;
  }
  span {
    font-family: 'Syne';
  }
`;
export const Avatar: FunctionComponent<AvatarProps> = ({ name }) => {
  return (
    <StyledAvatar>
      <span>{name}</span>
      <img src={spooksAvatar} />
    </StyledAvatar>
  );
};
