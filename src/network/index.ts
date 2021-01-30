export {};

const script = document.createElement('script');
script.src = chrome.extension.getURL('static/js/network.js');
document.documentElement.appendChild(script);

const thunderScript = document.createElement('script');
thunderScript.src = '//open.thunderurl.com/thunder-link.js';
document.documentElement.appendChild(thunderScript);
