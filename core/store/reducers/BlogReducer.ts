import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {BlogSliceModel} from "@models/interfaces/reducers";
import {BlogPostCategoryModel} from "@models/interfaces";

const initialState: BlogSliceModel = {
    posts: null,
    categories: null
};

const BlogSlice = createSlice({
    initialState,
    name: "blog-slice",
    reducers: {
        setBlogPosts(state, action) {
            let {payload} = action;
            state.posts = payload;
        },
        setBlogPostsCategories(state, action: PayloadAction<BlogPostCategoryModel[]>) {
            let {payload} = action;
            state.categories = payload;
        }
    }
});

export const {
    setBlogPosts,
    setBlogPostsCategories
} = BlogSlice.actions;

export default BlogSlice.reducer;