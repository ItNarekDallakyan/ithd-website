import {FC, Suspense} from "react";
import MainLayout from "@layouts/MainLayout";
import dynamic from "next/dynamic";
import Preloader from "@ui/Preloader";
import {ROUTES} from "@models/enums";

const CompanyComponent = dynamic(() => import("@components/CompanyComponent"), {
    suspense: true
});

const CompanyPage: FC = () => {
    return (
        <MainLayout
            headerBgColor={"bg-white"}
            isBreadcrumbs
            path={"company"}
            title={"Company"}
            routeKey={ROUTES.COMPANY}
            background={"white"}
            footerBgColor={"spring"}
        >
            <Suspense fallback={<Preloader isLoading={true} />}>
                <CompanyComponent />
            </Suspense>
        </MainLayout>
    )
}

export default CompanyPage;