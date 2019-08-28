function asyncGeneratorStep(gen,resolve,reject,_next,_throw,key,arg){try{var info=gen[key](arg);var value=info.value}catch(error){reject(error);return}if(info.done){resolve(value)}else{Promise.resolve(value).then(_next,_throw)}}function _asyncToGenerator(fn){return function(){var self=this,args=arguments;return new Promise(function(resolve,reject){var gen=fn.apply(self,args);function _next(value){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"next",value)}function _throw(err){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"throw",err)}_next(undefined)})}}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor)}}function _createClass(Constructor,protoProps,staticProps){if(protoProps)_defineProperties(Constructor.prototype,protoProps);if(staticProps)_defineProperties(Constructor,staticProps);return Constructor}(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[56],{/***/"./node_modules/@ionic/core/dist/esm/ion-route_4.entry.js":/*!****************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/ion-route_4.entry.js ***!
  \****************************************************************/ /*! exports provided: ion_route, ion_route_redirect, ion_router, ion_router_link */ /***/function node_modulesIonicCoreDistEsmIonRoute_4EntryJs(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"ion_route",function(){return Route});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"ion_route_redirect",function(){return RouteRedirect});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"ion_router",function(){return Router});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"ion_router_link",function(){return RouterLink});/* harmony import */var _chunk_d0403a2f_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(/*! ./chunk-d0403a2f.js */"./node_modules/@ionic/core/dist/esm/chunk-d0403a2f.js");/* harmony import */var _chunk_1074393c_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(/*! ./chunk-1074393c.js */"./node_modules/@ionic/core/dist/esm/chunk-1074393c.js");/* harmony import */var _chunk_353a032e_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(/*! ./chunk-353a032e.js */"./node_modules/@ionic/core/dist/esm/chunk-353a032e.js");/* harmony import */var _chunk_c90aaa66_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(/*! ./chunk-c90aaa66.js */"./node_modules/@ionic/core/dist/esm/chunk-c90aaa66.js");var Route=/*#__PURE__*/function(){function Route(hostRef){Object(_chunk_d0403a2f_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this,hostRef);/**
         * Relative path that needs to match in order for this route to apply.
         *
         * Accepts paths similar to expressjs so that you can define parameters
         * in the url /foo/:bar where bar would be available in incoming props.
         */this.url="";this.ionRouteDataChanged=Object(_chunk_d0403a2f_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this,"ionRouteDataChanged",7)}var _proto=Route.prototype;_proto.onUpdate=function onUpdate(newValue){this.ionRouteDataChanged.emit(newValue)};_proto.onComponentProps=function onComponentProps(newValue,oldValue){if(newValue===oldValue){return}var keys1=newValue?Object.keys(newValue):[];var keys2=oldValue?Object.keys(oldValue):[];if(keys1.length!==keys2.length){this.onUpdate(newValue);return}for(var _iterator=keys1,_isArray=Array.isArray(_iterator),_i=0,_iterator=_isArray?_iterator:_iterator[Symbol.iterator]();;){var _ref;if(_isArray){if(_i>=_iterator.length)break;_ref=_iterator[_i++]}else{_i=_iterator.next();if(_i.done)break;_ref=_i.value}var key=_ref;if(newValue[key]!==oldValue[key]){this.onUpdate(newValue);return}}};_proto.componentDidLoad=function componentDidLoad(){this.ionRouteDataChanged.emit()};_proto.componentDidUnload=function componentDidUnload(){this.ionRouteDataChanged.emit()};_createClass(Route,null,[{key:"watchers",get:function get(){return{"url":["onUpdate"],"component":["onUpdate"],"componentProps":["onComponentProps"]}}}]);return Route}();var RouteRedirect=/*#__PURE__*/function(){function RouteRedirect(hostRef){Object(_chunk_d0403a2f_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this,hostRef);this.ionRouteRedirectChanged=Object(_chunk_d0403a2f_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this,"ionRouteRedirectChanged",7)}var _proto2=RouteRedirect.prototype;_proto2.propDidChange=function propDidChange(){this.ionRouteRedirectChanged.emit()};_proto2.componentDidLoad=function componentDidLoad(){this.ionRouteRedirectChanged.emit()};_proto2.componentDidUnload=function componentDidUnload(){this.ionRouteRedirectChanged.emit()};_createClass(RouteRedirect,null,[{key:"watchers",get:function get(){return{"from":["propDidChange"],"to":["propDidChange"]}}}]);return RouteRedirect}();var ROUTER_INTENT_NONE="root";var ROUTER_INTENT_FORWARD="forward";var ROUTER_INTENT_BACK="back";var generatePath=function generatePath(segments){var path=segments.filter(function(s){return s.length>0}).join("/");return"/"+path};var chainToPath=function chainToPath(chain){var path=[];for(var _iterator2=chain,_isArray2=Array.isArray(_iterator2),_i2=0,_iterator2=_isArray2?_iterator2:_iterator2[Symbol.iterator]();;){var _ref2;if(_isArray2){if(_i2>=_iterator2.length)break;_ref2=_iterator2[_i2++]}else{_i2=_iterator2.next();if(_i2.done)break;_ref2=_i2.value}var route=_ref2;for(var _iterator3=route.path,_isArray3=Array.isArray(_iterator3),_i3=0,_iterator3=_isArray3?_iterator3:_iterator3[Symbol.iterator]();;){var _ref3;if(_isArray3){if(_i3>=_iterator3.length)break;_ref3=_iterator3[_i3++]}else{_i3=_iterator3.next();if(_i3.done)break;_ref3=_i3.value}var segment=_ref3;if(segment[0]===":"){var param=route.params&&route.params[segment.slice(1)];if(!param){return null}path.push(param)}else if(segment!==""){path.push(segment)}}}return path};var writePath=function writePath(history,root,useHash,path,direction,state){var url=generatePath([].concat(parsePath(root),path));if(useHash){url="#"+url}if(direction===ROUTER_INTENT_FORWARD){history.pushState(state,"",url)}else{history.replaceState(state,"",url)}};var removePrefix=function removePrefix(prefix,path){if(prefix.length>path.length){return null}if(prefix.length<=1&&prefix[0]===""){return path}for(var i=0;i<prefix.length;i++){if(prefix[i].length>0&&prefix[i]!==path[i]){return null}}if(path.length===prefix.length){return[""]}return path.slice(prefix.length)};var readPath=function readPath(loc,root,useHash){var pathname=loc.pathname;if(useHash){var hash=loc.hash;pathname=hash[0]==="#"?hash.slice(1):""}var prefix=parsePath(root);var path=parsePath(pathname);return removePrefix(prefix,path)};var parsePath=function parsePath(path){if(path==null){return[""]}var segments=path.split("/").map(function(s){return s.trim()}).filter(function(s){return s.length>0});if(segments.length===0){return[""]}else{return segments}};var printRoutes=function printRoutes(routes){console.group("[ion-core] ROUTES["+routes.length+"]");var _loop=function _loop(){if(_isArray4){if(_i4>=_iterator4.length)return"break";_ref4=_iterator4[_i4++]}else{_i4=_iterator4.next();if(_i4.done)return"break";_ref4=_i4.value}var chain=_ref4;var path=[];chain.forEach(function(r){return path.push.apply(path,r.path)});var ids=chain.map(function(r){return r.id});console.debug("%c "+generatePath(path),"font-weight: bold; padding-left: 20px","=>\t","("+ids.join(", ")+")")};for(var _iterator4=routes,_isArray4=Array.isArray(_iterator4),_i4=0,_iterator4=_isArray4?_iterator4:_iterator4[Symbol.iterator]();;){var _ref4;var _ret=_loop();if(_ret==="break")break}console.groupEnd()};var printRedirects=function printRedirects(redirects){console.group("[ion-core] REDIRECTS["+redirects.length+"]");for(var _iterator5=redirects,_isArray5=Array.isArray(_iterator5),_i5=0,_iterator5=_isArray5?_iterator5:_iterator5[Symbol.iterator]();;){var _ref5;if(_isArray5){if(_i5>=_iterator5.length)break;_ref5=_iterator5[_i5++]}else{_i5=_iterator5.next();if(_i5.done)break;_ref5=_i5.value}var redirect=_ref5;if(redirect.to){console.debug("FROM: ","$c "+generatePath(redirect.from),"font-weight: bold"," TO: ","$c "+generatePath(redirect.to),"font-weight: bold")}}console.groupEnd()};var _writeNavState=/*#__PURE__*/function(){var _ref6=_asyncToGenerator(/*#__PURE__*/regeneratorRuntime.mark(function _callee(root,chain,direction,index,changed){var outlet,route,result;return regeneratorRuntime.wrap(function _callee$(_context){while(1){switch(_context.prev=_context.next){case 0:if(changed===void 0){changed=false}_context.prev=1;// find next navigation outlet in the DOM
outlet=searchNavNode(root);// make sure we can continue interacting the DOM, otherwise abort
if(!(index>=chain.length||!outlet)){_context.next=5;break}return _context.abrupt("return",changed);case 5:_context.next=7;return outlet.componentOnReady();case 7:route=chain[index];_context.next=10;return outlet.setRouteId(route.id,route.params,direction);case 10:result=_context.sent;// if the outlet changed the page, reset navigation to neutral (no direction)
// this means nested outlets will not animate
if(result.changed){direction=ROUTER_INTENT_NONE;changed=true}// recursively set nested outlets
_context.next=14;return _writeNavState(result.element,chain,direction,index+1,changed);case 14:changed=_context.sent;if(!result.markVisible){_context.next=18;break}_context.next=18;return result.markVisible();case 18:return _context.abrupt("return",changed);case 21:_context.prev=21;_context.t0=_context["catch"](1);console.error(_context.t0);return _context.abrupt("return",false);case 25:case"end":return _context.stop();}}},_callee,null,[[1,21]])}));return function writeNavState(_x,_x2,_x3,_x4,_x5){return _ref6.apply(this,arguments)}}();var readNavState=/*#__PURE__*/function(){var _ref7=_asyncToGenerator(/*#__PURE__*/regeneratorRuntime.mark(function _callee2(root){var ids,outlet,node,id;return regeneratorRuntime.wrap(function _callee2$(_context2){while(1){switch(_context2.prev=_context2.next){case 0:ids=[];node=root;// tslint:disable-next-line:no-constant-condition
case 2:if(!true){_context2.next=20;break}outlet=searchNavNode(node);if(!outlet){_context2.next=17;break}_context2.next=7;return outlet.getRouteId();case 7:id=_context2.sent;if(!id){_context2.next=14;break}node=id.element;id.element=undefined;ids.push(id);_context2.next=15;break;case 14:return _context2.abrupt("break",20);case 15:_context2.next=18;break;case 17:return _context2.abrupt("break",20);case 18:_context2.next=2;break;case 20:return _context2.abrupt("return",{ids:ids,outlet:outlet});case 21:case"end":return _context2.stop();}}},_callee2)}));return function readNavState(_x6){return _ref7.apply(this,arguments)}}();var waitUntilNavNode=function waitUntilNavNode(){if(searchNavNode(document.body)){return Promise.resolve()}return new Promise(function(resolve){window.addEventListener("ionNavWillLoad",resolve,{once:true})})};var QUERY=":not([no-router]) ion-nav, :not([no-router]) ion-tabs, :not([no-router]) ion-router-outlet";var searchNavNode=function searchNavNode(root){if(!root){return undefined}if(root.matches(QUERY)){return root}var outlet=root.querySelector(QUERY);return outlet?outlet:undefined};var matchesRedirect=function matchesRedirect(input,route){var from=route.from,to=route.to;if(to===undefined){return false}if(from.length>input.length){return false}for(var i=0;i<from.length;i++){var expected=from[i];if(expected==="*"){return true}if(expected!==input[i]){return false}}return from.length===input.length};var routeRedirect=function routeRedirect(path,routes){return routes.find(function(route){return matchesRedirect(path,route)})};var matchesIDs=function matchesIDs(ids,chain){var len=Math.min(ids.length,chain.length);var i=0;for(;i<len;i++){if(ids[i].toLowerCase()!==chain[i].id){break}}return i};var matchesPath=function matchesPath(inputPath,chain){var segments=new RouterSegments(inputPath);var matchesDefault=false;var allparams;for(var i=0;i<chain.length;i++){var path=chain[i].path;if(path[0]===""){matchesDefault=true}else{for(var _iterator6=path,_isArray6=Array.isArray(_iterator6),_i6=0,_iterator6=_isArray6?_iterator6:_iterator6[Symbol.iterator]();;){var _ref8;if(_isArray6){if(_i6>=_iterator6.length)break;_ref8=_iterator6[_i6++]}else{_i6=_iterator6.next();if(_i6.done)break;_ref8=_i6.value}var segment=_ref8;var data=segments.next();// data param
if(segment[0]===":"){if(data===""){return null}allparams=allparams||[];var params=allparams[i]||(allparams[i]={});params[segment.slice(1)]=data}else if(data!==segment){return null}}matchesDefault=false}}var matches=matchesDefault?matchesDefault===(segments.next()===""):true;if(!matches){return null}if(allparams){return chain.map(function(route,i){return{id:route.id,path:route.path,params:mergeParams(route.params,allparams[i])}})}return chain};var mergeParams=function mergeParams(a,b){if(!a&&b){return b}else if(a&&!b){return a}else if(a&&b){return Object.assign({},a,b)}return undefined};var routerIDsToChain=function routerIDsToChain(ids,chains){var match=null;var maxMatches=0;var plainIDs=ids.map(function(i){return i.id});for(var _iterator7=chains,_isArray7=Array.isArray(_iterator7),_i7=0,_iterator7=_isArray7?_iterator7:_iterator7[Symbol.iterator]();;){var _ref9;if(_isArray7){if(_i7>=_iterator7.length)break;_ref9=_iterator7[_i7++]}else{_i7=_iterator7.next();if(_i7.done)break;_ref9=_i7.value}var chain=_ref9;var score=matchesIDs(plainIDs,chain);if(score>maxMatches){match=chain;maxMatches=score}}if(match){return match.map(function(route,i){return{id:route.id,path:route.path,params:mergeParams(route.params,ids[i]&&ids[i].params)}})}return null};var routerPathToChain=function routerPathToChain(path,chains){var match=null;var matches=0;for(var _iterator8=chains,_isArray8=Array.isArray(_iterator8),_i8=0,_iterator8=_isArray8?_iterator8:_iterator8[Symbol.iterator]();;){var _ref10;if(_isArray8){if(_i8>=_iterator8.length)break;_ref10=_iterator8[_i8++]}else{_i8=_iterator8.next();if(_i8.done)break;_ref10=_i8.value}var chain=_ref10;var matchedChain=matchesPath(path,chain);if(matchedChain!==null){var score=computePriority(matchedChain);if(score>matches){matches=score;match=matchedChain}}}return match};var computePriority=function computePriority(chain){var score=1;var level=1;for(var _iterator9=chain,_isArray9=Array.isArray(_iterator9),_i9=0,_iterator9=_isArray9?_iterator9:_iterator9[Symbol.iterator]();;){var _ref11;if(_isArray9){if(_i9>=_iterator9.length)break;_ref11=_iterator9[_i9++]}else{_i9=_iterator9.next();if(_i9.done)break;_ref11=_i9.value}var route=_ref11;for(var _iterator10=route.path,_isArray10=Array.isArray(_iterator10),_i10=0,_iterator10=_isArray10?_iterator10:_iterator10[Symbol.iterator]();;){var _ref12;if(_isArray10){if(_i10>=_iterator10.length)break;_ref12=_iterator10[_i10++]}else{_i10=_iterator10.next();if(_i10.done)break;_ref12=_i10.value}var path=_ref12;if(path[0]===":"){score+=Math.pow(1,level)}else if(path!==""){score+=Math.pow(2,level)}level++}}return score};var RouterSegments=/*#__PURE__*/function(){function RouterSegments(path){this.path=path.slice()}var _proto3=RouterSegments.prototype;_proto3.next=function next(){if(this.path.length>0){return this.path.shift()}return""};return RouterSegments}();var readRedirects=function readRedirects(root){return Array.from(root.children).filter(function(el){return el.tagName==="ION-ROUTE-REDIRECT"}).map(function(el){var to=readProp(el,"to");return{from:parsePath(readProp(el,"from")),to:to==null?undefined:parsePath(to)}})};var readRoutes=function readRoutes(root){return flattenRouterTree(readRouteNodes(root))};var readRouteNodes=function readRouteNodes(root,node){if(node===void 0){node=root}return Array.from(node.children).filter(function(el){return el.tagName==="ION-ROUTE"&&el.component}).map(function(el){var component=readProp(el,"component");if(component==null){throw new Error("component missing in ion-route")}return{path:parsePath(readProp(el,"url")),id:component.toLowerCase(),params:el.componentProps,children:readRouteNodes(root,el)}})};var readProp=function readProp(el,prop){if(prop in el){return el[prop]}if(el.hasAttribute(prop)){return el.getAttribute(prop)}return null};var flattenRouterTree=function flattenRouterTree(nodes){var routes=[];for(var _iterator11=nodes,_isArray11=Array.isArray(_iterator11),_i11=0,_iterator11=_isArray11?_iterator11:_iterator11[Symbol.iterator]();;){var _ref13;if(_isArray11){if(_i11>=_iterator11.length)break;_ref13=_iterator11[_i11++]}else{_i11=_iterator11.next();if(_i11.done)break;_ref13=_i11.value}var node=_ref13;flattenNode([],routes,node)}return routes};var flattenNode=function flattenNode(chain,routes,node){var s=chain.slice();s.push({id:node.id,path:node.path,params:node.params});if(node.children.length===0){routes.push(s);return}for(var _iterator12=node.children,_isArray12=Array.isArray(_iterator12),_i12=0,_iterator12=_isArray12?_iterator12:_iterator12[Symbol.iterator]();;){var _ref14;if(_isArray12){if(_i12>=_iterator12.length)break;_ref14=_iterator12[_i12++]}else{_i12=_iterator12.next();if(_i12.done)break;_ref14=_i12.value}var sub=_ref14;flattenNode(s,routes,sub)}};var Router=/*#__PURE__*/function(){function Router(hostRef){Object(_chunk_d0403a2f_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this,hostRef);this.previousPath=null;this.busy=false;this.state=0;this.lastState=0;/**
         * By default `ion-router` will match the routes at the root path ("/").
         * That can be changed when
         *
         */this.root="/";/**
         * The router can work in two "modes":
         * - With hash: `/index.html#/path/to/page`
         * - Without hash: `/path/to/page`
         *
         * Using one or another might depend in the requirements of your app and/or where it's deployed.
         *
         * Usually "hash-less" navigation works better for SEO and it's more user friendly too, but it might
         * requires additional server-side configuration in order to properly work.
         *
         * On the otherside hash-navigation is much easier to deploy, it even works over the file protocol.
         *
         * By default, this property is `true`, change to `false` to allow hash-less URLs.
         */this.useHash=true;this.ionRouteWillChange=Object(_chunk_d0403a2f_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this,"ionRouteWillChange",7);this.ionRouteDidChange=Object(_chunk_d0403a2f_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this,"ionRouteDidChange",7)}var _proto4=Router.prototype;_proto4.componentWillLoad=/*#__PURE__*/function(){var _componentWillLoad=_asyncToGenerator(/*#__PURE__*/regeneratorRuntime.mark(function _callee3(){return regeneratorRuntime.wrap(function _callee3$(_context3){while(1){switch(_context3.prev=_context3.next){case 0:console.debug("[ion-router] router will load");_context3.next=3;return waitUntilNavNode();case 3:console.debug("[ion-router] found nav");_context3.next=6;return this.onRoutesChanged();case 6:case"end":return _context3.stop();}}},_callee3,this)}));function componentWillLoad(){return _componentWillLoad.apply(this,arguments)}return componentWillLoad}();_proto4.componentDidLoad=function componentDidLoad(){window.addEventListener("ionRouteRedirectChanged",Object(_chunk_c90aaa66_js__WEBPACK_IMPORTED_MODULE_3__["e"])(this.onRedirectChanged.bind(this),10));window.addEventListener("ionRouteDataChanged",Object(_chunk_c90aaa66_js__WEBPACK_IMPORTED_MODULE_3__["e"])(this.onRoutesChanged.bind(this),100))};_proto4.onPopState=function onPopState(){var direction=this.historyDirection();var path=this.getPath();console.debug("[ion-router] URL changed -> update nav",path,direction);return this.writeNavStateRoot(path,direction)};_proto4.onBackButton=function onBackButton(ev){var _this=this;ev.detail.register(0,function(){return _this.back()})}/**
     * Navigate to the specified URL.
     *
     * @param url The url to navigate to.
     * @param direction The direction of the animation. Defaults to `"forward"`.
     */;_proto4.push=function push(url,direction){if(direction===void 0){direction="forward"}if(url.startsWith(".")){url=new URL(url,window.location.href).pathname}console.debug("[ion-router] URL pushed -> updating nav",url,direction);var path=parsePath(url);this.setPath(path,direction);return this.writeNavStateRoot(path,direction)}/**
     * Go back to previous page in the window.history.
     */;_proto4.back=function back(){window.history.back();return Promise.resolve(this.waitPromise)}/** @internal */;_proto4.printDebug=/*#__PURE__*/function(){var _printDebug=_asyncToGenerator(/*#__PURE__*/regeneratorRuntime.mark(function _callee4(){return regeneratorRuntime.wrap(function _callee4$(_context4){while(1){switch(_context4.prev=_context4.next){case 0:console.debug("CURRENT PATH",this.getPath());console.debug("PREVIOUS PATH",this.previousPath);printRoutes(readRoutes(this.el));printRedirects(readRedirects(this.el));case 4:case"end":return _context4.stop();}}},_callee4,this)}));function printDebug(){return _printDebug.apply(this,arguments)}return printDebug}()/** @internal */;_proto4.navChanged=/*#__PURE__*/function(){var _navChanged=_asyncToGenerator(/*#__PURE__*/regeneratorRuntime.mark(function _callee5(direction){var _ref15,ids,outlet,routes,chain,path;return regeneratorRuntime.wrap(function _callee5$(_context5){while(1){switch(_context5.prev=_context5.next){case 0:if(!this.busy){_context5.next=3;break}console.warn("[ion-router] router is busy, navChanged was cancelled");return _context5.abrupt("return",false);case 3:_context5.next=5;return readNavState(window.document.body);case 5:_ref15=_context5.sent;ids=_ref15.ids;outlet=_ref15.outlet;routes=readRoutes(this.el);chain=routerIDsToChain(ids,routes);if(chain){_context5.next=13;break}console.warn("[ion-router] no matching URL for ",ids.map(function(i){return i.id}));return _context5.abrupt("return",false);case 13:path=chainToPath(chain);if(path){_context5.next=17;break}console.warn("[ion-router] router could not match path because some required param is missing");return _context5.abrupt("return",false);case 17:console.debug("[ion-router] nav changed -> update URL",ids,path);this.setPath(path,direction);_context5.next=21;return this.safeWriteNavState(outlet,chain,ROUTER_INTENT_NONE,path,null,ids.length);case 21:return _context5.abrupt("return",true);case 22:case"end":return _context5.stop();}}},_callee5,this)}));function navChanged(_x7){return _navChanged.apply(this,arguments)}return navChanged}();_proto4.onRedirectChanged=function onRedirectChanged(){var path=this.getPath();if(path&&routeRedirect(path,readRedirects(this.el))){this.writeNavStateRoot(path,ROUTER_INTENT_NONE)}};_proto4.onRoutesChanged=function onRoutesChanged(){return this.writeNavStateRoot(this.getPath(),ROUTER_INTENT_NONE)};_proto4.historyDirection=function historyDirection(){var win=window;if(win.history.state===null){this.state++;win.history.replaceState(this.state,win.document.title,win.document.location&&win.document.location.href)}var state=win.history.state;var lastState=this.lastState;this.lastState=state;if(state>lastState){return ROUTER_INTENT_FORWARD}else if(state<lastState){return ROUTER_INTENT_BACK}else{return ROUTER_INTENT_NONE}};_proto4.writeNavStateRoot=/*#__PURE__*/function(){var _writeNavStateRoot=_asyncToGenerator(/*#__PURE__*/regeneratorRuntime.mark(function _callee6(path,direction){var redirects,redirect,redirectFrom,routes,chain;return regeneratorRuntime.wrap(function _callee6$(_context6){while(1){switch(_context6.prev=_context6.next){case 0:if(path){_context6.next=3;break}console.error("[ion-router] URL is not part of the routing set");return _context6.abrupt("return",false);case 3:// lookup redirect rule
redirects=readRedirects(this.el);redirect=routeRedirect(path,redirects);redirectFrom=null;if(redirect){this.setPath(redirect.to,direction);redirectFrom=redirect.from;path=redirect.to}// lookup route chain
routes=readRoutes(this.el);chain=routerPathToChain(path,routes);if(chain){_context6.next=12;break}console.error("[ion-router] the path does not match any route");return _context6.abrupt("return",false);case 12:return _context6.abrupt("return",this.safeWriteNavState(document.body,chain,direction,path,redirectFrom));case 13:case"end":return _context6.stop();}}},_callee6,this)}));function writeNavStateRoot(_x8,_x9){return _writeNavStateRoot.apply(this,arguments)}return writeNavStateRoot}();_proto4.safeWriteNavState=/*#__PURE__*/function(){var _safeWriteNavState=_asyncToGenerator(/*#__PURE__*/regeneratorRuntime.mark(function _callee7(node,chain,direction,path,redirectFrom,index){var unlock,changed;return regeneratorRuntime.wrap(function _callee7$(_context7){while(1){switch(_context7.prev=_context7.next){case 0:if(index===void 0){index=0}_context7.next=3;return this.lock();case 3:unlock=_context7.sent;changed=false;_context7.prev=5;_context7.next=8;return this.writeNavState(node,chain,direction,path,redirectFrom,index);case 8:changed=_context7.sent;_context7.next=14;break;case 11:_context7.prev=11;_context7.t0=_context7["catch"](5);console.error(_context7.t0);case 14:unlock();return _context7.abrupt("return",changed);case 16:case"end":return _context7.stop();}}},_callee7,this,[[5,11]])}));function safeWriteNavState(_x10,_x11,_x12,_x13,_x14,_x15){return _safeWriteNavState.apply(this,arguments)}return safeWriteNavState}();_proto4.lock=/*#__PURE__*/function(){var _lock=_asyncToGenerator(/*#__PURE__*/regeneratorRuntime.mark(function _callee8(){var p,resolve;return regeneratorRuntime.wrap(function _callee8$(_context8){while(1){switch(_context8.prev=_context8.next){case 0:p=this.waitPromise;this.waitPromise=new Promise(function(r){return resolve=r});if(!(p!==undefined)){_context8.next=5;break}_context8.next=5;return p;case 5:return _context8.abrupt("return",resolve);case 6:case"end":return _context8.stop();}}},_callee8,this)}));function lock(){return _lock.apply(this,arguments)}return lock}();_proto4.writeNavState=/*#__PURE__*/function(){var _writeNavState2=_asyncToGenerator(/*#__PURE__*/regeneratorRuntime.mark(function _callee9(node,chain,direction,path,redirectFrom,index){var routeEvent,changed;return regeneratorRuntime.wrap(function _callee9$(_context9){while(1){switch(_context9.prev=_context9.next){case 0:if(index===void 0){index=0}if(!this.busy){_context9.next=4;break}console.warn("[ion-router] router is busy, transition was cancelled");return _context9.abrupt("return",false);case 4:this.busy=true;// generate route event and emit will change
routeEvent=this.routeChangeEvent(path,redirectFrom);if(routeEvent){this.ionRouteWillChange.emit(routeEvent)}_context9.next=9;return _writeNavState(node,chain,direction,index);case 9:changed=_context9.sent;this.busy=false;if(changed){console.debug("[ion-router] route changed",path)}// emit did change
if(routeEvent){this.ionRouteDidChange.emit(routeEvent)}return _context9.abrupt("return",changed);case 14:case"end":return _context9.stop();}}},_callee9,this)}));function writeNavState(_x16,_x17,_x18,_x19,_x20,_x21){return _writeNavState2.apply(this,arguments)}return writeNavState}();_proto4.setPath=function setPath(path,direction){this.state++;writePath(window.history,this.root,this.useHash,path,direction,this.state)};_proto4.getPath=function getPath(){return readPath(window.location,this.root,this.useHash)};_proto4.routeChangeEvent=function routeChangeEvent(path,redirectFromPath){var from=this.previousPath;var to=generatePath(path);this.previousPath=to;if(to===from){return null}var redirectedFrom=redirectFromPath?generatePath(redirectFromPath):null;return{from:from,redirectedFrom:redirectedFrom,to:to}};_createClass(Router,[{key:"el",get:function get(){return Object(_chunk_d0403a2f_js__WEBPACK_IMPORTED_MODULE_0__["e"])(this)}}]);return Router}();var RouterLink=/*#__PURE__*/function(){function RouterLink(hostRef){var _this2=this;Object(_chunk_d0403a2f_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this,hostRef);/**
         * When using a router, it specifies the transition direction when navigating to
         * another page using `href`.
         */this.routerDirection="forward";this.onClick=function(ev){Object(_chunk_353a032e_js__WEBPACK_IMPORTED_MODULE_2__["o"])(_this2.href,ev,_this2.routerDirection)}}var _proto5=RouterLink.prototype;_proto5.render=function render(){var _Object$assign;var mode=Object(_chunk_d0403a2f_js__WEBPACK_IMPORTED_MODULE_0__["d"])(this);var attrs={href:this.href,rel:this.rel,target:this.target};return Object(_chunk_d0403a2f_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_chunk_d0403a2f_js__WEBPACK_IMPORTED_MODULE_0__["H"],{onClick:this.onClick,"class":Object.assign({},Object(_chunk_353a032e_js__WEBPACK_IMPORTED_MODULE_2__["c"])(this.color),(_Object$assign={},_Object$assign[mode]=true,_Object$assign["ion-activatable"]=true,_Object$assign))},Object(_chunk_d0403a2f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("a",Object.assign({},attrs),Object(_chunk_d0403a2f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot",null)))};_createClass(RouterLink,null,[{key:"style",get:function get(){return":host{--background:transparent;--color:var(--ion-color-primary,#3880ff);background:var(--background);color:var(--color)}:host(.ion-color){color:var(--ion-color-base)}a{font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit}"}}]);return RouterLink}();/***/}}]);//# sourceMappingURL=56-es2015.js.map
//# sourceMappingURL=56-es5.js.map