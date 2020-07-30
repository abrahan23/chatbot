(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<app-nav-bar></app-nav-bar>\n<app-chat></app-chat>\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/components/chat/chat.component.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/components/chat/chat.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"avatar\" #avatar >\n    <div id=\"newtooltip\" class=\"in-Right\" >¡Hola! ¿Tienes dudas sobre el coronavirus?</div>\n    <div class=\"avatar-image\">\n        <a (click)=\"OpenClose( avatar, frame)\">\n             <img src=\"../../../assets/img/avataaars.svg\" width=\"100\"  alt=\"\">\n         </a>\n    </div>\n</div>\n\n<div id=\"frame\" #frame>\n    <div class=\"content\">\n        <div class=\"contact-profile\">\n            <div class=\"row\">\n                <div class=\"col text-left\">\n                    <a class=\"btn fa fa-minus text-white\" (click)=\"OpenClose( frame, avatar)\" #BtnClose></a>\n                    <img src=\"../../assets/img/avataaars.svg\" width=\"30\" height=\"30\" class=\"d-inline-block align-top\" alt=\"\">\n                    <span class=\"text-white\">Bill</span>\n                </div>       \n                <div class=\"col text-right\">\n                    <div ngbDropdown placement=\"bottom-right\" class=\"d-inline-block\">\n                        <a class=\"btn fa fa-bars text-white\" id=\"dropdownBasic2\" ngbDropdownToggle></a>\n                        <div ngbDropdownMenu aria-labelledby=\"dropdownBasic2\">\n                          <button ngbDropdownItem>Política de privacidad</button>\n                          <button ngbDropdownItem>Selecionar Idioma</button>\n                          <button ngbDropdownItem>Olvidar mis datos</button>\n                        </div>\n                      </div>\n                </div>\n            </div>\n\n        </div>\n        <div #Messages class=\"messages\">\n            <ul #ulMessages>\n                <li class=\"replies\">\n                    <img src=\"../../assets/img/avataaars.svg\" alt=\"\" />\n                    <p>When you're backed against the wall, break the god damn thing down.</p>\n                </li>\n                <li class=\"sent\">\n                    <p>How the hell am I supposed to get a jury to believe you when I am not even sure that I do?!</p>\n                </li>\n                <li class=\"replies\">\n                    <img src=\"../../assets/img/avataaars.svg\" alt=\"\" />\n                    <p>When you're backed against the wall, break the god damn thing down.</p>\n                </li>\n                <li class=\"replies\">\n                    <img src=\"../../assets/img/avataaars.svg\" alt=\"\" />\n                    <p>Excuses don't win championships.</p>\n                </li>\n                <li class=\"sent\">\n                    <p>Oh yeah, did Michael Jordan tell you that?</p>\n                </li>\n                <li class=\"replies\">\n                    <img src=\"../../assets/img/avataaars.svg\" alt=\"\" />\n                    <p>No, I told him that.</p>\n                </li>\n                <li class=\"replies\">\n                    <img src=\"../../assets/img/avataaars.svg\" alt=\"\" />\n                    <p>What are your choices when someone puts a gun to your head?</p>\n                </li>\n                <li class=\"sent\">\n                    <p>What are you talking about? You do what they say or they shoot you.</p>\n                </li>\n                <li class=\"replies\">\n                    <app-image-card></app-image-card>\n                </li>\n                <li class=\"replies\">\n                    <img src=\"../../assets/img/avataaars.svg\" alt=\"\" />\n                    <p>Wrong. You take the gun, or you pull out a bigger one. Or, you call their bluff. Or, you do any one of a hundred and forty six other things.</p>\n                </li>\n            </ul>\n        </div>\n        <div class=\"help\">\n            <app-help></app-help>\n        </div>\n        <div class=\"message-input\">\n            <div class=\"\">\n                <div class=\"wrap\">\n                    <input type=\"text\" (keydown.enter)=\"onKeydown($event)\" #textMessage placeholder=\"Escribe tu pregunta\" />\n                    <button class=\"submit\" (click)=\"newMessage()\"><i class=\"fa fa-paper-plane\" aria-hidden=\"true\"></i></button>\n                </div>\n            </div>\n        </div>\n        <div class=\"footer-chat\">\n            <p class=\"text-center\"><small>by 1millionbot</small></p>\n        </div>\n    </div>\n</div>\n\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/components/help/help.component.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/components/help/help.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"help-container\">\n    <p><small>Esta son algunas de las cosas que puedes preguntar:</small></p>\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col\">\n                <div id=\"carouselExampleControls\" class=\"carousel slide\" data-ride=\"carousel\">\n                    <div class=\"carousel-inner\">\n                        <div class=\"carousel-item active\">\n                            <button type=\"button\" class=\"btn btn-light\">Qué es un chatBot</button>\n                        </div>\n                        <div class=\"carousel-item\">\n                            <button type=\"button\" class=\"btn btn-light\">Para qué sirve</button>\n                        </div>\n                        <div class=\"carousel-item\">\n                            <button type=\"button\" class=\"btn btn-light\">Qué es un chatBot 2</button>\n                        </div>\n                    </div>\n                    <a class=\"carousel-control-next\" href=\"#carouselExampleControls\" role=\"button\" data-slide=\"next\">\n                        <span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span>\n                        \n                    </a>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/components/image-card/image-card.component.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/components/image-card/image-card.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--Carousel Wrapper-->\n<div id=\"multi-item-example\" class=\"carousel slide carousel-multi-item\" data-ride=\"carousel\">\n    <!--Indicators-->\n    <ol class=\"carousel-indicators\">\n    <li data-target=\"#multi-item-example\" data-slide-to=\"0\" class=\"active\"></li>\n    <li data-target=\"#multi-item-example\" data-slide-to=\"1\"></li>\n    <li data-target=\"#multi-item-example\" data-slide-to=\"2\"></li>\n    </ol>\n    <!--/.Indicators-->\n\n    <!--Slides-->\n    <div class=\"carousel-inner\" role=\"listbox\">\n\n    <!--First slide-->\n    <div class=\"carousel-item active\">\n        <div class=\"row\">\n            <div class=\"col-md-12\">\n                <div class=\"card mb-2\">\n                <img class=\"card-img-top\" src=\"https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg\"\n                    alt=\"Card image cap\">\n                <div class=\"card-body\">\n                    <h4 class=\"card-title\">Card title</h4>\n                    <p class=\"card-text\">Some quick example text to build on the card title and make up the bulk of the\n                    card's content.</p>\n                    <a class=\"btn \">Seguir leyendo</a>\n                </div>\n                </div>\n            </div>\n\n        </div>\n    </div>\n    <!--/.First slide-->\n\n    <!--Second slide-->\n    <div class=\"carousel-item\">\n        <div class=\"row\">\n            <div class=\"col-md-12\">\n                <div class=\"card mb-2\">\n                <img class=\"card-img-top\" src=\"https://mdbootstrap.com/img/Photos/Horizontal/City/4-col/img%20(60).jpg\"\n                    alt=\"Card image cap\">\n                <div class=\"card-body\">\n                    <h4 class=\"card-title\">Card title</h4>\n                    <p class=\"card-text\">Some quick example text to build on the card title and make up the bulk of the\n                    card's content.</p>\n                    <a class=\"btn \">Seguir leyendo</a>\n                </div>\n                </div>\n            </div>\n\n        </div>\n\n    </div>\n    <!--/.Second slide-->\n\n    <!--Third slide-->\n    <div class=\"carousel-item\">\n        <div class=\"row\">\n            <div class=\"col-md-12\">\n                <div class=\"card mb-2\">\n                <img class=\"card-img-top\" src=\"https://mdbootstrap.com/img/Photos/Horizontal/Food/4-col/img%20(53).jpg\"\n                    alt=\"Card image cap\">\n                <div class=\"card-body\">\n                    <h4 class=\"card-title\">Card title</h4>\n                    <p class=\"card-text\">Some quick example text to build on the card title and make up the bulk of the\n                    card's content.</p>\n                    <a class=\"btn \">Seguir leyendo</a>\n                </div>\n                </div>\n            </div>\n        </div>\n    </div>\n    <!--/.Third slide-->\n\n    </div>\n    <!--/.Slides-->\n\n</div>\n<!--/.Carousel Wrapper-->"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/components/nav-bar/nav-bar.component.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/components/nav-bar/nav-bar.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-dark \">\n    <a class=\"navbar-brand\" href=\"#\"><img src=\"../assets/img/1MillionBotLogoShadow-02.png\" alt=\"\"></a>\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarNavDropdown\" aria-controls=\"navbarNavDropdown\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n    <div class=\"collapse navbar-collapse\" id=\"navbarNavDropdown\">\n      <ul class=\"navbar-nav\">\n        <li class=\"nav-item dropdown\">\n          <a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"navbarDropdownMenuLink\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n            Chatbots\n          </a>\n          <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdownMenuLink\">\n            <a class=\"dropdown-item\" href=\"#\">Action</a>\n            <a class=\"dropdown-item\" href=\"#\">Another action</a>\n          </div>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" href=\"#\">Contacto </a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" href=\"#\">Trabaja con nosotros</a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" href=\"#\" >Blog</a>\n        </li>\n      </ul>\n    </div>\n  </nav>\n  \n  <header class=\"masthead  text-white text-center\">\n    <div class=\"container d-flex align-items-center flex-column\">\n        <h1 class=\"masthead-heading text-center mb-0\">IA y asistentes virtuales para<br> revolucionar la empresa </h1>\n    </div>\n  </header>"

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _components_chat_chat_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/chat/chat.component */ "./src/components/chat/chat.component.ts");




