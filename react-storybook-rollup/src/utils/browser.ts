/* eslint-disable */
/* tslint-disable */
declare var opr: any;
declare var InstallTrigger: any;
declare var safari: any;

let isOpera: boolean;
let isSafari: boolean;
let isChrome: boolean;
let isIE: boolean;
let isFirefox: boolean;
let isEdge: boolean;
let isBlink: boolean;

if (typeof (window as any) !== 'undefined') {
  // Opera 8.0+
  isOpera =
    (!!(window as any).opr && !!opr.addons) || !!(window as any).opera || navigator.userAgent.indexOf(' OPR/') >= 0;

  // Firefox 1.0+
  isFirefox = typeof InstallTrigger !== 'undefined';

  // Safari 3.0+ "[object HTMLElementConstructor]"
  isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);

  // Internet Explorer 6-11
  isIE = /*@cc_on!@*/ false || !!(document as any).documentMode;

  // Edge 20+
  isEdge = !isIE && !!(window as any).StyleMedia;

  // Chrome 1 - 71
  isChrome = !!(window as any).chrome && (!!(window as any).chrome.webstore || !!(window as any).chrome.runtime);

  // Blink engine detection
  isBlink = (isChrome || isOpera) && !!(window as any).CSS;
}

export { isOpera, isSafari, isChrome, isIE, isFirefox, isEdge, isBlink };
