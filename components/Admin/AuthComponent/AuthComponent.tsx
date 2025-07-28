import {FC} from "react";
import AuthForm from "@components/Admin/AuthComponent/AuthForm";
import {AuthFormBodyModel} from "@models/interfaces";
import {USERS} from "@common/database";
import {Helpers} from "@common/helpers";
import {ROUTES, STORAGE_KEYS} from "@models/enums";
import {useRouter} from "next/router";
import Image from "next/image";

export const AuthComponent: FC = () => {

    let router = useRouter();

    // login handler
    const handleLoginSubmit = (values: AuthFormBodyModel) => {
        USERS.forEach(user => {
            let {username, password} = user;
            let isAuth = username === values.username && password === values.password;
            if (isAuth) {
                Helpers.setItemToStorage(STORAGE_KEYS.IS_LOGIN, "true");
                router.push(ROUTES.ADMIN_EDITOR, undefined, {shallow: true});
            }
        });
    }

    return (
        <div className={"h-screen flex items-center justify-center max-sm:px-3"}>
            <div className={"max-w-[400px] w-full flex flex-col items-center gap-7 justify-center "}>
                <Image
                    quality={80}
                    alt={"logo"}
                    width={100}
                    height={100}
                    src={"/images/logo.svg"}
                />
                <AuthForm
                    onSubmit={handleLoginSubmit}
                />
            </div>
        </div>
    )
}