let AppComponent = class AppComponent {
    constructor() {
        this.title = 'Chat';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
    }),
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _components_chat_chat_component__WEBPACK_IMPORTED_MODULE_2__["ChatComponent"]
        ],
        imports: []
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var _components_chat_chat_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/chat/chat.component */ "./src/components/chat/chat.component.ts");
/* harmony import */ var _components_image_card_image_card_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/image-card/image-card.component */ "./src/components/image-card/image-card.component.ts");
/* harmony import */ var _components_help_help_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/help/help.component */ "./src/components/help/help.component.ts");
/* harmony import */ var _components_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/nav-bar/nav-bar.component */ "./src/components/nav-bar/nav-bar.component.ts");









let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
            _components_chat_chat_component__WEBPACK_IMPORTED_MODULE_5__["ChatComponent"],
            _components_image_card_image_card_component__WEBPACK_IMPORTED_MODULE_6__["ImageCardComponent"],
            _components_help_help_component__WEBPACK_IMPORTED_MODULE_7__["HelpComponent"],
            _components_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_8__["NavBarComponent"],
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"]
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/components/chat/chat.component.css":
/*!************************************************!*\
  !*** ./src/components/chat/chat.component.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n.avatar {\n    position: fixed; \n    bottom: 20px; \n    right: 20px;\n    z-index: 9999999999;\n    border-radius: 50%;\n  }\n.avatar-image {\n    float: right;\n}\n#newtooltip {\n    padding: 10px 20px;\n    border-radius: 20px;\n    border-bottom-right-radius: 0;\n    box-shadow: 0px 0px 10px rgba(0,0,0,0.3);\n    background: #eaeaea;\n    color: black;\n    float: left;\n}\n@-webkit-keyframes fadeInRight {\n    from {\n        opacity:0;\n        -webkit-transform: translatex(10px);\n        transform: translatex(10px);\n    }\n    to {\n        opacity:1;\n        -webkit-transform: translatex(0);\n        transform: translatex(0);\n    }\n}\n@keyframes fadeInRight {\n    from {\n        opacity:0;\n        -webkit-transform: translatex(100px);\n        transform: translatex(100px);\n    }\n    to {\n        opacity:1;\n        -webkit-transform: translatex(0);\n        transform: translatex(0);\n    }\n}\n.in-Right {\n    -webkit-animation-name: fadeInRight;\n    animation-name: fadeInRight;\n    -webkit-animation-fill-mode: both;\n    animation-fill-mode: both;\n    -webkit-animation-duration: 1s;\n    animation-duration: 1s;\n    -webkit-animation-delay: 3s;\n    -moz-animation-delay: 3s;\n    -o-animation-duration: 3s;\n    animation-delay: 3s;\n}\n/***  CHAT  ***/\n#frame {\n    display: none;\n    width: 380px; \n    min-width: 380px;\n    height: 510px; \n    position: fixed; \n    bottom: 0; \n    right: 20px;\n    z-index: 9999999999;\n    overflow: hidden;\n    box-shadow: 0 4px 15px 0 rgba(0,0,0,0.3), 0 1px 2px 0 rgba(0,0,0,0.1);\n    border-radius: 3px;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n            flex-direction: column;\n    background-color: #e6e6e6;\n  }\n@media screen and (max-width: 400px) {\n    #frame {\n      width: 96%;\n      height: 510px; \n      right: 0px;\n      padding: 0 3px;\n    }\n}\n#frame .content {\n    float: left;\n    width: 100%;\n    height: 100%;\n    overflow: hidden;\n    position: relative;\n  }\n/*** PROFILE ****/\n#frame .content .contact-profile {\n    width: 100%;\n    height: 60px;\n    line-height: 60px;\n    background: #cc3234;\n    border-top-left-radius: 3px; border-top-right-radius: 3px;\n  }\n#frame .content .contact-profile img {\n    width: 40px;\n    border-radius: 50%;\n    margin: 9px 12px 0 9px;\n  }\n#dropdownBasic2::after { content: none; }\n.contact-profile button { margin: 0 5px;}\n/*****    MESSAGE   ****/\n#frame .content .messages {\n    height: 300px;\n    /* min-height: calc(100% - 108px);\n    max-height: calc(100% - 108px); */\n    overflow-y: scroll;\n    overflow-x: hidden;\n  }\n@media screen and (max-width: 735px) {\n    #frame .content .messages {\n      max-height: calc(100% - 105px);\n    }\n  }\n#frame .content .messages::-webkit-scrollbar {\n    width: 8px;\n    background: transparent;\n  }\n#frame .content .messages::-webkit-scrollbar-thumb {\n    background-color: rgba(0, 0, 0, 0.3);\n    border-radius: 3px;\n  }\n#frame .content .messages ul li {\n    display: inline-block;\n    clear: both;\n    float: left;\n    margin: 5px 5px 5px 5px;\n    width: calc(100% - 25px);\n    font-size: 0.9em;\n  }\n#frame .content .messages ul li:nth-last-child(1) {\n    margin-bottom: 20px;\n  }\n#frame .content .messages ul li.replies > img {\n    margin: 6px 8px 0 0;\n  }\n#frame .content .messages ul li.replies > p {\n    background: #f1f2f4;\n  }\n#frame .content .messages ul li.sent > img {\n    float: right;\n    margin: 6px 0 0 8px;\n  }\n#frame .content .messages ul li.sent > p {\n    background: #FFF;\n    float: right;\n    border: 1px solid #eaeaea;\n  }\n#frame .content .messages ul li > img {\n    width: 22px;\n    border-radius: 50%;\n    float: left;\n  }\n#frame .content .messages ul li > p {\n    display: inline-block;\n    padding: 10px 10px;\n    border-radius: 20px;\n    max-width: 205px;\n    line-height: 130%;\n  }\n@media screen and (min-width: 735px) {\n    #frame .content .messages ul li > p {\n      max-width: 300px;\n    }\n  }\n/****  FORM   ***/\n#frame .content .message-input {\n    position: relative; \n    width: 100%;\n    z-index: 99;\n  }\n#frame .content .message-input .wrap {\n    position: relative;\n  }\n#frame .content .message-input .wrap input {\n    font-family: \"proxima-nova\",  \"Source Sans Pro\", sans-serif;\n    float: left;\n    border: none;\n    width: calc(100% - 50px);\n    padding: 15px 32px 14px 8px;\n    font-size: 0.8em;\n    color: #32465a;\n  }\n#frame .content .message-input .wrap input:focus {\n    outline: none;\n  }\n#frame .content .message-input .wrap button {\n    float: right;\n    border: none;\n    width: 50px;\n    padding: 16px 0;\n    cursor: pointer;\n    background: #32465a;\n    color: #f5f5f5;\n  }\n#frame .content .message-input .wrap button:hover {\n    background: #435f7a;\n  }\n#frame .content .message-input .wrap button:focus {\n    outline: none;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9jb21wb25lbnRzL2NoYXQvY2hhdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtJQUNJLGVBQWU7SUFDZixZQUFZO0lBQ1osV0FBVztJQUNYLG1CQUFtQjtJQUNuQixrQkFBa0I7RUFDcEI7QUFDRjtJQUNJLFlBQVk7QUFDaEI7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsNkJBQTZCO0lBQzdCLHdDQUF3QztJQUN4QyxtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLFdBQVc7QUFDZjtBQUVBO0lBQ0k7UUFDSSxTQUFTO1FBQ1QsbUNBQW1DO1FBR25DLDJCQUEyQjtJQUMvQjtJQUNBO1FBQ0ksU0FBUztRQUNULGdDQUFnQztRQUdoQyx3QkFBd0I7SUFDNUI7QUFDSjtBQW1CQTtJQUNJO1FBQ0ksU0FBUztRQUNULG9DQUFvQztRQUdwQyw0QkFBNEI7SUFDaEM7SUFDQTtRQUNJLFNBQVM7UUFDVCxnQ0FBZ0M7UUFHaEMsd0JBQXdCO0lBQzVCO0FBQ0o7QUFFQTtJQUNJLG1DQUFtQztJQUduQywyQkFBMkI7SUFDM0IsaUNBQWlDO0lBR2pDLHlCQUF5QjtJQUN6Qiw4QkFBOEI7SUFHOUIsc0JBQXNCO0lBQ3RCLDJCQUEyQjtJQUMzQix3QkFBd0I7SUFDeEIseUJBQXlCO0lBQ3pCLG1CQUFtQjtBQUN2QjtBQUVBLGVBQWU7QUFFZjtJQUNJLGFBQWE7SUFDYixZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYixlQUFlO0lBQ2YsU0FBUztJQUNULFdBQVc7SUFDWCxtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLHFFQUFxRTtJQUNyRSxrQkFBa0I7SUFDbEIsNEJBQXNCO0lBQXRCLDZCQUFzQjtZQUF0QixzQkFBc0I7SUFDdEIseUJBQXlCO0VBQzNCO0FBRUY7SUFDSTtNQUNFLFVBQVU7TUFDVixhQUFhO01BQ2IsVUFBVTtNQUNWLGNBQWM7SUFDaEI7QUFDSjtBQUVBO0lBQ0ksV0FBVztJQUNYLFdBQVc7SUFDWCxZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLGtCQUFrQjtFQUNwQjtBQUVGLGlCQUFpQjtBQUVqQjtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLG1CQUFtQjtJQUNuQiwyQkFBMkIsRUFBRSw0QkFBNEI7RUFDM0Q7QUFDRjtJQUNJLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsc0JBQXNCO0VBQ3hCO0FBQ0YseUJBQXlCLGFBQWEsRUFBRTtBQUN4QywwQkFBMEIsYUFBYSxDQUFDO0FBRXRDLHdCQUF3QjtBQUUxQjtJQUNJLGFBQWE7SUFDYjtxQ0FDaUM7SUFDakMsa0JBQWtCO0lBQ2xCLGtCQUFrQjtFQUNwQjtBQUVGO0lBQ0k7TUFDRSw4QkFBOEI7SUFDaEM7RUFDRjtBQUVGO0lBQ0ksVUFBVTtJQUNWLHVCQUF1QjtFQUN6QjtBQUNBO0lBQ0Usb0NBQW9DO0lBQ3BDLGtCQUFrQjtFQUNwQjtBQUNBO0lBQ0UscUJBQXFCO0lBQ3JCLFdBQVc7SUFDWCxXQUFXO0lBQ1gsdUJBQXVCO0lBQ3ZCLHdCQUF3QjtJQUN4QixnQkFBZ0I7RUFDbEI7QUFDQTtJQUNFLG1CQUFtQjtFQUNyQjtBQUNBO0lBQ0UsbUJBQW1CO0VBQ3JCO0FBQ0E7SUFDRSxtQkFBbUI7RUFDckI7QUFDQTtJQUNFLFlBQVk7SUFDWixtQkFBbUI7RUFDckI7QUFDQTtJQUNFLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1oseUJBQXlCO0VBQzNCO0FBQ0E7SUFDRSxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLFdBQVc7RUFDYjtBQUNBO0lBQ0UscUJBQXFCO0lBQ3JCLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtFQUNuQjtBQUNBO0lBQ0U7TUFDRSxnQkFBZ0I7SUFDbEI7RUFDRjtBQUVBLGlCQUFpQjtBQUVqQjtJQUNFLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsV0FBVztFQUNiO0FBQ0E7SUFDRSxrQkFBa0I7RUFDcEI7QUFFQTtJQUNFLDJEQUEyRDtJQUMzRCxXQUFXO0lBQ1gsWUFBWTtJQUNaLHdCQUF3QjtJQUN4QiwyQkFBMkI7SUFDM0IsZ0JBQWdCO0lBQ2hCLGNBQWM7RUFDaEI7QUFFQTtJQUNFLGFBQWE7RUFDZjtBQUVBO0lBQ0UsWUFBWTtJQUNaLFlBQVk7SUFDWixXQUFXO0lBQ1gsZUFBZTtJQUNmLGVBQWU7SUFDZixtQkFBbUI7SUFDbkIsY0FBYztFQUNoQjtBQUVBO0lBQ0UsbUJBQW1CO0VBQ3JCO0FBRUE7SUFDRSxhQUFhO0VBQ2YiLCJmaWxlIjoic3JjL2NvbXBvbmVudHMvY2hhdC9jaGF0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbi5hdmF0YXIge1xuICAgIHBvc2l0aW9uOiBmaXhlZDsgXG4gICAgYm90dG9tOiAyMHB4OyBcbiAgICByaWdodDogMjBweDtcbiAgICB6LWluZGV4OiA5OTk5OTk5OTk5O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgfVxuLmF2YXRhci1pbWFnZSB7XG4gICAgZmxvYXQ6IHJpZ2h0O1xufVxuXG4jbmV3dG9vbHRpcCB7XG4gICAgcGFkZGluZzogMTBweCAyMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDA7XG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAxMHB4IHJnYmEoMCwwLDAsMC4zKTtcbiAgICBiYWNrZ3JvdW5kOiAjZWFlYWVhO1xuICAgIGNvbG9yOiBibGFjaztcbiAgICBmbG9hdDogbGVmdDtcbn1cblxuQC13ZWJraXQta2V5ZnJhbWVzIGZhZGVJblJpZ2h0IHtcbiAgICBmcm9tIHtcbiAgICAgICAgb3BhY2l0eTowO1xuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRleCgxMHB4KTtcbiAgICAgICAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZXgoMTBweCk7XG4gICAgICAgIC1vLXRyYW5zZm9ybTogdHJhbnNsYXRleCgxMHB4KTtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGV4KDEwcHgpO1xuICAgIH1cbiAgICB0byB7XG4gICAgICAgIG9wYWNpdHk6MTtcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZXgoMCk7XG4gICAgICAgIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGV4KDApO1xuICAgICAgICAtby10cmFuc2Zvcm06IHRyYW5zbGF0ZXgoMCk7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRleCgwKTtcbiAgICB9XG59XG5cbkAtbW96LWtleWZyYW1lcyBmYWRlSW5SaWdodCB7XG4gICAgZnJvbSB7XG4gICAgICAgIG9wYWNpdHk6MDtcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZXgoMTBweCk7XG4gICAgICAgIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGV4KDEwcHgpO1xuICAgICAgICAtby10cmFuc2Zvcm06IHRyYW5zbGF0ZXgoMTBweCk7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRleCgxMHB4KTtcbiAgICB9XG4gICAgdG8ge1xuICAgICAgICBvcGFjaXR5OjE7XG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGV4KDApO1xuICAgICAgICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRleCgwKTtcbiAgICAgICAgLW8tdHJhbnNmb3JtOiB0cmFuc2xhdGV4KDApO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZXgoMCk7XG4gICAgfVxufVxuXG5Aa2V5ZnJhbWVzIGZhZGVJblJpZ2h0IHtcbiAgICBmcm9tIHtcbiAgICAgICAgb3BhY2l0eTowO1xuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRleCgxMDBweCk7XG4gICAgICAgIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGV4KDEwMHB4KTtcbiAgICAgICAgLW8tdHJhbnNmb3JtOiB0cmFuc2xhdGV4KDEwMHB4KTtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGV4KDEwMHB4KTtcbiAgICB9XG4gICAgdG8ge1xuICAgICAgICBvcGFjaXR5OjE7XG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGV4KDApO1xuICAgICAgICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRleCgwKTtcbiAgICAgICAgLW8tdHJhbnNmb3JtOiB0cmFuc2xhdGV4KDApO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZXgoMCk7XG4gICAgfVxufVxuXG4uaW4tUmlnaHQge1xuICAgIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IGZhZGVJblJpZ2h0O1xuICAgIC1tb3otYW5pbWF0aW9uLW5hbWU6IGZhZGVJblJpZ2h0O1xuICAgIC1vLWFuaW1hdGlvbi1uYW1lOiBmYWRlSW5SaWdodDtcbiAgICBhbmltYXRpb24tbmFtZTogZmFkZUluUmlnaHQ7XG4gICAgLXdlYmtpdC1hbmltYXRpb24tZmlsbC1tb2RlOiBib3RoO1xuICAgIC1tb3otYW5pbWF0aW9uLWZpbGwtbW9kZTogYm90aDtcbiAgICAtby1hbmltYXRpb24tZmlsbC1tb2RlOiBib3RoO1xuICAgIGFuaW1hdGlvbi1maWxsLW1vZGU6IGJvdGg7XG4gICAgLXdlYmtpdC1hbmltYXRpb24tZHVyYXRpb246IDFzO1xuICAgIC1tb3otYW5pbWF0aW9uLWR1cmF0aW9uOiAxcztcbiAgICAtby1hbmltYXRpb24tZHVyYXRpb246IDFzO1xuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMXM7XG4gICAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IDNzO1xuICAgIC1tb3otYW5pbWF0aW9uLWRlbGF5OiAzcztcbiAgICAtby1hbmltYXRpb24tZHVyYXRpb246IDNzO1xuICAgIGFuaW1hdGlvbi1kZWxheTogM3M7XG59XG5cbi8qKiogIENIQVQgICoqKi9cblxuI2ZyYW1lIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICAgIHdpZHRoOiAzODBweDsgXG4gICAgbWluLXdpZHRoOiAzODBweDtcbiAgICBoZWlnaHQ6IDUxMHB4OyBcbiAgICBwb3NpdGlvbjogZml4ZWQ7IFxuICAgIGJvdHRvbTogMDsgXG4gICAgcmlnaHQ6IDIwcHg7XG4gICAgei1pbmRleDogOTk5OTk5OTk5OTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIGJveC1zaGFkb3c6IDAgNHB4IDE1cHggMCByZ2JhKDAsMCwwLDAuMyksIDAgMXB4IDJweCAwIHJnYmEoMCwwLDAsMC4xKTtcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTZlNmU2O1xuICB9XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQwMHB4KSB7XG4gICAgI2ZyYW1lIHtcbiAgICAgIHdpZHRoOiA5NiU7XG4gICAgICBoZWlnaHQ6IDUxMHB4OyBcbiAgICAgIHJpZ2h0OiAwcHg7XG4gICAgICBwYWRkaW5nOiAwIDNweDtcbiAgICB9XG59XG4gIFxuI2ZyYW1lIC5jb250ZW50IHtcbiAgICBmbG9hdDogbGVmdDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIH1cblxuLyoqKiBQUk9GSUxFICoqKiovXG5cbiNmcmFtZSAuY29udGVudCAuY29udGFjdC1wcm9maWxlIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDYwcHg7XG4gICAgbGluZS1oZWlnaHQ6IDYwcHg7XG4gICAgYmFja2dyb3VuZDogI2NjMzIzNDtcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAzcHg7IGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAzcHg7XG4gIH1cbiNmcmFtZSAuY29udGVudCAuY29udGFjdC1wcm9maWxlIGltZyB7XG4gICAgd2lkdGg6IDQwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIG1hcmdpbjogOXB4IDEycHggMCA5cHg7XG4gIH1cbiNkcm9wZG93bkJhc2ljMjo6YWZ0ZXIgeyBjb250ZW50OiBub25lOyB9XG4uY29udGFjdC1wcm9maWxlIGJ1dHRvbiB7IG1hcmdpbjogMCA1cHg7fVxuIFxuICAvKioqKiogICAgTUVTU0FHRSAgICoqKiovIFxuXG4jZnJhbWUgLmNvbnRlbnQgLm1lc3NhZ2VzIHtcbiAgICBoZWlnaHQ6IDMwMHB4O1xuICAgIC8qIG1pbi1oZWlnaHQ6IGNhbGMoMTAwJSAtIDEwOHB4KTtcbiAgICBtYXgtaGVpZ2h0OiBjYWxjKDEwMCUgLSAxMDhweCk7ICovXG4gICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcbiAgfVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3MzVweCkge1xuICAgICNmcmFtZSAuY29udGVudCAubWVzc2FnZXMge1xuICAgICAgbWF4LWhlaWdodDogY2FsYygxMDAlIC0gMTA1cHgpO1xuICAgIH1cbiAgfVxuICBcbiNmcmFtZSAuY29udGVudCAubWVzc2FnZXM6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgICB3aWR0aDogOHB4O1xuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICB9XG4gICNmcmFtZSAuY29udGVudCAubWVzc2FnZXM6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMyk7XG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICB9XG4gICNmcmFtZSAuY29udGVudCAubWVzc2FnZXMgdWwgbGkge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBjbGVhcjogYm90aDtcbiAgICBmbG9hdDogbGVmdDtcbiAgICBtYXJnaW46IDVweCA1cHggNXB4IDVweDtcbiAgICB3aWR0aDogY2FsYygxMDAlIC0gMjVweCk7XG4gICAgZm9udC1zaXplOiAwLjllbTtcbiAgfVxuICAjZnJhbWUgLmNvbnRlbnQgLm1lc3NhZ2VzIHVsIGxpOm50aC1sYXN0LWNoaWxkKDEpIHtcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICB9XG4gICNmcmFtZSAuY29udGVudCAubWVzc2FnZXMgdWwgbGkucmVwbGllcyA+IGltZyB7XG4gICAgbWFyZ2luOiA2cHggOHB4IDAgMDtcbiAgfVxuICAjZnJhbWUgLmNvbnRlbnQgLm1lc3NhZ2VzIHVsIGxpLnJlcGxpZXMgPiBwIHtcbiAgICBiYWNrZ3JvdW5kOiAjZjFmMmY0O1xuICB9XG4gICNmcmFtZSAuY29udGVudCAubWVzc2FnZXMgdWwgbGkuc2VudCA+IGltZyB7XG4gICAgZmxvYXQ6IHJpZ2h0O1xuICAgIG1hcmdpbjogNnB4IDAgMCA4cHg7XG4gIH1cbiAgI2ZyYW1lIC5jb250ZW50IC5tZXNzYWdlcyB1bCBsaS5zZW50ID4gcCB7XG4gICAgYmFja2dyb3VuZDogI0ZGRjtcbiAgICBmbG9hdDogcmlnaHQ7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2VhZWFlYTtcbiAgfVxuICAjZnJhbWUgLmNvbnRlbnQgLm1lc3NhZ2VzIHVsIGxpID4gaW1nIHtcbiAgICB3aWR0aDogMjJweDtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gIH1cbiAgI2ZyYW1lIC5jb250ZW50IC5tZXNzYWdlcyB1bCBsaSA+IHAge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBwYWRkaW5nOiAxMHB4IDEwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgICBtYXgtd2lkdGg6IDIwNXB4O1xuICAgIGxpbmUtaGVpZ2h0OiAxMzAlO1xuICB9XG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDczNXB4KSB7XG4gICAgI2ZyYW1lIC5jb250ZW50IC5tZXNzYWdlcyB1bCBsaSA+IHAge1xuICAgICAgbWF4LXdpZHRoOiAzMDBweDtcbiAgICB9XG4gIH1cblxuICAvKioqKiAgRk9STSAgICoqKi9cblxuICAjZnJhbWUgLmNvbnRlbnQgLm1lc3NhZ2UtaW5wdXQge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTsgXG4gICAgd2lkdGg6IDEwMCU7XG4gICAgei1pbmRleDogOTk7XG4gIH1cbiAgI2ZyYW1lIC5jb250ZW50IC5tZXNzYWdlLWlucHV0IC53cmFwIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIH1cblxuICAjZnJhbWUgLmNvbnRlbnQgLm1lc3NhZ2UtaW5wdXQgLndyYXAgaW5wdXQge1xuICAgIGZvbnQtZmFtaWx5OiBcInByb3hpbWEtbm92YVwiLCAgXCJTb3VyY2UgU2FucyBQcm9cIiwgc2Fucy1zZXJpZjtcbiAgICBmbG9hdDogbGVmdDtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgd2lkdGg6IGNhbGMoMTAwJSAtIDUwcHgpO1xuICAgIHBhZGRpbmc6IDE1cHggMzJweCAxNHB4IDhweDtcbiAgICBmb250LXNpemU6IDAuOGVtO1xuICAgIGNvbG9yOiAjMzI0NjVhO1xuICB9XG5cbiAgI2ZyYW1lIC5jb250ZW50IC5tZXNzYWdlLWlucHV0IC53cmFwIGlucHV0OmZvY3VzIHtcbiAgICBvdXRsaW5lOiBub25lO1xuICB9XG5cbiAgI2ZyYW1lIC5jb250ZW50IC5tZXNzYWdlLWlucHV0IC53cmFwIGJ1dHRvbiB7XG4gICAgZmxvYXQ6IHJpZ2h0O1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICB3aWR0aDogNTBweDtcbiAgICBwYWRkaW5nOiAxNnB4IDA7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGJhY2tncm91bmQ6ICMzMjQ2NWE7XG4gICAgY29sb3I6ICNmNWY1ZjU7XG4gIH1cblxuICAjZnJhbWUgLmNvbnRlbnQgLm1lc3NhZ2UtaW5wdXQgLndyYXAgYnV0dG9uOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kOiAjNDM1ZjdhO1xuICB9XG5cbiAgI2ZyYW1lIC5jb250ZW50IC5tZXNzYWdlLWlucHV0IC53cmFwIGJ1dHRvbjpmb2N1cyB7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgfSJdfQ== */"

