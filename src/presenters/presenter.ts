import { IPresenter } from "../interfaces/presenters/presenter.interface";
import { IView } from "../interfaces/views/view.interface";
import { View } from "../views/view"

export class Presenter implements IPresenter {
    private view: IView;

    constructor() {
        this.view = new View(document, this);

        this.initialize();
    }

    initialize(): void {
        this.showWelcomeScene();
    }

    showSettingPanel(): void {
        this.view.showSettingPanel();
    }
    hideSettingPanel(): void {
        this.view.hideSettingPanel();
    }

    showWelcomeScene(): void {
        this.view.showSettingGear();
        this.view.showWitch();
        this.view.showBird();
        this.view.showBewitchText();
    }

    moveBirdOut(): void {
        this.view.moveBirdOut();
    }
    moveBirdIn(): void {
        this.view.hideBird();
        this.view.hideBewitchText();
        this.view.hideWitch();
        
        this.view.moveBirdIn();
    }
    showCharacterSelectionScene(): void {
        this.view.showCharacterIcon();
        this.view.showSelectButton();
    }
}