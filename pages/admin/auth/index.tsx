import {FC, Suspense} from "react";
import dynamic from "next/dynamic";

const AuthComponent = dynamic(() => import("components/Admin/AuthComponent"), {
    suspense: true
});

const AuthPage: FC = () => {
    return (
        <Suspense fallback={""}>
            <AuthComponent />
        </Suspense>
    )
}

export default AuthPage;