/***/ }),

/***/ "./src/components/chat/chat.component.ts":
/*!***********************************************!*\
  !*** ./src/components/chat/chat.component.ts ***!
  \***********************************************/
/*! exports provided: ChatComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatComponent", function() { return ChatComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _image_card_image_card_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../image-card/image-card.component */ "./src/components/image-card/image-card.component.ts");




let ChatComponent = class ChatComponent {
    constructor(renderer) {
        this.renderer = renderer;
    }
    ngOnInit() { }
    OpenClose(element, element2) {
        this.renderer.setStyle(element, 'display', 'none');
        this.renderer.setStyle(element2, 'display', 'block');
        this.Message.nativeElement.scrollTop = this.Message.nativeElement.scrollHeight;
    }
    newMessage() {
        if (this.textMessage.nativeElement.value != '') {
            const li = this.renderer.createElement('li');
            this.renderer.addClass(li, 'sent');
            li.innerHTML = '<p>' + this.textMessage.nativeElement.value + '</p';
            this.textMessage.nativeElement.value = '';
            this.renderer.appendChild(this.messages.nativeElement, li);
            this.Message.nativeElement.scrollTop = this.Message.nativeElement.scrollHeight;
        }
    }
    onKeydown(event) {
        this.newMessage();
    }
};
ChatComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('Messages', { static: true })
], ChatComponent.prototype, "Message", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('ulMessages', { static: true })
], ChatComponent.prototype, "messages", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('textMessage', { static: true })
], ChatComponent.prototype, "textMessage", void 0);
ChatComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-chat',
        template: __webpack_require__(/*! raw-loader!./chat.component.html */ "./node_modules/raw-loader/index.js!./src/components/chat/chat.component.html"),
        styles: [__webpack_require__(/*! ./chat.component.css */ "./src/components/chat/chat.component.css")]
    }),
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_image_card_image_card_component__WEBPACK_IMPORTED_MODULE_2__["ImageCardComponent"]],
        imports: [],
        exports: []
    })
], ChatComponent);



