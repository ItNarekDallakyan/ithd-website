import {FC, useContext, useEffect, useState} from "react";
import Typography from "@ui/Typography";
import {LocalizationsContext} from "@core/context";
import {Helpers} from "@common/helpers";
import {useMainSelector} from "@store/selectors";

export const ContentSection: FC = () => {

    let {localizations} = useContext(LocalizationsContext);
    let {currentLanguage} = useMainSelector();

    let {title, description} = localizations[currentLanguage].company.about;

    const [descriptionValue, setDescriptionValue] = useState<string>("");

    const setDescriptionHandler = () => {
        if (!description) return;
        let data = Helpers.extractHTMLContent(description, true);
        if (!data) return;
        setDescriptionValue(data);
    }

    useEffect(() => {
        setDescriptionHandler();
    }, [description]);

    return (
        <div className={"bg-orange py-24 max-md:py-12 w-11/12 rounded-r-2xl max-sm:w-full"}>
            <div className={"container mx-auto"}>
                <div className={"flex items-start gap-24 max-lg:flex-col max-lg:gap-12"}>
                    <div>
                        <Typography variant={"h2"}>
                            {title}
                        </Typography>
                        <div
                            className={"mt-5"}
                            dangerouslySetInnerHTML={{__html: descriptionValue || ""}}
                        ></div>
                    </div>
                </div>
            </div>
        </div>
    )
}