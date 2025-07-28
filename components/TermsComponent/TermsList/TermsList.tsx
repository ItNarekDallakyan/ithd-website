import {FC} from "react";
import {TermModel} from "@models/interfaces";

interface TermsListModel {
    terms: TermModel[]
}

export const TermsList: FC<TermsListModel> = ({terms}) => {
    return (
        <>
            {
                terms.map((term, index) => {

                    let {content} = term;

                    return (
                        <div
                            key={index}
                            className={"mb-5"}
                            dangerouslySetInnerHTML={{__html: content}}
                        ></div>
                    )
                })
            }
        </>
    )
}