/***/ }),

/***/ "./src/components/help/help.component.css":
/*!************************************************!*\
  !*** ./src/components/help/help.component.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/***   HELP   ***/\n.help-container { \n    background-color: #FEFEFE; \n    border: solid #e0e0e0 1px;\n}\n.help-container p {\n    margin-bottom: 5px;\n}\n#help-carousel { \n    padding: 5px 10px;\n}\n.carousel {\n    margin: 5px 0;\n}\n.carousel-item { \n    width: auto;\n}\n.carousel-control-next-icon {\n    background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23f00' viewBox='0 0 8 8'%3E%3Cpath d='M2.75 0l-1.5 1.5 2.5 2.5-2.5 2.5 1.5 1.5 4-4-4-4z'/%3E%3C/svg%3E\");\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9jb21wb25lbnRzL2hlbHAvaGVscC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGlCQUFpQjtBQUNqQjtJQUNJLHlCQUF5QjtJQUN6Qix5QkFBeUI7QUFDN0I7QUFFQTtJQUNJLGtCQUFrQjtBQUN0QjtBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCO0FBRUE7SUFDSSxhQUFhO0FBQ2pCO0FBRUE7SUFDSSxXQUFXO0FBQ2Y7QUFFQTtJQUNJLGdOQUFnTjtBQUNwTiIsImZpbGUiOiJzcmMvY29tcG9uZW50cy9oZWxwL2hlbHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKiogICBIRUxQICAgKioqL1xuLmhlbHAtY29udGFpbmVyIHsgXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZFRkVGRTsgXG4gICAgYm9yZGVyOiBzb2xpZCAjZTBlMGUwIDFweDtcbn1cblxuLmhlbHAtY29udGFpbmVyIHAge1xuICAgIG1hcmdpbi1ib3R0b206IDVweDtcbn1cblxuI2hlbHAtY2Fyb3VzZWwgeyBcbiAgICBwYWRkaW5nOiA1cHggMTBweDtcbn1cblxuLmNhcm91c2VsIHtcbiAgICBtYXJnaW46IDVweCAwO1xufVxuXG4uY2Fyb3VzZWwtaXRlbSB7IFxuICAgIHdpZHRoOiBhdXRvO1xufVxuXG4uY2Fyb3VzZWwtY29udHJvbC1uZXh0LWljb24ge1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbDtjaGFyc2V0PXV0ZjgsJTNDc3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycgZmlsbD0nJTIzZjAwJyB2aWV3Qm94PScwIDAgOCA4JyUzRSUzQ3BhdGggZD0nTTIuNzUgMGwtMS41IDEuNSAyLjUgMi41LTIuNSAyLjUgMS41IDEuNSA0LTQtNC00eicvJTNFJTNDL3N2ZyUzRVwiKTtcbn0iXX0= */"

/***/ }),

