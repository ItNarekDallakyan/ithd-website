import {FC, Suspense} from "react";
import MainLayout from "@layouts/MainLayout";
import dynamic from "next/dynamic";
import Preloader from "@ui/Preloader";
import {ROUTES} from "@models/enums";

const TermsComponent = dynamic(() => import("@components/TermsComponent"), {
    suspense: true
});

const TermsPage: FC = () => {
    return (
        <MainLayout
            headerBgColor={"bg-spring"}
            isBreadcrumbs
            path={"terms"}
            routeKey={ROUTES.TERMS}
            footerBgColor={"white"}
        >
            <Suspense fallback={<Preloader isLoading={true} />}>
                <TermsComponent />
            </Suspense>
        </MainLayout>
    )
}

export default TermsPage;