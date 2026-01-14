import {FC, useContext} from "react";
import Typography from "@ui/Typography";
import PhoneIcon from "@assets/icons/PhoneIcon";
import MailIcon from "@assets/icons/MailIcon";
import SocialsList from "@components/FooterComponent/SocialsList";
import {LocalizationsContext} from "@core/context";
import {useMainSelector} from "@store/selectors";

export const CompanyCard: FC = () => {

    const {currentLanguage} = useMainSelector();

    let {localizations} = useContext(LocalizationsContext);

    const {
        email,
        address,
        phone
    } = localizations[currentLanguage].partner;

    return (
        <div className={"md:max-w-[450px] w-full p-5 rounded-2xl bg-white border border-[#eff1f1]"}>
            <Typography
                variant={"small"}
                className={"uppercase font-medium text-dark"}
            >
                Contact us
            </Typography>
            <div className={"h-[1px] w-full border border-[#ccd0d3] my-5"}></div>
            <div className={"flex items-center justify-between"}>
                <div className={"flex items-center gap-2"}>
                    <PhoneIcon
                        fill={"#212121"}
                    />
                    <Typography
                        className={"font-medium text-dark uppercase"}
                        variant={"small"}
                    >
                        {phone.label}
                    </Typography>
                </div>
                <a
                    className={"tracking-wider text-dark font-bold text-base font-bold sm:text-xl hover:opacity-75 transition-all"}
                    href={"tel:+971588923283"}
                >
                    {phone.value}
                </a>
            </div>
            <div className={"h-[1px] w-full border border-[#ccd0d3] my-5"}></div>
            <div className={"flex items-center justify-between"}>
                <div className={"flex items-center gap-2"}>
                    <MailIcon/>
                    <Typography
                        className={"font-medium text-dark uppercase"}
                        variant={"small"}
                    >
                        {email.label}
                    </Typography>
                </div>
                <a
                    className={"tracking-wider text-dark font-bold text-base font-bold sm:text-xl hover:opacity-75 transition-all"}
                    href={`mailto:${email.value}`}
                >
                    {email.value}
                </a>
            </div>
            <div className={"h-[1px] w-full border border-[#ccd0d3] my-5"}></div>
            <div className={"flex items-start flex-col md:pt-5 gap-3"}>
                <Typography
                    variant={"small"}
                    className={"uppercase font-medium text-dark"}
                >
                    Find us on social media
                </Typography>
                <SocialsList
                    isWhatsapp
                    className={"gap-[2px] ms-[-5px]"}
                />
            </div>
        </div>
    )
}