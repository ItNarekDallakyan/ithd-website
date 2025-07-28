import {FC} from "react";
import {TestimonyModel} from "@models/interfaces";
import ArrayListProvider from "@hoc/ArrayListProvider";
import TestimonyItem from "@components/MainComponent/TestimoniesSection/TestimoniesList/TestimonyItem";

interface TestimoniesListModel {
    testimonies: TestimonyModel[]
}

export const TestimoniesList: FC<TestimoniesListModel> = (
    {
        testimonies
    }
) => {
    return (
        <ArrayListProvider array={testimonies}>
            {
                testimonies.map(testimony => {

                    let {id} = testimony;

                    return (
                        <TestimonyItem
                            testimony={testimony}
                            key={id}
                        />
                    )
                })
            }
        </ArrayListProvider>
    )
}