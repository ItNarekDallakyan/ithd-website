import {AppDispatchType} from "@models/types";
import {BlogPostModel} from "@models/interfaces";
import {setBlogPosts} from "@store/reducers/BlogReducer";
import {LANGUAGES} from "@models/enums";

export class BlogService {

    private dispatch: AppDispatchType;
    private posts: BlogPostModel[];

    constructor(
        dispatch: AppDispatchType,
        posts: BlogPostModel[]
    ) {
        this.dispatch = dispatch;
        this.posts = posts;
    }

    getBlogPosts = (
        currentLanguage: LANGUAGES,
        page: number,
        currentCategory: string,
        query: string,
        limit: number
    ) => {

        let {
            posts,
            dispatch
        } = this;

        let array = posts;

        let startIndex = page * limit;

        if (currentCategory) {
            array = posts
                .filter(post => {
                    let {category} = post;
                    return currentCategory === category[currentLanguage];
                })
        }

        if (query) {
            array = posts
                .filter(post => {

                    let {
                        title,
                        shortDescription
                    } = post;

                    let queryComparableValue = query.toLowerCase().trim();

                    let titleComparableValue = title[currentLanguage]
                        .toLowerCase()
                        .trim();

                    let shortDescriptionComparableValue = shortDescription[currentLanguage]
                        .toLowerCase()
                        .trim();

                    return titleComparableValue.includes(queryComparableValue)
                        || shortDescriptionComparableValue.includes(queryComparableValue);
                })
        }

        dispatch(setBlogPosts({
            response: array.slice(startIndex, startIndex + limit),
            totalElements: posts.length,
            totalPages: Math.ceil(array.length / limit)
        }));

        return array;
    }
}