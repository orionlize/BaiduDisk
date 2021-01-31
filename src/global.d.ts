/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
declare namespace chrome {
  declare namespace runtime {
    declare namespace onInstalled {
      function addListener(listener: () => void)
    }
    declare namespace onMessageExternal {
      function addListener(listener: (message: any, sender: any, sendResponse: any) => void)
    }
    declare namespace onMessage {
      function addListener(listener: (message: any, sender: any, sendResponse: any) => void)
    }
    function sendMessage(extensionId?: string, message: any, options: object, responseCallback: Function)
    const id: string;
  }

  declare namespace tabs {
    function query(param: {currentWindow: boolean, active: boolean}, callback?: (tabsArray: any[]) => void)
    function getCurrent(callback: (tab: any) => void)
    function sendMessage(tabId: number, message: any, options: object, responseCallback: Function)
    declare namespace onUpdated {
      function addListener(listener: (tabId: number) =>void)
    }
  }

  declare namespace pageAction {
    function show(tabId: number, callback?: Function)
  }

  declare namespace extension {
    function getURL(url: string)
  }

  declare namespace webRequest {
    declare namespace onBeforeRequest {
      function addListener(cb: Function, blocking: {urls: string[], types: string[]}, action: string[])
    }
  }
}

function getDownloadLink()
