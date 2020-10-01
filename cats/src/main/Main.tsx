import React, { FunctionComponent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

import { toggleTheme } from '../store/theme/actions';
import { RootStateType } from '../store';
import { Toggle } from '../components/toggle/toggle';
import { Avatar } from '../components/avatars/avatar';

const StyledMain = styled.div`
  width: 100vw;
  height: 100vh;
  padding: 20px;
  background-color: ${(props) => props.theme.secondary};
  color: ${(props) => props.theme.primary};
  .cards {
    display: flex;
    justify-content: space-between;
  }
`;

const Main: FunctionComponent = () => {
  const dispatch = useDispatch();
  const theme = useSelector((state: RootStateType) => state.theme);
  return (
    <StyledMain>
      <Toggle onClick={() => dispatch(toggleTheme())} checked={theme.dark} />
      <div className="cards">
        <Avatar name="spooks" />
      </div>
      <div>receipe / eating / waste</div>
      <div>calorie counter</div>
    </StyledMain>
  );
};

export { Main };
