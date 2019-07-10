(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const presenter_1 = require("./presenters/presenter");
var presenter = new presenter_1.Presenter();

},{"./presenters/presenter":2}],2:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const view_1 = require("../views/view");
class Presenter {
    constructor() {
        this.view = new view_1.View(document, this);
        this.initialize();
    }
    initialize() {
        this.showWelcomeScene();
    }
    showWelcomeScene() {
        this.view.showSettingGear();
        // this.view.showWitchPanel();
        // this.view.showBird();
    }
    showSettingPanel() {
        this.view.showSettingPanel();
    }
    hideSettingPanel() {
        this.view.hideSettingPanel();
    }
    showCharacterSelectionScene() {
        throw new Error("Method not implemented.");
    }
}
exports.Presenter = Presenter;

},{"../views/view":3}],3:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class View {
    constructor(DOM, presenter) {
        this.settingGearId = "settingGear";
        this.settingGearPicPath = "./resource/btn_setting.png";
        this.settingPanelId = "settingPanel";
        this.settingPanelPicPath = "./resource/sys_dialog.png";
        this.witchPanelId = "witchPanel";
        this.DOM = DOM;
        this.presenter = presenter;
        this.body = this.DOM.getElementsByTagName("body")[0];
    }
    showSettingGear() {
        // Check if already showed
        let id = this.settingGearId;
        let element = this.DOM.getElementById(id);
        if (element != null) {
            return;
        }
        // Add <img>
        let htmlString = `<img id='${id}' src='${this.settingGearPicPath}'>`;
        this.body.insertAdjacentHTML("beforeend", htmlString);
        // Setup event handler
        let self = this;
        element = this.DOM.getElementById(id);
        element.addEventListener('click', () => { self.presenter.showSettingPanel(); }, false);
    }
    hideSettingGear() {
        throw new Error("Method not implemented.");
    }
    showSettingPanel() {
        // Check if already showed
        let id = this.settingPanelId;
        let element = this.DOM.getElementById(id);
        if (element != null) {
            return;
        }
        // Add <img>
        let htmlString = `<img id='${id}' src='${this.settingPanelPicPath}'>`;
        this.body.insertAdjacentHTML("beforeend", htmlString);
        // Setup event handler
        let self = this;
        element = this.DOM.getElementById(id);
        element.addEventListener('click', () => { self.presenter.hideSettingPanel(); }, false);
    }
    hideSettingPanel() {
        let node = this.DOM.getElementById(this.settingPanelId);
        if (node.parentNode) {
            node.parentNode.removeChild(node);
        }
    }
    showBird() {
        throw new Error("Method not implemented.");
    }
    hideBird() {
        throw new Error("Method not implemented.");
    }
    showWitchPanel() {
        // Hook event handler
        var self = this;
        this.DOM
            .getElementById(this.witchPanelId)
            .addEventListener("click", () => {
            self.presenter.showCharacterSelectionScene();
        });
    }
    hideWitchPanel() {
        throw new Error("Method not implemented.");
    }
}
exports.View = View;

},{}]},{},[1]);
