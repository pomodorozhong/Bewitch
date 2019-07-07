import { IPresenter } from "../interfaces/presenters/presenter.interface";
import { IView } from "../interfaces/views/view.interface";
import { View } from "../views/view"

export class Presenter implements IPresenter{
    private view: IView;

    constructor() {
        this.view = new View(document, this);

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

    showSettingPanel(): void {
        this.view.showSettingPanel();
    }
    hideSettingPanel(): void {
        this.view.hideSettingPanel();
    }
    showCharacterSelectionScene(): void {
        throw new Error("Method not implemented.");
    }
}