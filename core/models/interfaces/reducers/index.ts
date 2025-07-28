import {BlogPostCategoryModel, MessageModel, ServiceModel, WorkModel} from "@models/interfaces";
import {BlogPostsResponseModel} from "@models/interfaces/services";
import {LANGUAGES} from "@models/enums";

export interface MainSliceModel {
    isLoading: boolean,
    messages: MessageModel[],
    currentLanguage: LANGUAGES,
    activeVideoPlayer: HTMLIFrameElement | null
}

export interface WorksSliceModel {
    works: WorkModel[]
}

export interface ServicesSliceModel {
    services: ServiceModel[]
}

export interface BlogSliceModel {
    posts: BlogPostsResponseModel | null,
    categories: BlogPostCategoryModel[] | null
}