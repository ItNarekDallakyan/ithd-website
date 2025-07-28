import {createContext} from "react";
import {DetailPageContextModel, LocalizationsContextModel, PaginationContextModel} from "@models/interfaces/context";

export const LocalizationsContext = createContext<LocalizationsContextModel>({} as LocalizationsContextModel);

export const createDetailPageContext = <DataType>() => {
    return createContext<DetailPageContextModel<DataType>>({} as DetailPageContextModel<DataType>);
};

export const PaginationContext = createContext<PaginationContextModel>({} as PaginationContextModel);