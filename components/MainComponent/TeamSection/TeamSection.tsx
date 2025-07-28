import {FC, memo, useContext} from "react";
import Typography from "@ui/Typography";
import Button from "@ui/Button";
import Image from "next/image";
import {useRouter} from "next/router";
import {ROUTES} from "@models/enums";
import {LocalizationsContext} from "@core/context";
import TeamContent from "@components/MainComponent/TeamSection/TeamContent";
import {useMainSelector} from "@store/selectors";

export const TeamSection: FC = memo(() => {

    const {currentLanguage} = useMainSelector();
    const router = useRouter();

    let {localizations} = useContext(LocalizationsContext);

    const handleContactRedirect = () => router.push(ROUTES.CONTACT,
        undefined,
        {shallow: true}
    );

    const {
        title,
        buttonLabel,
        content,
        description
    } = localizations[currentLanguage].main.team;

    return (
        <div className={"py-32 max-xl:pt-16 max-xl:pb-0 bg-white xl:ps-20"}>
            <div className={"mx-auto max-xl:flex-col flex items-baseline justify-between max-xl:gap-10"}>
                <div className={"xl:w-1/2 max-xl:container max-xl:mx-auto flex items-start flex-col"}>
                    <Typography
                        variant={"h2"}
                    >
                        {title}
                    </Typography>
                    <Typography
                        weight={"normal"}
                        className={"mt-5 mb-5 xl:w-9/12 text-base font-bold sm:text-xl"}
                        variant={"h3"}
                    >
                        {content}
                    </Typography>
                    <Button
                        size={"large"}
                        color={"orange"}
                        onClick={handleContactRedirect}
                    >
                        {buttonLabel}
                    </Button>
                </div>
                <div className={"max-xl:px-0 py-14 xl:w-1/2 bg-orange px-16 max-xl:w-full rounded-l-32 max-xl:rounded-l-none"}>
                    <div className={"max-xl:container max-xl:mx-auto w-full flex flex-col gap-5"}>
                        <Image
                            quality={80}
                            width={66}
                            height={49}
                            src={"/images/quote-icon.svg"}
                            alt={"quote-icon"}
                        />
                        <TeamContent
                            content={description}
                            media={"/images/team-image.jpg"}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
});

TeamSection.displayName = "TeamSection";