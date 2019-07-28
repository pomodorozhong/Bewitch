import { IPresenter } from "../presenters/presenter.interface";

export interface IView {
    showSettingGear(): void;
    hideSettingGear(): void;
    showSettingPanel(): void;
    hideSettingPanel(): void;

    // Welcome scene
    showBird(): void;
    moveBirdOut(): void;
    hideBird(): void;
    showWitch(): void;
    hideWitch(): void;
    showBewitchText(): void;
    hideBewitchText(): void;

    // Character Selection scene
    moveBirdIn(): void;
    showSelectButton(): void;
    hideSelectButton(): void;
    showCharacterIcon(): void;
    hideCharacterIcon(): void;
}