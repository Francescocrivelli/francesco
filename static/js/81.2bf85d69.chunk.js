(self.webpackChunkportfolio_app=self.webpackChunkportfolio_app||[]).push([[81,84],{7081:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return y}});var o=n(1413),i=n(9439),r=n(2791),l=n(1531),a=n(7022),s=n(839),c=n(6444),u=n(1394),f=n(7084),p=n(126),d=n(2150),h=n(184),b={ulStyle:{listStylePosition:"outside",paddingLeft:20},subtitleContainerStyle:{marginTop:10,marginBottom:10},subtitleStyle:{display:"inline-block"},inlineChild:{display:"inline-block"},itemStyle:{marginBottom:10}};var y=function(e){var t=(0,r.useContext)(c.Ni),n=e.header,y=(0,r.useState)(null),m=(0,i.Z)(y,2),v=m[0],g=m[1];return(0,r.useEffect)((function(){fetch(p.Z.experiences,{method:"GET"}).then((function(e){return e.json()})).then((function(e){return g(e.experiences)})).catch((function(e){return e}))}),[]),(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(f.default,{title:n}),v?(0,h.jsx)("div",{className:"section-content-container",children:(0,h.jsx)(a.Z,{children:(0,h.jsx)(l.Timeline,{lineColor:t.timelineLineColor,children:v.map((function(e){return(0,h.jsx)(u.ZP,{children:(0,h.jsxs)(l.TimelineItem,{dateText:e.dateText,dateInnerStyle:{background:t.accentColor},style:b.itemStyle,bodyContainerStyle:{color:t.color},children:[(0,h.jsx)("h2",{className:"item-title",children:e.title}),(0,h.jsxs)("div",{style:b.subtitleContainerStyle,children:[(0,h.jsx)("h4",{style:(0,o.Z)((0,o.Z)({},b.subtitleStyle),{},{color:t.accentColor}),children:e.subtitle}),e.workType&&(0,h.jsxs)("h5",{style:b.inlineChild,children:["\xa0\xb7"," ",e.workType]})]}),(0,h.jsx)("ul",{style:b.ulStyle,children:e.workDescription.map((function(e){return(0,h.jsxs)("div",{children:[(0,h.jsx)("li",{children:(0,h.jsx)(s.D,{children:e,components:{p:"span"}})}),(0,h.jsx)("br",{})]},e)}))})]},e.title+e.dateText)})}))})})}):(0,h.jsx)(d.default,{})]})}},7084:function(e,t,n){"use strict";n.r(t);n(2791),n(3508);var o=n(184);t.default=function(e){var t=e.title;return(0,o.jsx)("div",{className:"header",children:t})}},6572:function(e,t,n){var o;o=function(e,t){return function(e){var t={};function n(o){if(t[o])return t[o].exports;var i=t[o]={i:o,l:!1,exports:{}};return e[o].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(o,i,function(t){return e[t]}.bind(null,i));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=4)}([function(e,t,n){e.exports=n(5)()},function(t,n){t.exports=e},function(e,n){e.exports=t},function(e,t){e.exports=function(e,t,n){var o=e.direction,i=e.value;switch(o){case"top":return n.top+i<t.top&&n.bottom>t.bottom&&n.left<t.left&&n.right>t.right;case"left":return n.left+i<t.left&&n.bottom>t.bottom&&n.top<t.top&&n.right>t.right;case"bottom":return n.bottom-i>t.bottom&&n.left<t.left&&n.right>t.right&&n.top<t.top;case"right":return n.right-i>t.right&&n.left<t.left&&n.top<t.top&&n.bottom>t.bottom}}},function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return m}));var o=n(1),i=n.n(o),r=n(2),l=n.n(r),a=n(0),s=n.n(a),c=n(3),u=n.n(c);function f(e){return f="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},f(e)}function p(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function d(e){return d=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},d(e)}function h(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function b(e,t){return b=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},b(e,t)}function y(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var m=function(e){function t(e){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),n=function(e,t){return!t||"object"!==f(t)&&"function"!==typeof t?h(e):t}(this,d(t).call(this,e)),y(h(n),"getContainer",(function(){return n.props.containment||window})),y(h(n),"addEventListener",(function(e,t,o,i){var r;n.debounceCheck||(n.debounceCheck={});var l=function(){r=null,n.check()},a={target:e,fn:i>-1?function(){r||(r=setTimeout(l,i||0))}:function(){clearTimeout(r),r=setTimeout(l,o||0)},getLastTimeout:function(){return r}};e.addEventListener(t,a.fn),n.debounceCheck[t]=a})),y(h(n),"startWatching",(function(){n.debounceCheck||n.interval||(n.props.intervalCheck&&(n.interval=setInterval(n.check,n.props.intervalDelay)),n.props.scrollCheck&&n.addEventListener(n.getContainer(),"scroll",n.props.scrollDelay,n.props.scrollThrottle),n.props.resizeCheck&&n.addEventListener(window,"resize",n.props.resizeDelay,n.props.resizeThrottle),!n.props.delayedCall&&n.check())})),y(h(n),"stopWatching",(function(){if(n.debounceCheck)for(var e in n.debounceCheck)if(n.debounceCheck.hasOwnProperty(e)){var t=n.debounceCheck[e];clearTimeout(t.getLastTimeout()),t.target.removeEventListener(e,t.fn),n.debounceCheck[e]=null}n.debounceCheck=null,n.interval&&(n.interval=clearInterval(n.interval))})),y(h(n),"check",(function(){var e,t,o=n.node;if(!o)return n.state;if(e=function(e){return void 0===e.width&&(e.width=e.right-e.left),void 0===e.height&&(e.height=e.bottom-e.top),e}(n.roundRectDown(o.getBoundingClientRect())),n.props.containment){var i=n.props.containment.getBoundingClientRect();t={top:i.top,left:i.left,bottom:i.bottom,right:i.right}}else t={top:0,left:0,bottom:window.innerHeight||document.documentElement.clientHeight,right:window.innerWidth||document.documentElement.clientWidth};var r=n.props.offset||{};"object"===f(r)&&(t.top+=r.top||0,t.left+=r.left||0,t.bottom-=r.bottom||0,t.right-=r.right||0);var l={top:e.top>=t.top,left:e.left>=t.left,bottom:e.bottom<=t.bottom,right:e.right<=t.right},a=e.height>0&&e.width>0,s=a&&l.top&&l.left&&l.bottom&&l.right;if(a&&n.props.partialVisibility){var c=e.top<=t.bottom&&e.bottom>=t.top&&e.left<=t.right&&e.right>=t.left;"string"===typeof n.props.partialVisibility&&(c=l[n.props.partialVisibility]),s=n.props.minTopValue?c&&e.top<=t.bottom-n.props.minTopValue:c}"string"===typeof r.direction&&"number"===typeof r.value&&(console.warn("[notice] offset.direction and offset.value have been deprecated. They still work for now, but will be removed in next major version. Please upgrade to the new syntax: { %s: %d }",r.direction,r.value),s=u()(r,e,t));var p=n.state;return n.state.isVisible!==s&&(p={isVisible:s,visibilityRect:l},n.setState(p),n.props.onChange&&n.props.onChange(s)),p})),n.state={isVisible:null,visibilityRect:{}},n}var n,o,r;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&b(e,t)}(t,e),n=t,(o=[{key:"componentDidMount",value:function(){this.node=l.a.findDOMNode(this),this.props.active&&this.startWatching()}},{key:"componentWillUnmount",value:function(){this.stopWatching()}},{key:"componentDidUpdate",value:function(e){this.node=l.a.findDOMNode(this),this.props.active&&!e.active?(this.setState({isVisible:null,visibilityRect:{}}),this.startWatching()):this.props.active||this.stopWatching()}},{key:"roundRectDown",value:function(e){return{top:Math.floor(e.top),left:Math.floor(e.left),bottom:Math.floor(e.bottom),right:Math.floor(e.right)}}},{key:"render",value:function(){return this.props.children instanceof Function?this.props.children({isVisible:this.state.isVisible,visibilityRect:this.state.visibilityRect}):i.a.Children.only(this.props.children)}}])&&p(n.prototype,o),r&&p(n,r),t}(i.a.Component);y(m,"defaultProps",{active:!0,partialVisibility:!1,minTopValue:0,scrollCheck:!1,scrollDelay:250,scrollThrottle:-1,resizeCheck:!1,resizeDelay:250,resizeThrottle:-1,intervalCheck:!0,intervalDelay:100,delayedCall:!1,offset:{},containment:null,children:i.a.createElement("span",null)}),y(m,"propTypes",{onChange:s.a.func,active:s.a.bool,partialVisibility:s.a.oneOfType([s.a.bool,s.a.oneOf(["top","right","bottom","left"])]),delayedCall:s.a.bool,offset:s.a.oneOfType([s.a.shape({top:s.a.number,left:s.a.number,bottom:s.a.number,right:s.a.number}),s.a.shape({direction:s.a.oneOf(["top","right","bottom","left"]),value:s.a.number})]),scrollCheck:s.a.bool,scrollDelay:s.a.number,scrollThrottle:s.a.number,resizeCheck:s.a.bool,resizeDelay:s.a.number,resizeThrottle:s.a.number,intervalCheck:s.a.bool,intervalDelay:s.a.number,containment:"undefined"!==typeof window?s.a.instanceOf(window.Element):s.a.any,children:s.a.oneOfType([s.a.element,s.a.func]),minTopValue:s.a.number})},function(e,t,n){"use strict";var o=n(6);function i(){}function r(){}r.resetWarningCache=i,e.exports=function(){function e(e,t,n,i,r,l){if(l!==o){var a=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw a.name="Invariant Violation",a}}function t(){return e}e.isRequired=e;var n={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:r,resetWarningCache:i};return n.PropTypes=n,n}},function(e,t,n){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}])},e.exports=o(n(2791),n(4164))},8245:function(e,t,n){"use strict";var o=l(n(2791)),i=l(n(2007)),r=l(n(1694));function l(e){return e&&e.__esModule?e:{default:e}}n(9039);var a=function(e){var t=e.animate,n=e.children,i=e.className,l=e.lineColor;return o.default.createElement("div",{className:"timeline--wrapper"},o.default.createElement("div",{className:(0,r.default)(i,"timeline",{"timeline--animate":t}),style:{color:""+l}},n))};a.propTypes={children:i.default.oneOfType([i.default.arrayOf(i.default.node),i.default.node]).isRequired,className:i.default.string,lineColor:i.default.string,animate:i.default.bool},a.defaultProps={animate:!0,className:"",lineColor:"#000"},t.Z=a},4639:function(e,t,n){"use strict";var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},i=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),r=n(2791),l=u(r),a=u(n(2007)),s=u(n(1694)),c=u(n(6572));function u(e){return e&&e.__esModule?e:{default:e}}n(9336);var f=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.onVisibilitySensorChange=n.onVisibilitySensorChange.bind(n),n.state={visible:!1},n}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),i(t,[{key:"onVisibilitySensorChange",value:function(e){e&&this.setState({visible:!0})}},{key:"render",value:function(){var e=this.props,t=e.id,n=e.children,i=e.dateText,a=e.dateStyle,u=e.dateComponent,f=e.dateInnerStyle,p=e.bodyContainerStyle,d=e.style,h=e.className,b=e.visibilitySensorProps,y=this.state.visible;return l.default.createElement("div",{id:t,className:(0,s.default)(h,"entry",{"timeline-item--no-children":""===n}),style:d},l.default.createElement(c.default,o({},b,{onChange:this.onVisibilitySensorChange}),l.default.createElement(r.Fragment,null,l.default.createElement("div",{className:"title"},l.default.createElement("div",{className:y?"bounce-in":"is-hidden"},null!==u?u:l.default.createElement("span",{style:a,className:"timeline-item-date"},l.default.createElement("time",{style:f,className:"timeline-item-dateinner",title:i},i)))),l.default.createElement("div",{className:"body"},l.default.createElement("div",{className:"body-container "+(y?"bounce-in":"is-hidden"),style:p},n)))))}}]),t}(r.Component);f.propTypes={id:a.default.string,children:a.default.oneOfType([a.default.arrayOf(a.default.node),a.default.node]),className:a.default.string,dateStyle:a.default.shape({}),dateInnerStyle:a.default.shape({}),bodyContainerStyle:a.default.shape({}),style:a.default.shape({}),dateText:a.default.string,dateComponent:a.default.oneOfType([a.default.string,a.default.func,a.default.node]),visibilitySensorProps:a.default.shape({})},f.defaultProps={id:"",children:"",dateComponent:null,className:"",dateStyle:null,bodyContainerStyle:null,dateInnerStyle:null,style:null,dateText:"",visibilitySensorProps:{partialVisibility:!0,offset:{bottom:50}}},t.Z=f},1531:function(e,t,n){"use strict";e.exports={Timeline:n(8245).Z,TimelineItem:n(4639).Z}},9039:function(e,t,n){"use strict";n.r(t),t.default={}},9336:function(e,t,n){"use strict";n.r(t),t.default={}}}]);
//# sourceMappingURL=81.2bf85d69.chunk.js.map