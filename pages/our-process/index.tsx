import {FC, Suspense} from "react";
import MainLayout from "@layouts/MainLayout";
import dynamic from "next/dynamic";
import Preloader from "@ui/Preloader";
import {ROUTES} from "@models/enums";

const OurProcessComponent = dynamic(() => import("@components/OurProcessComponent"), {
    suspense: true
});

const OurProcessPage: FC = () => {
    return (
        <MainLayout
            isBreadcrumbs
            headerBgColor={"bg-spring"}
            path={"our-process"}
            title={"Our process"}
            routeKey={ROUTES.OUR_PROCESS}
            footerBgColor={"white"}
        >
            <Suspense fallback={<Preloader isLoading={true} />}>
                <OurProcessComponent />
            </Suspense>
        </MainLayout>
    )
}

export default OurProcessPage;