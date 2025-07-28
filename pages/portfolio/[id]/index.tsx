import {FC, Suspense} from "react";
import MainLayout from "@layouts/MainLayout";
import {Helpers} from "@common/helpers";
import {WorkModel} from "@models/interfaces";
import {WorkPageContext} from "@context/global";
import dynamic from "next/dynamic";
import Preloader from "@ui/Preloader";
import {LANGUAGES, ROUTES} from "@models/enums";
import {WORKS} from "@common/database";

const WorkDetailComponent = dynamic(() => import("@components/WorkDetailComponent"), {
    suspense: true
});

interface WorkDetailPageModel {
    work: WorkModel
}

const WorkDetailPage: FC<WorkDetailPageModel> = (
    {
        work
    }
) => {

    let title = work?.title[LANGUAGES.EN];

    return (
        <MainLayout
            isBreadcrumbs
            headerBgColor={"bg-spring"}
            breadcrumbTitle={title}
            path={`portfolio${work.path}`}
            title={title || ""}
            routeKey={ROUTES.WORK}
            footerBgColor={"white"}
        >
            {
                work
                &&
                <Suspense fallback={<Preloader isLoading={true}/>}>
                    <WorkPageContext.Provider value={{
                        data: work
                    }}>
                        <WorkDetailComponent/>
                    </WorkPageContext.Provider>
                </Suspense>
            }
        </MainLayout>
    )
};

export const getServerSideProps = async (context: any) => {

    let id = context.query.id;
    let currentPath = Helpers.path(id);
    let data = Helpers.getSingleDetailData(WORKS, currentPath);

    return {
        props: {
            work: data
        }
    }
}

export default WorkDetailPage;