/* eslint-disable max-len */
export {};

chrome.runtime.onInstalled.addListener(() => {
  console.log('background ts run success!', chrome);
});

// 网页给插件传值
chrome.runtime.onMessage.addListener((dlink, sender) => {
  const xhr = new XMLHttpRequest();
  xhr.open('HEAD', dlink);
  xhr.onload = () => {
    chrome.tabs.sendMessage(sender.tab.id, xhr.responseURL, {}, () => {});
  };
  xhr.send();
  return true;
});

chrome.webRequest.onBeforeRequest.addListener((e: {url: string}) => {
  return {'redirectUrl': chrome.extension.getURL('./static/js/hook.js')};
}, {
  // eslint-disable-next-line max-len
  'urls': ['*://pan.baidu.com/sns/box-static/disk-share/widget/data/yunData*'],
  'types': ['script'],
},
['blocking']);

