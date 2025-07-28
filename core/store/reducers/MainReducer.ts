import {MainSliceModel} from "@models/interfaces/reducers";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {MessageModel} from "@models/interfaces";
import {Helpers} from "@common/helpers";
import {LANGUAGES} from "@models/enums";

// let currentLanguage = Conditions.isWindowLoaded() ? Helpers.getItemFromStorage(STORAGE_KEYS.LANGUAGE) || LANGUAGES.EN : LANGUAGES.EN;

const initialState: MainSliceModel = {
    isLoading: false,
    currentLanguage: LANGUAGES.EN,
    messages: [],
    activeVideoPlayer: null
};

const MainSlice = createSlice({
    name: "main-slice",
    initialState,
    reducers: {
        setActiveVideoPlayer(state, action) {
            let {payload} = action;
            state.activeVideoPlayer = payload;
        },
        setCurrentLanguage(state, action: PayloadAction<LANGUAGES>) {
            let {payload} = action;
            state.currentLanguage = payload;
        },
        setLoading(state, action: PayloadAction<boolean>) {
            let {payload} = action;
            state.isLoading = payload;
        },
        setMessage(state, action: PayloadAction<MessageModel>) {
            let {payload} = action;
            let message = Helpers.messageInstanceInit(payload);
            state.messages = [...state.messages, message];
        },
        deleteMessage(state, action) {
            let {payload} = action;
            state.messages = state.messages.filter(message => message.id != payload);
        }
    }
});

export const {
    setCurrentLanguage,
    setLoading,
    setMessage,
    deleteMessage,
    setActiveVideoPlayer
} = MainSlice.actions;

export default MainSlice.reducer;