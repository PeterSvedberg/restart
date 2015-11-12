/*
The MIT License applies unless otherwise noted. See LICENSE.md for details.
Copyright (c) 2015 Peter Svedberg.
*/
 'use strict';

  var ds;
  let ready = false;

  let isReady = () => {
    if (!ready) {
      ds = document.querySelector('#ds');
      ready = !(ds === null || ds === undefined);
    }
    return ready;
  };

  /* exported dsr */
  let dsr = window.addEventListener('dataSurfaceReady', () => {
    window.addEventListener('createdActionable', e => {
      console.log('createdActionable ' + e.detail.actionable.title);
    });
    window.addEventListener('addedContainer', e => {
      console.log('addedContainer ' + e.detail.container.title);
    });
    window.addEventListener('changedActionableName', e => {
      console.log('changedActionableName ' + e.detail.actionable.title);
    });
    window.addEventListener('changedContainerName', e => {
      console.log('changedContainerName ' + e.detail.newContainer.title);
    });
    window.addEventListener('changedContainerLink', e => {
      console.log('changedContainerLink ' + e.detail.newContainer.link);
    });
    window.addEventListener('changedActionableText', e => {
      console.log('changedActionableText ' + e.detail.actionable.text);
    });
    window.addEventListener('deletedActionable', e => {
      console.log('deletedActionable ' + e.detail.actionable);
    });
    window.addEventListener('deletedContainer', e => {
      console.log('deletedContainer ' + e.detail.container.id + ' in actionable' + e.detail.actionableId);
    });
  });

  /* exported getActionables */
  let getActionables = () => {
    if (isReady()) {
      console.log(ds.getActionables());
    } else {
      console.warn('Data surface is not ready!');
    }
  };
