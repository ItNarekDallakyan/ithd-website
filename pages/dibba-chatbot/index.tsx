import { FC, Suspense } from "react";
import MainLayout from "@layouts/MainLayout";
import dynamic from "next/dynamic";
import Preloader from "@ui/Preloader";
import { ROUTES } from "@models/enums";

// const OCRComponent = dynamic(() => import("@components/OCRComponent"), {
//     suspense: true
// });

const ChatbotComponent = dynamic(() => import("@components/ChatbotComponent"), {
    suspense: true
});

const OCRPage: FC = () => {
    return (
        <MainLayout
            headerBgColor="bg-white"
            isBreadcrumbs
            path="dibba-chatbot"
            title="Smart Dibba Municipality assistant"
            routeKey={ROUTES.OCR}
            background="white"
            footerBgColor="spring"
        >
            <Suspense fallback={<Preloader isLoading={true} />}>
                <ChatbotComponent />
            </Suspense>
        </MainLayout>
    );
};

export default OCRPage;