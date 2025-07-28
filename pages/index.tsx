import {FC, Suspense} from "react";
import MainLayout from "@layouts/MainLayout";
import dynamic from "next/dynamic";
import Preloader from "@ui/Preloader";

const MainComponent = dynamic(() => import("@components/MainComponent"), {
    suspense: true
});

const MainPage: FC = () => {
    return (
        <MainLayout
            headerBgColor={"bg-spring"}
            path={""}
            routeKey={"/"}
            footerBgColor={"white"}
        >
            <Suspense fallback={<Preloader isLoading/>}>
                <MainComponent/>
            </Suspense>
        </MainLayout>
    )
}

export default MainPage;
