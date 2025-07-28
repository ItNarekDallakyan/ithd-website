import {FC, useContext, useEffect, useState} from "react";
import Typography from "@ui/Typography";
import {LocalizationsContext} from "@core/context";
import Image from "next/image";
import PartnerFormControl from "@components/PartnerComponent/PartnerFormControl";
import {useAppDispatch} from "@hooks/toolkit";
import {MessagingController} from "@core/controllers/MessagingController";
import {Helpers} from "@common/helpers";
import {useMainSelector} from "@store/selectors";

export const ContactUsSection: FC = () => {

    const {currentLanguage} = useMainSelector();
    const {localizations} = useContext(LocalizationsContext);
    const dispatch = useAppDispatch();

    const [descriptionValue, setDescriptionValue] = useState<string>("");

    const {
        title,
        description
    } = localizations[currentLanguage].main.contactSection;

    const handleContactSubmit = async (formElement: HTMLFormElement) => {
        let {sendMessage} = new MessagingController(dispatch);
        await sendMessage(formElement);
    }

    const setDescriptionValueHandler = () => {
        if (!description) return;
        let data = Helpers.extractHTMLContent(description, true);
        if (!data) return;
        setDescriptionValue(data);
    }

    useEffect(() => {
        setDescriptionValueHandler();
    }, [description]);

    return (
        <div className={"bg-white py-32 max-sm:py-16"}>
            <div className={"container mx-auto"}>
                <div className={"grid xl:grid-cols-2 gap-16 max-xl:gap-8"}>
                    <div className={"relative flex flex-col gap-8 max-xl:gap-5"}>
                        <div className={"flex flex-col gap-5 max-xl:gap-2"}>
                            <Typography variant={"h2"}>
                                {title}
                            </Typography>
                            <div
                                className={"text-dove-grey font-normal text-base font-bold sm:text-xl"}
                                dangerouslySetInnerHTML={{__html: descriptionValue}}
                            >
                            </div>
                        </div>
                        <Image
                            className={"xl:w-[15%] xl:absolute bottom-0 left-0 rounded-3xl"}
                            width={100}
                            height={100}
                            src={"/images/smile-image.jpg"}
                            alt={"smile-image"}
                        />
                    </div>
                    <PartnerFormControl
                        onSubmit={handleContactSubmit}
                    />
                </div>
            </div>
        </div>
    )
}