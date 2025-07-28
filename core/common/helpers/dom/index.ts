import {Conditions} from "@common/conditions";

export class DOMHelpers {

    element: HTMLElement;

    constructor($element: HTMLElement) {
        this.element = $element;
    }

    static getElementById = (id: string) => {
        if (Conditions.isWindowLoaded()) {
            return document.getElementById(id) || null;
        }
    }

    addClassName = (className: string) => {
        this.element.classList.add(className);
        return this;
    }

    removeClassName = (className: string) => {
        this.element.classList.remove(className);
        return this;
    }
}