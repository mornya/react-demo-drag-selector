(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{46:function(e,t,n){"use strict";n.r(t);var r,l=n(0),a=n(47),o=(n(50),n(51),r=function(e,t){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),c=function(){return(c=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var l in t=arguments[n])Object.prototype.hasOwnProperty.call(t,l)&&(e[l]=t[l]);return e}).apply(this,arguments)},i=Array(50).fill(null).map((function(){return{name:"ITEM",isSelected:!1}}));[3,6,11,24,29,32,33,40,49].forEach((function(e){i[e].name="INITIALLY SELECTED ITEM",i[e].isSelected=!0}));var s=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.ds=null,t.state={data:i,isActive:!0},t.setAllSelection=function(e){return function(){t.ds&&t.ds.setAllSelection(e)}},t.toggleActive=function(){return t.setState({isActive:!t.state.isActive},(function(){return t.ds.setActive(t.state.isActive)}))},t}return o(t,e),t.prototype.componentDidMount=function(){var e=this;this.ds=new a.DragSelector(".drag-selector",{data:this.state.data.map((function(e){return e.isSelected})),isAllowOverSelection:!1,onSelected:function(t){var n=e.state.data.map((function(e,n){return c(c({},e),{isSelected:t[n]})}));e.setState({data:n},(function(){return console.log(e.state.data)}))}})},t.prototype.render=function(){return l.createElement("div",{className:"app-wrapper"},l.createElement("nav",null,l.createElement("p",null,"(",this.state.data.filter((function(e){return e.isSelected})).length," items selected)"),l.createElement("button",{type:"button",onClick:this.setAllSelection(!0)},"ADD ALL"),l.createElement("button",{type:"button",onClick:this.setAllSelection(!1)},"SUB ALL"),l.createElement("button",{type:"button",onClick:this.toggleActive},"TOGGLE ACTIVE"),l.createElement("span",null,this.state.isActive?" Actived":" Deactived")),l.createElement("section",null,l.createElement("div",{className:"drag-selector"},this.state.data.map((function(e,t){return l.createElement("div",{key:t,className:"drag-selector-item","data-selected":e.isSelected},l.createElement("div",null,"Item #",t+1),l.createElement("div",{className:"item-flag"+(e.isSelected?" on":"")},"❤️"))})))),l.createElement("header",null,l.createElement("h1",null,"React Demo"),l.createElement("h2",null,"Drag Selector library"),l.createElement("p",null,"This is NPM ",l.createElement("code",null,"@mornya/drag-selector-libs")," sample demo app!"),l.createElement("br",null),l.createElement("a",{href:"https://npmjs.com/search?q=mornya",target:"_blank",title:"Go NPM registry"},"Go NPM registry"),l.createElement("br",null),l.createElement("br",null),l.createElement("br",null)),l.createElement("footer",null,"Copyright 2019 by mornya. All rights reserved."))},t.prototype.componentWillUnmount=function(){this.ds&&this.ds.destroy()},t}(l.Component);t.default=s},51:function(e,t,n){}}]);
//# sourceMappingURL=7-a73543b8.js.map