/***/ "./src/components/help/help.component.ts":
/*!***********************************************!*\
  !*** ./src/components/help/help.component.ts ***!
  \***********************************************/
/*! exports provided: HelpComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HelpComponent", function() { return HelpComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let HelpComponent = class HelpComponent {
    constructor() { }
    ngOnInit() {
    }
};
HelpComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-help',
        template: __webpack_require__(/*! raw-loader!./help.component.html */ "./node_modules/raw-loader/index.js!./src/components/help/help.component.html"),
        styles: [__webpack_require__(/*! ./help.component.css */ "./src/components/help/help.component.css")]
    })
], HelpComponent);



/***/ }),

/***/ "./src/components/image-card/image-card.component.css":
/*!************************************************************!*\
  !*** ./src/components/image-card/image-card.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".carousel-item { \n    width: 100%!important;\n}\n.carousel-indicators li {\n width: 10px!important;\n background-color: #cc3234;\n }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9jb21wb25lbnRzL2ltYWdlLWNhcmQvaW1hZ2UtY2FyZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0kscUJBQXFCO0FBQ3pCO0FBQ0E7Q0FDQyxxQkFBcUI7Q0FDckIseUJBQXlCO0NBQ3pCIiwiZmlsZSI6InNyYy9jb21wb25lbnRzL2ltYWdlLWNhcmQvaW1hZ2UtY2FyZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcm91c2VsLWl0ZW0geyBcbiAgICB3aWR0aDogMTAwJSFpbXBvcnRhbnQ7XG59XG4uY2Fyb3VzZWwtaW5kaWNhdG9ycyBsaSB7XG4gd2lkdGg6IDEwcHghaW1wb3J0YW50O1xuIGJhY2tncm91bmQtY29sb3I6ICNjYzMyMzQ7XG4gfSJdfQ== */"

