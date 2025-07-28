import {useRouter} from "next/router";
import {Helpers} from "@common/helpers";
import {ROUTES, STORAGE_KEYS} from "@models/enums";
import {useEffect} from "react";

export const AdminAuthProvider = ({children}: any) => {
    let router = useRouter();

    let token = Helpers.getItemFromStorage(STORAGE_KEYS.IS_LOGIN);

    useEffect(() => {
        if (!token) router.push(ROUTES.ADMIN_AUTH);
    }, []);

    if (token) {
        return children;
    }

    return null;
}