import produce, { Draft } from 'immer';

import { ActionType } from '../index';
import { actionTypes } from './actions';

type ThemeState = {
  dark: boolean;
};

const state: ThemeState = { dark: false };

export const themeReducer = produce(
  (draft: Draft<ThemeState>, action: ActionType) => {
    switch (action.type) {
      case actionTypes.TOGGLE_THEME:
        draft.dark = !draft.dark;
    }
  },
  state
);
