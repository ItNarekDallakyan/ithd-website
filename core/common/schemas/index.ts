import * as yup from "yup";
import {URL_REGEXP} from "@common/variables";

export const PARTNER_FORM_SCHEMA = yup.object().shape({
    name: yup.string().required("Required to fill"),
    email: yup.string().required("Required to fill").email("Invalid email address"),
    message: yup.string().required("Required to fill")
});

export const SUBSCRIPTION_FORM_SCHEMA = yup.object().shape({
    name: yup.string().required("Required to fill"),
    email: yup.string().required("Required to fill").email("Invalid email address")
});

export const CREATE_BLOG_FORM_SCHEMA = yup.object().shape({
    title: yup.string().required("Required to fill"),
    shortDescription: yup.string().required("Required to fill"),
    categoryId: yup.string().required("Required to fill"),
    creator: yup.object().shape({
        fullName: yup.string().required("Required to fill"),
        position: yup.string().required("Required to fill"),
        social: yup.string().matches(URL_REGEXP, "Invalid URL format").required("Required to fill")
    }),
    createdAt: yup.string().required("Required to fill")
});

export const CREATE_BLOG_CATEGORY_FORM_SCHEMA = yup.object().shape({
    name: yup.string().required("Required to fill")
});

