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
    private settingPanelId: string = "settingPanel";
    private witchId: string = "witch";
    private birdInWelcomeSceneId: string = "bird1";
    private birdInCharacterSelectionSceneId: string = "bird2";
    private bewitchTextId: string = "bewitchText";
    private selectButtonId: string = "selectButton";
    private characterIconId1: string = "characterIcon1";
    private characterIconId2: string = "characterIcon2";
    private characterIconId3: string = "characterIcon3";
    private characterIconId4: string = "characterIcon4";

    private settingGearImgPath: string = "./resource/btn_setting.png";
    private settingPanelImgPath: string = "./resource/sys_dialog.png";
    private witchImgPath: string = "./resource/witch.png";
    private birdImgPath: string = "./resource/bird.png";
    private bewitchTextImgPath: string = "./resource/bewitch.png";
    private selectButtonImgPath: string = "./resource/sys_dialog_button.png";

    removeNode(id: string): boolean {
        let isNodeExist: boolean = false;
        let node = this.DOM.getElementById(id);
        if (node != null && node.parentNode) {
            isNodeExist = true;
            node.parentNode.removeChild(node);
        }

        return isNodeExist;
    }

    showSettingGear(): void {
        // Check if already showed
        let id: string = this.settingGearId;
        let element: HTMLElement = this.DOM.getElementById(id);
        if (element != null) {
            return;
        }

        // Add <img>
        let htmlString: string =
            `<img id='${id}' src='${this.settingGearImgPath}'>`;
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
            `<img id='${id}' src='${this.settingPanelImgPath}'>`;
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
        this.removeNode(this.settingPanelId);
    }

    showBird(): void {
        // Check if already showed
        let id: string = this.birdInWelcomeSceneId;
        let element: HTMLElement = this.DOM.getElementById(id);
        if (element != null) {
            return;
        }

        // Add <img>
        let htmlString: string =
            `<img id='${id}' src='${this.birdImgPath}'>`;
        this.body.insertAdjacentHTML("beforeend", htmlString);

        // Hook event handler
        var self = this;

        this.DOM
            .getElementById(id)
            .addEventListener("click", () => {
                self.presenter.moveBirdOut();
            });
    }
    moveBirdOut(): void {
        var self = this;
        let id: string = this.birdInWelcomeSceneId;
        let element: HTMLElement = document.getElementById(id);
        element.addEventListener("animationend", () => {
            self.presenter.moveBirdIn()
        });
        element.style.animationPlayState = "running";
    }
    moveBirdIn(): void {
        // Check if already showed
        let id: string = this.birdInCharacterSelectionSceneId;
        let element: HTMLElement = this.DOM.getElementById(id);
        if (element != null) {
            return;
        }

        // Add <img>
        let htmlString: string =
            `<img id='${id}' src='${this.birdImgPath}'>`;
        this.body.insertAdjacentHTML("beforeend", htmlString);


        let self = this;
        element = document.getElementById(id);
        element.addEventListener("animationend", () => {
            self.presenter.showCharacterSelectionScene()
        });
    }
    hideBird(): void {
        this.removeNode(this.birdInWelcomeSceneId);
        this.removeNode(this.birdInCharacterSelectionSceneId);
    }

    showWitch(): void {
        // Check if already showed
        let id: string = this.witchId;
        let element: HTMLElement = this.DOM.getElementById(id);
        if (element != null) {
            return;
        }

        // Add <img>
        let htmlString: string =
            `<img id='${id}' src='${this.witchImgPath}'>`;
        this.body.insertAdjacentHTML("beforeend", htmlString);

        // Hook event handler
        var self = this;

        this.DOM
            .getElementById(id)
            .addEventListener("click", () => {
                self.presenter.moveBirdOut();
            });
    }
    hideWitch(): void {
        this.removeNode(this.witchId);
    }

    showBewitchText(): void {
        // Check if already showed
        let id: string = this.bewitchTextId;
        let element: HTMLElement = this.DOM.getElementById(id);
        if (element != null) {
            return;
        }

        // Add <img>
        let htmlString: string =
            `<img id='${id}' src='${this.bewitchTextImgPath}'>`;
        this.body.insertAdjacentHTML("beforeend", htmlString);

        // Hook event handler
        var self = this;

        this.DOM
            .getElementById(id)
            .addEventListener("click", () => {
                self.presenter.moveBirdOut();
            });
    }
    hideBewitchText(): void {
        this.removeNode(this.bewitchTextId);
    }
    showSelectButton(): void {
        // Check if already showed
        let id: string = this.selectButtonId;
        let element: HTMLElement = this.DOM.getElementById(id);
        if (element != null) {
            return;
        }

        // Add <img>
        let htmlString: string =
            `<img id='${id}' src='${this.selectButtonImgPath}'>`;
        this.body.insertAdjacentHTML("beforeend", htmlString);
    }
    hideSelectButton(): void {
        this.removeNode(this.selectButtonId);
    }

    showCharacterIcon(): void {
        var self = this;
        function addCharacterIcon(id: string) {
            // Check if already showed
            let element: HTMLElement = self.DOM.getElementById(id);
            if (element != null) {
                return;
            }

            // Add <div>
            let htmlString: string = `<div id='${id}'></div>`;
            self.body.insertAdjacentHTML("beforeend", htmlString);
        }

        addCharacterIcon(this.characterIconId1);
        addCharacterIcon(this.characterIconId2);
        addCharacterIcon(this.characterIconId3);
        addCharacterIcon(this.characterIconId4);
    }
    hideCharacterIcon(): void {
        this.removeNode(this.characterIconId1);
        this.removeNode(this.characterIconId2);
        this.removeNode(this.characterIconId3);
        this.removeNode(this.characterIconId4);
    }
}