import {FC} from "react";

interface RulesListModel {
    rules: string[]
}

export const RulesList: FC<RulesListModel> = (
    {
        rules
    }
) => {
    return (
        <ul className={"list-circle ps-4"}>
            {
                rules.map(rule => {
                    return (
                        <li
                            className={"font-medium"}
                            key={rule}
                        >
                            {rule}
                        </li>
                    )
                })
            }
        </ul>
    )
}