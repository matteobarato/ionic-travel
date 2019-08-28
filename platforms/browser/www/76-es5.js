function asyncGeneratorStep(gen,resolve,reject,_next,_throw,key,arg){try{var info=gen[key](arg);var value=info.value}catch(error){reject(error);return}if(info.done){resolve(value)}else{Promise.resolve(value).then(_next,_throw)}}function _asyncToGenerator(fn){return function(){var self=this,args=arguments;return new Promise(function(resolve,reject){var gen=fn.apply(self,args);function _next(value){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"next",value)}function _throw(err){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"throw",err)}_next(undefined)})}}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor)}}function _createClass(Constructor,protoProps,staticProps){if(protoProps)_defineProperties(Constructor.prototype,protoProps);if(staticProps)_defineProperties(Constructor,staticProps);return Constructor}(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[76],{/***/"./node_modules/@ionic/core/dist/esm/ion-toggle-ios.entry.js":/*!*******************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/ion-toggle-ios.entry.js ***!
  \*******************************************************************/ /*! exports provided: ion_toggle */ /***/function node_modulesIonicCoreDistEsmIonToggleIosEntryJs(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"ion_toggle",function(){return Toggle});/* harmony import */var _chunk_d0403a2f_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(/*! ./chunk-d0403a2f.js */"./node_modules/@ionic/core/dist/esm/chunk-d0403a2f.js");/* harmony import */var _chunk_1074393c_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(/*! ./chunk-1074393c.js */"./node_modules/@ionic/core/dist/esm/chunk-1074393c.js");/* harmony import */var _chunk_353a032e_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(/*! ./chunk-353a032e.js */"./node_modules/@ionic/core/dist/esm/chunk-353a032e.js");/* harmony import */var _chunk_4e92c885_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(/*! ./chunk-4e92c885.js */"./node_modules/@ionic/core/dist/esm/chunk-4e92c885.js");/* harmony import */var _chunk_c90aaa66_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(/*! ./chunk-c90aaa66.js */"./node_modules/@ionic/core/dist/esm/chunk-c90aaa66.js");/**
 * @virtualProp {"ios" | "md"} mode - The mode determines which platform styles to use.
 */var Toggle=/*#__PURE__*/function(){function Toggle(hostRef){var _this=this;Object(_chunk_d0403a2f_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this,hostRef);this.inputId="ion-tg-"+toggleIds++;this.lastDrag=0;this.activated=false;/**
         * The name of the control, which is submitted with the form data.
         */this.name=this.inputId;/**
         * If `true`, the toggle is selected.
         */this.checked=false;/**
         * If `true`, the user cannot interact with the toggle.
         */this.disabled=false;/**
         * The value of the toggle does not mean if it's checked or not, use the `checked`
         * property for that.
         *
         * The value of a toggle is analogous to the value of a `<input type="checkbox">`,
         * it's only used when the toggle participates in a native `<form>`.
         */this.value="on";this.onClick=function(){if(_this.lastDrag+300<Date.now()){_this.checked=!_this.checked}};this.onFocus=function(){_this.ionFocus.emit()};this.onBlur=function(){_this.ionBlur.emit()};this.ionChange=Object(_chunk_d0403a2f_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this,"ionChange",7);this.ionFocus=Object(_chunk_d0403a2f_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this,"ionFocus",7);this.ionBlur=Object(_chunk_d0403a2f_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this,"ionBlur",7);this.ionStyle=Object(_chunk_d0403a2f_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this,"ionStyle",7)}var _proto=Toggle.prototype;_proto.checkedChanged=function checkedChanged(isChecked){this.ionChange.emit({checked:isChecked,value:this.value})};_proto.disabledChanged=function disabledChanged(){this.emitStyle();if(this.gesture){this.gesture.setDisabled(this.disabled)}};_proto.componentWillLoad=function componentWillLoad(){this.emitStyle()};_proto.componentDidLoad=/*#__PURE__*/function(){var _componentDidLoad=_asyncToGenerator(/*#__PURE__*/regeneratorRuntime.mark(function _callee(){var _this2=this;return regeneratorRuntime.wrap(function _callee$(_context){while(1){switch(_context.prev=_context.next){case 0:_context.next=2;return __webpack_require__.e(/*! import() | index-f4f18d97-js */0).then(__webpack_require__.bind(null,/*! ./index-f4f18d97.js */"./node_modules/@ionic/core/dist/esm/index-f4f18d97.js"));case 2:_context.t0={el:this.el,gestureName:"toggle",gesturePriority:100,threshold:5,passive:false,onStart:function onStart(){return _this2.onStart()},onMove:function onMove(ev){return _this2.onMove(ev)},onEnd:function onEnd(ev){return _this2.onEnd(ev)}};this.gesture=_context.sent.createGesture(_context.t0);this.disabledChanged();case 5:case"end":return _context.stop();}}},_callee,this)}));function componentDidLoad(){return _componentDidLoad.apply(this,arguments)}return componentDidLoad}();_proto.componentDidUnload=function componentDidUnload(){if(this.gesture){this.gesture.destroy();this.gesture=undefined}};_proto.emitStyle=function emitStyle(){this.ionStyle.emit({"interactive-disabled":this.disabled})};_proto.onStart=function onStart(){this.activated=true;// touch-action does not work in iOS
this.setFocus()};_proto.onMove=function onMove(detail){if(shouldToggle(document,this.checked,detail.deltaX,-10)){this.checked=!this.checked;Object(_chunk_4e92c885_js__WEBPACK_IMPORTED_MODULE_3__["h"])()}};_proto.onEnd=function onEnd(ev){this.activated=false;this.lastDrag=Date.now();ev.event.preventDefault();ev.event.stopImmediatePropagation()};_proto.getValue=function getValue(){return this.value||""};_proto.setFocus=function setFocus(){if(this.buttonEl){this.buttonEl.focus()}};_proto.render=function render(){var _Object$assign,_this3=this;var inputId=this.inputId,disabled=this.disabled,checked=this.checked,activated=this.activated,color=this.color,el=this.el;var mode=Object(_chunk_d0403a2f_js__WEBPACK_IMPORTED_MODULE_0__["d"])(this);var labelId=inputId+"-lbl";var label=Object(_chunk_c90aaa66_js__WEBPACK_IMPORTED_MODULE_4__["f"])(el);var value=this.getValue();if(label){label.id=labelId}Object(_chunk_c90aaa66_js__WEBPACK_IMPORTED_MODULE_4__["r"])(true,el,this.name,checked?value:"",disabled);return Object(_chunk_d0403a2f_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_chunk_d0403a2f_js__WEBPACK_IMPORTED_MODULE_0__["H"],{onClick:this.onClick,role:"checkbox","aria-disabled":disabled?"true":null,"aria-checked":""+checked,"aria-labelledby":labelId,"class":Object.assign({},Object(_chunk_353a032e_js__WEBPACK_IMPORTED_MODULE_2__["c"])(color),(_Object$assign={},_Object$assign[mode]=true,_Object$assign["in-item"]=Object(_chunk_353a032e_js__WEBPACK_IMPORTED_MODULE_2__["h"])("ion-item",el),_Object$assign["toggle-activated"]=activated,_Object$assign["toggle-checked"]=checked,_Object$assign["toggle-disabled"]=disabled,_Object$assign["interactive"]=true,_Object$assign))},Object(_chunk_d0403a2f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div",{"class":"toggle-icon"},Object(_chunk_d0403a2f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div",{"class":"toggle-inner"})),Object(_chunk_d0403a2f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("button",{type:"button",onFocus:this.onFocus,onBlur:this.onBlur,disabled:disabled,ref:function ref(btnEl){return _this3.buttonEl=btnEl}}))};_createClass(Toggle,[{key:"el",get:function get(){return Object(_chunk_d0403a2f_js__WEBPACK_IMPORTED_MODULE_0__["e"])(this)}}],[{key:"watchers",get:function get(){return{"checked":["checkedChanged"],"disabled":["disabledChanged"]}}},{key:"style",get:function get(){return":host{-webkit-box-sizing:content-box!important;box-sizing:content-box!important;display:inline-block;outline:none;contain:content;cursor:pointer;-ms-touch-action:none;touch-action:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:2}:host(.ion-focused) input{border:2px solid #5e9ed6}:host(.toggle-disabled){pointer-events:none}button{left:0;top:0;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;position:absolute;width:100%;height:100%;border:0;background:transparent;cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none;outline:none}:host-context([dir=rtl]) button,[dir=rtl] button{left:unset;right:unset;right:0}button::-moz-focus-inner{border:0}:host{--background:rgba(var(--ion-text-color-rgb,0,0,0),0.088);--background-checked:var(--ion-color-primary,#3880ff);--handle-background:#fff;--handle-background-checked:#fff;-webkit-box-sizing:content-box;box-sizing:content-box;position:relative;width:51px;height:32px;contain:strict}:host(.ion-color.toggle-checked) .toggle-icon{background:var(--ion-color-base)}.toggle-icon{border-radius:16px;display:block;position:relative;width:100%;height:100%;-webkit-transform:translateZ(0);transform:translateZ(0);-webkit-transition:background-color .3s;transition:background-color .3s;background-color:rgba(var(--ion-text-color-rgb,0,0,0),.088);overflow:hidden;pointer-events:none}.toggle-inner{left:2px;top:2px;border-radius:14px;position:absolute;width:28px;height:28px;-webkit-transition:width .12s ease-in-out 80ms,left .11s ease-in-out 80ms,right .11s ease-in-out 80ms,-webkit-transform .3s;transition:width .12s ease-in-out 80ms,left .11s ease-in-out 80ms,right .11s ease-in-out 80ms,-webkit-transform .3s;transition:transform .3s,width .12s ease-in-out 80ms,left .11s ease-in-out 80ms,right .11s ease-in-out 80ms;transition:transform .3s,width .12s ease-in-out 80ms,left .11s ease-in-out 80ms,right .11s ease-in-out 80ms,-webkit-transform .3s;background:var(--handle-background);-webkit-box-shadow:0 3px 12px rgba(0,0,0,.16),0 3px 1px rgba(0,0,0,.1);box-shadow:0 3px 12px rgba(0,0,0,.16),0 3px 1px rgba(0,0,0,.1);will-change:transform;contain:strict}:host-context([dir=rtl]) .toggle-inner,[dir=rtl] .toggle-inner{left:unset;right:unset;right:2px}:host(.toggle-checked) .toggle-icon{background:var(--background-checked)}:host(.toggle-activated) .toggle-icon:before,:host(.toggle-checked) .toggle-icon:before{-webkit-transform:scale3d(0,0,0);transform:scale3d(0,0,0)}:host(.toggle-checked) .toggle-inner{-webkit-transform:translate3d(19px,0,0);transform:translate3d(19px,0,0);background:var(--handle-background-checked)}:host-context([dir=rtl]).toggle-checked .toggle-inner,:host-context([dir=rtl]):host(.toggle-checked) .toggle-inner{-webkit-transform:translate3d(calc(-1 * 19px),0,0);transform:translate3d(calc(-1 * 19px),0,0)}:host(.toggle-activated.toggle-checked) .toggle-inner:before{-webkit-transform:scale3d(0,0,0);transform:scale3d(0,0,0)}:host(.toggle-activated) .toggle-inner{width:34px}:host(.toggle-activated.toggle-checked) .toggle-inner{left:-4px}:host-context([dir=rtl]).toggle-activated.toggle-checked .toggle-inner,:host-context([dir=rtl]):host(.toggle-activated.toggle-checked) .toggle-inner{left:unset;right:unset;right:-4px}:host(.toggle-disabled){opacity:.3}:host(.in-item[slot]){margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:16px;padding-right:8px;padding-top:6px;padding-bottom:5px}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){:host(.in-item[slot]){padding-left:unset;padding-right:unset;-webkit-padding-start:16px;padding-inline-start:16px;-webkit-padding-end:8px;padding-inline-end:8px}}:host(.in-item[slot=start]){padding-left:0;padding-right:16px;padding-top:6px;padding-bottom:5px}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){:host(.in-item[slot=start]){padding-left:unset;padding-right:unset;-webkit-padding-start:0;padding-inline-start:0;-webkit-padding-end:16px;padding-inline-end:16px}}"}}]);return Toggle}();var shouldToggle=function shouldToggle(doc,checked,deltaX,margin){var isRTL=doc.dir==="rtl";if(checked){return!isRTL&&margin>deltaX||isRTL&&-margin<deltaX}else{return!isRTL&&-margin<deltaX||isRTL&&margin>deltaX}};var toggleIds=0;/***/}}]);//# sourceMappingURL=76-es2015.js.map
//# sourceMappingURL=76-es5.js.map