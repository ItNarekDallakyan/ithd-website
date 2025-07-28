import emailjs from "@emailjs/browser";
import {EMAIL_PUBLIC_KEY, EMAIL_SERVICE_ID, EMAIL_TEMPLATE_ID} from "@common/variables";
import {AppDispatchType} from "@models/types";
import {Helpers} from "@common/helpers";
import {setMessage} from "@store/reducers/MainReducer";
import {MESSAGES_TYPES} from "@models/enums";

export class MessagingController {

    private dispatch: AppDispatchType;

    constructor(dispatch: AppDispatchType) {
        this.dispatch = dispatch;
    }

    sendMessage = async (
        formElement: HTMLFormElement
    ) => {

        let {dispatch} = this;

        let response = await emailjs
            .sendForm(
                EMAIL_SERVICE_ID,
                EMAIL_TEMPLATE_ID,
                formElement,
                EMAIL_PUBLIC_KEY
            );

        let {status} = response;

        if (!Helpers.isSuccess(status)) return;

        dispatch(setMessage({
            type: MESSAGES_TYPES.INFO,
            body: "Successfully sent"
        }));
    }
}