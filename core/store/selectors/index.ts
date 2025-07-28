import {useAppSelector} from "@hooks/toolkit";

export const useMainSelector = () => useAppSelector(state => state.main);
export const useWorksSelector = () => useAppSelector(state => state.works);
export const useServicesSelector = () => useAppSelector(state => state.services);
export const useBlogSelector = () => useAppSelector(state => state.blog);