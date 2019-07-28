export interface IPresenter {
    showSettingPanel(): void;
    hideSettingPanel(): void;
    
    moveBirdOut(): void;
    moveBirdIn(): void;
    showCharacterSelectionScene(): void;
}