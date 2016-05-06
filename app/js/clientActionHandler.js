/*
The MIT License applies unless otherwise noted. See LICENSE.md for details.
Copyright (c) 2015 Peter Svedberg.
*/
'use strict';

import C from 'js/constants';
import store from 'js/store/store';

// TODO this should come from the store
  class Actionable {
    constructor(id, title) {
      this.key = '';
      this.id = id;
      this.timestamp = 0;
      this.title = title;
      this.text = '';
      this.containers = [];
    }
  }
    
  //class Container {
  //  constructor(id, title) {
  //    this.id = id;
  //    this.title = title;
  //    this.text = '';
  //    this.link = '';
  //  }
  //}
    
//TODO setTimeout(function(){
//    store.dispatch( actions.startListeningToAuth() );
//});

let frontend;

function _setFrontend(f) {
  frontend = f;
  console.log('_setFrontend');
  console.log(store.getState());
  frontend.initialData(store.getActionables(), store.getActionable());
}
  
export function init(frontend) {
  _setFrontend(frontend);
}

function _getId() {
  let id;
  if (window.crypto === undefined) {
    id = Math.random() + '';
    id = id.substring(2);
  } else {
    id = window.crypto.getRandomValues(new Uint32Array(2));
    id = `${id[0]}${id[1]}`;
  }
  return id;
}

export function createActionable(name) {
  var a = new Actionable(_getId(), name);
  console.log('Created actionable ' + JSON.stringify(a));
  frontend.createdActionable(store.getActionables(), a);
}

export function createContainer(actionableId, name) {
  // TODO frontend.createdContainer(actionable);
}
  
export function changeActionableName(actionableId, name) {
  // TODO frontend.changedActionableName(actionable);
}
  
export function changeContainerName(actionableId, containerId, name) {
  // TODO frontend.changedContainerName(actionable);
}
  
export function changeContainerLink(actionableId, containerId, link) {
  // TODO frontend.changedContainerLink(actionable);
}
  
export function changeActionableText(actionableId, text) {
  // TODO frontend.changedActionableText(actionable);
}
  
export function deleteActionable(actionableId) {
  // TODO frontend.changedActionableName(actionable);
}

export function deleteContainer(actionableId, container) {
  // TODO frontend.changedActionableName(actionable);
}

