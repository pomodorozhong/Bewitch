import { IPresenter } from "../presenters/presenter.interface";

export interface IView {
    showSettingGear(): void;
    hideSettingGear(): void;
    showSettingPanel(): void;
    hideSettingPanel(): void;

    // Welcome scene
    showBird(): void;
    hideBird(): void;
    showWitchPanel(): void;
    hideWitchPanel(): void;

    // Character Selection scene
    

}