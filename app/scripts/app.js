/*
The MIT License applies unless otherwise noted. See LICENSE.md for details.
Copyright (c) 2015 Peter Svedberg.
*/
'use strict';

(function(document) {
  
  let app;
  
  let loadElements = () => {
    console.log('loading elements...');
    var importElements = document.createElement('link');
    importElements.rel = 'import';
    importElements.href = 'elements/elements.html';
    importElements.onload = () => {
      console.log('elements loaded');
      document.body.innerHTML = `    
        <template id="app" is="dom-bind">
          <app-view class="flex"></app-view>         
          <paper-toast id="caching-complete"
                       duration="6000"
                       text="Caching complete! This app will work offline.">
          </paper-toast>
          <platinum-sw-register auto-register
                                clients-claim
                                skip-waiting
                                on-service-worker-installed="displayInstalledToast">
            <platinum-sw-cache default-cache-strategy="fastest"
                               cache-config-file="cache-config.json">
            </platinum-sw-cache>
          </platinum-sw-register>
        </template>`;
      app = document.querySelector('#app');
      console.log('app loaded');
      
      app.displayInstalledToast = () => {
        if (!document.querySelector('platinum-sw-cache').disabled) {
          document.querySelector('#caching-complete').show();
        }
      };
    
    };
    document.head.appendChild(importElements);
  };

  let loadWebComponentPolyfill = () => {
    var polyfill = document.createElement('script');
    polyfill.onload = () => {
      console.log('polyfill loaded');
      loadElements();
     };
    polyfill.src = 'bower_components/webcomponentsjs/webcomponents-lite.min.js';
    document.head.appendChild(polyfill);
  };

  // Check to see if Web Components have native support
  let webComponentsSupported = ('registerElement' in document &&
                                'import' in document.createElement('link') &&
                                'content' in document.createElement('template'));

  if (webComponentsSupported) {
    console.log('Web Components are supported, no need for polyfill!');
    loadElements();
  } else {
    console.log('Web Components NOT supported, we need to polyfill!');
    loadWebComponentPolyfill();
  }

})(document);
