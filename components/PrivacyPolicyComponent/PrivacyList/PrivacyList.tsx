import {FC} from "react";
import RulesList from "@components/PrivacyPolicyComponent/RulesList";
import {PrivacyItemModel} from "@models/interfaces";

export interface PrivacyListModel {
    privacy: PrivacyItemModel[]
}

export const PrivacyList: FC<PrivacyListModel> = (
    {
        privacy
    }
) => {
    return (
        <>
            {
                privacy.map((data: any, index: any) => {
                    return (
                        <div className={"mb-5"} key={index}>
                            <div
                                className={"font-medium"}
                                dangerouslySetInnerHTML={{__html: data.content}}
                            ></div>
                            {
                                data.rules.length
                                    ?
                                    <RulesList
                                        rules={data.rules}
                                    />
                                    :
                                    null
                            }
                        </div>
                    )
                })
            }
        </>
    )
}