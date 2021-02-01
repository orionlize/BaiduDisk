/* eslint-disable no-invalid-this */
/* eslint-disable prefer-rest-params */
export {};

const list: {[key: string]: string} = {};

function responseCallBack() {
  // @ts-ignore
  const _this = this;
  if (_this.status === 200 && _this.readyState === 4) {
    if (_this.requestURL) {
      list[document.location.pathname] = _this.response
      ;
    };
  }
  // (list)
}

function openByReplace(originalFunction: any) {
  return function(method: string, url: string, async: boolean) {
    // @ts-ignore
    this.requestMethod = method;
    // @ts-ignore
    this.requestURL = url;
    // @ts-ignore
    this.async = async;
    // @ts-ignore
    this.addEventListener('readystatechange', responseCallBack);

    // @ts-ignore
    return originalFunction.apply(this, arguments);
  };
}

function sendByReplace(originalFunction: any) {
  return function(data: any) {
    // @ts-ignore
    this.requestData = data;
    // @ts-ignore
    return originalFunction.apply(this, arguments);
  };
}

// @ts-ignore
XMLHttpRequest.prototype.open = openByReplace(XMLHttpRequest.prototype.open);
XMLHttpRequest.prototype.send = sendByReplace(XMLHttpRequest.prototype.send);

// requirejs
// https://pan.baidu.com/box-static/function-widget-1/exportWp/downloadFile_b434281.js
