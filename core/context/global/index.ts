import {createDetailPageContext} from "@core/context";
import {ServiceModel, WorkModel} from "@models/interfaces";

export const WorkPageContext = createDetailPageContext<WorkModel>();
export const ServicesPageContext = createDetailPageContext<ServiceModel>();