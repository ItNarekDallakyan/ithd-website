import {FC, Suspense} from "react";
import dynamic from "next/dynamic";
import MainLayout from "@layouts/MainLayout";
import Preloader from "@ui/Preloader";
import {ROUTES} from "@models/enums";

const ServicesComponent = dynamic(() => import("@components/ServicesComponent"), {
    suspense: true
});

const ServicesPage: FC = () => {
    return (
        <MainLayout
            headerBgColor={"bg-white"}
            isBreadcrumbs
            path={"services"}
            title={"Services"}
            routeKey={ROUTES.SERVICES}
            footerBgColor={"spring"}
            background={"white"}
        >
            <Suspense fallback={<Preloader isLoading={true} />}>
                <ServicesComponent/>
            </Suspense>
        </MainLayout>
    )
}

export default ServicesPage;
