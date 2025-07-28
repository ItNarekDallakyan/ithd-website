import {FC, Suspense} from "react";
import MainLayout from "@layouts/MainLayout";
import dynamic from "next/dynamic";
import Preloader from "@ui/Preloader";
import {ROUTES} from "@models/enums";

const PrivacyPolicyComponent = dynamic(() => import("@components/PrivacyPolicyComponent"), {
    suspense: true
});

const PrivacyPolicyPage: FC = () => {
    return (
        <MainLayout
            headerBgColor={"bg-spring"}
            isBreadcrumbs
            breadcrumbTitle={"Privacy and Cookie Policy"}
            path={"privacy-policy"}
            title={"Privacy and Cookie Policy"}
            routeKey={ROUTES.PRIVACY}
            footerBgColor={"white"}
        >
            <Suspense fallback={<Preloader isLoading={true} />}>
                <PrivacyPolicyComponent />
            </Suspense>
        </MainLayout>
    )
}

export default PrivacyPolicyPage;