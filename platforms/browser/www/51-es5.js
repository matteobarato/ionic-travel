function asyncGeneratorStep(gen,resolve,reject,_next,_throw,key,arg){try{var info=gen[key](arg);var value=info.value}catch(error){reject(error);return}if(info.done){resolve(value)}else{Promise.resolve(value).then(_next,_throw)}}function _asyncToGenerator(fn){return function(){var self=this,args=arguments;return new Promise(function(resolve,reject){var gen=fn.apply(self,args);function _next(value){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"next",value)}function _throw(err){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"throw",err)}_next(undefined)})}}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor)}}function _createClass(Constructor,protoProps,staticProps){if(protoProps)_defineProperties(Constructor.prototype,protoProps);if(staticProps)_defineProperties(Constructor,staticProps);return Constructor}(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[51],{/***/"./node_modules/@ionic/core/dist/esm/ion-refresher_2-ios.entry.js":/*!************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/ion-refresher_2-ios.entry.js ***!
  \************************************************************************/ /*! exports provided: ion_refresher, ion_refresher_content */ /***/function node_modulesIonicCoreDistEsmIonRefresher_2IosEntryJs(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"ion_refresher",function(){return Refresher});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"ion_refresher_content",function(){return RefresherContent});/* harmony import */var _chunk_d0403a2f_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(/*! ./chunk-d0403a2f.js */"./node_modules/@ionic/core/dist/esm/chunk-d0403a2f.js");/* harmony import */var _chunk_1074393c_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(/*! ./chunk-1074393c.js */"./node_modules/@ionic/core/dist/esm/chunk-1074393c.js");/* harmony import */var _chunk_cae2ca23_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(/*! ./chunk-cae2ca23.js */"./node_modules/@ionic/core/dist/esm/chunk-cae2ca23.js");var Refresher=/*#__PURE__*/function(){function Refresher(hostRef){Object(_chunk_d0403a2f_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this,hostRef);this.appliedStyles=false;this.didStart=false;this.progress=0;/**
         * The current state which the refresher is in. The refresher's states include:
         *
         * - `inactive` - The refresher is not being pulled down or refreshing and is currently hidden.
         * - `pulling` - The user is actively pulling down the refresher, but has not reached the point yet that if the user lets go, it'll refresh.
         * - `cancelling` - The user pulled down the refresher and let go, but did not pull down far enough to kick off the `refreshing` state. After letting go, the refresher is in the `cancelling` state while it is closing, and will go back to the `inactive` state once closed.
         * - `ready` - The user has pulled down the refresher far enough that if they let go, it'll begin the `refreshing` state.
         * - `refreshing` - The refresher is actively waiting on the async operation to end. Once the refresh handler calls `complete()` it will begin the `completing` state.
         * - `completing` - The `refreshing` state has finished and the refresher is in the way of closing itself. Once closed, the refresher will go back to the `inactive` state.
         */this.state=1/* Inactive */;/**
         * The minimum distance the user must pull down until the
         * refresher will go into the `refreshing` state.
         */this.pullMin=60;/**
         * The maximum distance of the pull until the refresher
         * will automatically go into the `refreshing` state.
         * Defaults to the result of `pullMin + 60`.
         */this.pullMax=this.pullMin+60;/**
         * Time it takes to close the refresher.
         */this.closeDuration="280ms";/**
         * Time it takes the refresher to to snap back to the `refreshing` state.
         */this.snapbackDuration="280ms";/**
         * How much to multiply the pull speed by. To slow the pull animation down,
         * pass a number less than `1`. To speed up the pull, pass a number greater
         * than `1`. The default value is `1` which is equal to the speed of the cursor.
         * If a negative value is passed in, the factor will be `1` instead.
         *
         * For example: If the value passed is `1.2` and the content is dragged by
         * `10` pixels, instead of `10` pixels the content will be pulled by `12` pixels
         * (an increase of 20 percent). If the value passed is `0.8`, the dragged amount
         * will be `8` pixels, less than the amount the cursor has moved.
         */this.pullFactor=1;/**
         * If `true`, the refresher will be hidden.
         */this.disabled=false;this.ionRefresh=Object(_chunk_d0403a2f_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this,"ionRefresh",7);this.ionPull=Object(_chunk_d0403a2f_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this,"ionPull",7);this.ionStart=Object(_chunk_d0403a2f_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this,"ionStart",7)}var _proto=Refresher.prototype;_proto.disabledChanged=function disabledChanged(){if(this.gesture){this.gesture.setDisabled(this.disabled)}};_proto.componentDidLoad=/*#__PURE__*/function(){var _componentDidLoad=_asyncToGenerator(/*#__PURE__*/regeneratorRuntime.mark(function _callee(){var _this=this;var contentEl;return regeneratorRuntime.wrap(function _callee$(_context){while(1){switch(_context.prev=_context.next){case 0:if(!(this.el.getAttribute("slot")!=="fixed")){_context.next=3;break}console.error("Make sure you use: <ion-refresher slot=\"fixed\">");return _context.abrupt("return");case 3:contentEl=this.el.closest("ion-content");if(!contentEl){_context.next=10;break}_context.next=7;return contentEl.getScrollElement();case 7:this.scrollEl=_context.sent;_context.next=11;break;case 10:console.error("ion-refresher did not attach, make sure the parent is an ion-content.");case 11:_context.next=13;return __webpack_require__.e(/*! import() | index-f4f18d97-js */0).then(__webpack_require__.bind(null,/*! ./index-f4f18d97.js */"./node_modules/@ionic/core/dist/esm/index-f4f18d97.js"));case 13:_context.t0={el:this.el.closest("ion-content"),gestureName:"refresher",gesturePriority:10,direction:"y",threshold:20,passive:false,canStart:function canStart(){return _this.canStart()},onStart:function onStart(){return _this.onStart()},onMove:function onMove(ev){return _this.onMove(ev)},onEnd:function onEnd(){return _this.onEnd()}};this.gesture=_context.sent.createGesture(_context.t0);this.disabledChanged();case 16:case"end":return _context.stop();}}},_callee,this)}));function componentDidLoad(){return _componentDidLoad.apply(this,arguments)}return componentDidLoad}();_proto.componentDidUnload=function componentDidUnload(){this.scrollEl=undefined;if(this.gesture){this.gesture.destroy();this.gesture=undefined}}/**
     * Call `complete()` when your async operation has completed.
     * For example, the `refreshing` state is while the app is performing
     * an asynchronous operation, such as receiving more data from an
     * AJAX request. Once the data has been received, you then call this
     * method to signify that the refreshing has completed and to close
     * the refresher. This method also changes the refresher's state from
     * `refreshing` to `completing`.
     */;_proto.complete=/*#__PURE__*/function(){var _complete=_asyncToGenerator(/*#__PURE__*/regeneratorRuntime.mark(function _callee2(){return regeneratorRuntime.wrap(function _callee2$(_context2){while(1){switch(_context2.prev=_context2.next){case 0:this.close(32/* Completing */,"120ms");case 1:case"end":return _context2.stop();}}},_callee2,this)}));function complete(){return _complete.apply(this,arguments)}return complete}()/**
     * Changes the refresher's state from `refreshing` to `cancelling`.
     */;_proto.cancel=/*#__PURE__*/function(){var _cancel=_asyncToGenerator(/*#__PURE__*/regeneratorRuntime.mark(function _callee3(){return regeneratorRuntime.wrap(function _callee3$(_context3){while(1){switch(_context3.prev=_context3.next){case 0:this.close(16/* Cancelling */,"");case 1:case"end":return _context3.stop();}}},_callee3,this)}));function cancel(){return _cancel.apply(this,arguments)}return cancel}()/**
     * A number representing how far down the user has pulled.
     * The number `0` represents the user hasn't pulled down at all. The
     * number `1`, and anything greater than `1`, represents that the user
     * has pulled far enough down that when they let go then the refresh will
     * happen. If they let go and the number is less than `1`, then the
     * refresh will not happen, and the content will return to it's original
     * position.
     */;_proto.getProgress=function getProgress(){return Promise.resolve(this.progress)};_proto.canStart=function canStart(){if(!this.scrollEl){return false}if(this.state!==1/* Inactive */){return false}// if the scrollTop is greater than zero then it's
// not possible to pull the content down yet
if(this.scrollEl.scrollTop>0){return false}return true};_proto.onStart=function onStart(){this.progress=0;this.state=1/* Inactive */};_proto.onMove=function onMove(detail){if(!this.scrollEl){return}// this method can get called like a bazillion times per second,
// so it's built to be as efficient as possible, and does its
// best to do any DOM read/writes only when absolutely necessary
// if multi-touch then get out immediately
var ev=detail.event;if(ev.touches&&ev.touches.length>1){return}// do nothing if it's actively refreshing
// or it's in the way of closing
// or this was never a startY
if((this.state&56/* _BUSY_ */)!==0){return}var pullFactor=Number.isNaN(this.pullFactor)||this.pullFactor<0?1:this.pullFactor;var deltaY=detail.deltaY*pullFactor;// don't bother if they're scrolling up
// and have not already started dragging
if(deltaY<=0){// the current Y is higher than the starting Y
// so they scrolled up enough to be ignored
this.progress=0;this.state=1/* Inactive */;if(this.appliedStyles){// reset the styles only if they were applied
this.setCss(0,"",false,"");return}return}if(this.state===1/* Inactive */){// this refresh is not already actively pulling down
// get the content's scrollTop
var scrollHostScrollTop=this.scrollEl.scrollTop;// if the scrollTop is greater than zero then it's
// not possible to pull the content down yet
if(scrollHostScrollTop>0){this.progress=0;return}// content scrolled all the way to the top, and dragging down
this.state=2/* Pulling */}// prevent native scroll events
if(ev.cancelable){ev.preventDefault()}// the refresher is actively pulling at this point
// move the scroll element within the content element
this.setCss(deltaY,"0ms",true,"");if(deltaY===0){// don't continue if there's no delta yet
this.progress=0;return}var pullMin=this.pullMin;// set pull progress
this.progress=deltaY/pullMin;// emit "start" if it hasn't started yet
if(!this.didStart){this.didStart=true;this.ionStart.emit()}// emit "pulling" on every move
this.ionPull.emit();// do nothing if the delta is less than the pull threshold
if(deltaY<pullMin){// ensure it stays in the pulling state, cuz its not ready yet
this.state=2/* Pulling */;return}if(deltaY>this.pullMax){// they pulled farther than the max, so kick off the refresh
this.beginRefresh();return}// pulled farther than the pull min!!
// it is now in the `ready` state!!
// if they let go then it'll refresh, kerpow!!
this.state=4/* Ready */;return};_proto.onEnd=function onEnd(){// only run in a zone when absolutely necessary
if(this.state===4/* Ready */){// they pulled down far enough, so it's ready to refresh
this.beginRefresh()}else if(this.state===2/* Pulling */){// they were pulling down, but didn't pull down far enough
// set the content back to it's original location
// and close the refresher
// set that the refresh is actively cancelling
this.cancel()}};_proto.beginRefresh=function beginRefresh(){// assumes we're already back in a zone
// they pulled down far enough, so it's ready to refresh
this.state=8/* Refreshing */;// place the content in a hangout position while it thinks
this.setCss(this.pullMin,this.snapbackDuration,true,"");// emit "refresh" because it was pulled down far enough
// and they let go to begin refreshing
this.ionRefresh.emit({complete:this.complete.bind(this)})};_proto.close=function close(state,delay){var _this2=this;// create fallback timer incase something goes wrong with transitionEnd event
setTimeout(function(){_this2.state=1/* Inactive */;_this2.progress=0;_this2.didStart=false;_this2.setCss(0,"0ms",false,"")},600);// reset set the styles on the scroll element
// set that the refresh is actively cancelling/completing
this.state=state;this.setCss(0,this.closeDuration,true,delay);// TODO: stop gesture
};_proto.setCss=function setCss(y,duration,overflowVisible,delay){var _this3=this;this.appliedStyles=y>0;Object(_chunk_d0403a2f_js__WEBPACK_IMPORTED_MODULE_0__["w"])(function(){if(_this3.scrollEl){var style=_this3.scrollEl.style;style.transform=y>0?"translateY("+y+"px) translateZ(0px)":"translateZ(0px)";style.transitionDuration=duration;style.transitionDelay=delay;style.overflow=overflowVisible?"hidden":""}})};_proto.render=function render(){var _class;var mode=Object(_chunk_d0403a2f_js__WEBPACK_IMPORTED_MODULE_0__["d"])(this);return Object(_chunk_d0403a2f_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_chunk_d0403a2f_js__WEBPACK_IMPORTED_MODULE_0__["H"],{slot:"fixed","class":(_class={},_class[mode]=true,_class["refresher-"+mode]=true,_class["refresher-active"]=this.state!==1,_class["refresher-pulling"]=this.state===2,_class["refresher-ready"]=this.state===4,_class["refresher-refreshing"]=this.state===8,_class["refresher-cancelling"]=this.state===16,_class["refresher-completing"]=this.state===32,_class)})};_createClass(Refresher,[{key:"el",get:function get(){return Object(_chunk_d0403a2f_js__WEBPACK_IMPORTED_MODULE_0__["e"])(this)}}],[{key:"watchers",get:function get(){return{"disabled":["disabledChanged"]}}},{key:"style",get:function get(){return"ion-refresher{left:0;top:0;display:none;position:absolute;width:100%;height:60px;z-index:-1}:host-context([dir=rtl]) ion-refresher,[dir=rtl] ion-refresher{left:unset;right:unset;right:0}ion-refresher.refresher-active{display:block}ion-refresher-content{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center;height:100%}.refresher-pulling,.refresher-refreshing{display:none;width:100%}.refresher-pulling-icon,.refresher-refreshing-icon{-webkit-transform-origin:center;transform-origin:center;-webkit-transition:.2s;transition:.2s;font-size:30px;text-align:center}:host-context([dir=rtl]) .refresher-pulling-icon,:host-context([dir=rtl]) .refresher-refreshing-icon,[dir=rtl] .refresher-pulling-icon,[dir=rtl] .refresher-refreshing-icon{-webkit-transform-origin:calc(100% - center);transform-origin:calc(100% - center)}.refresher-pulling-text,.refresher-refreshing-text{font-size:16px;text-align:center}.refresher-pulling ion-refresher-content .refresher-pulling,.refresher-ready ion-refresher-content .refresher-pulling{display:block}.refresher-ready ion-refresher-content .refresher-pulling-icon{-webkit-transform:rotate(180deg);transform:rotate(180deg)}.refresher-cancelling ion-refresher-content .refresher-pulling,.refresher-refreshing ion-refresher-content .refresher-refreshing{display:block}.refresher-cancelling ion-refresher-content .refresher-pulling-icon{-webkit-transform:scale(0);transform:scale(0)}.refresher-completing ion-refresher-content .refresher-refreshing{display:block}.refresher-completing ion-refresher-content .refresher-refreshing-icon{-webkit-transform:scale(0);transform:scale(0)}.refresher-ios .refresher-pulling-icon,.refresher-ios .refresher-pulling-text,.refresher-ios .refresher-refreshing-icon,.refresher-ios .refresher-refreshing-text{color:var(--ion-text-color,#000)}.refresher-ios .refresher-refreshing .spinner-crescent circle,.refresher-ios .refresher-refreshing .spinner-lines-ios line,.refresher-ios .refresher-refreshing .spinner-lines-small-ios line{stroke:var(--ion-text-color,#000)}.refresher-ios .refresher-refreshing .spinner-bubbles circle,.refresher-ios .refresher-refreshing .spinner-circles circle,.refresher-ios .refresher-refreshing .spinner-dots circle{fill:var(--ion-text-color,#000)}"}}]);return Refresher}();var RefresherContent=/*#__PURE__*/function(){function RefresherContent(hostRef){Object(_chunk_d0403a2f_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this,hostRef)}var _proto2=RefresherContent.prototype;_proto2.componentWillLoad=function componentWillLoad(){if(this.pullingIcon===undefined){this.pullingIcon=_chunk_1074393c_js__WEBPACK_IMPORTED_MODULE_1__["b"].get("refreshingIcon","arrow-down")}if(this.refreshingSpinner===undefined){var mode=Object(_chunk_d0403a2f_js__WEBPACK_IMPORTED_MODULE_0__["d"])(this);this.refreshingSpinner=_chunk_1074393c_js__WEBPACK_IMPORTED_MODULE_1__["b"].get("refreshingSpinner",_chunk_1074393c_js__WEBPACK_IMPORTED_MODULE_1__["b"].get("spinner",mode==="ios"?"lines":"crescent"))}};_proto2.render=function render(){return Object(_chunk_d0403a2f_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_chunk_d0403a2f_js__WEBPACK_IMPORTED_MODULE_0__["H"],{"class":Object(_chunk_d0403a2f_js__WEBPACK_IMPORTED_MODULE_0__["d"])(this)},Object(_chunk_d0403a2f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div",{"class":"refresher-pulling"},this.pullingIcon&&Object(_chunk_d0403a2f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div",{"class":"refresher-pulling-icon"},Object(_chunk_d0403a2f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("ion-icon",{icon:this.pullingIcon,lazy:false})),this.pullingText&&Object(_chunk_d0403a2f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div",{"class":"refresher-pulling-text",innerHTML:Object(_chunk_cae2ca23_js__WEBPACK_IMPORTED_MODULE_2__["s"])(this.pullingText)})),Object(_chunk_d0403a2f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div",{"class":"refresher-refreshing"},this.refreshingSpinner&&Object(_chunk_d0403a2f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div",{"class":"refresher-refreshing-icon"},Object(_chunk_d0403a2f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("ion-spinner",{name:this.refreshingSpinner})),this.refreshingText&&Object(_chunk_d0403a2f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div",{"class":"refresher-refreshing-text",innerHTML:Object(_chunk_cae2ca23_js__WEBPACK_IMPORTED_MODULE_2__["s"])(this.refreshingText)})))};return RefresherContent}();/***/}}]);//# sourceMappingURL=51-es2015.js.map
//# sourceMappingURL=51-es5.js.map