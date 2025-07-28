import {FC, Suspense} from "react";
import dynamic from "next/dynamic";
import MainLayout from "@layouts/MainLayout";
import Preloader from "@ui/Preloader";
import {ROUTES} from "@models/enums";
import {WorkModel} from "@models/interfaces";
import {WORKS} from "@common/database";

const WorkComponent = dynamic(() => import("@components/WorkComponent"), {
    suspense: true
});

interface WorkPageModel {
    works: WorkModel[]
}

const WorkPage: FC<WorkPageModel> = (
    {
        works
    }
) => {
    return (
        <MainLayout
            isBreadcrumbs
            headerBgColor={"bg-spring"}
            path={"portfolio"}
            title={"Portfolio"}
            routeKey={ROUTES.WORK}
            footerBgColor={"white"}
        >
            <Suspense fallback={<Preloader isLoading={true} />}>
                <WorkComponent
                    works={works}
                />
            </Suspense>
        </MainLayout>
    )
}

export const getServerSideProps = () => {
    return {
        props: {
            works: WORKS
        }
    }
}

export default WorkPage;
