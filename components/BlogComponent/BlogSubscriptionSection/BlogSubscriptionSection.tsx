import {FC, memo, useContext} from "react";
import PartSection from "@ui/PartSection";
import Typography from "@ui/Typography";
import SubscriptionFormControl from "@components/BlogComponent/BlogSubscriptionSection/SubscriptionFormControl";
import {SubscriptionBodyModel} from "@models/interfaces/services";
import {LocalizationsContext} from "@core/context";
import {useMainSelector} from "@store/selectors";

interface BlogSubscriptionSectionModel {
    onSubmit: (values: SubscriptionBodyModel
    ) => void
}

export const BlogSubscriptionSection: FC<BlogSubscriptionSectionModel> = memo(({onSubmit}) => {

    let {currentLanguage} = useMainSelector();
    let {localizations} = useContext(LocalizationsContext);

    let {title} = localizations[currentLanguage].blog.subscription;

    return (
        <PartSection
            className={"max-lg:px-0"}
            shadowColor={"white"}
        >
            <div className={"container mx-auto py-14"}>
                <div className={"flex items-start flex-col gap-5 mb-10"}>
                    <Typography
                        variant={"h2"}
                    >
                        {title}
                    </Typography>
                </div>
                <SubscriptionFormControl
                    onSubmit={onSubmit}
                />
            </div>
        </PartSection>
    )
});

BlogSubscriptionSection.displayName = "BlogSubscriptionSection";