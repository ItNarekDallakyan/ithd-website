import {FC} from "react";
import {FAQ_LIST} from "@common/database";
import {useMainSelector} from "@store/selectors";
import FaqItem from "@components/CompanyComponent/FaqSection/FaqList/FaqItem";

export const FaqList: FC = () => {

    let {currentLanguage} = useMainSelector();

    return (
        <>
            {
                FAQ_LIST.map(faq => {

                    let {
                        title,
                        content
                    } = faq;

                    // @ts-ignore
                    let titleValue = title[currentLanguage];
                    // @ts-ignore
                    let contentValue = content[currentLanguage];

                    return (
                        <FaqItem
                            className={"lg:w-[45%]"}
                            key={titleValue}
                            title={titleValue}
                        >
                            {contentValue}
                        </FaqItem>
                    )
                })
            }
        </>
    )
}