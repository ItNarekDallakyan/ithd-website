import {FC, Fragment} from "react";
import {ServiceModel, WorkModel} from "@models/interfaces";
import {LANGUAGES} from "@models/enums";
import HTMLHeadProvider from "@hoc/HTMLHeadProvider";
import {PLATFORM_NAME, ROBOTS_CONTENT, WEBSITE_URL} from "@common/variables";
import Head from "next/head";
import MainLayout from "@layouts/MainLayout";
import {Helpers} from "@common/helpers";
import {SERVICES, WORKS} from "@common/database";
import {ServicesPageContext} from "@core/context/global";
import dynamic from "next/dynamic";

interface ServicesDetailPageModel {
    service: ServiceModel,
    works: WorkModel[]
}

const ServiceDetailComponent = dynamic(() => import("@components/ServiceDetailComponent"), {
    ssr: false
});

const ServicesDetailPage: FC<ServicesDetailPageModel> = (
    {
        service,
        works
    }
) => {

    let titleValue = Helpers.extractHTMLContent(service.title[LANGUAGES.EN]);

    return (
        <>
            <HTMLHeadProvider
                image={"/images/og-image.jpg"}
                path={`services${service.path}`}
                video={service.movie || ""}
                title={titleValue || ""}
                description={service.description[LANGUAGES.EN]}
                robots={ROBOTS_CONTENT}
                type={"article"}
                pageURL={`${WEBSITE_URL}/services/${service.path}`}
                site_name={PLATFORM_NAME}
            />
            <Head>
                {
                    works.map((work, index) => {
                        return (
                            <Fragment key={index}>
                                <meta key={index} name={"title"} content={work.title[LANGUAGES.EN]}/>
                                <meta key={work.path} name={"description"}
                                      content={work.shortDescription[LANGUAGES.EN]}/>
                            </Fragment>
                        )
                    })
                }
            </Head>
            <MainLayout
                headerBgColor={"bg-spring"}
                isBreadcrumbs
                breadcrumbTitle={service.title[LANGUAGES.EN]}
                footerBgColor={"white"}
            >
                <ServicesPageContext.Provider value={{
                    data: service
                }}>
                    <ServiceDetailComponent
                        works={works}
                    />
                </ServicesPageContext.Provider>
            </MainLayout>
        </>
    )
};

export async function getServerSideProps(context: any) {

    let currentPath = Helpers.path(context.query.id);
    let data: any = Helpers.getSingleDetailData(SERVICES, currentPath);
    let works: any;

    if (data) {
        let {path} = data;
        let validPath = path.replaceAll("/", "");
        works = WORKS.filter((work) => work?.services?.includes(validPath));
    }

    return {
        props: {
            service: data,
            works
        }
    };
}

export default ServicesDetailPage;
