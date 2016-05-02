/*
The MIT License applies unless otherwise noted. See LICENSE.md for details.
Copyright (c) 2015 Peter Svedberg.
*/
'use strict';

import initialState from 'js/store/initialstate';

export default {
  getState: () => {
    return initialState;
  },
  
  getActionable: () => {
    return initialState.actionable;
  },
  
  getActionables: () => {
    return initialState.actionables;
  }
};

