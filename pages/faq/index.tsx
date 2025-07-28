import {FC, Suspense} from "react";
import MainLayout from "@layouts/MainLayout";
import dynamic from "next/dynamic";
import Preloader from "@ui/Preloader";
import {ROUTES} from "@models/enums";

const FaqComponent = dynamic(() => import("@components/FaqComponent"), {
    suspense: true
});

const FaqPage: FC = () => {
    return (
        <MainLayout
            headerBgColor={"bg-spring"}
            isBreadcrumbs
            title={"FAQ"}
            path={"faq"}
            routeKey={ROUTES.FAQ}
            footerBgColor={"white"}
        >
            <Suspense fallback={<Preloader isLoading={true} />}>
                <FaqComponent />
            </Suspense>
        </MainLayout>
    )
}

export default FaqPage;