/*
The MIT License applies unless otherwise noted. See LICENSE.md for details.
Copyright (c) 2015 Peter Svedberg.
*/
'use strict';

// Check to see if Web Components have native support
var webComponentsSupported = ('registerElement' in document &&
                              'import' in document.createElement('link') &&
                              'content' in document.createElement('template'));

if (!webComponentsSupported) {
  var polyfill = document.createElement('script');
  polyfill.async = true;
  polyfill.src = 'app/bower_components/webcomponentsjs/webcomponents-lite.min.js';
  polyfill.onload = () => {
    console.log('Polyfill loaded');
   };
  document.head.appendChild(polyfill);
} else {
  console.log('Polyfill not needed');
}
