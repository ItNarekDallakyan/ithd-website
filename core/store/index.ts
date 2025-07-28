import {combineReducers} from "redux";
import {configureStore} from "@reduxjs/toolkit";
import {createWrapper} from "next-redux-wrapper";
import {AppStoreType} from "@core/models/types";
import MainReducer from "@store/reducers/MainReducer";
import WorksReducer from "@store/reducers/WorksReducer";
import ServicesReducer from "@store/reducers/ServicesReducer";
import BlogReducer from "@store/reducers/BlogReducer";

export const rootReducer = combineReducers({
    main: MainReducer,
    works: WorksReducer,
    services: ServicesReducer,
    blog: BlogReducer
});

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer
    })
}

export const wrapper = createWrapper<AppStoreType>(setupStore);