import {FC, Suspense} from "react";
import dynamic from "next/dynamic";
import MainLayout from "@layouts/MainLayout";
import Preloader from "@ui/Preloader";
import {ROUTES} from "@models/enums";

const PartnerComponent = dynamic(() => import("@components/PartnerComponent"), {
    suspense: true
});

const ContactPage: FC = () => {
    return (
        <MainLayout
            headerBgColor={"bg-white"}
            isBreadcrumbs
            path={"partner"}
            title={"Contact us"}
            routeKey={ROUTES.CONTACT}
            footerBgColor={"spring"}
            background={"white"}
        >
            <Suspense fallback={<Preloader isLoading={true} />}>
                <PartnerComponent/>
            </Suspense>
        </MainLayout>
    )
}

export default ContactPage;
