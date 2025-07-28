import {FC} from "react";
import ArrayListProvider from "@hoc/ArrayListProvider";
import {ServiceTechnologyModel} from "@models/interfaces";
import TechnologyItem from "@components/ServiceDetailComponent/TechnologiesSection/TechnologiesList/TechnologyItem";

interface TechnologiesListModel {
    technologies: ServiceTechnologyModel[]
}

export const TechnologiesList: FC<TechnologiesListModel> = (
    {
        technologies
    }
) => {
    return (
        <ArrayListProvider array={technologies}>
            {
                technologies?.map((technology,index) => {

                    let {
                        title,
                        content,
                        icon
                    } = technology;

                    return (
                        <TechnologyItem
                            title={title}
                            key={index}
                            content={content}
                            image={icon}
                        />
                    )
                })
            }
        </ArrayListProvider>
    )
}