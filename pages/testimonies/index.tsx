import {FC, Suspense} from "react";
import dynamic from "next/dynamic";
import MainLayout from "@layouts/MainLayout";
import {ROUTES} from "@models/enums";

const TestimoniesComponent = dynamic(() => import("@components/TestimoniesComponent"), {
    suspense: true
});

const TestimoniesPage: FC = () => {
    return (
        <MainLayout
            isBreadcrumbs
            headerBgColor={"bg-spring"}
            path={"testimonies"}
            title={"Testimonies"}
            routeKey={ROUTES.TESTIMONIES}
            footerBgColor={"white"}
        >
            <Suspense fallback={""}>
                <TestimoniesComponent />
            </Suspense>
        </MainLayout>
    )
}

export default TestimoniesPage;