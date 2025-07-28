import {BlogPostContentModel, BlogPostModel} from "@models/interfaces";

export interface FilesUploadRequestResponseModel {
    fileName: string
}

export interface ContactRequestBodyModel {
    name: string,
    email: string,
    message: string
}

export interface BlogPostsResponseModel {
    response: BlogPostModel[],
    totalElements: number,
    totalPages: number
}

export interface SubscriptionBodyModel {
    email: string,
    name: string
}

export interface BlogPostBodyModel {
    title: string | null,
    path: string | null,
    thumbnail: string | null,
    shortDescription: string | null,
    categoryId: string | null,
    contents: BlogPostContentModel[],
    creator: {
        picture: string | null,
        fullName: string | null,
        position: string | null
    },
    createdAt: string | null,
    updatedAt: string | null
}

export interface BlogCategoryUpdateModel {
    name: string
}