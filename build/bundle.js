(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const presenter_1 = require("./presenters/presenter");
var presenter = new presenter_1.Presenter();

},{"./presenters/presenter":3}],2:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CookieModel {
    constructor() {
        this.cookieCount = 0;
    }
    addCookie() {
        this.cookieCount++;
    }
    getCookieCount() {
        return this.cookieCount;
    }
}
exports.CookieModel = CookieModel;
},{}],3:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const view_1 = require("../views/view");
const cookieModel_1 = require("../models/cookieModel");
class Presenter {
    constructor() {
        this.view = new view_1.View(document, this);
        this.cookieModel = new cookieModel_1.CookieModel();
        this.initialize();
    }
    // 這個函數，用來在網頁剛載入時，將畫面上顯示的東西與後台的資料同步
    // 在目前的程式功能中，具體做的事情就是將畫面顯示的餅乾數量，與 Model 內的餅乾數量進行同步
    initialize() {
        this.view.toSetCookieCount(this.cookieModel.getCookieCount());
    }
    toGrabCookie() {
        // Call Model function to update data.
        this.cookieModel.addCookie();
        // Call View function to update UI.
        this.view.toSetCookieCount(this.cookieModel.getCookieCount());
    }
}
exports.Presenter = Presenter;

},{"../models/cookieModel":2,"../views/view":4}],4:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class View {
    constructor(DOM, presenter) {
        this.presenter = presenter;
        this.DOM = DOM;
        this.DOM
            .getElementById("grabCookie")
            .addEventListener("click", toGrabCookie);
        var self = this;
        // Event Handler
        function toGrabCookie() {
            self.presenter.toGrabCookie();
        }
    }
    // DOM Manipulation
    toSetCookieCount(cookieCount) {
        this.DOM.getElementById("cookieCount").innerHTML = cookieCount.toString();
    }
}
exports.View = View;

},{}]},{},[1]);
