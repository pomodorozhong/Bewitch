import { IView } from "../interfaces/views/view.interface";
import { IPresenter } from "../interfaces/presenters/presenter.interface";
import { Presenter } from "../presenters/presenter";

export class View implements IView {
    DOM: Document;
    presenter: IPresenter;
    constructor(DOM: Document, presenter: Presenter) {
        this.presenter = presenter;
        this.DOM = DOM;
        this.DOM
            .getElementById("grabCookie")
            .addEventListener("click", toGrabCookie);

        var self = this;

        // Event Handler
        function toGrabCookie(): void {
            self.presenter.toGrabCookie();
        }
    }

    // DOM Manipulation
    toSetCookieCount(cookieCount: number): void {
        this.DOM.getElementById("cookieCount").innerHTML = cookieCount.toString();
    }
}