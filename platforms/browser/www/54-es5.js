function asyncGeneratorStep(gen,resolve,reject,_next,_throw,key,arg){try{var info=gen[key](arg);var value=info.value}catch(error){reject(error);return}if(info.done){resolve(value)}else{Promise.resolve(value).then(_next,_throw)}}function _asyncToGenerator(fn){return function(){var self=this,args=arguments;return new Promise(function(resolve,reject){var gen=fn.apply(self,args);function _next(value){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"next",value)}function _throw(err){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"throw",err)}_next(undefined)})}}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor)}}function _createClass(Constructor,protoProps,staticProps){if(protoProps)_defineProperties(Constructor.prototype,protoProps);if(staticProps)_defineProperties(Constructor,staticProps);return Constructor}(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[54],{/***/"./node_modules/@ionic/core/dist/esm/ion-reorder_2-md.entry.js":/*!*********************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/ion-reorder_2-md.entry.js ***!
  \*********************************************************************/ /*! exports provided: ion_reorder, ion_reorder_group */ /***/function node_modulesIonicCoreDistEsmIonReorder_2MdEntryJs(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"ion_reorder",function(){return Reorder});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"ion_reorder_group",function(){return ReorderGroup});/* harmony import */var _chunk_d0403a2f_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(/*! ./chunk-d0403a2f.js */"./node_modules/@ionic/core/dist/esm/chunk-d0403a2f.js");/* harmony import */var _chunk_1074393c_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(/*! ./chunk-1074393c.js */"./node_modules/@ionic/core/dist/esm/chunk-1074393c.js");/* harmony import */var _chunk_4e92c885_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(/*! ./chunk-4e92c885.js */"./node_modules/@ionic/core/dist/esm/chunk-4e92c885.js");var Reorder=/*#__PURE__*/function(){function Reorder(hostRef){Object(_chunk_d0403a2f_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this,hostRef)}var _proto=Reorder.prototype;_proto.onClick=function onClick(ev){ev.preventDefault();ev.stopImmediatePropagation()};_proto.render=function render(){return Object(_chunk_d0403a2f_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_chunk_d0403a2f_js__WEBPACK_IMPORTED_MODULE_0__["H"],{"class":Object(_chunk_d0403a2f_js__WEBPACK_IMPORTED_MODULE_0__["d"])(this)},Object(_chunk_d0403a2f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot",null,Object(_chunk_d0403a2f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("ion-icon",{name:"reorder",lazy:false,"class":"reorder-icon"})))};_createClass(Reorder,null,[{key:"style",get:function get(){return":host([slot]){display:none;line-height:0;z-index:100}.reorder-icon{display:block;font-size:22px;font-size:31px;opacity:.3}"}}]);return Reorder}();var ReorderGroup=/*#__PURE__*/function(){function ReorderGroup(hostRef){Object(_chunk_d0403a2f_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this,hostRef);this.lastToIndex=-1;this.cachedHeights=[];this.scrollElTop=0;this.scrollElBottom=0;this.scrollElInitial=0;this.containerTop=0;this.containerBottom=0;this.state=0/* Idle */;/**
         * If `true`, the reorder will be hidden.
         */this.disabled=true;this.ionItemReorder=Object(_chunk_d0403a2f_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this,"ionItemReorder",7)}var _proto2=ReorderGroup.prototype;_proto2.disabledChanged=function disabledChanged(){if(this.gesture){this.gesture.setDisabled(this.disabled)}};_proto2.componentDidLoad=/*#__PURE__*/function(){var _componentDidLoad=_asyncToGenerator(/*#__PURE__*/regeneratorRuntime.mark(function _callee(){var _this=this;var contentEl;return regeneratorRuntime.wrap(function _callee$(_context){while(1){switch(_context.prev=_context.next){case 0:contentEl=this.el.closest("ion-content");if(!contentEl){_context.next=5;break}_context.next=4;return contentEl.getScrollElement();case 4:this.scrollEl=_context.sent;case 5:_context.next=7;return __webpack_require__.e(/*! import() | index-f4f18d97-js */0).then(__webpack_require__.bind(null,/*! ./index-f4f18d97.js */"./node_modules/@ionic/core/dist/esm/index-f4f18d97.js"));case 7:_context.t0={el:this.el,gestureName:"reorder",gesturePriority:110,threshold:0,direction:"y",passive:false,canStart:function canStart(detail){return _this.canStart(detail)},onStart:function onStart(ev){return _this.onStart(ev)},onMove:function onMove(ev){return _this.onMove(ev)},onEnd:function onEnd(){return _this.onEnd()}};this.gesture=_context.sent.createGesture(_context.t0);this.disabledChanged();case 10:case"end":return _context.stop();}}},_callee,this)}));function componentDidLoad(){return _componentDidLoad.apply(this,arguments)}return componentDidLoad}();_proto2.componentDidUnload=function componentDidUnload(){this.onEnd();if(this.gesture){this.gesture.destroy();this.gesture=undefined}}/**
     * Completes the reorder operation. Must be called by the `ionItemReorder` event.
     *
     * If a list of items is passed, the list will be reordered and returned in the
     * proper order.
     *
     * If no parameters are passed or if `true` is passed in, the reorder will complete
     * and the item will remain in the position it was dragged to. If `false` is passed,
     * the reorder will complete and the item will bounce back to its original position.
     *
     * @param listOrReorder A list of items to be sorted and returned in the new order or a
     * boolean of whether or not the reorder should reposition the item.
     */;_proto2.complete=function complete(listOrReorder){return Promise.resolve(this.completeSync(listOrReorder))};_proto2.canStart=function canStart(ev){if(this.selectedItemEl||this.state!==0/* Idle */){return false}var target=ev.event.target;var reorderEl=target.closest("ion-reorder");if(!reorderEl){return false}var item=findReorderItem(reorderEl,this.el);if(!item){return false}ev.data=item;return true};_proto2.onStart=function onStart(ev){ev.event.preventDefault();var item=this.selectedItemEl=ev.data;var heights=this.cachedHeights;heights.length=0;var el=this.el;var children=el.children;if(!children||children.length===0){return}var sum=0;for(var i=0;i<children.length;i++){var child=children[i];sum+=child.offsetHeight;heights.push(sum);child.$ionIndex=i}var box=el.getBoundingClientRect();this.containerTop=box.top;this.containerBottom=box.bottom;if(this.scrollEl){var scrollBox=this.scrollEl.getBoundingClientRect();this.scrollElInitial=this.scrollEl.scrollTop;this.scrollElTop=scrollBox.top+AUTO_SCROLL_MARGIN;this.scrollElBottom=scrollBox.bottom-AUTO_SCROLL_MARGIN}else{this.scrollElInitial=0;this.scrollElTop=0;this.scrollElBottom=0}this.lastToIndex=indexForItem(item);this.selectedItemHeight=item.offsetHeight;this.state=1/* Active */;item.classList.add(ITEM_REORDER_SELECTED);Object(_chunk_4e92c885_js__WEBPACK_IMPORTED_MODULE_2__["a"])()};_proto2.onMove=function onMove(ev){var selectedItem=this.selectedItemEl;if(!selectedItem){return}// Scroll if we reach the scroll margins
var scroll=this.autoscroll(ev.currentY);// // Get coordinate
var top=this.containerTop-scroll;var bottom=this.containerBottom-scroll;var currentY=Math.max(top,Math.min(ev.currentY,bottom));var deltaY=scroll+currentY-ev.startY;var normalizedY=currentY-top;var toIndex=this.itemIndexForTop(normalizedY);if(toIndex!==this.lastToIndex){var fromIndex=indexForItem(selectedItem);this.lastToIndex=toIndex;Object(_chunk_4e92c885_js__WEBPACK_IMPORTED_MODULE_2__["b"])();this.reorderMove(fromIndex,toIndex)}// Update selected item position
selectedItem.style.transform="translateY("+deltaY+"px)"};_proto2.onEnd=function onEnd(){var _this2=this;var selectedItemEl=this.selectedItemEl;this.state=2/* Complete */;if(!selectedItemEl){this.state=0/* Idle */;return}var toIndex=this.lastToIndex;var fromIndex=indexForItem(selectedItemEl);if(toIndex===fromIndex){selectedItemEl.style.transition="transform 200ms ease-in-out";selectedItemEl.style.transform="";selectedItemEl.classList.remove(ITEM_REORDER_SELECTED);setTimeout(function(){return _this2.completeSync()},200)}else{this.ionItemReorder.emit({from:fromIndex,to:toIndex,complete:this.completeSync.bind(this)})}Object(_chunk_4e92c885_js__WEBPACK_IMPORTED_MODULE_2__["c"])()};_proto2.completeSync=function completeSync(listOrReorder){var selectedItemEl=this.selectedItemEl;if(selectedItemEl&&this.state===2/* Complete */){var children=this.el.children;var len=children.length;var toIndex=this.lastToIndex;var fromIndex=indexForItem(selectedItemEl);if(toIndex!==fromIndex&&(!listOrReorder||listOrReorder===true)){var ref=fromIndex<toIndex?children[toIndex+1]:children[toIndex];this.el.insertBefore(selectedItemEl,ref)}if(Array.isArray(listOrReorder)){listOrReorder=reorderArray(listOrReorder,fromIndex,toIndex)}for(var i=0;i<len;i++){children[i].style["transform"]=""}selectedItemEl.style.transition="";selectedItemEl.classList.remove(ITEM_REORDER_SELECTED);this.selectedItemEl=undefined;this.state=0/* Idle */}return listOrReorder};_proto2.itemIndexForTop=function itemIndexForTop(deltaY){var heights=this.cachedHeights;var i=0;// TODO: since heights is a sorted array of integers, we can do
// speed up the search using binary search. Remember that linear-search is still
// faster than binary-search for small arrays (<64) due CPU branch misprediction.
for(i=0;i<heights.length;i++){if(heights[i]>deltaY){break}}return i}/********* DOM WRITE ********* */;_proto2.reorderMove=function reorderMove(fromIndex,toIndex){var itemHeight=this.selectedItemHeight;var children=this.el.children;for(var i=0;i<children.length;i++){var style=children[i].style;var value="";if(i>fromIndex&&i<=toIndex){value="translateY("+-itemHeight+"px)"}else if(i<fromIndex&&i>=toIndex){value="translateY("+itemHeight+"px)"}style["transform"]=value}};_proto2.autoscroll=function autoscroll(posY){if(!this.scrollEl){return 0}var amount=0;if(posY<this.scrollElTop){amount=-SCROLL_JUMP}else if(posY>this.scrollElBottom){amount=SCROLL_JUMP}if(amount!==0){this.scrollEl.scrollBy(0,amount)}return this.scrollEl.scrollTop-this.scrollElInitial};_proto2.render=function render(){var _class;var mode=Object(_chunk_d0403a2f_js__WEBPACK_IMPORTED_MODULE_0__["d"])(this);return Object(_chunk_d0403a2f_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_chunk_d0403a2f_js__WEBPACK_IMPORTED_MODULE_0__["H"],{"class":(_class={},_class[mode]=true,_class["reorder-enabled"]=!this.disabled,_class["reorder-list-active"]=this.state!==0,_class)})};_createClass(ReorderGroup,[{key:"el",get:function get(){return Object(_chunk_d0403a2f_js__WEBPACK_IMPORTED_MODULE_0__["e"])(this)}}],[{key:"watchers",get:function get(){return{"disabled":["disabledChanged"]}}},{key:"style",get:function get(){return".reorder-list-active>*{-webkit-transition:-webkit-transform .3s;transition:-webkit-transform .3s;transition:transform .3s;transition:transform .3s,-webkit-transform .3s;will-change:transform}.reorder-enabled{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.reorder-enabled ion-reorder{display:block;cursor:-webkit-grab;cursor:grab;pointer-events:all;-ms-touch-action:none;touch-action:none}.reorder-selected,.reorder-selected ion-reorder{cursor:-webkit-grabbing;cursor:grabbing}.reorder-selected{position:relative;-webkit-transition:none!important;transition:none!important;-webkit-box-shadow:0 0 10px rgba(0,0,0,.4);box-shadow:0 0 10px rgba(0,0,0,.4);opacity:.8;z-index:100}.reorder-visible ion-reorder .reorder-icon{-webkit-transform:translateZ(0);transform:translateZ(0)}"}}]);return ReorderGroup}();var indexForItem=function indexForItem(element){return element["$ionIndex"]};var findReorderItem=function findReorderItem(node,container){var parent;while(node){parent=node.parentElement;if(parent===container){return node}node=parent}return undefined};var AUTO_SCROLL_MARGIN=60;var SCROLL_JUMP=10;var ITEM_REORDER_SELECTED="reorder-selected";var reorderArray=function reorderArray(array,from,to){var element=array[from];array.splice(from,1);array.splice(to,0,element);return array.slice()};/***/}}]);//# sourceMappingURL=54-es2015.js.map
//# sourceMappingURL=54-es5.js.map