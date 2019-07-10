import { IView } from "../interfaces/views/view.interface";
import { IPresenter } from "../interfaces/presenters/presenter.interface";
import { Presenter } from "../presenters/presenter";

export class View implements IView {
    constructor(DOM: Document, presenter: IPresenter) {
        this.DOM = DOM;
        this.presenter = presenter;

        this.body = this.DOM.getElementsByTagName("body")[0];
    }
    DOM: Document;
    presenter: IPresenter;
    body: HTMLBodyElement;

    private settingGearId: string = "settingGear";
    private settingGearPicPath: string = "./resource/btn_setting.png";
    private settingPanelId: string = "settingPanel";
    private settingPanelPicPath: string = "./resource/sys_dialog.png";
    private witchPanelId: string = "witchPanel";

    showSettingGear(): void {
        // Check if already showed
        let id: string = this.settingGearId;
        let element: HTMLElement = this.DOM.getElementById(id);
        if (element != null) {
            return;
        }

        // Add <img>
        let htmlString: string =
            `<img id='${id}' src='${this.settingGearPicPath}'>`;
        this.body.insertAdjacentHTML("beforeend", htmlString);

        // Setup event handler
        let self: this = this;
        element = this.DOM.getElementById(id);
        element.addEventListener(
            'click',
            () => { self.presenter.showSettingPanel() },
            false);
    }

    hideSettingGear(): void {
        throw new Error("Method not implemented.");
    }

    showSettingPanel(): void {
        // Check if already showed
        let id: string = this.settingPanelId;
        let element: HTMLElement = this.DOM.getElementById(id);
        if (element != null) {
            return;
        }

        // Add <img>
        let htmlString: string =
            `<img id='${id}' src='${this.settingPanelPicPath}'>`;
        this.body.insertAdjacentHTML("beforeend", htmlString);

        // Setup event handler
        let self: this = this;
        element = this.DOM.getElementById(id);
        element.addEventListener(
            'click',
            () => { self.presenter.hideSettingPanel() },
            false);
    }

    hideSettingPanel(): void {
        let node = this.DOM.getElementById(this.settingPanelId);
        if (node.parentNode) {
            node.parentNode.removeChild(node);
        }
    }

    showBird(): void {
        throw new Error("Method not implemented.");
    }

    hideBird(): void {
        throw new Error("Method not implemented.");
    }

    showWitchPanel(): void {

        // Hook event handler
        var self = this;

        this.DOM
            .getElementById(this.witchPanelId)
            .addEventListener("click", () => {
                self.presenter.showCharacterSelectionScene();
            });
    }

    hideWitchPanel(): void {
        throw new Error("Method not implemented.");
    }
}