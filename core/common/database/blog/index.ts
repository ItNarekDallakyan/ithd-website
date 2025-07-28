import {BlogPostCategoryModel, BlogPostModel} from "@models/interfaces";
import {LANGUAGES} from "@models/enums";

export const BLOG_POSTS: BlogPostModel[] = [
    {
        id: 1,
        minutesToRead: 2,
        path: "test-11",
        title: {
            [LANGUAGES.EN]: "This is a EN test title"
        },
        shortDescription: {
            [LANGUAGES.EN]: "%3Cp%3Ehello%20%3Ca%20href%3D%22http%3A%2F%2Flocalhost%3A3000%2F%22%20rel%3D%22noopener%20noreferrer%22%20target%3D%22_blank%22%3Eworld%3C%2Fa%3E%3C%2Fp%3E"
        },
        thumbnail: "/images/team-image.jpg",
        category: {
            [LANGUAGES.EN]: `all`
        },
        contents: [
            {
                title: {
                    [LANGUAGES.EN]: "Test content"
                },
                contentNumber: 1,
                items: [
                    {
                        description: {
                            [LANGUAGES.EN]: "%3Cp%3Ehello%20%3Ca%20href%3D%22http%3A%2F%2Flocalhost%3A3000%2F%22%20rel%3D%22noopener%20noreferrer%22%20target%3D%22_blank%22%3Eworld%3C%2Fa%3E%3C%2Fp%3E"
                        },
                        video: ""
                    },
                    {
                        description: {
                            [LANGUAGES.EN]: "%3Cp%3Ehello%20%3Ca%20href%3D%22http%3A%2F%2Flocalhost%3A3000%2F%22%20rel%3D%22noopener%20noreferrer%22%20target%3D%22_blank%22%3Eworld%3C%2Fa%3E%3C%2Fp%3E"
                        },
                        image: "/images/team-image.jpg"
                    }
                ]
            }
        ],
        creator: {
            [LANGUAGES.EN]: "Some text"
        },
        createdAt: "2023-10-15",
        updatedAt: "2023-10-15"
    },
    {
        id: 2,
        minutesToRead: 2,
        path: "test",
        title: {
            [LANGUAGES.EN]: "This is a EN test title"
        },
        shortDescription: {
            [LANGUAGES.EN]: "This is a test EN description"
        },
        thumbnail: "/images/team-image.jpg",
        category: {
            [LANGUAGES.EN]: `all`
        },
        contents: [
            {
                title: {
                    [LANGUAGES.EN]: "Test content"
                },
                contentNumber: 1,
                items: [
                    {
                        description: {
                            [LANGUAGES.EN]: "Many developers continue to use the useState and useEffect hooks to update states, but I have not been fond of this approach. The issue is that it causes the component to mount, remount, and unmount simultaneously, leading to unexpected behavior. As a result, when logging something into the console, you may see the result repeated three times.\n" +
                            "\n"
                        },
                        video: ""
                    },
                    {
                        description: {
                            [LANGUAGES.EN]: "Many developers continue to use the useState and useEffect hooks to update states, but I have not been fond of this approach. The issue is that it causes the component to mount, remount, and unmount simultaneously, leading to unexpected behavior. As a result, when logging something into the console, you may see the result repeated three times.\n" +
                            "\n"
                        },
                        image: "/images/team-image.jpg"
                    }
                ]
            }
        ],
        creator: {
            [LANGUAGES.EN]: "Some text"
        },
        createdAt: "2023-10-15",
        updatedAt: "2023-10-15"
    },
    {
        id: 3,
        minutesToRead: 2,
        path: "test",
        title: {
            [LANGUAGES.EN]: "This is a EN test title"
        },
        shortDescription: {
            [LANGUAGES.EN]: "This is a test EN description"
        },
        thumbnail: "/images/team-image.jpg",
        category: {
            [LANGUAGES.EN]: `all`
        },
        contents: [
            {
                title: {
                    [LANGUAGES.EN]: "Test content"
                },
                contentNumber: 1,
                items: [
                    {
                        description: {
                            [LANGUAGES.EN]: "Many developers continue to use the useState and useEffect hooks to update states, but I have not been fond of this approach. The issue is that it causes the component to mount, remount, and unmount simultaneously, leading to unexpected behavior. As a result, when logging something into the console, you may see the result repeated three times.\n" +
                            "\n"
                        },
                        video: ""
                    },
                    {
                        description: {
                            [LANGUAGES.EN]: "Many developers continue to use the useState and useEffect hooks to update states, but I have not been fond of this approach. The issue is that it causes the component to mount, remount, and unmount simultaneously, leading to unexpected behavior. As a result, when logging something into the console, you may see the result repeated three times.\n" +
                            "\n"
                        },
                        image: "/images/team-image.jpg"
                    }
                ]
            }
        ],
        creator: {
            [LANGUAGES.EN]: "Some text"
        },
        createdAt: "2023-10-15",
        updatedAt: "2023-10-15"
    }
];

export const BLOG_CATEGORIES: BlogPostCategoryModel[] = [
    {
        name: {
            [LANGUAGES.EN]: "All"
        }
    },
    {
        name: {
            [LANGUAGES.EN]: "Technologies"
        }
    }
];