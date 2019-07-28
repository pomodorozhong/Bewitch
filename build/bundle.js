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
    showSettingPanel() {
        this.view.showSettingPanel();
    }
    hideSettingPanel() {
        this.view.hideSettingPanel();
    }
    showWelcomeScene() {
        this.view.showSettingGear();
        this.view.showWitch();
        this.view.showBird();
        this.view.showBewitchText();
    }
    moveBirdOut() {
        this.view.moveBirdOut();
    }
    moveBirdIn() {
        this.view.hideBird();
        this.view.hideBewitchText();
        this.view.hideWitch();
        this.view.moveBirdIn();
    }
    showCharacterSelectionScene() {
        this.view.showCharacterIcon();
        this.view.showSelectButton();
    }
}
exports.Presenter = Presenter;

},{"../views/view":3}],3:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class View {
    constructor(DOM, presenter) {
        this.settingGearId = "settingGear";
        this.settingPanelId = "settingPanel";
        this.witchId = "witch";
        this.birdInWelcomeSceneId = "bird1";
        this.birdInCharacterSelectionSceneId = "bird2";
        this.bewitchTextId = "bewitchText";
        this.selectButtonId = "selectButton";
        this.characterIconId1 = "characterIcon1";
        this.characterIconId2 = "characterIcon2";
        this.characterIconId3 = "characterIcon3";
        this.characterIconId4 = "characterIcon4";
        this.settingGearImgPath = "./resource/btn_setting.png";
        this.settingPanelImgPath = "./resource/sys_dialog.png";
        this.witchImgPath = "./resource/witch.png";
        this.birdImgPath = "./resource/bird.png";
        this.bewitchTextImgPath = "./resource/bewitch.png";
        this.selectButtonImgPath = "./resource/sys_dialog_button.png";
        this.DOM = DOM;
        this.presenter = presenter;
        this.body = this.DOM.getElementsByTagName("body")[0];
    }
    removeNode(id) {
        let isNodeExist = false;
        let node = this.DOM.getElementById(id);
        if (node != null && node.parentNode) {
            isNodeExist = true;
            node.parentNode.removeChild(node);
        }
        return isNodeExist;
    }
    showSettingGear() {
        // Check if already showed
        let id = this.settingGearId;
        let element = this.DOM.getElementById(id);
        if (element != null) {
            return;
        }
        // Add <img>
        let htmlString = `<img id='${id}' src='${this.settingGearImgPath}'>`;
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
        let htmlString = `<img id='${id}' src='${this.settingPanelImgPath}'>`;
        this.body.insertAdjacentHTML("beforeend", htmlString);
        // Setup event handler
        let self = this;
        element = this.DOM.getElementById(id);
        element.addEventListener('click', () => { self.presenter.hideSettingPanel(); }, false);
    }
    hideSettingPanel() {
        this.removeNode(this.settingPanelId);
    }
    showBird() {
        // Check if already showed
        let id = this.birdInWelcomeSceneId;
        let element = this.DOM.getElementById(id);
        if (element != null) {
            return;
        }
        // Add <img>
        let htmlString = `<img id='${id}' src='${this.birdImgPath}'>`;
        this.body.insertAdjacentHTML("beforeend", htmlString);
        // Hook event handler
        var self = this;
        this.DOM
            .getElementById(id)
            .addEventListener("click", () => {
            self.presenter.moveBirdOut();
        });
    }
    moveBirdOut() {
        var self = this;
        let id = this.birdInWelcomeSceneId;
        let element = document.getElementById(id);
        element.addEventListener("animationend", () => {
            self.presenter.moveBirdIn();
        });
        element.style.animationPlayState = "running";
    }
    moveBirdIn() {
        // Check if already showed
        let id = this.birdInCharacterSelectionSceneId;
        let element = this.DOM.getElementById(id);
        if (element != null) {
            return;
        }
        // Add <img>
        let htmlString = `<img id='${id}' src='${this.birdImgPath}'>`;
        this.body.insertAdjacentHTML("beforeend", htmlString);
        let self = this;
        element = document.getElementById(id);
        element.addEventListener("animationend", () => {
            self.presenter.showCharacterSelectionScene();
        });
    }
    hideBird() {
        this.removeNode(this.birdInWelcomeSceneId);
        this.removeNode(this.birdInCharacterSelectionSceneId);
    }
    showWitch() {
        // Check if already showed
        let id = this.witchId;
        let element = this.DOM.getElementById(id);
        if (element != null) {
            return;
        }
        // Add <img>
        let htmlString = `<img id='${id}' src='${this.witchImgPath}'>`;
        this.body.insertAdjacentHTML("beforeend", htmlString);
        // Hook event handler
        var self = this;
        this.DOM
            .getElementById(id)
            .addEventListener("click", () => {
            self.presenter.moveBirdOut();
        });
    }
    hideWitch() {
        this.removeNode(this.witchId);
    }
    showBewitchText() {
        // Check if already showed
        let id = this.bewitchTextId;
        let element = this.DOM.getElementById(id);
        if (element != null) {
            return;
        }
        // Add <img>
        let htmlString = `<img id='${id}' src='${this.bewitchTextImgPath}'>`;
        this.body.insertAdjacentHTML("beforeend", htmlString);
        // Hook event handler
        var self = this;
        this.DOM
            .getElementById(id)
            .addEventListener("click", () => {
            self.presenter.moveBirdOut();
        });
    }
    hideBewitchText() {
        this.removeNode(this.bewitchTextId);
    }
    showSelectButton() {
        // Check if already showed
        let id = this.selectButtonId;
        let element = this.DOM.getElementById(id);
        if (element != null) {
            return;
        }
        // Add <img>
        let htmlString = `<img id='${id}' src='${this.selectButtonImgPath}'>`;
        this.body.insertAdjacentHTML("beforeend", htmlString);
    }
    hideSelectButton() {
        this.removeNode(this.selectButtonId);
    }
    showCharacterIcon() {
        var self = this;
        function addCharacterIcon(id) {
            // Check if already showed
            let element = self.DOM.getElementById(id);
            if (element != null) {
                return;
            }
            // Add <div>
            let htmlString = `<div id='${id}'></div>`;
            self.body.insertAdjacentHTML("beforeend", htmlString);
        }
        addCharacterIcon(this.characterIconId1);
        addCharacterIcon(this.characterIconId2);
        addCharacterIcon(this.characterIconId3);
        addCharacterIcon(this.characterIconId4);
    }
    hideCharacterIcon() {
        this.removeNode(this.characterIconId1);
        this.removeNode(this.characterIconId2);
        this.removeNode(this.characterIconId3);
        this.removeNode(this.characterIconId4);
    }
}
exports.View = View;

},{}]},{},[1]);
