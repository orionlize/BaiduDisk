export {};

const script = document.createElement('script');
script.src = chrome.extension.getURL('static/js/network.js');
document.documentElement.appendChild(script);
