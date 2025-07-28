import {FC} from "react";
import Typography from "@ui/Typography";
import Link from "next/link";
import {ROUTES} from "@models/enums";

export const PrivacyLabel: FC = () => {
    return (
        <Typography variant={"body"}>
            I have read and agree to the <Link className={"underline"} href={ROUTES.PRIVACY}>Privacy Policy</Link>
        </Typography>
    )
}