import {FC, memo, useContext} from "react";
import Typography from "@ui/Typography";
import {LocalizationsContext} from "@core/context";
import {useAppDispatch} from "@hooks/toolkit";
import dynamic from "next/dynamic";
import {MessagingController} from "@core/controllers/MessagingController";
import {useMainSelector} from "@store/selectors";

const PartnerFormControl = dynamic(() => import("@components/PartnerComponent/PartnerFormControl"));
const CompanyInfo = dynamic(() => import("@components/PartnerComponent/CompanyInfo"));

export const PartnerComponent: FC = memo(() => {

    const {currentLanguage} = useMainSelector();

    let dispatch = useAppDispatch();
    let {localizations} = useContext(LocalizationsContext);

    const {
        title,
        description
    } = localizations[currentLanguage].partner;

    let splitValue = title.split(" ");

    const handleCreateContactRequest = async (formElement: HTMLFormElement) => {
        let {sendMessage} = new MessagingController(dispatch);
        await sendMessage(formElement);
    }

    return (
        <div className={"container mx-auto xl:pl-20"}>
            <div className={"sm:py-5 max-sm:py-10 space-y-5"}>
                <div className={"inline"}>
                    <Typography
                        variant={"h1"}
                    >
                        {splitValue.slice(0, 2).join(" ")}
                    </Typography>
                    <Typography
                        className={"lg:ms-3"}
                        isAnimation={true}
                        variant={"h1"}
                    >
                        {splitValue.slice(splitValue.length - 2, splitValue.length).join(" ")}
                    </Typography>
                </div>
                <div className={"lg:flex lg:items-baseline gap-20 space-y-5"}>
                    <div className={"space-y-2"}>
                        <Typography
                            className={"text-dove-grey"}
                            variant={"body"}
                        >
                            {description}
                        </Typography>
                        <PartnerFormControl
                            onSubmit={handleCreateContactRequest}
                        />
                    </div>
                    <div className={"max-lg:mt-5 md:w-3/5"}>
                        <CompanyInfo/>
                    </div>
                </div>
            </div>
        </div>
    )
});

PartnerComponent.displayName = "PartnerComponent";