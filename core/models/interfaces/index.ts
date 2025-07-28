import {LANGUAGES, ROUTES} from "@models/enums";
import {Dispatch, SetStateAction} from "react";

export interface MessageModel {
    id?: string,
    type: "error" | "info" | "warning" | "success",
    body: string
}

export interface OptionModel {
    label: string,
    value: string
}

export interface VectorIconModel {
    fill?: string,
    width?: string,
    height?: string
}

export interface CardPropsModel {
    title: string,
    description: string,
    image?: string | null,
    movie?: string | null,
    onClick: () => void,
    className?: string
}

export interface MenuRouteModel {
    id: number,
    label: string,
    path: string
}

export interface CompletedWorkModel {
    id: 1,
    path: ROUTES.WORK,

    [key: string]: any
}

export interface ButtonColorPropsModel {
    color?: "orange" | "dark" | "grey" | "white"
}

export interface WorkModel {
    path: string,
    services: string[],
    imagesGrid: boolean,
    movie: string | null,
    images: string[],
    title: {
        [LANGUAGES.EN]: string
    },
    shortDescription: {
        [LANGUAGES.EN]: string
    },
    description: {
        [LANGUAGES.EN]: string
    }
}

export interface ServiceTechnologyModel {
    id?: string,
    title: string,
    content: string,
    icon: string
}

export interface ServiceModel {
    movie: string | null,
    path: string,
    technologies: ServiceTechnologyModel[],
    media: string[],
    whatWeOffer: {
        [LANGUAGES.EN]: string
    },
    approach: {
        [LANGUAGES.EN]: string
    },
    expertise: {
        [LANGUAGES.EN]: string
    },
    process: {
        [LANGUAGES.EN]: string
    },
    title: {
        [LANGUAGES.EN]: string
    },
    description: {
        [LANGUAGES.EN]: string
    },
    shortDescription: {
        [LANGUAGES.EN]: string
    },
    faqList: FaqItemModel[]
}

export interface BlogPostModel {
    id: number,
    path: string,
    minutesToRead: number,
    title: {
        [LANGUAGES.EN]: string
    },
    shortDescription: {
        [LANGUAGES.EN]: string
    },
    thumbnail: string | null,
    category: {
        [LANGUAGES.EN]: string,
        url?: string
    },
    contents: BlogPostContentModel[],
    creator: {
        [LANGUAGES.EN]: string
    },
    createdAt: string,
    updatedAt: string
}

export interface BlogPostContentItemModel {
    description: {
        [LANGUAGES.EN]: string
    },
    image?: string,
    video?: string
}

export interface BlogPostContentModel {
    id?: string,
    contentNumber: number | null,
    title: {
        [LANGUAGES.EN]: string
    },
    items: BlogPostContentItemModel[]
}

export interface BlogPostCategoryModel {
    name: {
        [LANGUAGES.EN]: string
    }
}

export interface FileModel {
    fileName: string
}

export interface FilesModel {
    files: FileModel[],
    setFiles: Dispatch<SetStateAction<FileModel[]>>
}

export interface FaqItemModel {
    id?: string,
    title: {
        [LANGUAGES.EN]: string
    },
    content: {
        [LANGUAGES.EN]: string
    }
}

export interface TermModel {
    content: string
}

export interface PrivacyItemModel {
    content: string,
    rules: string[]
}

export interface TeamContentModel {
    content: string,
    media: string
}

export interface AuthFormBodyModel {
    username: string,
    password: string
}

export interface MediaFileBodyModel {
    key: string,
    filename: string,
    newFileName: string | null,
    contentNumber: number | null
}

export interface DropdownListItemModel {
    path: string,
    title: string,
    content: string
}

export interface BreadcrumbLinkModel {
    text: string,
    href: string
}

export interface TestimonySocialModel {
    icon: string,
    url: string
}

export interface TestimonyModel {
    id: string,
    reviewer: {
        name: {
            [LANGUAGES.EN]: string
        },
        image: string
    },
    content: {
        [LANGUAGES.EN]: string
    }
}