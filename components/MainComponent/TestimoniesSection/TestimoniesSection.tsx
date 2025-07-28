import {FC} from "react";
import TestimoniesList from "@components/MainComponent/TestimoniesSection/TestimoniesList";
import {TESTIMONIES} from "@common/database/testimonies";
import Typography from "@ui/Typography";
import {Helpers} from "@common/helpers";
import Button from "@ui/Button";
import {useRouter} from "next/router";
import {ROUTES} from "@models/enums";

export const TestimoniesSection: FC = () => {

    const router = useRouter();

    const testimoniesList = Helpers.getMultipleRandom(TESTIMONIES, 4);

    const handleTestimoniesRedirect = () => {
        router.push(ROUTES.TESTIMONIES);
    }

    return (
        <div className={"pb-32 max-xl:pb-16 container mx-auto"}>
            <div className={"flex flex-col gap-5"}>
                <Typography
                    variant={"h2"}
                >
                    Customers love ITHD
                </Typography>
                <div className={"gap-5 grid grid-cols-2 max-lg:grid-cols-1"}>
                    <TestimoniesList
                        testimonies={testimoniesList}
                    />
                </div>
                <Button
                    onClick={handleTestimoniesRedirect}
                    className={"mx-auto"}
                >
                    Read more
                </Button>
            </div>
        </div>
    )
}