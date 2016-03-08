/*
The MIT License applies unless otherwise noted. See LICENSE.md for details.
Copyright (c) 2015 Peter Svedberg.
*/
 'use strict';

  var store = require('./store'),
    actions = require('./actions'),
    Immutable = require('immutable');

  setTimeout(function(){
      store.dispatch( actions.startListeningToAuth() );
  });

  /* exported dsr */
  let dsr = window.addEventListener('dataSurfaceReady', () => {
    window.addEventListener('createdActionable', e => {
      console.log('createdActionable ' + e.detail.actionable.title);
      var map1 = Immutable.Map({a:1, b:2, c:3});
      var map2 = map1.set('b', 50);
      console.log('map1:b (2)' + map1.get('b'));
      console.log('map2:b (50)' + map2.get('b'));
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
