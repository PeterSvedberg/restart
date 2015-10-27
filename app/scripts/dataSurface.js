/*
The MIT License applies unless otherwise noted. See LICENSE.md for details.
Copyright (c) 2015 Peter Svedberg.
*/
 'use strict';

  var ds;
  let ready = false;
  
  let isReady = () => {
    if (!ready) {
      console.log('initializing data surface');
      ds = document.querySelector('#ds');
      ready = ds !== null && ds !== undefined;
      if (ready) {
        window.addEventListener('hashchange', function() {
          ds.setHashValue();
          ds.loadActionable();
        });
        window.addEventListener('createActionable', function(e) {
          ds.createActionable(e.detail.value);
        });
        window.addEventListener('deleteActionable', function(e) {
          ds.deleteActionable(e.detail.id);
        });
        // This listener is just here for testing
        window.addEventListener('createdActionable', (e) => {
          console.log('createdActionable ' + e.detail.actionable.id);
        });
        // This listener is just here for testing
        window.addEventListener('deletedActionable', (e) => {
          console.log('deletedActionable ' + e.detail.id);
        });
      }
    }
    return ready;
  };
  
  /* exported setActionables */
  let setActionables = () => {
    if (isReady()) {
      var actionables = [{
        'id': 'One',
        'title': 'Daily'
       }, {
        'id': 'Two',
        'title': 'News'
       }, {
        'id': 'Three',
        'title': 'Weather'
      }];
      ds.setActionables(actionables);
    } else {
      console.warn('Data surface is not ready, data binding will not work!');
    }
  };
  
  /* exported dsr */
  let dsr = window.addEventListener('dataSurfaceReady', () => {
    console.log('on dataSurfaceReady');
    setActionables();
  });
  
  /* exported getActionables */
  let getActionables = () => {
    if (isReady()) {
      console.log(ds.getActionables());
    } else {
      console.warn('Data surface is not ready, data binding will not work!');
    }
  };
  