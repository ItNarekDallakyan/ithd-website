import {FC} from "react";
import styles from "./FaqList.module.scss";
import {FaqItemModel} from "@models/interfaces";
import ArrayListProvider from "@hoc/ArrayListProvider";
import Accordion from "@ui/Accordion";
import {useMainSelector} from "@store/selectors";

interface FaqListModel {
    faqList: FaqItemModel[],
    accordionClassName?: string,
    isInitialShow?: boolean
}

export const FaqList: FC<FaqListModel> = (
    {
        faqList,
        accordionClassName,
        isInitialShow
    }
) => {

    let {currentLanguage} = useMainSelector();

    return (
        <ArrayListProvider
            array={faqList}
        >
            {
                faqList?.map((faq) => {

                    let {
                        title,
                        content
                    } = faq;

                    // @ts-ignore
                    let titleValue = title[currentLanguage];

                    // @ts-ignore
                    let contentValue = content[currentLanguage];

                    return (
                        <Accordion
                            isInitialShow={isInitialShow}
                            activeClassName={styles.FaqListItem}
                            iconFill={"black"}
                            className={accordionClassName}
                            key={titleValue}
                            title={titleValue}
                        >
                            {contentValue}
                        </Accordion>
                    )
                })
            }
        </ArrayListProvider>
    )
}