/***/ }),

/***/ "./src/components/image-card/image-card.component.ts":
/*!***********************************************************!*\
  !*** ./src/components/image-card/image-card.component.ts ***!
  \***********************************************************/
/*! exports provided: ImageCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageCardComponent", function() { return ImageCardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");

var ImageCardComponent_1;


let ImageCardComponent = ImageCardComponent_1 = class ImageCardComponent {
    constructor() { }
    ngOnInit() {
    }
};
ImageCardComponent = ImageCardComponent_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-image-card',
        template: __webpack_require__(/*! raw-loader!./image-card.component.html */ "./node_modules/raw-loader/index.js!./src/components/image-card/image-card.component.html"),
        styles: [__webpack_require__(/*! ./image-card.component.css */ "./src/components/image-card/image-card.component.css")]
    }),
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [],
        imports: [],
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]],
        bootstrap: [ImageCardComponent_1]
    })
], ImageCardComponent);



/***/ }),

/***/ "./src/components/nav-bar/nav-bar.component.css":
/*!******************************************************!*\
  !*** ./src/components/nav-bar/nav-bar.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".masthead { padding-top: calc(6rem + 104px);padding-bottom: 6rem;}\n.nav-link {color: #FFF!important;}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9jb21wb25lbnRzL25hdi1iYXIvbmF2LWJhci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksK0JBQStCLENBQUMsb0JBQW9CLENBQUM7QUFDakUsV0FBVyxxQkFBcUIsQ0FBQyIsImZpbGUiOiJzcmMvY29tcG9uZW50cy9uYXYtYmFyL25hdi1iYXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYXN0aGVhZCB7IHBhZGRpbmctdG9wOiBjYWxjKDZyZW0gKyAxMDRweCk7cGFkZGluZy1ib3R0b206IDZyZW07fVxuLm5hdi1saW5rIHtjb2xvcjogI0ZGRiFpbXBvcnRhbnQ7fSJdfQ== */"

/***/ }),

/***/ "./src/components/nav-bar/nav-bar.component.ts":
/*!*****************************************************!*\
  !*** ./src/components/nav-bar/nav-bar.component.ts ***!
  \*****************************************************/
/*! exports provided: NavBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavBarComponent", function() { return NavBarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let NavBarComponent = class NavBarComponent {
    constructor() { }
    ngOnInit() {
    }
};
NavBarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-nav-bar',
        template: __webpack_require__(/*! raw-loader!./nav-bar.component.html */ "./node_modules/raw-loader/index.js!./src/components/nav-bar/nav-bar.component.html"),
        styles: [__webpack_require__(/*! ./nav-bar.component.css */ "./src/components/nav-bar/nav-bar.component.css")]
    })
], NavBarComponent);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/abraham/PROJECTS/chat/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map