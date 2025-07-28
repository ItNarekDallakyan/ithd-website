import {Dispatch} from "react";
import {LOCALIZATIONS} from "@common/database/localizations";

export interface LocalizationsContextModel {
    localizations: typeof LOCALIZATIONS
}

export interface DetailPageContextModel<DataType> {
    data: DataType,
    [key: string]: any
}

export interface PaginationContextModel {
    page: number,
    setPage: Dispatch<number>,
    pagesCount: number
}
