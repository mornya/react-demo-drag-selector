(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{44:function(t,e,s){"use strict";s.r(e);var i,n=s(0),o=s(45),r=(s(49),s(50),i=function(t,e){return(i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var s in e)e.hasOwnProperty(s)&&(t[s]=e[s])})(t,e)},function(t,e){function s(){this.constructor=t}i(t,e),t.prototype=null===e?Object.create(e):(s.prototype=e.prototype,new s)}),a=function(){return(a=Object.assign||function(t){for(var e,s=1,i=arguments.length;s<i;s++)for(var n in e=arguments[s])Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t}).apply(this,arguments)},l=Array(50).fill(null).map((function(){return{name:"ITEM",isSelected:!1}}));[3,6,11,24,29,32,33,40,49].forEach((function(t){l[t].name="INITIALLY SELECTED ITEM",l[t].isSelected=!0}));var c=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.ds=null,e.state={data:l,isActive:!0},e.setAllSelection=function(t){return function(){e.ds&&e.ds.setAllSelection(t)}},e.toggleActive=function(){return e.setState({isActive:!e.state.isActive},(function(){return e.ds.setActive(e.state.isActive)}))},e}return r(e,t),e.prototype.componentDidMount=function(){var t=this;this.ds=new o.DragSelector(".drag-selector",{data:this.state.data.map((function(t){return t.isSelected})),isAllowOverSelection:!1,onSelected:function(e){var s=t.state.data.map((function(t,s){return a(a({},t),{isSelected:e[s]})}));t.setState({data:s},(function(){return console.log(t.state.data)}))}})},e.prototype.render=function(){return n.createElement("div",{className:"app-wrapper"},n.createElement("nav",null,n.createElement("p",null,"(",this.state.data.filter((function(t){return t.isSelected})).length," items selected)"),n.createElement("button",{type:"button",onClick:this.setAllSelection(!0)},"ADD ALL"),n.createElement("button",{type:"button",onClick:this.setAllSelection(!1)},"SUB ALL"),n.createElement("button",{type:"button",onClick:this.toggleActive},"TOGGLE ACTIVE"),n.createElement("span",null,this.state.isActive?" Actived":" Deactived")),n.createElement("section",null,n.createElement("div",{className:"drag-selector"},this.state.data.map((function(t,e){return n.createElement("div",{key:e,className:"drag-selector-item","data-selected":t.isSelected},n.createElement("div",null,"Item #",e+1),n.createElement("div",{className:"item-flag"+(t.isSelected?" on":"")},n.createElement("span",{role:"img","aria-label":"heart"},"❤️")))})))),n.createElement("header",null,n.createElement("h1",null,"React Demo"),n.createElement("h2",null,"Drag Selector library"),n.createElement("p",null,"This is NPM ",n.createElement("code",null,"@mornya/drag-selector-libs")," sample demo app!"),n.createElement("br",null),n.createElement("a",{href:"https://npmjs.com/search?q=mornya",target:"_blank",title:"Go NPM registry",rel:"noopener noreferrer"},"Go NPM registry"),n.createElement("br",null),n.createElement("br",null),n.createElement("br",null)),n.createElement("footer",null,"Copyright 2019 by mornya. All rights reserved."))},e.prototype.componentWillUnmount=function(){this.ds&&this.ds.destroy()},e}(n.Component);e.default=c},45:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=s(46);e.DragSelector=i.DragSelector},46:function(t,e,s){"use strict";var i=this&&this.__assign||function(){return(i=Object.assign||function(t){for(var e,s=1,i=arguments.length;s<i;s++)for(var n in e=arguments[s])Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t}).apply(this,arguments)},n=this&&this.__read||function(t,e){var s="function"==typeof Symbol&&t[Symbol.iterator];if(!s)return t;var i,n,o=s.call(t),r=[];try{for(;(void 0===e||e-- >0)&&!(i=o.next()).done;)r.push(i.value)}catch(t){n={error:t}}finally{try{i&&!i.done&&(s=o.return)&&s.call(o)}finally{if(n)throw n.error}}return r},o=this&&this.__spread||function(){for(var t=[],e=0;e<arguments.length;e++)t=t.concat(n(arguments[e]));return t},r=this&&this.__values||function(t){var e="function"==typeof Symbol&&Symbol.iterator,s=e&&t[e],i=0;if(s)return s.call(t);if(t&&"number"==typeof t.length)return{next:function(){return t&&i>=t.length&&(t=void 0),{value:t&&t[i++],done:!t}}};throw new TypeError(e?"Object is not iterable.":"Symbol.iterator is not defined.")};Object.defineProperty(e,"__esModule",{value:!0});var a=s(47),l=s(48),c={data:[],isAllowOverSelection:!0,onSelected:function(){}},d=function(){function t(t,e){var s,n,d,h=this;this.dragSelectorMain=null,this.selector="",this.option=null,this.elementSelection=null,this.mouseMoveRafId=-1,this.resizeTID=null,this.dragSelectorMain=new a.DragSelectorMain,this.selector=t||".drag-selector",this.option=i(i({},c),e),this.receiveClientBroadcast=this.receiveClientBroadcast.bind(this),this.onKeyDown=this.onKeyDown.bind(this),this.onKeyUp=this.onKeyUp.bind(this),this.onMouseDown=this.onMouseDown.bind(this),this.onMouseMove=this.onMouseMove.bind(this),this.onMouseUp=this.onMouseUp.bind(this),this.onResize=this.onResize.bind(this),this.removeSelectArea=this.removeSelectArea.bind(this),this.setActive=this.setActive.bind(this),this.destroy=this.destroy.bind(this);var u=null!==(d=document.querySelector(this.selector))&&void 0!==d?d:document.body;this.state={wrapper:u,objects:document.querySelectorAll(this.selector+" .drag-selector-item"),data:o(this.option.data),isActive:!0,isDisable:!1,isMouseDown:!1,isControlKeyPressed:!1,isShiftKeyPressed:!1,mousePos:{startX:0,startY:0,endX:0,endY:0}},this.state.wrapper.style.position="relative",this.state.wrapper.ondragstart=function(){return!1},this.state.wrapper.ondblclick=function(){return!1};var p=[];if(this.state.objects)try{for(var v=r(this.state.objects),f=v.next();!f.done;f=v.next()){var y=f.value;p.push(y)}}catch(t){s={error:t}}finally{try{f&&!f.done&&(n=v.return)&&n.call(v)}finally{if(s)throw s.error}}p.forEach((function(t,e){var s;null===(s=h.dragSelectorMain)||void 0===s||s.addObserver(new l.DragSelectorClient({el:t,index:e,broadcast:h.receiveClientBroadcast}))})),this.elementSelection=document.createElement("span"),this.elementSelection.className="drag-selector-selection",this.elementSelection.style.display="none",this.elementSelection.style.position="absolute",this.elementSelection.style.boxSizing="border-box",this.elementSelection.style.cursor="inherit",this.removeSelectArea(),this.state.wrapper.appendChild(this.elementSelection),window.addEventListener("keydown",this.onKeyDown,!1),window.addEventListener("keyup",this.onKeyUp,!1),window.addEventListener("mousedown",this.onMouseDown,!1),window.addEventListener("resize",this.onResize,!1)}return t.prototype.notifyEvent=function(){this.dragSelectorMain&&(this.state.isControlKeyPressed?this.dragSelectorMain.notifyAll("DRAG_ADD",this.state.mousePos):this.state.isShiftKeyPressed?this.dragSelectorMain.notifyAll("DRAG_SUB",this.state.mousePos):this.dragSelectorMain.notifyAll("DRAG",this.state.mousePos))},t.prototype.setCursor=function(){this.state.isControlKeyPressed?(this.state.wrapper.classList.add("add"),this.state.wrapper.classList.remove("sub")):this.state.isShiftKeyPressed?(this.state.wrapper.classList.remove("add"),this.state.wrapper.classList.add("sub")):(this.state.wrapper.classList.remove("add"),this.state.wrapper.classList.remove("sub"))},t.prototype.receiveClientBroadcast=function(t,e,s){"FEEDBACK"===t&&(this.state.data[e]=s)},t.prototype.calculateWrapperPos=function(){var t=this.state.wrapper.getClientRects()[0],e=window.scrollX,s=window.scrollY;return{startX:t.left+e,startY:t.top+s,endX:t.right+e,endY:t.bottom+s,width:this.state.wrapper.offsetWidth,height:this.state.wrapper.offsetHeight}},t.prototype.onKeyDown=function(t){"Meta"===t.key||"Control"===t.key?(t.preventDefault(),this.state.isControlKeyPressed=!0,this.state.isShiftKeyPressed=!1,this.notifyEvent()):"Alt"!==t.key&&"Shift"!==t.key||(t.preventDefault(),this.state.isControlKeyPressed=!1,this.state.isShiftKeyPressed=!0,this.notifyEvent()),this.setCursor()},t.prototype.onKeyUp=function(t){"Meta"===t.key||"Control"===t.key?this.state.isControlKeyPressed=!1:"Alt"!==t.key&&"Shift"!==t.key||(this.state.isShiftKeyPressed=!1),this.setCursor()},t.prototype.onMouseDown=function(t){var e=t.pageX||t.clientX,s=t.pageY||t.clientY,i=this.state.wrapper.getClientRects()[0],n=window.scrollX,o=window.scrollY;if(!(!this.state.isActive||this.state.isDisable||2===t.button||s<i.top+o||s>i.bottom+o||e<i.left+n||e>i.right+n)){t.preventDefault();var r=e-(i.left+n),a=s-(i.top+o);this.state.isMouseDown=!0,this.state.mousePos={startX:r,startY:a,endX:r,endY:a},this.notifyEvent(),window.addEventListener("mousemove",this.onMouseMove,!1),window.addEventListener("mouseup",this.onMouseUp,!1)}},t.prototype.onMouseMove=function(t){var e,s=this;if(this.state.isMouseDown){var i=t.pageX||t.clientX,n=t.pageY||t.clientY,o=this.calculateWrapperPos();this.state.mousePos.endX=i-o.startX,this.state.mousePos.endY=n-o.startY;var r=Math.min(this.state.mousePos.startY,this.state.mousePos.endY),a=Math.min(this.state.mousePos.startX,this.state.mousePos.endX),l=Math.max(this.state.mousePos.startX,this.state.mousePos.endX),c=Math.max(this.state.mousePos.startY,this.state.mousePos.endY);(null===(e=this.option)||void 0===e?void 0:e.isAllowOverSelection)||(r=Math.max(r,0),a=Math.max(a,0),l=Math.min(l,o.width),c=Math.min(c,o.height)),this.elementSelection&&(this.elementSelection.style.display="inline",this.elementSelection.style.top=r+"px",this.elementSelection.style.left=a+"px",this.elementSelection.style.width=Math.abs(l-a)+"px",this.elementSelection.style.height=Math.abs(c-r)+"px"),this.mouseMoveRafId=window.requestAnimationFrame((function(){return s.notifyEvent()}))}},t.prototype.onMouseUp=function(){var t,e,s;this.state.isMouseDown&&(this.state.isMouseDown=!1,this.state.mousePos={startX:0,startY:0,endX:0,endY:0},this.elementSelection&&(this.elementSelection.style.display="none"),-1!==this.mouseMoveRafId&&(window.cancelAnimationFrame(this.mouseMoveRafId),this.mouseMoveRafId=-1),window.removeEventListener("mousemove",this.onMouseMove),window.removeEventListener("mouseup",this.onMouseUp),null===(s=null===(t=this.option)||void 0===t?void 0:(e=t).onSelected)||void 0===s||s.call(e,this.state.data))},t.prototype.onResize=function(){var t=this;this.resizeTID&&clearTimeout(this.resizeTID),this.resizeTID=setTimeout((function(){var e;null===(e=t.dragSelectorMain)||void 0===e||e.notifyAll("RESIZE",t.state.mousePos)}),500)},t.prototype.removeSelectArea=function(){if(this.elementSelection){var t=this.state.wrapper.querySelector("."+this.elementSelection.className);t&&t.remove()}},t.prototype.getSelectables=function(){return this.state.wrapper.querySelectorAll('.drag-selector-item:not([data-disabled="true"])').length},t.prototype.getSelectableCount=function(t){var e=this;return void 0===t&&(t=[]),t.reduce((function(t,s){return t+e.state.wrapper.querySelectorAll('.drag-selector-item[data-id="'+s+'"]:not([data-disabled="true"])').length}),0)},t.prototype.getSelectedCount=function(t){var e=this;return void 0===t&&(t=[]),t.reduce((function(t,s){return t+e.state.wrapper.querySelectorAll('.drag-selector-item[data-id="'+s+'"]:not([data-disabled="true"]).ds-selected').length}),0)},t.prototype.isActive=function(){return this.state.isActive},t.prototype.setActive=function(t){this.state.isActive=t,t||(this.state.mousePos={startX:0,startY:0,endX:0,endY:0},this.state.isControlKeyPressed=!1,this.state.isShiftKeyPressed=!1,this.setCursor())},t.prototype.isDisable=function(){return this.state.isDisable},t.prototype.setDisable=function(t){var e;t?((e=document.createElement("span")).className="drag-selector-shield",e.style.display="inline",e.style.position="absolute",e.style.top="0",e.style.left="0",e.style.right="0",e.style.bottom="0",e.style.boxSizing="border-box",this.state.wrapper.appendChild(e)):(e=this.state.wrapper.querySelector(".drag-selector-shield"))&&e.remove(),this.state.isDisable=t},t.prototype.setSelection=function(t,e){var s,i,n,o,r=this;void 0===e&&(e=[]),e.length?e.forEach((function(e){var s;null===(s=r.dragSelectorMain)||void 0===s||s.notifyAll(t?"SELECT":"DESELECT",e)})):null===(s=this.dragSelectorMain)||void 0===s||s.notifyAll(t?"SELECT_ALL":"DESELECT_ALL",null),null===(o=null===(i=this.option)||void 0===i?void 0:(n=i).onSelected)||void 0===o||o.call(n,this.state.data)},t.prototype.setAllSelection=function(t){var e,s,i,n;null===(e=this.dragSelectorMain)||void 0===e||e.notifyAll(t?"SELECT_ALL":"DESELECT_ALL",null),null===(n=null===(s=this.option)||void 0===s?void 0:(i=s).onSelected)||void 0===n||n.call(i,this.state.data)},t.prototype.destroy=function(){var t;this.removeSelectArea(),null===(t=this.dragSelectorMain)||void 0===t||t.clearObservers(),window.removeEventListener("keydown",this.onKeyDown),window.removeEventListener("keyup",this.onKeyUp),window.removeEventListener("mousedown",this.onMouseDown),window.removeEventListener("resize",this.onResize)},t}();e.DragSelector=d},47:function(t,e,s){"use strict";var i=this&&this.__values||function(t){var e="function"==typeof Symbol&&Symbol.iterator,s=e&&t[e],i=0;if(s)return s.call(t);if(t&&"number"==typeof t.length)return{next:function(){return t&&i>=t.length&&(t=void 0),{value:t&&t[i++],done:!t}}};throw new TypeError(e?"Object is not iterable.":"Symbol.iterator is not defined.")};Object.defineProperty(e,"__esModule",{value:!0});var n=function(){function t(){this.observers=[]}return t.prototype.addObserver=function(t){return this.observers.push(t),this.observers.length},t.prototype.notifyAll=function(t,e){var s,n;try{for(var o=i(this.observers),r=o.next();!r.done;r=o.next())r.value.updateStatus(t,e)}catch(t){s={error:t}}finally{try{r&&!r.done&&(n=o.return)&&n.call(o)}finally{if(s)throw s.error}}},t.prototype.clearObservers=function(){var t,e;try{for(var s=i(this.observers),n=s.next();!n.done;n=s.next())n.value.destroy()}catch(e){t={error:e}}finally{try{n&&!n.done&&(e=s.return)&&e.call(s)}finally{if(t)throw t.error}}this.observers=[]},t}();e.DragSelectorMain=n},48:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=function(){function t(t){this.content=null,this.contentIndex=-1,this.proxied={isActived:!1,isDisabled:!1},this.option=t,this.content=t.el,this.contentIndex=t.index,this.proxied={isActived:!1,isDisabled:!1},this.contentId=this.content.getAttribute("data-id")||String(this.contentIndex),"true"===this.content.getAttribute("data-selected")&&(this.addClass(["ds-selected"]),this.proxied.isActived=!0),"true"===this.content.getAttribute("data-disabled")&&(this.addClass(["ds-disabled"]),this.proxied.isDisabled=!0,this.proxied.isActived=!1)}return Object.defineProperty(t.prototype,"isActived",{get:function(){return this.proxied.isActived},set:function(t){this.proxied.isDisabled?this.proxied.isActived=!1:t!==this.proxied.isActived&&(t?(this.option.broadcast("FEEDBACK",this.contentIndex,!0),this.addClass(["ds-selected"])):(this.option.broadcast("FEEDBACK",this.contentIndex,!1),this.removeClass(["ds-selected"])),this.proxied.isActived=t)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"isDisabled",{get:function(){return this.proxied.isDisabled},set:function(t){t!==this.proxied.isDisabled&&(this.proxied.isDisabled=t,this.proxied.isActived=!t)},enumerable:!0,configurable:!0}),t.prototype.updateStatus=function(t,e){switch(t){case"DRAG":this.checkWaypointActived(e,"");break;case"DRAG_ADD":this.checkWaypointActived(e,"META");break;case"DRAG_SUB":this.checkWaypointActived(e,"SHIFT");break;case"SELECT":e!==this.contentId&&""!==e||(this.isActived=!0);break;case"DESELECT":e!==this.contentId&&""!==e||(this.isActived=!1);break;case"SELECT_ALL":this.isActived=!0;break;case"DESELECT_ALL":this.isActived=!1}},t.prototype.destroy=function(){this.removeClass(["ds-selected"])},t.prototype.checkWaypointActived=function(t,e){var s=Math.min(t.startX,t.endX),i=Math.min(t.startY,t.endY),n=Math.max(t.startX,t.endX),o=Math.max(t.startY,t.endY),r=this.content.offsetTop,a=this.content.offsetLeft,l=this.content.offsetLeft+this.content.clientWidth,c=this.content.offsetTop+this.content.clientHeight,d=o>=r&&i<=c&&n>=a&&s<=l;""===e?this.isActived=d:d&&("META"===e?this.isActived=!0:"SHIFT"===e&&(this.isActived=!1))},t.prototype.addClass=function(t){var e=this;t.forEach((function(t){return e.content.classList.add(t)}))},t.prototype.removeClass=function(t){var e=this;t.forEach((function(t){return e.content.classList.remove(t)}))},t}();e.DragSelectorClient=i},49:function(t,e,s){},50:function(t,e,s){}}]);
//# sourceMappingURL=3-706498a8.js.map