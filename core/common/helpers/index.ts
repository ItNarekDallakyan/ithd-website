import {Conditions} from "@common/conditions";
import {MessageModel} from "@models/interfaces";
import {LANGUAGES, STORAGE_KEYS} from "@models/enums";
import {Dispatch} from "react";
import {LocalizationsModel} from "@models/interfaces/localizations";

export class Helpers {
    static typeOf = <TValue>(value: TValue) => typeof value;

    static getItemFromStorage = (key: string) => {
        if (Conditions.isWindowLoaded()) {
            return localStorage.getItem(key);
        }
    }

    static setItemToStorage = (key: string, value: string) => {
        if (Conditions.isWindowLoaded()) {
            return localStorage.setItem(key, value);
        }
    }

    static clearStorage = () => {
        if (Conditions.isWindowLoaded()) {
            return localStorage.clear();
        }
    }

    static isSuccess = (status: number) => status >= 200 && status <= 300;

    static replacePageURL = (url: string) => window.location.replace(url);

    static removeItemFromStorage = (key: string) => {
        if (Conditions.isWindowLoaded()) {
            return localStorage.removeItem(key);
        }
    }

    static generateUUID = () => {
        let dt = new Date().getTime();
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            let r = (dt + Math.random() * 16) % 16 | 0;
            dt = Math.floor(dt / 16);
            return (c == 'x' ? r : (r & 0x3 | 0x8)).toString(16);
        });
    }

    static windowMatchMediaHelper = (query: string) => {
        if (Conditions.isWindowLoaded()) return window.matchMedia(query);
    };

    static arrayToMultiArray = (array: any, size: number) => {

        let modifiedArray = [];

        if (!array) return;

        for (let i = 0; i < Math.ceil(array.length / size); i++) {
            modifiedArray[i] = array.slice((i * size), (i * size) + size);
        }

        return modifiedArray;
    }

    static windowLocationChange = (path: string) => {
        if (Conditions.isWindowLoaded()) return window.location.href = path;
    }

    static scrollToTop = () => {
        if (!Conditions.isWindowLoaded()) return;

        document.body.scrollTo({
            top: 0,
            behavior: "auto"
        });
    }

    static isImgUrl = (url: string) => {
        const img = new Image();
        img.src = url;
        return new Promise((resolve) => {
            img.onload = () => resolve(true);
            img.onerror = () => resolve(false);
        });
    }

    static getFullYear = (date: Date = new Date()): number => date.getFullYear();

    static messageInstanceInit = (payload: MessageModel) => {
        let id = Helpers.generateUUID();
        return {
            ...payload,
            id
        };
    }

    static urlOpen = (url: string, target: string) => {
        if (Conditions.isWindowLoaded()) return window.open(url, target);
    }

    static getDocumentScrollBarWidth = () => {
        if (Conditions.isWindowLoaded()) {
            return document.body.offsetWidth - document.body.clientWidth;
        }
    }

    static getSingleDetailData = (
        array: any[],
        currentPath: string
    ) => {

        let value = null;

        array.forEach(data => {
            let {path} = data;

            if (path === currentPath) {
                value = data;
            }
        });

        return value;
    }

    static path = (value: string) => "/".concat(value);

    static blogPostContentInstanceInitializer = () => {
        return {
            contentNumber: null,
            id: this.generateUUID(),
            title: "",
            description: "",
            media: null
        }
    }

    static getMaxOfArray(numArray: any[]) {
        return Math.max.apply(null, numArray);
    }

    static updateArray = (array: any, key: string, value: any, id: any) => {
        return array.map((data: any) => {
            if (data.id === id) {
                return {
                    ...data,
                    [key]: value
                }
            }

            return data;
        })
    }

    static filesFromDropHelper = async (
        event: any
    ) => {

        let file: File | null = null;

        if (event.dataTransfer.items) {
            [...event.dataTransfer.items].forEach((item) => {
                if (item.kind === "file") {
                    file = item.getAsFile();
                }
            });
        } else {
            [...event.dataTransfer.files].forEach((value) => {
                file = value;
            });
        }

        return file;
    }

    static getMultipleRandom(arr: any, num: number) {
        const shuffled = [...arr].sort(() => 0.5 - Math.random());
        return shuffled.slice(0, num);
    }

    static socialRedirect = (event: any) => {
        let {target} = event;
        let nestedElement = target as any;
        let parentElement = nestedElement.closest("[data-value]");

        if (!parentElement) return;

        let {value} = parentElement.dataset;

        Helpers.urlOpen(value, "_blank");
    }

    static isLinkElement = (tagName: string) => tagName === "A";

    static blogStorageDataCleanerHelper = () => {
        Helpers.removeItemFromStorage(STORAGE_KEYS.BLOG_PAGE);
        Helpers.removeItemFromStorage(STORAGE_KEYS.BLOG_QUERY);
        Helpers.removeItemFromStorage(STORAGE_KEYS.SCROLL_POSITION);
        Helpers.removeItemFromStorage(STORAGE_KEYS.CATEGORY);
    }

    static isValidURIComponent = (data: string) => {
        try {
            decodeURIComponent(data);
            return true;
        } catch (e) {
            return false;
        }
    }

    static extractHTMLContent = (htmlContent: string, isHTML: boolean = false) => {
        if (!Conditions.isWindowLoaded()) return;
        let isValidURIComponent = this.isValidURIComponent(htmlContent);
        let span = document.createElement("span");
        span.innerHTML = isValidURIComponent ? decodeURIComponent(htmlContent) : htmlContent;
        return isHTML ? span.innerHTML : span.textContent || "";
    }

    static fileExtension = (image: string) => image.slice(image.lastIndexOf(".") + 1, image.length);

    static capitalizeEachWord = (sentence: string) => {
        // Split the sentence into an array of words
        var words = sentence.split(' ');

        // Capitalize the first letter of each word
        var capitalizedWords = words.map(function(word) {
            return word.charAt(0).toUpperCase() + word.slice(1);
        });

        // Join the words back into a sentence
        var capitalizedSentence = capitalizedWords.join(' ');

        return capitalizedSentence;
    }
}
